import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, mobileNumber, pickupLocation, deliveryLocation, typeOfGoods, notes } = body;

    const { data, error } = await resend.emails.send({
      from: "Prasanth Roadlines <onboarding@resend.dev>",
      to: ["prasanthroadlines@gmail.com"],
      subject: `New Quote Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d1f3c; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f97316; margin: 0; font-size: 20px;">New Quote Request</h1>
            <p style="color: #ffffff99; margin: 4px 0 0; font-size: 13px;">Prasanth Roadlines Website</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; width: 40%;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 13px; font-weight: 600;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Mobile Number</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 13px; font-weight: 600;">${mobileNumber}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Pickup Location</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 13px; font-weight: 600;">${pickupLocation}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Delivery Location</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 13px; font-weight: 600;">${deliveryLocation}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Type of Goods</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 13px; font-weight: 600;">${typeOfGoods || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Additional Notes</td>
                <td style="padding: 10px 0; color: #1e293b; font-size: 13px;">${notes || "None"}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #fff7ed; border-radius: 8px; border-left: 4px solid #f97316;">
              <p style="margin: 0; color: #9a3412; font-size: 13px; font-weight: 600;">Please respond within 2 hours with a customized quote.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
