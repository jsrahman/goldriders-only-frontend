import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de", "bn"],
  defaultLocale: "en",
  localeDetection: true, // detects browser language automatically
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // applies to all routes except API/static
};
