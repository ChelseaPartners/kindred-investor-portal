import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const redirect = searchParams.get("redirect");

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // Check user role to determine redirect
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (redirect) {
        return NextResponse.redirect(`${origin}${redirect}`);
      }

      if (profile?.role === "admin") {
        return NextResponse.redirect(`${origin}/admin`);
      }

      return NextResponse.redirect(`${origin}/portal`);
    }
  }

  // Auth error - redirect to login with error
  return NextResponse.redirect(`${origin}/auth/login`);
}
