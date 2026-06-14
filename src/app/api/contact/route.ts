import { NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml } from "@/lib/escapeHtml";
import { createContactDbClient } from "@/lib/supabase/contact";
import { contactFormSchema } from "@/lib/validation";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message ?? "Invalid form data" },
        { status: 400 },
      );
    }

    const { name, email, message, website } = parsed.data;

    if (website) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    if (isSupabaseConfigured()) {
      const supabase = createContactDbClient();
      if (!supabase) {
        return NextResponse.json(
          { error: "Database is not configured. Please try again later." },
          { status: 500 },
        );
      }

      const { error: dbError } = await supabase.from("contact_submissions").insert({
        name,
        email,
        message,
      });

      if (dbError) {
        console.error("Supabase insert error:", dbError);
        return NextResponse.json(
          { error: "Failed to save message. Please try again later." },
          { status: 500 },
        );
      }
    }

    const toEmail = process.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_FROM_EMAIL;

    if (!resend || !toEmail) {
      console.info("Contact form submission (email not configured):", { name, email, message });
      return NextResponse.json({
        message: isSupabaseConfigured()
          ? "Message received and saved."
          : "Message received. Email delivery is not configured in this environment.",
      });
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
