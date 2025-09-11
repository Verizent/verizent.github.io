import { useState } from "react";
import "./autoplaycarousel.scss";

const techCategories = {
  "Web Development": {
    "Languages & Frontend": {
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML" },
      1: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", title: "CSS" },
      2: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript" },
    },
    "Frameworks": {
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
      1: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React.js" },
      2: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", title: "Vite" },
    }
  },
  "Computational Tools": {
    "Languages": {
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", title: "C" },
      1: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", title: "Python" },
      2: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", title: "Java" },
      3: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", title: "Arduino" },
    },
    "Tools": {
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", title: "Jupyter" },
    },
    "ML & AI": {
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", title: "Pandas" },
      1: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", title: "NumPy" },
      2: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", title: "Scikit-Learn" },
    }
  },
  "Backend & DevOps": {
    "": {
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js" },
      1: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", title: "MySQL" },
      2: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
      3: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", title: "AWS" },
      4: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", title: "Git" },
      5: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", title: "GitHub" },
      6: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg", title: "Docker" },
      7: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", title: "Linux" },
    },
    "Frameworks": {
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", title: "Express.js" },
    }
  }
};

const cardDetails = {
    0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", title: "C" },
    1: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", title: "Python" },
    2: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript" },
    3: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", title: "Java" },
    4: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML" },
    5: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", title: "CSS" },
    6: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", title: "MySQL" },
    7: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
    8: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js" },
    9: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React.js" },
    10: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", title: "Arduino" },
    11: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", title: "AWS" },
    12: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", title: "Jupyter" },
    13: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", title: "Git" },
    14: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", title: "GitHub" },
    15: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg", title: "Docker" },
    16: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
    17: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", title: "Linux" },
    18: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", title: "Vite" },
    19: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", title: "Express" },
};

function TechCategorySection({ title, subcategories }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{title}</h3>
      {Object.entries(subcategories).map(([subcategoryName, technologies]) => (
        <div key={subcategoryName} className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700 text-center">{subcategoryName}</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(technologies).map(([key, tech]) => (
              <div key={key} className="flex flex-col items-center">
                <div className="relative w-16 h-16 mb-2 backdrop-blur-lg bg-white/50 rounded-xl p-2 shadow-lg border border-white/30 hover:bg-white/60 hover:scale-105 transition-all duration-300">
                  <img src={tech.imgUrl} alt={tech.title} title={tech.title} className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-gray-700 text-center font-medium">{tech.title}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={imgTitle} title={imgTitle}></img>
    </div>
  );
}

export default function TechStack() {
  const [hide, setHide] = useState(false);

  function toggleDetails() {
    setHide(!hide);
  }

  return (
    <div>
      <div className={`carousel-container ${!hide ? "block opacity-100" : "hidden opacity-0"}`}>
        <div className="carousel-track">
          {Object.keys(cardDetails).map((detailKey) => {
            return (
              <CarouselItem
                key={detailKey}
                imgUrl={cardDetails[detailKey].imgUrl}
                imgTitle={cardDetails[detailKey].title}
              />
            );
          })}
          {Object.keys(cardDetails).map((detailKey) => {
            return (
              <CarouselItem
                key={`duplicate-${detailKey}`}
                imgUrl={cardDetails[detailKey].imgUrl}
                imgTitle={cardDetails[detailKey].title}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full text-center items-center">
        <div className={`${hide ? "block" : "hidden"}`}>
          <div className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-6 shadow-xl mt-6">
            {Object.entries(techCategories).map(([categoryName, subcategories]) => (
              <TechCategorySection
                key={categoryName}
                title={categoryName}
                subcategories={subcategories}
              />
            ))}
          </div>
        </div>
        <button 
          className="rounded-full py-2 px-6 text-center backdrop-blur-lg bg-white/40 hover:bg-white/60 border border-white/30 hover:border-white/40 focus:outline-none transition-all duration-300 text-gray-700 hover:text-gray-800 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 mx-auto mt-4" 
          onClick={toggleDetails}
        >
          {!hide ? "Show Details" : "Hide Details"}
        </button>
      </div>
    </div>
  );
}