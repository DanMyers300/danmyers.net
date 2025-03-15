function Projects() {
  const projects = [
    {
      id: 1,
      image: "/path-to-image-1.jpg",
      title: "Project 1",
      description: "Description for project 1",
    },
    {
      id: 2,
      image: "/path-to-image-2.jpg",
      title: "Project 2",
      description: "Description for project 2",
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
    <div className="flex flex-col gap-6 pt-6">
      {projects.map((project) => (
        <div key={project.id}>
          <div className="bg-[#152736] rounded-lg overflow-hidden">
            <div className="text-center text-gray-300">{project.title}</div>
            <img
              src={project.image}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
