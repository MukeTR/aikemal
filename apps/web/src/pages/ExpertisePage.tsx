import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { expertise } from "../content/expertise";
export function ExpertisePage() {
  return (
    <div className="container page">
      <p className="eyebrow">İŞİN MUTFAĞI / UZMANLIKLAR</p>
      <h1>
        Yapay zekâ,
        <br />
        <span>el alışkanlığım.</span>
      </h1>
      <p className="page-intro">
        Rakibi doğru tespit etmekten çalışan ürünü kurmaya kadar stratejiyle
        üretimi aynı masada tutuyorum. Yapay zekâ, CRM, otomasyon ve yaratıcı
        üretim araçları bu sistemin parçaları. Son karar ve kontrol bende.
      </p>
      <nav className="expertise-jumps" aria-label="Uzmanlık alanları">
        {expertise.map((e) => (
          <a href={"#" + e.id} key={e.id}>
            {e.name} ↓
          </a>
        ))}
      </nav>
      <div className="expertise-details">
        {expertise.map((e) => (
          <section id={e.id} key={e.id} className="expertise-detail">
            <div>
              <p className="eyebrow">
                {e.number} / {e.label}
              </p>
              <h2>{e.name}</h2>
              <p className="expertise-aside">{e.aside}</p>
            </div>
            <div>
              <h3>{e.line}</h3>
              <p>{e.description}</p>
              <ul className="task-list">
                {e.tasks.map((t) => (
                  <li key={t}>
                    <Check size={17} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="example-box">
                <p className="eyebrow">SOMUT KARŞILIĞI</p>
                <p>{e.example}</p>
                {e.project && (
                  <Link className="text-link" to={e.project}>
                    Projeye bak <ArrowUpRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="small-cta">
        <h2>Senin işin nerede takılıyor?</h2>
        <Link className="button dark" to="/ask">
          Oradan başlayalım <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
