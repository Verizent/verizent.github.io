import { FaGithub } from "react-icons/fa"; 

const projects = [
  {
    name: 'Online Exam Invigilator App',
    description: 'A live exam monitoring app leveraging Amazon Rekognition for facial analysis and cheat detection (made for the PwC Hackathon).',
    github: null,
    link: null,
  },
  {
    name: 'INAkademia',
    description: 'A non-profit platform that empowers students by offering free educational resources, mentorship, and a collaborative learning community.',
    github: null,
    link: 'https://www.inakademia.com',
  },
  {
    name: 'HKD to IDR Discord Bot',
    description: 'A Discord bot that integrates with a currency exchange rate API to track and report HKD to IDR fluctuations, equipped with custom commands functionalities.',
    github: 'https://github.com/Verizent/IDinHK',
    link: null,
  },
  {
    name: 'AutoMeal Buddy',
    description: 'A programmable Arduino-based pet feeder that allows users to set precise feeding times, ensuring pets are fed consistently even when their owners are away.',
    github: 'https://github.com/Verizent/Arduino-Time-Settable-Pet-Feeder',
    link: null,
  },
];

export default function MyProjects() {
  return (
    <section className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:bg-white/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.github && <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-4 py-2 backdrop-blur-lg bg-white/40 hover:bg-white/60 text-gray-700 hover:text-gray-800 border border-white/30 hover:border-white/40 text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mr-2"
            >
              View on GitHub <span className="items-center justify-between flex relative ml-3"><FaGithub/></span>
            </a>}
            {project.link && <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-4 py-2 backdrop-blur-lg bg-white/40 hover:bg-white/60 text-gray-700 hover:text-gray-800 border border-white/30 hover:border-white/40 text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Website
            </a>}
          </div>
        ))}
      </div>
    </section>
  );
}
