import { describe, expect, it } from "vitest";
import { POST } from "@/app/api/vitals/route";

describe("POST /api/vitals", () => {
  it("retorna ok para payload válido", async () => {
    const request = new Request("http://localhost:3000/api/vitals", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: "LCP",
        value: 2310.2,
        rating: "good",
        path: "/pt",
      }),
    });

    const response = await POST(request);
    const json = (await response.json()) as { ok: boolean };

    expect(response.status).toBe(200);
    expect(json.ok).toBe(true);
  });
});
