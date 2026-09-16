import { Asterisk, Cog, Wrench } from "lucide-react";

export function MagicGearScene() {
  return (
    <section className="magic-gear-scene" aria-labelledby="gear-scene-title">
      <div className="magic-gear-copy">
        <p className="eyebrow">BENİM SİHRİM / TIKANAN SİSTEMLER</p>
        <h2 id="gear-scene-title">
          Çark dönmüyorsa,
          <br />
          orada bir işim vardır.
        </h2>
        <p>
          Problem bazen stratejide, bazen veride, bazen de iki aracın birbirini
          anlamamasındadır. Tıkandığı yeri bulur, sistemi yeniden çalıştırırım.
        </p>
        <span className="gear-scene-note">
          Aynı çark. Daha az sürtünme. Daha çok çıktı.
        </span>
      </div>

      <div
        className="gear-machine"
        role="img"
        aria-label="Tıkanan dişlileri AI Kemal'in tamir edip yeniden çalıştırdığı animasyon"
      >
        <div className="machine-grid" />
        <div className="machine-status machine-status--jammed">
          <span /> Sistem takıldı
        </div>
        <div className="machine-status machine-status--running">
          <span /> Akış yeniden çalışıyor
        </div>

        <div className="gear gear--large">
          <Cog strokeWidth={1.05} />
          <span>STRATEJİ</span>
        </div>
        <div className="gear gear--medium">
          <Cog strokeWidth={1.05} />
          <span>VERİ</span>
        </div>
        <div className="gear gear--small">
          <Cog strokeWidth={1.1} />
          <span>ÜRÜN</span>
        </div>

        <div className="repair-sparks" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="ai-kemal-fixer" aria-hidden="true">
          <div className="fixer-head">
            <Asterisk />
          </div>
          <div className="fixer-body">
            <strong>AI KEMAL</strong>
            <small>bir bakayım</small>
          </div>
          <Wrench className="fixer-wrench" />
        </div>

        <div className="machine-track">
          <span />
        </div>
        <p className="machine-caption">
          PROBLEM <b>→</b> TEŞHİS <b>→</b> TAMİR <b>→</b> DEVAM
        </p>
      </div>
    </section>
  );
}
