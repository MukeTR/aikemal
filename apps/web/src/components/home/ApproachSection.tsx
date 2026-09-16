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
export function ApproachSection() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="container section approach-section">
      <div>
        <p className="eyebrow">04 / ÇALIŞMA BİÇİMİ</p>
        <h2>
          İş ciddi.
          <br />
          Biz o kadar değiliz.
        </h2>
        <p className="section-intro">
          Mizah yerinde kalsın, iş de yolunda gitsin. Benim üretim döngüm bu
          kadar.
        </p>
        <Link to="/ask" className="text-link">
          Bir fikri masaya koy <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="steps">
        {steps.map((s, i) => (
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
