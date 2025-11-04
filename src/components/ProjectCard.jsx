function ProjectCard({ project, onMore }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm h-full">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-slate-600 flex-1">
        {project.shortDescription}
      </p>
      <button
        onClick={() => onMore(project)}
        className="mt-4 inline-flex items-center justify-center rounded-full border border-brand-orange px-4 py-1.5 text-xs md:text-sm font-medium text-brand-orange hover:bg-brand-orange/10 transition-colors"
      >
        Daha Fazla
      </button>
    </div>
  )
}

export default ProjectCard

