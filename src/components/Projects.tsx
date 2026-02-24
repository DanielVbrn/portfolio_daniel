import React from 'react'

const Projects = () => {
    return (
        <div id='projetos' className="group relative bg-slate-800/80 backdrop:-blur-sm
                        p-6 rounded-2xl border border-slate-700
                        transition-all duration-400 
                        hover:-translate-y-2 
                      hover:border-blue-500/50
                        hover:shadow-2xl hover:shadow-blue-500/10">

            <div className='absolute inset-0 rounded-2xl'></div>
            <h3 className="text-2xl font-bold mb-3 text-white">
                Loja de jogos
            </h3>
        </div>
    )
}

export default Projects;