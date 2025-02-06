import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectLoop = [
    {
      title: "VoyageOne Monson Meadows Lodge",
      image: "./assets/Monson Meadows Lodge thumbnail.png",
      deployedLink: "https://wick000.github.io/Monson-Meadows-Lodge/",
      githubLink: "https://github.com/erindagfoley/Monson-Meadows-Lodge.git"
    },
    {
      title: "VoyageOne Monson Meadows Lodge",
      image: "./assets/Monson Meadows Lodge thumbnail.png",
      deployedLink: "https://wick000.github.io/Monson-Meadows-Lodge/",
      githubLink: "https://github.com/erindagfoley/Monson-Meadows-Lodge.git"
    },
    {
      title: "VoyageOne Monson Meadows Lodge",
      image: "./assets/Monson Meadows Lodge thumbnail.png",
      deployedLink: "https://wick000.github.io/Monson-Meadows-Lodge/",
      githubLink: "https://github.com/erindagfoley/Monson-Meadows-Lodge.git"
    },
  ]
  return (
    <div>
      <h2>My Projects</h2>
      <p>
        Projects will go here
      </p>
      {projectLoop.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}
