import { NextRequest, NextResponse } from "next/server";

const countriesLookup: Record<string, string> = {
    'US': 'en-GB',
    'JP': 'fr-FR',
};

export default function middleware(req: NextRequest) {
    const origin = req.nextUrl;
    const country = req.geo?.country ?? '';
    console.log(`Country -> '${country}'`);
    if(country && Object.keys(countriesLookup).some((knownCountry) => knownCountry === country)) {
        const path = `${origin}/${countriesLookup[country]}`;
        if(req.nextUrl.pathname === path) {
            return NextResponse.next();
        }
        return NextResponse.redirect(path);
    }
    return NextResponse.next();
}