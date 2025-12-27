
import React from "react";

const referencias = [
  "Mozilla Developer Network (MDN). (2024). Introducción a HTML. Mozilla Foundation. https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML",
  "Mozilla Developer Network (MDN). (2024). Introducción a CSS. Mozilla Foundation. https://developer.mozilla.org/es/docs/Learn/CSS/First_steps",
  "W3C. (2024). Estándares del World Wide Web Consortium (W3C). https://www.w3.org/Consortium/mission.es.html",
  "Universidad Nacional Autónoma de México (UNAM). (2023). Fundamentos de desarrollo web. Coursera. https://es.coursera.org/learn/fundamentos-desarrollo-web",
  "FreeCodeCamp. (2023). Guía de diseño web adaptable (Responsive Design). FreeCodeCamp en español. https://www.freecodecamp.org/espanol/news/diseno-web-adaptable-guia-completa/",
  "GeeksforGeeks en Español. (2024). Guía completa de Flexbox en CSS. https://www.geeksforgeeks.org/es/css-flexbox-guia-completa/",
  "Bootstrap en Español. (2024). Documentación oficial de Bootstrap 5. https://getbootstrap.esdocu.com/docs/5.3/getting-started/introduction/",
  "Tailwind Labs. (2024). Documentación de Tailwind CSS (traducción español). https://tailwindcss.es/docs",
  "Mozilla Developer Network (MDN). (2024). Guía de JavaScript. Mozilla Foundation. https://developer.mozilla.org/es/docs/Web/JavaScript/Guide",
  "Código Facilito. (2023). Curso de JavaScript desde cero. https://codigofacilito.com/cursos/javascript",
  "React Docs en Español. (2024). Introducción a React. Meta Platforms, Inc. https://es.react.dev/",
  "GeeksforGeeks en Español. (2024). Hooks en React: useState y useEffect. https://www.geeksforgeeks.org/es/hooks-en-react-usestate-y-useeffect/",
  "MDN Web Docs. (2024). JavaScript Guide. Mozilla Foundation. https://developer.mozilla.org/es/docs/Web/JavaScript/Guide",
  "MDN Web Docs. (2024). React – Conceptos principales. Mozilla Foundation. https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
  "W3C. (2024). HTML Living Standard. World Wide Web Consortium. https://html.spec.whatwg.org/",
  "W3C. (2024). Cascading Style Sheets (CSS) Specifications. https://www.w3.org/Style/CSS/Overview.en.html",
  "React Documentation. (2024). Hooks API Reference. Meta Platforms, Inc.https://react.dev/reference/react",
  "Python Software Foundation. (2024). Python Documentation. https://docs.python.org/3/",
  "Django Software Foundation. (2024). Django Documentation. https://docs.djangoproject.com/en/stable/",
  "GeeksforGeeks. (2024). REST API Introduction. https://www.geeksforgeeks.org/rest-api-introduction/",
  "Red Hat. (2023). What is a Microservices Architecture?. https://www.redhat.com/en/topics/microservices/what-are-microservices"
];

export default function Bibliografia() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white animate-fade-in" id="bibliografia">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Bibliografía</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {referencias.map((ref, i) => (
            <div key={i} className="bg-slate-800/60 border border-cyan-500/30 rounded-xl p-4 shadow-md hover:shadow-cyan-500/20 transition-all">
              <p className="text-gray-300 leading-relaxed italic">• {ref}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
