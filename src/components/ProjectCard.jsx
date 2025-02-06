import './ProjectCard.css';
const ProjectCard = ({ title, image, deployedLink, githubLink }) => {

  return (
    <section>
      <div>
        {title}
        <img className = "project-image" src={image} alt="" />
        <a href={deployedLink}>Link</a>
        <a href={githubLink}>Link</a>
      </div>
    </section>
  );
}

export default ProjectCard;