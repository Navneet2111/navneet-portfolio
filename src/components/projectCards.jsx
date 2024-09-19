function ProjectCard({ title, description, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black min-w-[280px] rounded-2xl shadow-lg p-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer relative group"
    >
      <div className="relative w-full h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover mb-4 rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
          <p className="text-white font-bold">Check it on GitHub</p>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 px-2 ">{title}</h3>
      <p className="text-sm mb-4 px-2 text-justify">{description}</p>
    </a>
  );
}

export default ProjectCard;
