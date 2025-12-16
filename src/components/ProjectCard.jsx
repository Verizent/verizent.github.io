export function ProjectCard({
  title,
  href,
  description,
  dates,
  technologies,
  links = [],
}) {
  return (
    <div className="flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 ease-out h-full rounded-lg bg-white dark:bg-black hover:scale-[1.02] pb-4">
      <div className="px-4 pt-4">
        <div className="space-y-1">
          <h3 className="mt-1 text-base font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
          <time className="font-sans text-xs text-gray-500 dark:text-gray-400">
            {dates}
          </time>
          <p className="text-pretty font-sans text-xs text-gray-600 dark:text-gray-300 mt-2">
            {description}
          </p>
        </div>
      </div>
      {technologies && technologies.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1 px-4 py-3">
          {technologies.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-row flex-wrap items-start gap-2 px-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline transition-all duration-200 hover:scale-105"
            >
              {link.type}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
