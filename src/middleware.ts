import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value

  const { pathname } = request.nextUrl

  if (pathname === '/') {
    if (accessToken) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    } else {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  const protectedRoutes = ['/dashboard', '/settings']
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  )

  const authRoutes = ['/login', '/register']
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  if (accessToken && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (!accessToken && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

const middlewareMatcher = String.raw`/((?!api|_next/static|_next/image|favicon.ico|.*\..*$).*)`

export const config = {
  matcher: [middlewareMatcher],
}
