import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend is a class, so we need to create an instance of it
const resend = new Resend(process.env.RESEND_API_KEY);

// The email address "from" must be from a domain you own
//  Cannot be from a 3rd party like 'gmail'
export async function POST() {
    await resend.emails.send({ 
        from: '...',
        to: 'sth0067@gmail.com',
        subject: '...',
        react: <WelcomeTemplate name="Scott"/>
    })

    return NextResponse.json({});
}