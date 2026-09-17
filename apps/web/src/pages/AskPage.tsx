import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Asterisk,
  Check,
  Copy,
  RotateCcw,
} from "lucide-react";

const lanes = [
  {
    value: "Ürün fikri",
    label: "Ürün fikri",
    note: "Kafada var, ekranda yok.",
  },
  {
    value: "Otomasyon",
    label: "Otomasyon",
    note: "Bunu hâlâ elle mi yapıyoruz?",
  },
  { value: "E-ticaret", label: "E-ticaret", note: "Satış var. Kâr nerede?" },
  {
    value: "CRM & büyüme",
    label: "CRM & büyüme",
    note: "Müşteri geldi, sonra kayboldu.",
  },
  {
    value: "Veri & scraping",
    label: "Veri & scraping",
    note: "Doğru taşı bulmamız lazım.",
  },
  { value: "Diğer", label: "Başka bir şey", note: "Kutulara sığmadı. Güzel." },
];

const currentStates = [
  "Hiçbir şey yok, saf fikir",
  "Excel tutuyor; Excel de yoruldu",
  "Bir sistem var ama nazlı",
  "İnsan gücüyle dönüyor",
  "Çalışıyor, büyütmek istiyorum",
];

const urgencyOptions = [
  "Dün lazımdı",
  "Bu ay olsa şahane",
  "Acele yok, doğru olsun",
];
const budgetOptions = [
  "Free tier romantizmi",
  "Önce mantığını görelim",
  "Bütçe var, sonuç konuşalım",
];

type Brief = {
  lane: string;
  audience: string;
  problem: string;
  currentState: string;
  urgency: string;
  budget: string;
  name: string;
  contact: string;
};

const emptyBrief: Brief = {
  lane: "",
  audience: "",
  problem: "",
  currentState: "",
  urgency: "",
  budget: "",
  name: "",
  contact: "",
};

export function AskPage() {
  const [step, setStep] = useState(1);
  const [brief, setBrief] = useState<Brief>(emptyBrief);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const summary = useMemo(
    () =>
      [
        `Konu: ${brief.lane}`,
        `Kimin için: ${brief.audience}`,
        `Mesele: ${brief.problem}`,
        `Bugünkü durum: ${brief.currentState}`,
        `Aciliyet: ${brief.urgency}`,
        `Bütçe modu: ${brief.budget}`,
        brief.name ? `İsim: ${brief.name}` : "",
        brief.contact ? `İletişim: ${brief.contact}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    [brief],
  );

  function update<K extends keyof Brief>(key: K, value: Brief[K]) {
    setBrief((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Brief’i buradan kopyalayabilirsin:", summary);
    }
  }

  function restart() {
    setBrief(emptyBrief);
    setStep(1);
    setSubmitted(false);
    setCopied(false);
  }

  if (submitted) {
    return (
      <section className="container page ask-page brief-result-page">
        <div className="brief-result-mark">
          <Check size={34} />
        </div>
        <p className="eyebrow">TEŞHİS TAMAM / HASTA YAŞAR</p>
        <h1>Bu iş konuşulur.</h1>
        <p className="page-intro">
          Dağınık fikir, okunabilir bir brief’e dönüştü. İlk küçük zaferimizi
          gereğinden fazla kutlamıyoruz. Biraz kutluyoruz.
        </p>
        <div className="brief-result-grid">
          <article className="brief-paper">
            <p className="eyebrow">MASADAKİ BRIEF</p>
            <dl>
              <div>
                <dt>Konu</dt>
                <dd>{brief.lane}</dd>
              </div>
              <div>
                <dt>Kimin için?</dt>
                <dd>{brief.audience}</dd>
              </div>
              <div>
                <dt>Mesele</dt>
                <dd>{brief.problem}</dd>
              </div>
              <div>
                <dt>Bugün ne var?</dt>
                <dd>{brief.currentState}</dd>
              </div>
              <div>
                <dt>Gerçek hayat ayarları</dt>
                <dd>
                  {brief.urgency} · {brief.budget}
                </dd>
              </div>
            </dl>
          </article>
          <aside className="brief-next">
            <p className="eyebrow">KEMAL OLSA NEREDEN BAŞLAR?</p>
            <ol>
              <li>Problemin gerçekten nerede başladığını doğrular.</li>
              <li>Çalışan en küçük sürümü seçer.</li>
              <li>Veri, altyapı ve maliyeti aynı masaya koyar.</li>
            </ol>
            <p>
              Brief cihazın dışına gönderilmedi. Gerçek gönderim ve bildirim
              sistemi Supabase bağlantısıyla gelecek.
            </p>
          </aside>
        </div>
        <div className="brief-result-actions">
          <button className="button dark" type="button" onClick={copySummary}>
            {copied ? <Check size={17} /> : <Copy size={17} />}
            {copied ? "Kopyalandı" : "Brief’i kopyala"}
          </button>
          <button
            className="text-link brief-restart"
            type="button"
            onClick={restart}
          >
            <RotateCcw size={15} /> Bir tane daha düşün
          </button>
        </div>
      </section>
    );
  }

  const canContinue =
    step === 1
      ? Boolean(brief.lane && brief.audience.trim())
      : step === 2
        ? Boolean(brief.problem.trim() && brief.currentState)
        : Boolean(brief.urgency && brief.budget);

  return (
    <section className="container page ask-page">
      <div className="ask-heading">
        <div>
          <p className="eyebrow">BİRLİKTE DÜŞÜNELİM / KISA TEŞHİS</p>
          <h1>
            Meseleyi
            <br />
            masaya koy.
          </h1>
        </div>
        <aside>
          <Asterisk size={34} />
          <p>
            “Bir fikrim var ama nasıl anlatacağımı bilmiyorum” seçeneğini
            kaldırdık. Form onun için burada.
          </p>
        </aside>
      </div>

      <div className="brief-progress" aria-label={`Adım ${step} / 3`}>
        {[1, 2, 3].map((number) => (
          <span className={number <= step ? "active" : ""} key={number}>
            <i /> 0{number}
          </span>
        ))}
      </div>

      <form className="brief-form" onSubmit={submit}>
        {step === 1 && (
          <fieldset>
            <legend>
              <span>01</span>
              Bu mesele hangi mahallede?
              <small>En yakın olanı seç. Nüfus müdürlüğü değiliz.</small>
            </legend>
            <div className="choice-grid lane-grid">
              {lanes.map((lane) => (
                <button
                  type="button"
                  aria-pressed={brief.lane === lane.value}
                  onClick={() => update("lane", lane.value)}
                  key={lane.value}
                >
                  <strong>{lane.label}</strong>
                  <span>{lane.note}</span>
                </button>
              ))}
            </div>
            <label className="brief-text-field">
              Kimin hayatı kolaylaşacak?
              <input
                required
                value={brief.audience}
                onChange={(event) => update("audience", event.target.value)}
                placeholder="Örn. Trendyol satıcıları, satış ekibi, ben…"
              />
            </label>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend>
              <span>02</span>
              Tam olarak ne can sıkıyor?
              <small>Semptomu değil, mümkünse ağrıyan yeri anlat.</small>
            </legend>
            <label className="brief-text-field">
              Meseleyi dök
              <textarea
                required
                rows={6}
                maxLength={1200}
                value={brief.problem}
                onChange={(event) => update("problem", event.target.value)}
                placeholder="Her pazartesi üç Excel’i birleştiriyoruz. Sonra bir de doğru mu diye bakıyoruz…"
              />
              <small>
                {brief.problem.length} / 1200 · Roman yazabilirsin, novella
                yeterli.
              </small>
            </label>
            <div className="choice-block">
              <p>Şu an bu işi ne taşıyor?</p>
              <div className="choice-grid compact-choice-grid">
                {currentStates.map((state) => (
                  <button
                    type="button"
                    aria-pressed={brief.currentState === state}
                    onClick={() => update("currentState", state)}
                    key={state}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <legend>
              <span>03</span>
              Gerçek hayat ayarları
              <small>Fikirler bedava. Takvim ve sunucu pek değil.</small>
            </legend>
            <div className="choice-block">
              <p>Ne kadar acil?</p>
              <div className="choice-grid three-choice-grid">
                {urgencyOptions.map((option) => (
                  <button
                    type="button"
                    aria-pressed={brief.urgency === option}
                    onClick={() => update("urgency", option)}
                    key={option}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="choice-block">
              <p>Bütçe modu?</p>
              <div className="choice-grid three-choice-grid">
                {budgetOptions.map((option) => (
                  <button
                    type="button"
                    aria-pressed={brief.budget === option}
                    onClick={() => update("budget", option)}
                    key={option}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="brief-contact-grid">
              <label className="brief-text-field">
                Adın <small>İsteğe bağlı. “Patron” da kabul.</small>
                <input
                  value={brief.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder="Nasıl hitap edelim?"
                />
              </label>
              <label className="brief-text-field">
                İletişim <small>Şimdilik yalnız brief’e eklenir.</small>
                <input
                  value={brief.contact}
                  onChange={(event) => update("contact", event.target.value)}
                  placeholder="E-posta veya sosyal hesap"
                />
              </label>
            </div>
          </fieldset>
        )}

        <div className="brief-navigation">
          {step > 1 ? (
            <button
              className="text-link"
              type="button"
              onClick={() => setStep(step - 1)}
            >
              <ArrowLeft size={16} /> Geri dön
            </button>
          ) : (
            <span />
          )}
          {step < 3 ? (
            <button
              className="button dark"
              type="button"
              disabled={!canContinue}
              onClick={() => setStep(step + 1)}
            >
              Devam et <ArrowRight size={17} />
            </button>
          ) : (
            <button
              className="button dark"
              type="submit"
              disabled={!canContinue}
            >
              Masaya bırak <Asterisk size={17} />
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
