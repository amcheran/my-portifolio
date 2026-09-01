import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Store message inside Supabase contact_messages table
    if (supabase) {
      await supabase.from('contact_messages').insert([{ name, email, message }]);
    }

    // 2. Dispatch real-time notification email
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'YOUR_PERSONAL_EMAIL@gmail.com', // Replace with your personal email address
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f4f4f4; padding: 12px; border-left: 4px solid #6366f1; color: #1e293b;">
            ${message}
          </blockquote>
        `,
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return Response.json({ error: 'Failed to deliver message' }, { status: 500 });
  }
}
