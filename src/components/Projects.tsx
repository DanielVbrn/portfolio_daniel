import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  emoji: string;
  techs: string[];
  source: string;
  live: string | null;
};

const projects: Project[] = [
  {
    title: "Loja de Jogos",
    description:
      "E-commerce completo de games com catálogo, carrinho de compras.",
    emoji: "🎮",
    techs: ["NodeJS", "ReactJS", "Typescript", "PostgreSQL", "Docker", "Redis", "TypeORM"],
    source: "https://jogosnet-ndnf.vercel.app/",
    live: null,
  },
  {
    title: "Auth Service",
    description:
      "API de autenticação com JWT, refresh tokens, controle de acesso por roles e integração com PostgreSQL.",
    emoji: "🔐",
    techs: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
    source: "https://github.com/DanielVbrn",
    live: null,
  },
  {
    title: "Task Manager",
    description:
      "Gerenciador de tarefas fullstack com boards kanban, colaboração em tempo real e autenticação.",
    emoji: "📋",
    techs: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    source: "https://github.com/DanielVbrn",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            Projetos em Destaque
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Alguns dos projetos que desenvolvi explorando diferentes stacks e desafios técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
            >
              <div className="text-4xl mb-4">{project.emoji}</div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub — ${project.title}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <FaGithub className="text-lg" />
                  <span>Código</span>
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Demo — ${project.title}`}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
