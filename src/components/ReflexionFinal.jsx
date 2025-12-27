
import React from "react";

const reflexiones = [
  "Comprendí los fundamentos de las tecnologías web y la estructura básica de un proyecto a través de la práctica con Visual Studio Code y la exploración de conceptos clave como HTML, CSS y protocolos web.",
  "Aprendí a crear páginas web estructuradas usando HTML y CSS aplicando buenas prácticas de diseño mediante ejercicios guiados y la construcción de interfaces funcionales con etiquetas y estilos personalizados.",
  "Fortalecí mis conocimientos en el uso de frameworks CSS como Bootstrap y Tailwind desarrollando componentes visuales reutilizables y aplicando principios de diseño responsivo en proyectos web.",
  "Descubrí cómo aplicar JavaScript para generar interactividad y manejar el DOM implementando pequeños proyectos prácticos donde utilicé funciones, eventos y animaciones para mejorar la experiencia del usuario.",
  "Comprendí los fundamentos de React y su estructura basada en componentes creando mis primeros componentes, utilizando props y gestionando la comunicación entre ellos en ejercicios prácticos.",
  "Aprendí a manejar eventos, formularios y rutas dentro de una aplicación React mediante la implementación de una tienda virtual con navegación, validaciones y actualización dinámica de datos.",
  "Apliqué los hooks de React para optimizar el estado y la comunicación entre componentes experimentando con ejemplos funcionales de useState, useEffect y comunicación entre componentes hermanos.",
  "Aprendí la importancia de la retroalimentación para mejorar mis habilidades como desarrollador frontend. Comprendí que revisar errores y optimizar el código es fundamental para lograr aplicaciones más limpias, escalables y mantenibles.",
  "Comprendí el funcionamiento del desarrollo web backend y la arquitectura del lado servidor, aprendiendo cómo tecnologías como PHP y JSP procesan solicitudes y generan respuestas dinámicas.",
  "Fortalecí mis conocimientos en el lenguaje Python, comprendiendo su sintaxis, estructuras de control y programación orientada a objetos como base para el desarrollo de aplicaciones backend.",
  "Aprendí a desarrollar aplicaciones web utilizando Django, comprendiendo su arquitectura MTV y la gestión de proyectos, vistas, plantillas y modelos para interactuar con bases de datos.",
  "Comprendí la importancia de la gestión de formularios, la validación de datos y la seguridad en aplicaciones web, aplicando autenticación, autorización y administración de usuarios con Django.",
  "Aprendí a diseñar y desarrollar APIs RESTful, comprendiendo cómo estructurar endpoints, serializar datos y permitir la comunicación eficiente entre frontend y backend.",
  "Comprendí el concepto de microservicios y su importancia en sistemas escalables, aprendiendo a diseñar servicios independientes y a comunicar aplicaciones mediante arquitecturas distribuidas.",
  "Fortalecí mis habilidades de integración y comunicación al exponer el proyecto final, aplicando los conocimientos adquiridos durante el curso en una solución web completa.",
  "Reflexioné sobre todo el aprendizaje obtenido durante el curso, reconociendo el desarrollo de competencias en frontend, backend y arquitecturas modernas, consolidando mi formación en desarrollo de aplicaciones web."
];

const reflexionFinalCurso =
  "A lo largo del semestre consolidé competencias técnicas y metacognitivas en desarrollo de aplicaciones web. " +
  "Aprendí a planificar, construir y refactorizar con criterio, comunicar decisiones de forma clara y asumir la mejora continua.";

export default function ReflexionFinal() {
  return (
    <section className="py-16" id="reflexion-final">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-purple-400">Reflexión Final – Metacognitiva</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reflexiones.map((texto, i) => (
            <div key={i} className="bg-slate-900/60 border border-purple-600/40 rounded-2xl p-6 shadow-lg animate-fade-in">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">Semana {i + 1}</h3>
              <p className="text-gray-300 leading-relaxed">{texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-900 via-slate-900 to-purple-900 border border-yellow-500/40 rounded-2xl p-8 shadow-2xl animate-fade-in">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">Reflexión Final del Curso</h3>
          <p className="text-gray-200 leading-relaxed">{reflexionFinalCurso}</p>
        </div>
      </div>
    </section>
  );
}
