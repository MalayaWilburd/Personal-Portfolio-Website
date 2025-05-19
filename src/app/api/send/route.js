import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_Email;

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['malayawilburd@gmail.com'],
      subject: 'Portfolio Website',
      react: (
        <>
          <h1>{subject}</h1>
          <p>From: {email}</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
