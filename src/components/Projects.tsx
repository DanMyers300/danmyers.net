import life from '/life.webp';
import rain from '/rain.webp';

function Projects() {
  const projects = [
    {
      id: 1,
      image: life,
      title: "Conway's Game of Life",
      description: "Conway's Game of Life in Rust running in WebAssembly",
      link: "https://life.danmyers.net"
    },
    {
      id: 2,
      image: rain,
      title: "Rain Mixer",
      description: "Audio mixer website and desktop app for relaxing sounds",
      link: "https://rain.danmyers.net"
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-7 w-full">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div
            className="bg-[#152736] rounded-lg overflow-hidden
                       shadow-lg h-full transition-transform
                       duration-300 hover:scale-[1.02]"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                alt={project.title}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Projects;
