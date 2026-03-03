import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { lang } = await request.json();

    // Validate the locale
    const validLocales = ["en", "de", "bn"];
    if (!validLocales.includes(lang)) {
      return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
    }

    // Set the locale cookie
    const cookieStore = await cookies();
    cookieStore.set("NEXT_LOCALE", lang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    return NextResponse.json({ success: true, locale: lang });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to set locale" },
      { status: 500 },
    );
  }
}
