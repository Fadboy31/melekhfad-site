import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Basic email validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Send welcome email to the subscriber
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "MelekhFad <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to the MelekhFad Newsletter 🔥",
        html: `
          <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #0A0A0A; color: #F5F0E8; padding: 40px 32px; border-radius: 12px;">
            
            <div style="margin-bottom: 32px;">
              <span style="font-family: Arial, sans-serif; font-weight: 900; font-size: 22px; letter-spacing: -0.5px;">
                Melekh<span style="color: #C9A84C;">Fad</span>
              </span>
            </div>

            <h1 style="font-size: 28px; font-weight: 800; margin: 0 0 12px; line-height: 1.1; letter-spacing: -0.5px;">
              You're in. Welcome to the tribe. 🇹🇿
            </h1>

            <p style="font-size: 15px; color: #6B6560; line-height: 1.7; margin: 0 0 24px;">
              Every Tuesday you'll get <strong style="color: #F5F0E8;">5 AI tools</strong> picked specifically for African students, creators, and builders — with honest reviews, free alternatives, and practical guides.
            </p>

            <div style="background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.2); border-radius: 10px; padding: 20px 24px; margin-bottom: 28px;">
              <p style="font-size: 13px; font-weight: 600; color: #C9A84C; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px;">What to expect every Tuesday</p>
              <p style="font-size: 14px; color: #6B6560; margin: 0 0 6px; line-height: 1.6;">✓ 5 new or underrated AI tools</p>
              <p style="font-size: 14px; color: #6B6560; margin: 0 0 6px; line-height: 1.6;">✓ Free tools prioritized always</p>
              <p style="font-size: 14px; color: #6B6560; margin: 0 0 6px; line-height: 1.6;">✓ African context — what works here</p>
              <p style="font-size: 14px; color: #6B6560; margin: 0; line-height: 1.6;">✓ One practical tip you can use today</p>
            </div>

            <a href="https://melekhfad-site.vercel.app/tools" 
               style="display: inline-block; background: #C9A84C; color: #0A0A0A; padding: 14px 28px; border-radius: 6px; font-weight: 700; font-size: 15px; text-decoration: none; letter-spacing: 0.02em;">
              Explore AI Tools Now →
            </a>

            <p style="font-size: 12px; color: #3D3A36; margin-top: 32px; line-height: 1.6;">
              You subscribed at melekhfad-site.vercel.app · No spam ever · 
              <a href="#" style="color: #6B6560;">Unsubscribe anytime</a>
            </p>

          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "You're subscribed! Check your inbox." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}