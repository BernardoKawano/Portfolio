"use client";

import { useEffect } from "react";
import { onCLS, onINP, onLCP, type Metric } from "web-vitals";

const ENDPOINT = "/api/vitals";

function report(metric: Metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: Number(metric.value.toFixed(2)),
    rating: metric.rating,
    id: metric.id,
    delta: Number(metric.delta.toFixed(2)),
    path: window.location.pathname,
    userAgent: navigator.userAgent,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(ENDPOINT, body);
    return;
  }

  void fetch(ENDPOINT, {
    body,
    method: "POST",
    keepalive: true,
    headers: { "content-type": "application/json" },
  });
}

export function WebVitalsReporter() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    onCLS(report);
    onINP(report);
    onLCP(report);
  }, []);

  return null;
}
