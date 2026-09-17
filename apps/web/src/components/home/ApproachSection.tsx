import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
const steps = [
  {
    title: "Önce meseleyi anlayalım.",
    body: "Kimin için, hangi sorunu çözüyoruz? İşe buradan başlıyorum. Doğru soru, güzel görünen on tane gereksiz özellikten daha değerli.",
    note: "“Bir uygulama yapalım” güzel. Ne yapacak, orası da önemli.",
  },
  {
    title: "Doğru aracı masaya koyalım.",
    body: "Araştırma, kod, içerik veya müşteri akışı: işe göre araç seçiyor, bağlamı hazırlıyor, çıktıları bir sonraki adıma bağlıyorum.",
    note: "Sekme sayısı bir başarı metriği değildir. Kendime de söylüyorum.",
  },
  {
    title: "Çalışan ilk sürümü görelim.",
    body: "Fikri küçük ve denenebilir bir sürüme indiriyorum. Yapay zekâyla üretilen çıktıyı kontrol ediyor, akışı test ediyor, eksiklerini düzeltiyorum.",
    note: "“Bende çalışıyor” başlangıç. Başkasında da çalışsın.",
  },
  {
    title: "Öğrenelim. Bir tur daha.",
    body: "Kullanımda ne işe yaradı, nerede takıldık? Sonraki adımı bunlara göre seçiyorum. Gerektiğinde özelliği büyütmek kadar çıkarmak da işin parçası.",
    note: "Son_final_v3 değil. Bir sonraki sürüm.",
  },
];
const stepsEn = [
  {
    title: "First, understand the actual problem.",
    body: "Who is it for, and what are we solving? The right question is worth more than ten attractive features nobody needs.",
    note: "‘Let’s build an app’ is lovely. What it does would also be useful.",
  },
  {
    title: "Put the right tool on the table.",
    body: "Research, code, content or customer flow: I choose for the job, prepare the context and connect each output to the next step.",
    note: "Tab count is not a success metric. I keep reminding myself.",
  },
  {
    title: "Get to the first working version.",
    body: "I reduce the idea to something small and testable, inspect the AI output, test the flow and fix what breaks.",
    note: "‘Works on my machine’ is a beginning. It should work elsewhere too.",
  },
  {
    title: "Learn. Then take another pass.",
    body: "What worked in use, and where did it jam? The next move comes from that evidence. Removing a feature is also product work.",
    note: "Not final_final_v3. Just the next version.",
  },
];
export function ApproachSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const [active, setActive] = useState<number | null>(0);
  const english = locale === "en";
  const items = english ? stepsEn : steps;
  return (
    <section className="container section approach-section">
      <div>
        <p className="eyebrow">
          {english ? "04 / HOW I WORK" : "04 / ÇALIŞMA BİÇİMİ"}
        </p>
        <h2>
          {english ? "The work is serious." : "İş ciddi."}
          <br />
          {english ? "We do not have to be." : "Biz o kadar değiliz."}
        </h2>
        <p className="section-intro">
          {english
            ? "Keep the humour. Keep the work moving. That is the loop."
            : "Mizah yerinde kalsın, iş de yolunda gitsin. Benim üretim döngüm bu kadar."}
        </p>
        <Link to={english ? "/en/ask" : "/ask"} className="text-link">
          {english ? "Put an idea on the table" : "Bir fikri masaya koy"}{" "}
          <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="steps">
        {items.map((s, i) => (
          <article
            className={"step " + (active === i ? "is-open" : "")}
            key={s.title}
          >
            <h3>
              <button
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
                aria-controls={"step-" + i}
              >
                <span className="step-number">0{i + 1}</span>
                {s.title}
                {active === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            </h3>
            <div id={"step-" + i} hidden={active !== i}>
              <p>{s.body}</p>
              <small>{s.note}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
