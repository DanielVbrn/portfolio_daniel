import { DiRedis } from "react-icons/di";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiDjango,
  SiNestjs,
  SiTailwindcss,
} from "react-icons/si";

type Tech = {
  name: string;
  icon: React.ElementType;
};

type Category = {
  label: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    label: "Frontend",
    techs: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Python", icon: FaPython },
      { name: "Django Rest", icon: SiDjango },
      { name: "Redis", icon: DiRedis }
    ],
  },
  {
    label: "Infraestrutura",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
    ],
  },
];

function TechStack() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          Hard Skills
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Tecnologias que uso no dia a dia para construir aplicações modernas e escaláveis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.label} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-emerald-400 font-mono font-semibold text-sm uppercase tracking-wider mb-5">
              {category.label}
            </h3>
            <div className="flex flex-col gap-3">
              {category.techs.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl border border-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <Icon className="text-xl text-blue-400 shrink-0" />
                    <span className="text-slate-200 font-medium text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
