import avatar from "../img/avatar.png";
import todolist from "../img/todolist.png";
import weather from "../img/weather.png";
import game from "../img/game.jpg";
import calculator from "../img/calculator.jpg";

function Main() {
  return (
    <main>
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
        Enthusiastic and dedicated Full-Stack Developer with a strong drive to
        excel in the world of web development. Through independent learning and
        hands-on projects, I have gained a solid foundation and proficiency in
        both front-end and back-end technologies. Eager to bring my dedication,
        adaptability, and problem-solving skills to contribute effectively to a
        dynamic development team and create impactful digital experiences.
      </p>
      <p>Let's Connect!</p>
    </section>
  );
}

function Projects() {
  const projectList = [
    {
      name: "To-Do List App",
      link: "https://quyennnguyen.github.io/todolist-app/",
      "source code": "https://github.com/quyennNguyen/todolist-app",
      image: todolist
    },
    {
      name: "Weather App",
      link: "https://quyennnguyen.github.io/weather-app.github.io/",
      "source code": "https://github.com/quyennNguyen/weather-app.github.io",
      image: weather
    },
    {
      name: "Minigame App",
      link: "https://quyennnguyen.github.io/minigame-app.github.io/",
      "source code": "https://github.com/quyennNguyen/minigame-app.github.io",
      image: game
    },
    {
      name: "Calculator App",
      link: "https://quyennnguyen.github.io/calculator-app.github.io/",
      "source code": "https://github.com/quyennNguyen/calculator-app.github.io",
      image: calculator
    },
  ];
  return (
    <section id="projects">
      <h1>PROJECTS</h1>
      <ul>
        {projectList.map((item) => (
          <li key={item.name}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <a href={item.link} target="_blank">View</a>
            <a href={item["source code"]} target="_blank">Source Code</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div>
        <h1>CONTACT ME AT</h1>
        <a className="email" href="mailto:nntq0812@gmail.com" target="_blank">
          email
        </a>
      </div>
      <div>
        <p>
          or <strong>Let's Connect</strong> on
        </p>
        <a
          className="social-media"
          href="https://linkedin.com/in/quyennguyen22"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="social-media"
          href="https://github.com/quyennNguyen"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Main;
