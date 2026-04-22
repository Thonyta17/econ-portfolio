import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Causal ML & Double Machine Learning",
    description:
      "Estimated the causal effect of 401(k) eligibility on net financial assets using Double Machine Learning and Causal Forests. Applied cross-fitting to achieve valid inference under high-dimensional controls, isolating the policy-relevant treatment effect from confounders.",
    tools: ["Python", "EconML", "DoubleML", "pandas", "matplotlib"],
    tags: ["Causal Inference", "ML"],
  },
  {
    title: "NLP & Fed Communication Analysis",
    description:
      "Built an end-to-end sentiment analysis pipeline on FOMC meeting minutes to quantify the hawkishness/dovishness of Federal Reserve communication over time. Used the Loughran-McDonald financial dictionary combined with TF-IDF weighting to extract tone signals from policy text.",
    tools: ["Python", "NLTK", "scikit-learn", "TF-IDF", "pandas"],
    tags: ["NLP", "Finance"],
  },
  {
    title: "Random Forest vs. OLS: A Benchmark",
    description:
      "Conducted a systematic comparison of Random Forest and OLS regression on the California Housing dataset. Evaluated bias-variance tradeoffs, feature importance, and predictive performance across different sample sizes and regularization settings.",
    tools: ["Python", "scikit-learn", "matplotlib", "seaborn", "numpy"],
    tags: ["Machine Learning", "Econometrics"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">02 / Projects</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
          Selected Work
        </h2>
        <p className="text-slate-500 text-sm mb-12 max-w-lg">
          Applied research at the intersection of machine learning, causal inference, and economic
          analysis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
