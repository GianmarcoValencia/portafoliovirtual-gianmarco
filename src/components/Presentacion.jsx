
import fotoPerfil from '../imagenes/perfil/foto.jpg';
import React from "react";
export default function Presentacion() {
  return (
    <div className="flex-1 max-w-xl space-y-4 animate-fade-in">
      <p className="text-lg text-gray-300 leading-relaxed">
        Bienvenido a mi Portafolio Profesional. Soy <span className="font-semibold text-cyan-300">Gianmarco Daniel Valencia Soto</span>,
        estudiante de Ingeniería de Sistemas (IX semestre). Interesado en desarrollo de aplicaciones web, diseño de interfaces y optimización de procesos.
      </p>
      <div className="flex items-center gap-6 pt-2">
        <img
          src={fotoPerfil}
          alt="Foto de perfil"
          className="w-28 h-28 rounded-full border-4 border-cyan-400 shadow-lg object-cover"
        />
        <ul className="text-gray-300 text-sm space-y-1">
          <li><span className="text-cyan-300 font-semibold">Estudios:</span> Ingeniería de Sistemas — IX Semestre</li>
          <li><span className="text-cyan-300 font-semibold">Experiencia:</span> Proyectos académicos en React, Tailwind y UX</li>
          <li><span className="text-cyan-300 font-semibold">Contacto:</span> gianval41@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}
