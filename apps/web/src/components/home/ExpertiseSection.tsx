import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { expertise } from "../../content/expertise";
const englishCopy: Record<
  string,
  { name: string; line: string; label: string }
> = {
  claude: {
    name: "Claude",
    line: "We unpack the long problems together.",
    label: "FROM THOUGHT TO APPLICATION",
  },
  chatgpt: {
    name: "ChatGPT",
    line: "Faster thinking. Steadier execution.",
    label: "RESEARCH & PRODUCTION",
  },
  crm: {
    name: "CRM & automation",
    line: "Customer follow-up should not live in memory.",
    label: "BEHIND THE SCENES",
  },
  products: {
    name: "Product & e-commerce",
    line: "A lovely idea should become a working thing.",
    label: "FROM IDEA TO USE",
  },
  meta: {
    name: "Meta advertising",
    line: "The dashboard is open. The work is in the field.",
    label: "ACTIVE ACCOUNT MANAGEMENT",
  },
  architecture: {
    name: "Product architecture",
    line: "The same stack does not fit every product.",
    label: "MINIMUM COST × MAXIMUM OUTPUT",
  },
  research: {
    name: "Web research & data",
    line: "I know where the information is likely hiding.",
    label: "LIFT THE RIGHT ROCK",
  },
  strategy: {
    name: "Strategy & competitor analysis",
    line: "Strategy starts by finding the actual competitor.",
    label: "READ THE PLAYING FIELD",
  },
};
export function ExpertiseSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const english = locale === "en";
  return (
    <section id="expertise" className="container section expertise-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {english ? "02 / ON THE WORKBENCH" : "02 / ELİMİN ALTINDAKİLER"}
          </p>
          <h2>
            {english ? "Many tools." : "Araçlar çok."}
            <br />
            {english
              ? "I make them work together."
              : "Ben onları birlikte çalıştırıyorum."}
          </h2>
        </div>
        <Link
          className="text-link"
          to={english ? "/en#expertise" : "/expertise"}
        >
          {english ? "Inside the workshop" : "İşin mutfağı"}{" "}
          <ArrowUpRight size={18} />
        </Link>
      </div>
      <p className="section-intro">
        {english
          ? "Claude, ChatGPT, competitor analysis, web research, data extraction, CRM, product architecture and 8 actively managed Meta accounts… They all belong to the same habit: build from scratch, measure the cost and make it work."
          : "Claude, ChatGPT, rakip analizi, web araştırması, veri çıkarımı, CRM, ürün mimarisi ve aktif yönettiğim 8 Meta hesabı… Hepsi sıfırdan ürün kuran, maliyeti ölçen aynı üretim alışkanlığının parçaları."}
      </p>
      <div className="expertise-grid">
        {expertise.map((item) => {
          const copy = english ? englishCopy[item.id] : item;
          return (
            <Link
              className="expertise-card"
              to={english ? "/en#expertise" : `/expertise#${item.id}`}
              key={item.id}
            >
              <span className="expertise-number">{item.number} /</span>
              <h3>
                {copy.name}
                <ArrowUpRight size={20} />
              </h3>
              <p>{copy.line}</p>
              <span className="card-bottom">{copy.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
