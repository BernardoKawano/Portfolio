import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales, resolveLocale } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get("portfolio_locale")?.value;
  const headerLocale = request.headers.get("accept-language")?.split(",")[0];
  const locale = resolveLocale(cookieLocale ?? headerLocale ?? defaultLocale);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set("portfolio_locale", locale, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
