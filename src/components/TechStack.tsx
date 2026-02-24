

import {
    FaReact,
    FaNodeJs,
    FaDocker,
    FaAws,
    FaPython
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTypescript,
    SiPostgresql,
    SiDjango,
    SiNestjs,
    SiTailwindcss
} from "react-icons/si";


function TechStack() {
    const techs = [
        {
            name: "React",
            icon: FaReact,
            description: "Desenvolvimento de interfaces modernas e componentizadas com foco em performance e UX."
        },
        {
            name: "Next.js",
            icon: SiNextdotjs,
            description: "Aplicações com SSR, SEO otimizado e excelente performance para produção."
        },
        {
            name: "Node.js",
            icon: FaNodeJs,
            description: "Construção de APIs escaláveis e aplicações backend orientadas a serviços."
        },
        {
            name: "TypeScript",
            icon: SiTypescript,
            description: "Tipagem estática para maior segurança, organização e escalabilidade do código."
        },
        {
            name: "PostgreSQL",
            icon: SiPostgresql,
            description: "Modelagem relacional avançada e otimização de consultas em bancos robustos."
        },
        {
            name: "Docker",
            icon: FaDocker,
            description: "Containerização de aplicações para ambientes consistentes e escaláveis."
        },
        {
            name: "AWS",
            icon: FaAws,
            description: "Deploy e gerenciamento de infraestrutura em nuvem com foco em escalabilidade."
        },
        {
            name: "Python",
            icon: FaPython,
            description: "Desenvolvimento backend, automações e análise de dados."
        },
        {
            name: "Django Rest",
            icon: SiDjango,
            description: "Criação de APIs REST seguras e estruturadas com Django Rest Framework."
        },
        {
            name: "NestJS",
            icon: SiNestjs,
            description: "Framework Node.js orientado a arquitetura modular e boas práticas."
        },
        {
            name: "TailwindCSS",
            icon: SiTailwindcss,
            description: "Estilização moderna com classes utilitárias para UI rápida e responsiva."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techs.map((tech) => {
                const Icon = tech.icon;

                return (
                    <div
                        key={tech.name}
                        className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg  hover:shadow-blue-500/30"
                    >
                        <div className="">
                            <div className="grid grid-cols-2 items-center">
                                <Icon className="text-4xl text-blue-400 mb-4" color="#FFF" />
                                <h3 className="text-2xl text-amber-50 font-semibold mb-2 hover:text-blue-400 transition-colors duration-300">
                                    {tech.name}
                                </h3>
                            </div>
                            <p className="text-sm text-slate-400">
                                {tech.description}
                            </p>

                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default TechStack