import { NextResponse } from 'next/server';
import { resend } from '@/app/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <hello@contact.irenemercadal.dev>',
      to: ['irenemercadal@nyu.edu'],
      replyTo: `${ email }`, 
      subject: `New message from ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
