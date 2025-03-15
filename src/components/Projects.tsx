function Projects() {
  const projects = [
    {
      id: 1,
      image: "/path-to-image-1.jpg",
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

  return (
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <div key={project.id}>
          <div className="bg-[#152736] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
            <img src={project.image} className="w-full" alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
