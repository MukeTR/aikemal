import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { expertise } from "../../content/expertise";
export function ExpertiseSection() {
  return (
    <section id="expertise" className="container section expertise-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / ELİMİN ALTINDAKİLER</p>
          <h2>
            Araçlar çok.
            <br />
            Ben onları birlikte çalıştırıyorum.
          </h2>
        </div>
        <Link className="text-link" to="/expertise">
          İşin mutfağı <ArrowUpRight size={18} />
        </Link>
      </div>
      <p className="section-intro">
        Claude, ChatGPT, CRM, otomasyon… Ayrı sekmelerin ötesinde, aynı üretim
        alışkanlığının parçaları.
      </p>
      <div className="expertise-grid">
        {expertise.map((item) => (
          <Link
            className="expertise-card"
            to={"/expertise#" + item.id}
            key={item.id}
          >
            <span className="expertise-number">{item.number} /</span>
            <h3>
              {item.name}
              <ArrowUpRight size={20} />
            </h3>
            <p>{item.line}</p>
            <span className="card-bottom">{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
