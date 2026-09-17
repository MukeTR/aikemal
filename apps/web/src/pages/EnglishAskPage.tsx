import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function EnglishAskPage() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (sent) {
    return (
      <section className="container page english-brief-result">
        <div className="brief-result-mark">
          <Check size={34} />
        </div>
        <p className="eyebrow">BRIEF ASSEMBLED / PATIENT WILL LIVE</p>
        <h1>Good. The vague idea now has edges.</h1>
        <p className="page-intro">
          This version does not send or store the brief yet. Your answers stayed
          in the browser—which is polite, if not especially useful for
          scheduling a meeting.
        </p>
        <div className="english-result-actions">
          <button
            className="button dark"
            type="button"
            onClick={() => setSent(false)}
          >
            Build another brief
          </button>
          <a
            className="text-link"
            href="https://github.com/MukeTR"
            target="_blank"
            rel="noreferrer"
          >
            Find me on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="container page english-brief-page">
      <Link className="text-link" to="/en">
        <ArrowLeft size={16} /> Back to the workshop
      </Link>
      <div className="english-brief-heading">
        <div>
          <p className="eyebrow">THINK TOGETHER / SHORT DIAGNOSTIC</p>
          <h1>Put the strange problem on the table.</h1>
        </div>
        <aside>
          <Sparkles size={22} />
          <p>No 47-field “quick form.” We both have lives.</p>
        </aside>
      </div>
      <form className="english-brief-form" onSubmit={submit}>
        <fieldset>
          <legend>What sort of machine are we looking at?</legend>
          <div className="english-choice-grid">
            {[
              "AI product or feature",
              "E-commerce & growth",
              "CRM & automation",
              "Research & data",
              "Something gloriously unclear",
            ].map((choice) => (
              <label key={choice}>
                <input type="radio" name="lane" value={choice} required />
                <span>{choice}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="english-brief-field">
          <span>What is stuck?</span>
          <textarea
            name="problem"
            required
            rows={5}
            placeholder="Tell me what is happening, what should be happening, and which bit is currently on fire. Metaphorically is fine."
          />
        </label>
        <div className="english-brief-row">
          <label className="english-brief-field">
            <span>What would a useful result look like?</span>
            <input
              name="result"
              required
              placeholder="A working MVP, a clear decision, fewer spreadsheets…"
            />
          </label>
          <label className="english-brief-field">
            <span>How urgent is it?</span>
            <select name="urgency" required defaultValue="">
              <option value="" disabled>
                Choose honestly
              </option>
              <option>This week would be lovely</option>
              <option>This month is sensible</option>
              <option>Exploring for now</option>
              <option>Yesterday, apparently</option>
            </select>
          </label>
        </div>
        <button className="button dark" type="submit">
          Assemble the brief <ArrowUpRight size={17} />
        </button>
      </form>
    </section>
  );
}
