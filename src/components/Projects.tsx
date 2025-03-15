function Projects() {
  const projects = [
    {
      id: 1,
      image: "/src/assets/life.png",
      title: "Conway's Game of Life",
      description: "Conway's Game of Life in Rust running in WebAssembly",
    },
    {
      id: 2,
      image: "/path-to-image-2.jpg",
      title: "Rain Mixer",
      description: "Audio mixer website and desktop app for relaxing sounds",
    },
    {
      id: 3,
      image: "/path-to-image-3.jpg",
      title: "Project 3",
      description: "Description for project 3",
    },
    {
      id: 4,
      image: "/path-to-image-4.jpg",
      title: "Project 4",
      description: "Description for project 4",
    },
  ];

  /*
  * - TOO WIDE, GIVE HALF SPACE TO EACH CARD AND MAKE TILES.
  * - Experiment with putting text bar on bottom.
  * - On hover should get slightly larger and animates a zoom on image.
  * - On click should take you to github
  */
  return (
    <div className="flex flex-col gap-7 mt-7">
      {projects.map((project) => (
        <div key={project.id}>
          <div className="bg-[#152736] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-300">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <img 
              src={project.image}
              className="w-full h-96 object-cover"
              alt={project.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
