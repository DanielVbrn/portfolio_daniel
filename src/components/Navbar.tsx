export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">DV</h1>

        <div className="space-x-6 text-slate-300">
          <a href="#about" className="hover:text-blue-400 transition">
            Sobre
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projetos
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}