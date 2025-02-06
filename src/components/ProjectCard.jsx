import './ProjectCard.css';
const ProjectCard = ({ title, image, deployedLink, githubLink }) => {

  return (
    <section className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h5 className="font-bold text-xl mb-2">{title}</h5>
      <img className=" w-full" src={image} alt="" />
      </div>

      <div className="px-6 pt-4 pb-2 flex justify-center">
        <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 "> <a href={deployedLink}>Link</a></p>
        <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 "><a href={githubLink}>Link</a></p>
      </div>
    </section>
  );
}

export default ProjectCard;

