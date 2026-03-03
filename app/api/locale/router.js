import { NextResponse } from "next/server";

export async function POST(req) {
  const { lang } = await req.json();

  const res = NextResponse.json({ success: true });
  res.cookies.set("NEXT_LOCALE", lang, { path: "/" });

  return res;
}
