import { useState } from "react";
import "./autoplaycarousel.scss";

const techCategories = {
  "Web Development": {
    "Languages & Frontend": {
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML" },
      1: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", title: "CSS" },
      2: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript" },
    },
    "Frameworks & Libraries": {
      1: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React.js" },
      2: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", title: "Vite" },
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
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
    "ML & AI Frameworks": {
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
    }
  },
  "Others": {
    "":{
      0: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", title: "Linux" },
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
};

function TechCategorySection({ title, subcategories }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      {Object.entries(subcategories).map(([subcategoryName, technologies]) => (
        <div key={subcategoryName} className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700 text-center">{subcategoryName}</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(technologies).map(([key, tech]) => (
              <div key={key} className="flex flex-col items-center">
                <div className="relative w-16 h-16 mb-2 bg-white rounded-lg p-2 shadow-sm border border-gray-200">
                  <img src={tech.imgUrl} alt={tech.title} title={tech.title} className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-gray-600 text-center">{tech.title}</span>
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
      <div className={`carousel-container  ${!hide ? "block opacity-100" : "hidden opacity-0"}`}>
        <div className="carousel-track">
          {Object.keys(cardDetails).map((detailKey) => {
            return (
              <CarouselItem
                imgUrl={cardDetails[detailKey].imgUrl}
                imgTitle={cardDetails[detailKey].title}
              ></CarouselItem>
            );
          })}
          {Object.keys(cardDetails).map((detailKey) => {
            return (
              <CarouselItem
                imgUrl={cardDetails[detailKey].imgUrl}
                imgTitle={cardDetails[detailKey].title}
              ></CarouselItem>
            );
          })}
        </div>
      </div>
      <div className="w-[100%] text-center items-center">
        <div className={`${hide ? "block" : "hidden"}`}>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6">
            {Object.entries(techCategories).map(([categoryName, subcategories]) => (
              <TechCategorySection
                key={categoryName}
                title={categoryName}
                subcategories={subcategories}
              />
            ))}
          </div>
        </div>
        <button className="rounded-full py-[3px] text-center border-[0.5px] border-gray-800 bg-white/30 hover:bg-gray-200/30 hover:border-gray-900 hover:border-[0.5px] focus:outline-none transition-colors w-[25%] items-center align-middle mx-auto mt-[30px]" onClick={toggleDetails}>
          {!hide ? "Show Details" : "Hide Details"}
        </button>
      </div>
    </div>
  );
}