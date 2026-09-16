import { useState, type FormEvent } from "react";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { askKemal } from "../lib/api";
export function AskPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!message.trim() || loading) return;
    setLoading(true);
    setError("");
    setReply("");
    try {
      const data = await askKemal(message);
      setReply(data.reply);
    } catch {
      setError(
        "API’ye ulaşılamadı. Lokal API’nin çalıştığından emin olup tekrar dene.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="container page ask-page">
      <p className="eyebrow">BİRLİKTE DÜŞÜNELİM</p>
      <h1>İlk adım, iyi bir soru.</h1>
      <p className="page-intro">
        Fikrini masaya koy. Birlikte nereden başlayabileceğine bakalım.
      </p>
      <div className="demo-notice">
        <Asterisk size={20} />
        <span>
          <strong>Demo modu.</strong> Yanıtlar örnektir. Gerçek bir LLM
          bağlantısı yok; mesajların kaydedilmez.
        </span>
      </div>
      <form onSubmit={submit}>
        <label htmlFor="message">Aklında ne var?</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={1000}
          required
          rows={5}
          placeholder="Örneğin: E-ticaret mağazamda kârlılığı nasıl ölçebilirim?"
        />
        <div className="form-bottom">
          <span>{message.length} / 1000</span>
          <button className="button dark" disabled={loading || !message.trim()}>
            {loading ? "Düşünülüyor…" : "Soruyu gönder"}
            <ArrowUpRight size={18} />
          </button>
        </div>
      </form>
      <div aria-live="polite" aria-busy={loading}>
        {reply && (
          <article className="reply">
            <p className="eyebrow">AI KEMAL / ÖRNEK YANIT</p>
            <p>{reply}</p>
          </article>
        )}
      </div>
      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}
    </section>
  );
}
