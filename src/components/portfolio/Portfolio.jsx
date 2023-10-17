import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/gpt-3.png";
// import IMG2 from "../../assets/RubyCode Blog Project.jpg";
// import IMG3 from "../../assets/Startup Agency Project.jpg";
// import IMG4 from "../../assets/Covid-19 Project.jpg";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Educational Website",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://qusaizzm.github.io/educational_website01/",
      github: "https://github.com/qusaizzm/educational_website01",
    },

    {
      id: 2,
      title: "GPT-3 UX Website",
      img: IMG2,
      description:
        "An GPT-3 Website is a text text text text texttext text text text text texttext text text text texttext text.",
      technologies: "Html | CSS | Javascript | Vite / React Js",
      link: "https://qusaizzm.github.io/gpt3_design/",
      github: "https://github.com/qusaizzm/gpt3_design",
    },


    // {
    //   id: 6,
    //   title: "Fs Poster Website",
    //   img: IMG6,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "Html | Scss | Javascript",
    //   link: "https://fs-poster-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
