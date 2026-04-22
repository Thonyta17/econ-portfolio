const skills = [
  { category: "Programming", items: ["Python", "R", "MATLAB", "SQL"] },
  { category: "Tools", items: ["Tableau", "Git/GitHub", "Jupyter Notebooks"] },
  {
    category: "Econometrics",
    items: ["Time Series", "Panel Data", "Regression", "Macroeconomic Forecasting"],
  },
  {
    category: "Machine Learning",
    items: ["Classification", "Clustering", "Causal Inference", "A/B Testing"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">01 / About</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12 tracking-tight">
          Background
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-5 text-slate-400 leading-relaxed text-[15px]">
            <p>
              I&apos;m a{" "}
              <span className="text-slate-200 font-medium">Fulbright Scholar</span> and MS Economics
              (Data Science) student at{" "}
              <span className="text-slate-200 font-medium">Northeastern University</span>, with a
              GPA of 4.0 and coursework spanning applied econometrics, machine learning, and data
              analytics.
            </p>
            <p>
              Before grad school, I spent three years as an{" "}
              <span className="text-slate-200 font-medium">
                Economist at Cambodia&apos;s Ministry of Economy and Finance
              </span>
              , collaborating with IMF experts on fiscal and debt statistics missions, managing 50+
              macroeconomic datasets, and conducting 30+ cycles of econometric forecasting and
              regression analysis.
            </p>
            <p>
              I also bring audit experience from{" "}
              <span className="text-slate-200 font-medium">KPMG Cambodia</span>, where I led
              substantive testing across 10+ clients — including NGOs, ADB projects, and
              microfinance institutions — and mentored junior associates on methodology and client
              engagement.
            </p>
            <p>
              My work sits at the intersection of economics and data science: I use rigorous
              statistical and ML methods to turn messy real-world data into policy-relevant insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-surface border border-border rounded-2xl p-5"
              >
                <p className="font-mono text-xs text-cyan uppercase tracking-widest mb-3">
                  {group.category}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
