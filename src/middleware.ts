import { NextRequest, NextResponse } from "next/server";

const KNOWN_COUNTRIES = ['en-GB', 'fr-FR'];

export default function middleware(req: NextRequest) {
    const country = req.geo?.country ?? '';
    console.log(`Country -> '${country}'`);
    if(country && KNOWN_COUNTRIES.some((knownCountry) => knownCountry === country)) {
        if(req.nextUrl.pathname === `/${country}`) {
            return NextResponse.next();
        }
        return NextResponse.redirect(`/${country}`)
    }
    return NextResponse.next();
}