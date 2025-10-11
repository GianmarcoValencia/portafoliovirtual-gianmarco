import React from "react";
import proyecto01 from "../imagenes/proyectos/proyecto01.png";
import proyecto02 from "../imagenes/proyectos/proyecto02.png";


const proyectos = [
  {
    titulo: "Sitio Web - Chupaca Tours",
    descripcion:
      "Desarrollo de un sitio web informativo para la promoción turística de la Municipalidad Provincial de Chupaca, destacando atractivos naturales, culturales y servicios locales.",
    imagen: proyecto01,
    enlace: "https://turismochupaca.com/",
  },

   {
    titulo: "Plataforma de Emprendimiento - Coop Next",
    descripcion:
      "Desarrollo de una plataforma digital para la neocooperativa Coop Next, orientada a ofrecer créditos accesibles a jóvenes estudiantes mediante procesos transparentes y automatizados.",
    imagen: proyecto02,
    enlace: "https://coopnext.odoo.com/",
  },
  // Si luego quieres volver a mostrar este u otros proyectos, los agregas aquí:
  /*
  {
    titulo: "Dashboard Administrativo",
    descripcion:
      "Panel de métricas y visualización de datos con componentes reutilizables.",
    imagen: proyecto3,
    enlace: "https://github.com/gianmarco/dashboard-admin",
  },
  */
];

export default function ProyectosConcluidos() {
  return (
    <section className="py-16" id="proyectos">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 text-cyan-400">
          Proyectos Concluidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.slice(0, 2).map((p, i) => (
            <article
              key={i}
              className="bg-slate-900/60 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform animate-fade-in"
            >
              <div className="w-full h-48 bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src={p.imagen}
                  alt={p.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-cyan-300">
                  {p.titulo}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {p.descripcion}
                </p>
                <a
                  className="inline-block mt-2 text-cyan-400 underline hover:text-cyan-300"
                  href={p.enlace}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver proyecto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
