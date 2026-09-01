import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Insert into Supabase
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Missing Supabase Environment Variables');
    } else {
      const supabase = createClient(supabaseUrl, supabaseAnonKey);
      const { data, error: dbError } = await supabase
        .from('contact_messages')
        .insert([{ name, email, message }]);

      if (dbError) {
        console.error('Supabase Insert Error:', dbError.message);
      }
    }

    // 2. Send Email via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'YOUR_PERSONAL_EMAIL@gmail.com', // Replace with your actual email
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
    console.error('Contact API Exception:', error);
    return Response.json({ error: 'Failed to deliver message' }, { status: 500 });
  }
}
