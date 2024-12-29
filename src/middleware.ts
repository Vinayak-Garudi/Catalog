import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function checks if the user is authenticated
export function middleware(req: NextRequest) {
  // Retrieve the token from cookies
  const token = req.cookies.get("token")?.value;

  // If there is no token, redirect to the '/SignUp' route
  if (!token) {
    return NextResponse.redirect(new URL("/SignUp", req.url));
  }

  // If the user is authenticated, allow the request to continue
  return NextResponse.next();
}

// Specify the paths for which this middleware should run
export const config = {
  matcher: [
    // Apply middleware only to app routes
    "/((?!api|_next/static|_next/image|favicon.ico|SignUp).*)",
  ],
};
