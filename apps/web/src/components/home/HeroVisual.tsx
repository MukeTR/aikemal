import { useState } from "react";
import { Asterisk, Search, Terminal, Workflow } from "lucide-react";
const notesTr = [
  "Doğru taşı buldum. Şimdi bir kaldıralım.",
  "Yeni fikir algılandı. Yine mi Kemal?",
  "17 sekme açık. Hepsinin bir sebebi var.",
  "Bir küçük özellik daha… Meşhur son sözler.",
];
const notesEn = [
  "Found the right rock. Let’s lift it.",
  "New idea detected. Kemal, again?",
  "17 tabs open. Every one has a reason.",
  "Just one more tiny feature… Famous last words.",
];
export function HeroVisual({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const [n, setN] = useState(0);
  const english = locale === "en";
  const notes = english ? notesEn : notesTr;
  return (
    <div className="hero-visual">
      <div className="visual-top">
        <span>
          {english ? "INSIDE KEMAL’S HEAD" : "KEMAL’İN KAFASININ İÇİ"}
        </span>
        <span>V.02 ↗</span>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="float-chip chip-ai">
        <Search size={16} /> {english ? "Find the data" : "Veriyi bul"}
      </div>
      <div className="float-chip chip-code">
        <Terminal size={16} />{" "}
        {english ? "Problem → product" : "Problem → ürün"}
      </div>
      <div className="float-chip chip-growth">
        <Workflow size={16} />{" "}
        {english ? "Right infrastructure" : "Doğru altyapı"}
      </div>
      <button
        className="core"
        aria-label={
          english
            ? "Show another note from Kemal’s head"
            : "Kemal’in aklından geçen başka bir notu göster"
        }
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
        <span>{english ? "TOUCH THE STAR ↗" : "YILDIZA DOKUN ↗"}</span>
      </div>
    </div>
  );
}
