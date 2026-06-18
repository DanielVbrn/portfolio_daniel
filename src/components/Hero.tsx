import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-900 text-slate-100 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 items-center">
        
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <Image
              src="/img/image_portifolio.jpeg" 
              alt="Daniel Vitor"
              width={300}
              height={300}
              className="rounded-4xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-2xl -z-10 group-hover:bg-blue-500/30 transition"></div>
          </div>
        </div>

        {/* Coluna do texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Daniel Vitor
          </h1>

          <p className="text-xl text-slate-400 mb-6">
            Desenvolvedor Fullstack focado em performance,
            arquitetura escalável e experiência do usuário.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
            >
              Ver Projetos
            </a>

            <a
              target="_blank"
              href="/cv.pdf"
              className="border border-blue-500 px-6 py-3 rounded-xl hover:bg-blue-500/10 transition-all duration-300"
            >
              Baixar CV
            </a>
          </div>

          <div className="flex gap-6 mt-8 justify-center md:justify-start text-2xl text-slate-400">
            <a
              href="https://github.com/DanielVbrn"
              target="_blank"
              className="hover:text-white transition-transform hover:scale-110"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/daniel-vitor-7a8b92247/"
              target="_blank"
              className="hover:text-blue-400 transition-transform hover:scale-110"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}