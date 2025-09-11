import { FaGithub } from "react-icons/fa"; 

const projects = [
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
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            {project.github && <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-4 py-2 bg-white text-black border-gray-800 border-[1px] text-sm font-medium rounded hover:bg-black hover:text-white transition-colors"
            >
              View on GitHub <span className="items-center justify-between flex relative ml-3"><FaGithub/></span>
            </a>}
            {project.link && <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-4 py-2 bg-white text-black border-gray-800 border-[1px] text-sm font-medium rounded hover:bg-black hover:text-white transition-colors"
            >
              View Website
            </a>}
          </div>
        ))}
      </div>
    </section>
  );
}
