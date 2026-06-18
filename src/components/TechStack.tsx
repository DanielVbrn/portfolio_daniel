

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
            name: "Python",
            icon: FaPython,
            description: "Desenvolvimento backend, automações e análise de dados."
        },
        {
            name: "Django Rest",
            icon: SiDjango,
            description: "Criação de APIs REST seguras e estruturadas com Django Rest Framework em arquitetura orientada a eventos."
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
        },
         {
            name: "AWS",
            icon: FaAws,
            description: "Atuei na manutenção e criação de serviços na nuvem AWS, como EC2, S3, SES, Lambda."
        },
    ];

    return (
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6">
            {techs.map((tech) => {
                const Icon = tech.icon;

                return (
                    <div
                        key={tech.name}
                        className="
          bg-slate-800 p-6 rounded-xl 
          transition-all duration-300 
          hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30
          w-full 
          md:w-[calc(50%-12px)] 
          lg:w-[calc(25%-18px)]
        "
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <Icon className="text-4xl text-blue-400" color="#FFF" />
                                <h3 className="text-2xl text-amber-50 font-semibold hover:text-blue-400 transition-colors duration-300">
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