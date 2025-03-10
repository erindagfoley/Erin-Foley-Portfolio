import ProjectCard from "../components/ProjectCard";
import MonsonMeadowsLodge from "../assets/Monson-Meadows-Lodge-thumbnail.png"
import PantryPal from "../assets/Pantry-Pal-thumbnail.png"
import Kanban from "../assets/Kanban-thumbnail.png"
import BookSearch from "../assets/BookSearch-thumbnail.png"
export default function Projects() {
  const projectLoop = [
    {
      title: "VoyageOne Monson Meadows Lodge",
      image: MonsonMeadowsLodge,
      deployedLink: "https://wick000.github.io/Monson-Meadows-Lodge/",
      githubLink: "https://github.com/erindagfoley/Monson-Meadows-Lodge.git"
    },
    {
      title: "PantryPal",
      image: PantryPal,
      deployedLink: "https://pantrypal-otuv.onrender.com/",
      githubLink: "https://github.com/erindagfoley/PantryPal"
    },
    {
      title: "Kanban Board",
      image: Kanban,
      deployedLink: "https://kanban-board-rz0w.onrender.com",
      githubLink: "https://github.com/erindagfoley/kanban-board"
    },
    {
      title: "Book Search Engine",
      image: BookSearch,
      deployedLink: "https://book-search-engine-tt83.onrender.com/",
      githubLink: "https://github.com/erindagfoley/kanban-board"
    },
  ]
  return (
    <div className="project-loop">
      <h2>My Projects</h2>
      <section className="flex flex-wrap">

      {projectLoop.map((project, index) => (
        <ProjectCard
        key={index}
        title={project.title}
        image={project.image}
        deployedLink={project.deployedLink}
        githubLink={project.githubLink}
        />
      ))}
      </section>
    </div>
  );
}
