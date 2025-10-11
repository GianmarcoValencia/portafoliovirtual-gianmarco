
Portafolio Académico - Gianmarco (con Navbar fijo, scroll suave y 16 semanas)

Requisitos:
  - Node.js 18+

Pasos:
  1) npm install
  2) npm run dev
  3) Abre http://localhost:5173

Editar contenido (solo código):
  - Presentación (foto, datos): src/components/Presentacion.jsx
  - Proyectos concluidos: src/components/ProyectosConcluidos.jsx
  - Semanas (01–16): src/data/weeks.js
  - Reflexión (16 + final): src/components/ReflexionFinal.jsx
  - Bibliografía: src/components/Bibliografia.jsx

Imágenes (Google Drive):
  - Obtén el ID del enlace compartido: https://drive.google.com/file/d/TU_ID/view?usp=sharing
  - Usa en código: https://drive.google.com/uc?export=view&id=TU_ID

Navegación:
  - Barra superior fija con transparencia y blur (links: Portada, Proyectos, Cuaderno, Reflexión Final, Bibliografía)
  - El link activo se ilumina en cian mientras haces scroll.
  - La barra de semanas NO es fija (fluye con el contenido).
