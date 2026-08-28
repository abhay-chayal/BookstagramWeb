import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, source } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    // In a live production environment with Supabase connected:
    // const { data, error } = await supabase.from('newsletter_subscribers').insert([{ email, first_name: firstName, source: source || 'website' }]);

    console.log(`[Newsletter Subscription] New subscriber: ${email} (${firstName || "No Name"}) via ${source || "website"}`);

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to the Bookstagram Club Dispatch!",
      subscriber: {
        email,
        firstName: firstName || null,
        status: "active",
        subscribedAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    console.error("Subscription API error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while subscribing." },
      { status: 500 }
    );
  }
}
