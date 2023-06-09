import { NextRequest, NextResponse } from "next/server";
import { countriesLookup } from "./constants";

export default function middleware(req: NextRequest) {
    const origin = req.nextUrl.origin;
    const country = req.geo?.country ?? '';

    if(country && Object.keys(countriesLookup).some((knownCountry) => knownCountry === country)) {
        const path = `${origin}/${countriesLookup[country]}`;
        if(req.nextUrl.pathname === `/${countriesLookup[country]}`) {
            return NextResponse.next();
        }
        return NextResponse.redirect(path);
    }
}

export const config = {
    matcher: "/",
};