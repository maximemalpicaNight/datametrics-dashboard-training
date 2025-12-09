import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard', '/team', '/analytics', '/settings'];
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  // Check if user is trying to access protected route without token
  if (isProtectedRoute) {
    // In Next.js App Router, we can't directly check localStorage from middleware
    // We'll rely on client-side protection and server-side GraphQL auth
    // This middleware serves as a basic check for cookie-based tokens

    // For this demo app, we're using localStorage, so we'll allow access
    // and rely on the GraphQL API to handle authentication
    return NextResponse.next();
  }

  // Redirect to dashboard if user is logged in and tries to access login page
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
