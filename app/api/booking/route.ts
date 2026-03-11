import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type BookingPayload = {
  type: "table" | "event";
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  eventType?: string;
  message?: string;
  website?: string;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (request: NextRequest) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) {
    return true;
  }
  entry.count += 1;
  return false;
};

const buildEmailText = (payload: BookingPayload) => {
  const lines = [
    `Type: ${payload.type === "event" ? "Event request" : "Table reservation"}`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Date: ${payload.date}`,
    `Time: ${payload.time}`,
    `Guests: ${payload.guests}`,
  ];

  if (payload.type === "event") {
    lines.push(`Event type: ${payload.eventType ?? "-"}`);
    lines.push(`Message: ${payload.message ?? "-"}`);
  }

  return lines.join("\n");
};

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests" },
      { status: 429 },
    );
  }

  let payload: BookingPayload;
  try {
    payload = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const requiredFields = [
    payload.type,
    payload.name,
    payload.phone,
    payload.date,
    payload.time,
    payload.guests,
  ];

  if (requiredFields.some((field) => !field)) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.FROM_EMAIL ?? user;
  const to = process.env.TO_EMAIL ?? from;

  if (!host || !port || Number.isNaN(port) || !user || !pass || !from || !to) {
    const missing = [
      !host ? "SMTP_HOST" : null,
      !process.env.SMTP_PORT || Number.isNaN(port) ? "SMTP_PORT" : null,
      !user ? "SMTP_USER" : null,
      !pass ? "SMTP_PASS" : null,
      !from ? "FROM_EMAIL" : null,
      !to ? "TO_EMAIL" : null,
    ].filter(Boolean);
    return NextResponse.json(
      {
        ok: false,
        error: "Email configuration missing",
        details: missing.length ? `Missing: ${missing.join(", ")}` : undefined,
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject =
    payload.type === "event"
      ? "New Event Request - La Cueva"
      : "New Table Reservation - La Cueva";

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text: buildEmailText(payload),
    });
  } catch (error) {
    console.error("Failed to send email", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
