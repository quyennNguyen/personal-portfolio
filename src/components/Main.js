import avatar from "../img/avatar.png";
import todolist from "../img/todolist.png";
import weather from "../img/weather.png";
import game from "../img/game.jpg";
import calculator from "../img/calculator.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Main({ color, background }) {
  return (
    <main style={{ color: color, background: background }}>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

function Intro() {
  return (
    <section id="intro">
      <img src={avatar} alt="my-avatar" />
      <div>
        <h1>Hello World,</h1>
        <h1>I'm QUYEN NGUYEN</h1>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <h1>ABOUT ME</h1>
      <p>
        My journey with technologies started cluelessly. I chose this path
        because it was the most suitable major I could pursue. As my journey
        moves forward, I have become an enthusiastic and dedicated{" "}
        <b>Full-Stack Developer</b> with a strong drive to excel in the world of{" "}
        <b>Web Development</b>. Through independent learning and hands-on
        projects, I have gained a solid foundation and proficiency in both
        front-end and back-end technologies. I am eager to bring my dedication,
        adaptability, and problem-solving skills to contribute effectively to a
        dynamic development team and create impactful digital experiences.
        <a href="#contact">Let's Connect</a>
      </p>
    </section>
  );
}

function Projects() {
  const projectList = [
    {
      name: "To-Do List App",
      link: "https://quyennnguyen.github.io/todolist-app/",
      description:
        "Designed for those who prefer simplicity and functionality in their task management tools. With its uncluttered interface and straightforward features, you can focus on what truly matters – getting things done.",
      "source code": "https://github.com/quyennNguyen/todolist-app",
      image: todolist,
    },
    {
      name: "Weather App",
      link: "https://quyennnguyen.github.io/weather-app.github.io/",
      description:
        "Designed for individuals who appreciate a sleek and simple weather application. With its straightforward features and elegant design, you can easily stay informed about the weather conditions in your area and plan your day accordingly.",
      "source code": "https://github.com/quyennNguyen/weather-app.github.io",
      image: weather,
    },
    {
      name: "Minigame App",
      link: "https://quyennnguyen.github.io/minigame-app.github.io/",
      description:
        "Designed for those who appreciate the timeless appeal of classic games. Whether you're strategizing your moves in Tic-Tac-Toe or making rapid choices in Rock-Paper-Scissors, it promises hours of engaging entertainment.",
      "source code": "https://github.com/quyennNguyen/minigame-app.github.io",
      image: game,
    },
    {
      name: "Calculator App",
      link: "https://quyennnguyen.github.io/calculator-app.github.io/",
      description:
        "Designed for individuals seeking a robust calculator application that combines a wide range of distinct calculators into one convenient package. It simplifies complex calculations and will be your ultimate go-to tool.",
      "source code": "https://github.com/quyennNguyen/calculator-app.github.io",
      image: calculator,
    },
  ];
  return (
    <section id="projects">
      <h1>PROJECTS</h1>
      <ul>
        {projectList.map(
          ({ name, link, description, "source code": sourceCode, image }) => (
            <li key={name}>
              <img src={image} />
              <h3>{name}</h3>
              <p>{description}</p>
              <a href={link} target="_blank">
                View
              </a>
              <a href={sourceCode} target="_blank">
                Source Code
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h1>CONTACT ME AT</h1>
      <a href="mailto:nntq0812@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
      <a href="https://linkedin.com/in/quyennguyen22" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="https://github.com/quyennNguyen" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <p>Let's Connect</p>
    </section>
  );
}

export default Main;
