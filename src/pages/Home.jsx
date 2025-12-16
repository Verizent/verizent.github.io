import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolioData } from '../data/portfolio';
import { parseMarkdownLinks } from '../utils/markdown';
import { ResumeCard } from '../components/ResumeCard';
import { ProjectCard } from '../components/ProjectCard';
import { TechStack } from '../components/TechStack';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8 px-6 py-12 sm:py-24">
      
      {/* Hero Section */}
      <section id="hero" data-aos="fade-up">
        <div className="gap-2 flex justify-between items-start">
          <div className="flex-col flex flex-1 space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-100">
              Hi, I'm {portfolioData.name.split(" ")[0]}
            </h1>
            <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl">
              {portfolioData.description}
            </p>
          </div>
          <div className="size-28 border border-gray-200 dark:border-gray-700 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <img 
              alt={portfolioData.name} 
              src={portfolioData.avatarUrl} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-aos="fade-up">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">About</h2>
        <p className="text-pretty font-sans text-sm text-gray-600 dark:text-gray-400 mt-2">
          {parseMarkdownLinks(portfolioData.about_me)}
        </p>
      </section>

      {/* Work Experience Section */}
      <section id="work" data-aos="fade-up">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"></div>
            {portfolioData.work.map((work, index) => (
              <div key={work.company} className="relative mb-3" data-aos="fade-up" data-aos-delay={index * 100}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  period={`${work.start} - ${work.end}`}
                  description={work.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" data-aos="fade-up">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Education</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"></div>
            {portfolioData.education.map((education, index) => (
              <div key={education.school} className="relative mb-3" data-aos="fade-up" data-aos-delay={index * 100}>
                <ResumeCard
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  href={education.href}
                  period={`${education.start} - ${education.end}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" data-aos="fade-up">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 text-sm">
                Skills
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                Tech Stack
              </h2>
              <p className="text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Technologies and tools I work with
              </p>
            </div>
          </div>
          <TechStack />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-aos="fade-up">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 text-sm">
                Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                Check out my latest work
              </h2>
              <p className="text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I've worked on a variety of projects, from simple arduinos to complex web applications.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {portfolioData.projects.map((project, idx) => (
              <div key={project.title} data-aos="fade-up" data-aos-delay={idx * 100}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" data-aos="fade-up">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 text-sm">
                Awards & Honors
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                Achievements
              </h2>
              <p className="text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Recognition for academic excellence and competitive achievements
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {portfolioData.awards.map((award, idx) => (
              <div
                key={idx}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-black hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {award.issuer} • {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" data-aos="fade-up">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 text-sm">
                Favorite Music
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                What I'm Listening To
              </h2>
              <p className="text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A curated collection of my favorite tracks across different genres
              </p>
            </div>
          </div>
          <div className="max-w-[800px] mx-auto space-y-10">
            {Object.entries(portfolioData.music).map(([genre, songs], idx) => (
              <div key={genre} data-aos="fade-up" data-aos-delay={idx * 100}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 uppercase tracking-wider">
                  {genre}
                </h3>
                <div className="space-y-0">
                  {songs.map((song, songIdx) => (
                    <div
                      key={songIdx}
                      className="group relative py-4 border-b border-gray-200 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-6 px-2">
                        <span className="text-sm font-medium text-gray-400 dark:text-gray-600 w-6 text-right group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                          {String(songIdx + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1 min-w-0">
                          <a
                            href={song.spotifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group/link"
                          >
                            <div className="flex items-baseline justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="text-base font-medium text-gray-900 dark:text-gray-100 group-hover/link:text-green-500 dark:group-hover/link:text-green-400 transition-colors truncate">
                                  {song.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                                  {song.artist}
                                </p>
                              </div>
                              <svg 
                                className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover/link:text-green-500 dark:group-hover/link:text-green-400 transition-all flex-shrink-0" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 w-1 h-full bg-green-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-aos="fade-up">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me an{" "}
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                email
              </a>{" "}
              and I'll respond whenever I can.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              {Object.values(portfolioData.contact.social).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
