import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import { secureHeaders } from "hono/secure-headers";
import { projects, type ChatResponse } from "@aikemal/shared";
import type { Env } from "./supabase";
const app = new Hono<{ Bindings: Env }>();
app.use("*", secureHeaders());
app.get("/api/health", (c) =>
  c.json({
    ok: true,
    mode: "mock",
    supabase:
      c.env?.SUPABASE_URL && c.env?.SUPABASE_PUBLISHABLE_KEY
        ? "configured-not-verified"
        : "not-configured",
  }),
);
app.get("/api/projects", (c) => c.json({ projects }));
app.use(
  "/api/chat",
  bodyLimit({
    maxSize: 8192,
    onError: (c) => c.json({ error: "İstek çok büyük." }, 413),
  }),
);
app.post("/api/chat", async (c) => {
  if (!c.req.header("content-type")?.includes("application/json"))
    return c.json({ error: "JSON bekleniyor." }, 415);
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Geçersiz JSON." }, 400);
  }
  const message =
    body && typeof body === "object" && "message" in body
      ? body.message
      : undefined;
  if (typeof message !== "string" || !message.trim() || message.length > 1000)
    return c.json({ error: "1–1000 karakter arasında bir mesaj yaz." }, 400);
  const response: ChatResponse = {
    mode: "mock",
    reply:
      "Birlikte somutlaştıralım. Önce hedefini, kimin için ürettiğini ve bugün önündeki en büyük engeli tanımla. Sonra tek bir küçük deney seç: bir prototip, bir müşteri görüşmesi veya bir ölçüm. Bu, örnek bir yanıttır; henüz gerçek bir yapay zekâ modeli bağlı değil.",
  };
  return c.json(response);
});
app.notFound((c) => c.json({ error: "Endpoint bulunamadı." }, 404));
app.onError((err, c) => {
  console.error(err);
  return c.json({ error: "Beklenmeyen bir hata oluştu." }, 500);
});
export default app;
