import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/// Api para enviar email do usuário via resend

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: 'New Message from Portfolio',
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #0f172a; color: #fff;">
          <h2 style="color: #c084fc;">New Contact Form Submission</h2>
          <p><strong style="color: #a855f7;">Name:</strong> ${name}</p>
          <p><strong style="color: #a855f7;">Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #1e293b; border-radius: 8px;">
            <p style="color: #94a3b8;">${message}</p>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true, data });

  } catch {
    return NextResponse.json(
      { error: 'Email sending failed' },
      { status: 500 }
    );
  };
};