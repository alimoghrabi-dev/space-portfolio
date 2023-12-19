import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center pb-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 px-10">
        <ProjectCard
          src="/project-1.png"
          title="SaintStream"
          description="A Movies Web Application."
          link="https://saint-stream-peach.vercel.app/"
        />
        <ProjectCard
          src="/project-2.png"
          title="DevFlow"
          description="A Full-Stack StackOverFlow Clone."
          link="https://dev-overflow-alimogh.vercel.app/"
        />
        <ProjectCard
          src="/project-3.png"
          title="CarHub"
          description="A Car Showcase Web Application."
          link="https://car-showcase-livid-mu.vercel.app/"
        />
        <ProjectCard
          src="/project-4.png"
          title="NextCommerce"
          description="Simple E-Commerce Web Application."
          link="https://next-commerce-one-ivory.vercel.app/"
        />
        <ProjectCard
          src="/project-5.png"
          title="Quantum"
          description="AI ChatBot, upload a PDF and start asking AI about the PDF."
          link="https://quantum-alimogh.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
