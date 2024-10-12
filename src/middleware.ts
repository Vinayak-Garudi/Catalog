import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function checks if the user is authenticated
export function middleware(req: NextRequest) {
  // Here you can get the token from cookies or any other means of authentication
  const token = req.cookies.get("authToken");

  // If there is no token, redirect to the '/auth' route\
  // For the template condition is intentionally made false.
  if (!token && false) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // If the user is authenticated, allow the request to continue
  return NextResponse.next();
}

// Specify the paths for which this middleware should run
export const config = {
  matcher: "/((?!auth).*)", // This will run middleware on all routes except '/auth'
};
