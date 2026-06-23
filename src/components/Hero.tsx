import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-transparent text-slate-100 px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 items-center">

        {/* Imagem com float + glow pulsante */}
        <div className="flex-1 flex justify-center">
          <div className="">
            <div />
            <Image
              src="/img/image_portifolio.jpeg"
              alt="Daniel Vitor"
              width={300}
              height={300}
              className="relative rounded-3xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Texto com stagger fade-in-up */}
        <div className="flex-1 text-center md:text-left">

          <span className="animate-fade-in-up [animation-delay:0s] inline-flex items-center gap-2 text-sm text-emerald-400 font-medium mb-4 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para oportunidades
          </span>

          <h1 className="animate-fade-in-up [animation-delay:0.15s] text-5xl md:text-6xl font-extrabold mb-3">
            Daniel Vitor
          </h1>

          <p className="animate-fade-in-up [animation-delay:0.3s] font-mono text-blue-400 text-lg mb-5 tracking-tight">
            {"< Desenvolvedor Fullstack />"}
            <span className="animate-blink ml-0.5 text-cyan-400">|</span>
          </p>

          <p className="animate-fade-in-up [animation-delay:0.45s] text-lg text-slate-400 mb-8 max-w-md mx-auto md:mx-0">
            Focado em performance, arquitetura escalável e experiência do usuário.
          </p>

          <div className="animate-fade-in-up [animation-delay:0.6s] flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/40"
            >
              Ver Projetos
            </a>

            <a
              target="_blank"
              href="/cv.pdf"
              rel="noreferrer"
              className="border border-blue-500 px-6 py-3 rounded-xl hover:bg-blue-500/10 transition-all duration-300 font-medium hover:scale-105"
            >
              Baixar CV
            </a>
          </div>

          <div className="animate-fade-in-up [animation-delay:0.75s] flex gap-6 mt-8 justify-center md:justify-start text-2xl text-slate-400">
            <a
              href="https://github.com/DanielVbrn"
              target="_blank"
              className="hover:text-white transition-all duration-300 hover:scale-125"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/daniel-vitor-7a8b92247/"
              target="_blank"
              className="hover:text-blue-400 transition-all duration-300 hover:scale-125"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
