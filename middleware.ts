import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cv, github } from "./lib/constants";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/cv")) {
    return NextResponse.redirect(cv);
  }
  if (pathname.startsWith("/github")) {
    console.log("redirecting to github");
    return NextResponse.redirect(github);
  }
  return NextResponse.next();
}
