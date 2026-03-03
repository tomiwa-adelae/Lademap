import { NextResponse } from "next/server";
import {
  sendContactConfirmationEmail,
  sendContactAdminNotificationEmail,
} from "@/lib/email";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, company, email, phone, message, subject } = body;

    if (!firstName || !email || !message || !phone) {
      return NextResponse.json(
        { error: "Required fields missing." },
        { status: 400 },
      );
    }

    const contactEntry = await prisma.contact.create({
      data: { firstName, lastName, company: company || null, email, phone, message, subject },
    });

    try {
      await sendContactConfirmationEmail({
        name: `${firstName} ${lastName}`,
        email,
        subject,
        message,
      });

      // Send notification to the Admin
      await sendContactAdminNotificationEmail({
        id: contactEntry.id,
        firstName,
        lastName,
        company: company || null,
        email,
        phone,
        subject,
        message,
        createdAt: contactEntry.createdAt,
      });
    } catch (e) {
      console.error("LADEMAB_MAIL_FAIL:", e);
    }

    return NextResponse.json(
      { success: true, id: contactEntry.id },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 },
    );
  }
}
