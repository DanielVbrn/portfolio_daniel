const stats = [
  { value: "3+", label: "Anos estudando desenvolvimento" },
  { value: "10+", label: "Tecnologias dominadas" },
  { value: "5+", label: "Projetos construídos" },
];

const highlights = [
  "Experiência com arquitetura de microsserviços e APIs REST",
  "Foco em código limpo, testável e bem documentado",
  "Familiaridade com ambientes cloud (AWS) e containerização",
  "Sempre aprendendo — atualmente explorando NestJS e sistemas distribuídos",
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            Sobre Mim
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Sou um desenvolvedor Fullstack apaixonado por construir soluções que
              unem boa experiência de usuário com arquitetura robusta no backend.
              Trabalho com o ecossistema JavaScript/TypeScript tanto no frontend
              quanto no backend, e tenho background em Python com Django para APIs
              de alta performance.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-slate-800/80 border border-slate-700 rounded-2xl px-6 py-5 flex items-center gap-5 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <span className="text-4xl font-extrabold text-blue-400 leading-none shrink-0">
                  {stat.value}
                </span>
                <span className="text-slate-400 text-sm leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
