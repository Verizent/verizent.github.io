import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { portfolioData as data } from "../data/portfolio";
import { getBlogPosts } from "../data/blog";
import { techStack } from "../data/techStack";

function SectionHeading({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> / {label}
      </p>
      <div>
        <h2>{title}</h2>
        {children && <p className="section-intro">{children}</p>}
      </div>
    </div>
  );
}

function ExperienceRow({ item, education = false }) {
  return (
    <article className="experience-row">
      <div className="experience-period">
        {item.start}
        <span>— {item.end}</span>
      </div>
      <div className="experience-content">
        <div className="experience-title">
          <img
            src={item.logoUrl}
            alt=""
            loading="lazy"
            width="44"
            height="44"
          />
          <div>
            <h3>{education ? item.degree : item.title}</h3>
            <a href={item.href} target="_blank" rel="noreferrer">
              {education ? item.school : item.company}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        {item.description && (
          <ul>
            {item.description.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

const projectLabels = [
  "Quantitative exploration",
  "Hackathon winner",
  "Built for learning",
  "A little everyday utility",
];
const projectSymbols = ["↗", "⌘", "ia.", "↔"];

export default function Home() {
  const [genre, setGenre] = useState("worship");
  useEffect(() => {
    document.title = "Michael Richard — Software, systems & curiosity";
  }, []);
  return (
    <div className="page-shell">
      <section className="hero" id="hero">
        <div className="hero-topline">
          <p className="eyebrow">Michael Richard Suryajaya</p>
          <p className="eyebrow">Indonesia → Hong Kong</p>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-greeting">Hello, I’m Michael.</p>
            <h1>
              Curiosity,
              <br />
              put into <em>practice.</em>
            </h1>
            <p className="hero-description">
              I build software and explore the systems behind it.
              <br className="desktop-break" /> Computer Science at CUHK. Always
              learning.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a href="#about" className="text-link">
                A little about me <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <figure className="portrait">
            <div className="portrait-image">
              <img
                src={data.avatarUrl}
                alt="Michael Richard Suryajaya"
                fetchPriority="high"
              />
              <span className="portrait-corner" aria-hidden="true">
                M / R
              </span>
            </div>
            <figcaption>
              <span>A person behind the projects.</span>
              <span>01 / Introduction</span>
            </figcaption>
          </figure>
        </div>
        <div className="hero-foot">
          <span>Software engineering · Data · Algorithms</span>
          <a href="#about">Scroll to discover ↓</a>
        </div>
      </section>

      <section id="about" className="section about-section">
        <SectionHeading
          number="01"
          label="About"
          title={
            <>
              A builder’s mindset.
              <br />
              <em>A learner’s curiosity.</em>
            </>
          }
        />
        <div className="about-body">
          <p className="large-copy">
            I like understanding how things work. Then seeing what I can build
            with that understanding.
          </p>
          <div className="about-columns">
            <p>
              {data.about_intro ||
                "I’m a Computer Science student at The Chinese University of Hong Kong, focusing on Algorithms & Complexity. Originally from Indonesia, I’m interested in the space where software, data, and real-world problems meet."}
            </p>
            <p>
              {data.about_detail ||
                "That curiosity has taken me from building an education platform to experimenting with algorithmic trading and making a Discord bot for currency exchange rates. Beyond code, I care about education, community, and making room for the next thing to learn."}
            </p>
          </div>
        </div>
        <div className="fact-strip">
          <div>
            <strong>
              250<span>+</span>
            </strong>
            <p>Users on the INAkademia platform</p>
          </div>
          <div>
            <strong>
              1<span>st</span>
            </strong>
            <p>PwC Hack A Day 2024</p>
          </div>
          <div>
            <strong>
              3.81<span>/4.00</span>
            </strong>
            <p>GPA at CUHK</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <SectionHeading
          number="02"
          label="Selected projects"
          title={
            <>
              Ideas made <em>real.</em>
            </>
          }
        >
          From useful little tools to platforms built for people.
        </SectionHeading>
        <div className="project-grid">
          {data.projects.map((project, i) => (
            <article
              key={project.title}
              className={`project-card project-${i}`}
            >
              <div className="project-art" aria-hidden="true">
                <span className="project-art-label">{projectLabels[i]}</span>
                <span className="project-symbol">{projectSymbols[i]}</span>
                <span className="project-art-number">0{i + 1}</span>
                <div className="art-lines">
                  {Array.from({ length: 9 }, (_, n) => (
                    <i key={n} style={{ "--line": n }} />
                  ))}
                </div>
              </div>
              <div className="project-content">
                <p className="eyebrow">{project.dates}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.type === "Source"
                          ? "View source"
                          : "Visit website"}{" "}
                        <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <SectionHeading
          number="03"
          label="Work experience"
          title={
            <>
              Learning by <em>doing.</em>
            </>
          }
        />
        <div className="experience-list">
          {data.work.map((item) => (
            <ExperienceRow key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section id="education" className="section">
        <SectionHeading
          number="04"
          label="Education"
          title={
            <>
              Building the <em>foundations.</em>
            </>
          }
        />
        <div className="experience-list">
          {data.education.map((item) => (
            <ExperienceRow key={item.id} item={item} education />
          ))}
        </div>
      </section>
      <section id="activities" className="section">
        <SectionHeading
          number="05"
          label="Activities & leadership"
          title={
            <>
              Better, <em>together.</em>
            </>
          }
        >
          Making things happen with communities I care about.
        </SectionHeading>
        <div className="experience-list">
          {data.activities.map((item) => (
            <ExperienceRow key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <SectionHeading
          number="06"
          label="Skills & tools"
          title={
            <>
              My working <em>toolkit.</em>
            </>
          }
        />
        <div className="skills-grid">
          {Object.entries(techStack).map(([category, groups]) => (
            <div className="skill-group" key={category}>
              <h3>{category}</h3>
              <div className="skill-items">
                {Object.values(groups)
                  .flatMap((group) => Object.values(group))
                  .map((skill) => (
                    <span key={skill.title}>{skill.title}</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {data.languages && (
          <p className="languages">
            <span className="eyebrow">Languages</span> {data.languages}
          </p>
        )}
      </section>

      <section id="awards" className="section">
        <SectionHeading
          number="07"
          label="Awards & honors"
          title={
            <>
              Milestones along <em>the way.</em>
            </>
          }
        />
        <div className="awards-list">
          {data.awards.map((award, i) => (
            <article key={award.title} className="award-row">
              <span className="award-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{award.title}</h3>
                <p>{award.issuer}</p>
              </div>
              <span className="award-year">{award.year}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" className="section">
        <SectionHeading
          number="08"
          label="Writing"
          title={
            <>
              Notes from <em>the process.</em>
            </>
          }
        />
        {getBlogPosts()
          .slice(0, 2)
          .map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              className="post-preview"
              key={post.slug}
            >
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        <Link to="/blog" className="text-link all-posts">
          All writing ↗
        </Link>
      </section>

      <section id="music" className="section music-section">
        <SectionHeading
          number="09"
          label="Beyond the code"
          title={
            <>
              Life has a <em>soundtrack.</em>
            </>
          }
        >
          A few favorites that keep me company.
        </SectionHeading>
        <div className="music-layout">
          <div className="record-art" aria-hidden="true">
            <div className="record">
              <div className="record-label">
                ON
                <br />
                REPEAT<span>MR / VOL. 01</span>
              </div>
            </div>
            <span className="record-caption">Good music. Good company.</span>
          </div>
          <div className="music-library">
            <div className="genre-switch" role="group" aria-label="Music genre">
              {Object.keys(data.music).map((key) => (
                <button
                  key={key}
                  aria-pressed={genre === key}
                  onClick={() => setGenre(key)}
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="song-list">
              {data.music[genre].map((song, i) => (
                <a
                  className="song"
                  key={song.title}
                  href={song.spotifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${song.title} by ${song.artist} — open in Spotify`}
                >
                  <span className="song-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                  </div>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <p className="music-note">Listen on Spotify ↗</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">10 / Say hello</p>
        <h2>
          Good things start
          <br />
          with a <em>conversation.</em>
        </h2>
        <p>
          A project, an idea, or a shared curiosity.
          <br />
          I’d love to hear from you.
        </p>
        <a className="button" href={`mailto:${data.contact.email}`}>
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
        <a className="email-address" href={`mailto:${data.contact.email}`}>
          {data.contact.email}
        </a>
        <div className="social-links">
          {Object.values(data.contact.social).map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.name} ↗
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
