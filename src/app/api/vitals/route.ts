import { NextResponse } from "next/server";

type VitalsPayload = {
  name?: string;
  value?: number;
  rating?: "good" | "needs-improvement" | "poor";
  id?: string;
  delta?: number;
  path?: string;
  userAgent?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as VitalsPayload;
  const metric = payload.name ?? "unknown";
  const value = payload.value ?? 0;
  const rating = payload.rating ?? "needs-improvement";
  const path = payload.path ?? "unknown";

  console.info("[web-vitals]", {
    metric,
    value,
    rating,
    path,
    id: payload.id,
    delta: payload.delta,
  });

  return NextResponse.json({ ok: true });
}
