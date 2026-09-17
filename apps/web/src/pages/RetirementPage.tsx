import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Asterisk, Hourglass } from "lucide-react";

const BIRTHDAY = new Date("1995-11-12T00:00:00+03:00");
const RETIREMENT = new Date("2030-11-12T00:00:00+03:00");
const DAY = 86_400_000;

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function remainingUntil(target: Date, now: Date): Remaining {
  const total = Math.max(0, target.getTime() - now.getTime());
  return {
    total,
    days: Math.floor(total / DAY),
    hours: Math.floor((total % DAY) / 3_600_000),
    minutes: Math.floor((total % 3_600_000) / 60_000),
    seconds: Math.floor((total % 60_000) / 1000),
  };
}

function countWeekdays(from: Date, to: Date, weekday?: number) {
  let count = 0;
  const cursor = new Date(from);
  cursor.setHours(12, 0, 0, 0);
  while (cursor < to) {
    const day = cursor.getDay();
    if (weekday === undefined ? day !== 0 && day !== 6 : day === weekday)
      count += 1;
    cursor.setDate(cursor.getDate() + 1);
  }
  return count;
}

const copy = {
  tr: {
    eyebrow: "EMEKLİLİK / RESMÎ GERİ SAYIM",
    title: ["35’te", "emekli oluyorum."],
    intro:
      "Planlanan tarih 12 Kasım 2030. Ciddiyim. Cidden yoruldum. Sayaç bu yüzden burada; niyet belgesi gibi bir şey.",
    note: "Sayaç İstanbul saatine göre çalışır. Erteleme özelliği bilinçli olarak eklenmedi.",
    units: ["gün", "saat", "dakika", "saniye"],
    progressEyebrow: "YOLUN NERESİNDEYİZ?",
    progressLabel: (percent: string) =>
      `Doğumdan emekliliğe giden yolun %${percent}’i geride.`,
    stats: (weekdays: number, mondays: number, features: number) => [
      [
        weekdays.toLocaleString("tr-TR"),
        "iş günü",
        "Kaba hesap. Tatiller sayaçtan düşmedi; onlara da çalışıyoruz.",
      ],
      [
        mondays.toLocaleString("tr-TR"),
        "pazartesi",
        "Her biri ayrı bir başlangıç. Hepsi aynı kahve.",
      ],
      [
        features.toLocaleString("tr-TR"),
        "“bir küçük özellik daha”",
        "Tahmin. Haftada iki. Geçmiş performans geleceğin garantisidir.",
      ],
    ],
    planEyebrow: "EMEKLİLİK PLANI / SIKÇA SORULANLAR",
    planTitle: ["Sonra ne olacak?", "Bunu da düşündüm."],
    plan: [
      [
        "01",
        "Backlog ne olacak?",
        "Kapanmıyor. Sadece bildirimleri kapatıyorum. Fark küçük ama önemli.",
      ],
      [
        "02",
        "Gerçekten duracak mısın?",
        "Hayır. Ama “yoruldum” demek için 35’i beklemek de mantıklı gelmedi. O yüzden sayaç.",
      ],
      [
        "03",
        "Emeklilikte ne yapacaksın?",
        "Amasyalıyım. Dedemden kalma bir tarla var; gidip ekip biçeceğim. Köpeğim Nova ile tarım sektörüne giriş yapıyoruz. Küçük bir not: Daha tarlayı görmeden aklıma otomatize edilmemiş bir sürü problem takıldı. Sulama takvimi, hasat tahmini, Nova’nın devriye rotası… Emeklilik böyle bir şey değil herhalde.",
      ],
    ],
    doneEyebrow: "SAYAÇ BİTTİ",
    doneTitle: "Emekli.",
    doneText: "Tarih geldi. Backlog hâlâ açık. Bildirimler kapalı.",
    ctaEyebrow: "O GÜNE KADAR",
    ctaTitle: "Hâlâ iş var. Konuşalım.",
    cta: "Bir problem getir",
    ctaTo: "/ask",
    srSummary: (d: Remaining) =>
      `Emekliliğe ${d.days} gün ${d.hours} saat kaldı.`,
  },
  en: {
    eyebrow: "RETIREMENT / OFFICIAL COUNTDOWN",
    title: ["Retiring", "at 35."],
    intro:
      "Planned date: 12 November 2030. I mean it. I am genuinely tired. The counter lives here as a kind of signed declaration.",
    note: "Counter runs on Istanbul time. A snooze button was deliberately not added.",
    units: ["days", "hours", "minutes", "seconds"],
    progressEyebrow: "HOW FAR ALONG?",
    progressLabel: (percent: string) =>
      `${percent}% of the road from birth to retirement is behind us.`,
    stats: (weekdays: number, mondays: number, features: number) => [
      [
        weekdays.toLocaleString("en-US"),
        "working days",
        "Rough count. Holidays were not subtracted; we work those too.",
      ],
      [
        mondays.toLocaleString("en-US"),
        "Mondays",
        "Each one a fresh start. Same coffee.",
      ],
      [
        features.toLocaleString("en-US"),
        "“one more tiny feature”",
        "Estimate. Two a week. Past performance guarantees future results.",
      ],
    ],
    planEyebrow: "RETIREMENT PLAN / FAQ",
    planTitle: ["What happens after?", "I have thought about it."],
    plan: [
      [
        "01",
        "What about the backlog?",
        "It does not close. I only turn off the notifications. Small difference, important one.",
      ],
      [
        "02",
        "Will you actually stop?",
        "No. But waiting until 35 to say “I am tired” felt silly. Hence the counter.",
      ],
      [
        "03",
        "What will you do?",
        "I am from Amasya. There is a field my grandfather left behind; I am going to farm it. My dog Nova and I are entering agriculture. Small note: I have not seen the field yet and I already spot a pile of unautomated problems. Irrigation schedules, harvest forecasts, Nova’s patrol route… I suspect this is not how retirement works.",
      ],
    ],
    doneEyebrow: "COUNTER FINISHED",
    doneTitle: "Retired.",
    doneText: "The date arrived. Backlog still open. Notifications off.",
    ctaEyebrow: "UNTIL THEN",
    ctaTitle: "There is still work. Let’s talk.",
    cta: "Bring a problem",
    ctaTo: "/en/ask",
    srSummary: (d: Remaining) =>
      `${d.days} days and ${d.hours} hours until retirement.`,
  },
};

export function RetirementPage({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const t = copy[locale];
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const left = remainingUntil(RETIREMENT, now);
  const done = left.total === 0;
  const span = RETIREMENT.getTime() - BIRTHDAY.getTime();
  const elapsed = Math.min(span, now.getTime() - BIRTHDAY.getTime());
  const percent = ((elapsed / span) * 100).toFixed(1);
  const weekdays = countWeekdays(now, RETIREMENT);
  const mondays = countWeekdays(now, RETIREMENT, 1);
  const features = Math.round((left.total / DAY / 7) * 2);
  const tiles = [left.days, left.hours, left.minutes, left.seconds];

  return (
    <div className="container page retirement-page">
      <section className="retirement-hero">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>
            {t.title[0]}
            <br />
            <span>{t.title[1]}</span>
          </h1>
          <p className="page-intro">{t.intro}</p>
          <p className="retirement-note">
            <Hourglass size={14} /> {t.note}
          </p>
        </div>
        <aside className="retirement-date" aria-hidden="true">
          <span className="retirement-date-label">
            {locale === "en" ? "TARGET" : "HEDEF"}
          </span>
          <strong>12.11.2030</strong>
          <span className="retirement-date-age">35</span>
          <Asterisk
            className="retirement-date-mark"
            size={30}
            strokeWidth={1.2}
          />
        </aside>
      </section>

      <section className="retirement-counter" aria-live="off">
        <p className="sr-only" aria-live="polite">
          {t.srSummary(left)}
        </p>
        {done ? (
          <div className="retirement-done">
            <p className="eyebrow">{t.doneEyebrow}</p>
            <h2>{t.doneTitle}</h2>
            <p>{t.doneText}</p>
          </div>
        ) : (
          <div className="retirement-tiles">
            {tiles.map((value, index) => (
              <div className="retirement-tile" key={t.units[index]}>
                <strong>
                  {index === 0
                    ? value.toLocaleString(locale === "en" ? "en-US" : "tr-TR")
                    : String(value).padStart(2, "0")}
                </strong>
                <span>{t.units[index]}</span>
              </div>
            ))}
          </div>
        )}
        <div className="retirement-progress">
          <p className="eyebrow">{t.progressEyebrow}</p>
          <div
            className="retirement-bar"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Number(percent)}
          >
            <i style={{ width: `${percent}%` }} />
          </div>
          <p>{t.progressLabel(percent)}</p>
        </div>
      </section>

      <section className="retirement-stats">
        {t.stats(weekdays, mondays, features).map(([value, label, note]) => (
          <article key={label}>
            <strong>{value}</strong>
            <h3>{label}</h3>
            <p>{note}</p>
          </article>
        ))}
      </section>

      <section className="retirement-plan">
        <div>
          <p className="eyebrow">{t.planEyebrow}</p>
          <h2>
            {t.planTitle[0]}
            <br />
            {t.planTitle[1]}
          </h2>
        </div>
        <div className="retirement-plan-list">
          {t.plan.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="small-cta">
        <div>
          <p className="eyebrow">{t.ctaEyebrow}</p>
          <h2>{t.ctaTitle}</h2>
        </div>
        <Link to={t.ctaTo} className="button dark">
          {t.cta} <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
