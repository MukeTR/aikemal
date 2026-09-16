type GearProps = {
  cx: number;
  cy: number;
  radius: number;
  teeth: number;
  className: string;
  code: string;
  label: string;
};

function gearPoints(cx: number, cy: number, radius: number, teeth: number) {
  return Array.from({ length: teeth * 4 }, (_, index) => {
    const step = index % 4;
    const toothRadius = step === 1 || step === 2 ? radius * 1.13 : radius;
    const angle = (Math.PI * 2 * index) / (teeth * 4) - Math.PI / 2;
    return `${cx + Math.cos(angle) * toothRadius},${cy + Math.sin(angle) * toothRadius}`;
  }).join(" ");
}

function Gear({ cx, cy, radius, teeth, className, code, label }: GearProps) {
  const spokeRadius = radius * 0.72;
  return (
    <>
      <g className={`tech-gear ${className}`}>
        <polygon points={gearPoints(cx, cy, radius, teeth)} />
        <circle cx={cx} cy={cy} r={radius * 0.72} />
        <circle className="gear-hub" cx={cx} cy={cy} r={radius * 0.2} />
        {[0, 60, 120].map((angle) => {
          const radians = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1={cx - Math.cos(radians) * spokeRadius}
              y1={cy - Math.sin(radians) * spokeRadius}
              x2={cx + Math.cos(radians) * spokeRadius}
              y2={cy + Math.sin(radians) * spokeRadius}
            />
          );
        })}
      </g>
      <g className="gear-label">
        <text x={cx - radius} y={cy + radius + 29}>
          {code}
        </text>
        <text className="gear-label-name" x={cx - radius} y={cy + radius + 45}>
          {label}
        </text>
      </g>
    </>
  );
}

export function MagicGearScene({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const english = locale === "en";
  return (
    <section className="magic-gear-scene" aria-labelledby="gear-scene-title">
      <div className="magic-gear-copy">
        <p className="eyebrow">
          {english
            ? "THE MAGIC / SYSTEM INTERVENTION"
            : "BENİM SİHRİM / SİSTEM MÜDAHALESİ"}
        </p>
        <h2 id="gear-scene-title">
          {english ? "The flow jams." : "Akış tıkanır."}
          <br />
          {english ? "I find the reason." : "Ben sebebini bulurum."}
        </h2>
        <p>
          {english
            ? "Sometimes the fault is in the strategy, sometimes in the data, and sometimes where two systems meet. I trace the signal, diagnose the bottleneck and get the flow running again."
            : "Sorun bazen stratejide, bazen veride, bazen de iki sistemin temas noktasındadır. Sinyali izler, darboğazı teşhis eder ve akışı yeniden çalıştırırım."}
        </p>
        <span className="gear-scene-note">DIAGNOSE → PATCH → VERIFY → RUN</span>
      </div>

      <div
        className="gear-machine tech-console"
        role="img"
        aria-label="Tıkanan teknik dişli sistemini AI Kemal tanı modülünün analiz edip yeniden çalıştırdığı animasyon"
      >
        <div className="console-header">
          <span>AK://MECHANICAL_FLOW</span>
          <span className="console-clock">LIVE TELEMETRY · 09.17.26</span>
        </div>
        <div className="machine-status machine-status--jammed">
          <span /> FAULT · TORQUE LIMIT
        </div>
        <div className="machine-status machine-status--running">
          <span /> NOMINAL · FLOW RESTORED
        </div>

        <svg
          className="technical-schematic"
          viewBox="0 0 760 470"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="micro-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 20 0 L 0 0 0 20" />
            </pattern>
            <pattern
              id="macro-grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#micro-grid)" />
              <path d="M 100 0 L 0 0 0 100" />
            </pattern>
            <filter id="technical-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect
            className="schematic-grid"
            width="760"
            height="470"
            fill="url(#macro-grid)"
          />
          <path className="datum-line" d="M42 240H712" />
          <path className="shaft-line" d="M94 240H657" />
          <path className="flow-line" d="M50 94H250L285 126H520L555 94H710" />

          <Gear
            cx={190}
            cy={240}
            radius={91}
            teeth={18}
            className="tech-gear--a"
            code="G-01"
            label="STRATEGY INPUT"
          />
          <Gear
            cx={373}
            cy={270}
            radius={68}
            teeth={16}
            className="tech-gear--b"
            code="G-02"
            label="DATA LAYER"
          />
          <Gear
            cx={515}
            cy={191}
            radius={52}
            teeth={14}
            className="tech-gear--c"
            code="G-03"
            label="PRODUCT OUTPUT"
          />

          <g className="fault-coordinate">
            <circle cx="309" cy="259" r="19" />
            <circle cx="309" cy="259" r="7" />
            <path d="M309 224V242M309 276V294M274 259H292M326 259H344" />
            <text x="330" y="235">
              FAULT NODE
            </text>
            <text x="330" y="250">
              X:309 Y:259
            </text>
          </g>

          <g className="diagnostic-scan">
            <path d="M704 355H615L551 286L324 259" />
            <circle cx="309" cy="259" r="31" />
            <circle cx="309" cy="259" r="47" />
          </g>

          <g className="tech-agent">
            <rect x="545" y="314" width="166" height="82" rx="5" />
            <rect
              className="agent-accent"
              x="545"
              y="314"
              width="5"
              height="82"
            />
            <text className="agent-title" x="562" y="338">
              AI KEMAL / DIAG
            </text>
            <text x="562" y="358">
              ROOT CAUSE FOUND
            </text>
            <text x="562" y="376">
              PATCHING NODE 02...
            </text>
            <path d="M680 334l8 8-15 15-8-8z" />
          </g>

          <g className="telemetry-chart">
            <text x="50" y="403">
              TORQUE / ms
            </text>
            <path className="chart-axis" d="M50 445V414H315" />
            <path
              className="chart-signal"
              d="M50 438L92 433L130 435L168 424L203 440L229 418L249 439L273 421L315 420"
            />
          </g>
          <g className="metric-stack">
            <text x="390" y="420">
              THROUGHPUT
            </text>
            <text className="metric-value" x="390" y="442">
              98.7%
            </text>
            <text x="500" y="420">
              FRICTION
            </text>
            <text className="metric-value" x="500" y="442">
              −42%
            </text>
            <text x="610" y="420">
              STATUS
            </text>
            <text className="metric-value metric-status" x="610" y="442">
              RUN
            </text>
          </g>
        </svg>

        <div className="machine-track">
          <span />
        </div>
        <div className="console-footer">
          <span>01 SENSE</span>
          <span>02 TRACE</span>
          <span>03 PATCH</span>
          <span>04 VERIFY</span>
        </div>
      </div>
    </section>
  );
}
