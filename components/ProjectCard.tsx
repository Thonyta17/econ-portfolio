export interface Project {
  title: string;
  description: string;
  tools: string[];
  tags: string[];
  href?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,122,0.07)]">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-0.5 text-[11px] font-mono text-accent bg-accent/10 rounded-full border border-accent/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-display text-lg font-semibold text-slate-100 mb-3 leading-snug">
        {project.title}
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed flex-grow mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 text-xs font-mono text-muted bg-background border border-border rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>

      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-light transition-colors font-mono"
        >
          View Project
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
    </article>
  );
}
