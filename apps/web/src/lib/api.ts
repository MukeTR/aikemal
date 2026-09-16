import type { ChatRequest, ChatResponse } from "@aikemal/shared";
export async function askKemal(message: string): Promise<ChatResponse> {
  const body: ChatRequest = { message };
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok)
    throw new Error("Şu an yanıt alınamıyor. Biraz sonra tekrar dene.");
  return res.json();
}
