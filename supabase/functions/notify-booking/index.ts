import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendKey = Deno.env.get("RESEND_API_KEY");
    const ownerEmail = Deno.env.get("OWNER_EMAIL");

    if (!resendKey || !ownerEmail) {
      console.warn("RESEND_API_KEY or OWNER_EMAIL not configured, skipping email.");
      return new Response(JSON.stringify({ message: "Email not configured" }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const resend = new Resend(resendKey);
    const booking: BookingData = await req.json();

    // Send notification to business owner
    const { error } = await resend.emails.send({
      from: "PerformanceLab <onboarding@resend.dev>",
      to: [ownerEmail],
      subject: `New Booking: ${booking.service} - ${booking.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px;">
          <h1 style="color: #00ff88; border-bottom: 2px solid #00ff88; padding-bottom: 10px;">🖥️ New Booking Request</h1>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${booking.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${booking.email}">${booking.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${booking.phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Service:</td><td style="padding: 8px 0; font-weight: bold; color: #00ff88;">${booking.service}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Date:</td><td style="padding: 8px 0;">${booking.preferred_date}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Time:</td><td style="padding: 8px 0;">${booking.preferred_time}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Message:</td><td style="padding: 8px 0;">${booking.message || "None"}</td></tr>
          </table>
          <p style="margin-top: 30px; color: #999; font-size: 12px;">— PerformanceLab Booking System</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in notify-booking:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
