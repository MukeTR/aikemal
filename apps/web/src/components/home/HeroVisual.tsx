import { useState } from "react";
import { Asterisk, Search, Terminal, Workflow } from "lucide-react";
const notes = [
  "Doğru taşı buldum. Şimdi bir kaldıralım.",
  "Yeni fikir algılandı. Yine mi Kemal?",
  "17 sekme açık. Hepsinin bir sebebi var.",
  "Bir küçük özellik daha… Meşhur son sözler.",
];
export function HeroVisual() {
  const [n, setN] = useState(0);
  return (
    <div className="hero-visual">
      <div className="visual-top">
        <span>KEMAL’İN KAFASININ İÇİ</span>
        <span>V.02 ↗</span>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="float-chip chip-ai">
        <Search size={16} /> Veriyi bul
      </div>
      <div className="float-chip chip-code">
        <Terminal size={16} /> Problem → ürün
      </div>
      <div className="float-chip chip-growth">
        <Workflow size={16} /> Doğru altyapı
      </div>
      <button
        className="core"
        aria-label="Kemal’in aklından geçen başka bir notu göster"
        onClick={() => setN((n + 1) % notes.length)}
      >
        <Asterisk strokeWidth={1.1} />
      </button>
      <span className="visual-plus plus-one">+</span>
      <span className="visual-plus plus-two">+</span>
      <div className="visual-bottom">
        <span aria-live="polite">
          <i />
          {notes[n]}
        </span>
        <span>YILDIZA DOKUN ↗</span>
      </div>
    </div>
  );
}
