import { describe, it, expect } from "vitest";
import app from "./index";
const post = (body: string, type = "application/json") =>
  app.request("/api/chat", {
    method: "POST",
    headers: { "Content-Type": type },
    body,
  });
describe("Workers API contract", () => {
  it("runs without Supabase credentials", async () => {
    const r = await app.request("/api/health");
    expect(r.status).toBe(200);
    expect(await r.json()).toMatchObject({
      ok: true,
      supabase: "not-configured",
    });
  });
  it("returns a clearly labeled mock", async () => {
    const r = await post(JSON.stringify({ message: "Nereden başlayalım?" }));
    expect(r.status).toBe(200);
    expect(await r.json()).toMatchObject({ mode: "mock" });
  });
  it.each([
    "{}",
    "null",
    "[]",
    '{"message":3}',
    '{"message":"  "}',
    "{bad",
    JSON.stringify({ message: "x".repeat(1001) }),
  ])("rejects invalid input %s", async (body) => {
    expect((await post(body)).status).toBe(400);
  });
  it("rejects unsupported content type", async () => {
    expect((await post("hello", "text/plain")).status).toBe(415);
  });
  it("limits the request body", async () => {
    expect(
      (await post(JSON.stringify({ message: "x".repeat(9000) }))).status,
    ).toBe(413);
  });
  it("exposes planned projects", async () => {
    const r = await app.request("/api/projects");
    expect(await r.json()).toMatchObject({
      projects: expect.arrayContaining([
        expect.objectContaining({ status: "planned" }),
      ]),
    });
  });
  it("returns JSON 404 for unknown API paths", async () => {
    const r = await app.request("/api/missing");
    expect(r.status).toBe(404);
    expect(r.headers.get("content-type")).toContain("application/json");
  });
});
