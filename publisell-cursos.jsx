import React, { useState } from "react";
import {
  Sparkles, Clapperboard, Megaphone, Layers, ChevronDown, Clock,
  MonitorSmartphone, Award, Users, MessageCircle, CheckCircle2,
  GraduationCap, Zap, ArrowRight, CalendarCheck, Wallet
} from "lucide-react";

/* ============================================================
   PUBLISELL · Catálogo académico interactivo
   Datos editables: reemplaza contenido en COURSES sin tocar UI
   ============================================================ */

const WA_LINK =
  "https://wa.me/573175867861?text=" +
  encodeURIComponent("Hola PubliSell 👋 Quiero información sobre los cursos");

const COURSES = [
  {
    id: "mixto",
    name: "Curso Mixto",
    short: "Mixto",
    icon: Layers,
    accent: "#F5B31C",
    tagline: "Un poco de todas las áreas digitales, en un solo programa.",
    description:
      "Formación integral donde aprendes bases prácticas de marketing digital, social media, Canva, CapCut, inteligencia artificial y Google Workspace. Pensado para organizar mejor tu trabajo, crear contenido y aplicar herramientas digitales en proyectos reales.",
    result: "Terminas con un sistema completo de trabajo digital: estrategia, contenido, diseño, video, IA y organización.",
    ideal: "Quienes quieren aprender un poco de todas las áreas digitales principales.",
    tools: "Canva · CapCut · IA · Meta · Google Workspace",
    focus: "Integral",
    classes: [
      { t: "Fundamentos de marketing digital", d: "Bases del marketing digital, estrategia comercial, análisis del entorno y la forma correcta de entender un negocio antes de crear contenido o campañas.", temas: ["Qué es el marketing digital", "Análisis micro y macro", "Segmentación básica", "Orden inicial de una marca", "Diagnóstico del negocio"] },
      { t: "Formatos, pilares y estrategia de contenido", d: "Qué tipos de contenido existen, cómo se organizan los pilares de comunicación y cómo se conecta el contenido con una intención comercial.", temas: ["Formatos para redes", "Tipos de contenido", "Niveles de conciencia del cliente", "Deseo de compra", "Perfil de contenido", "Estrategia comercial básica"] },
      { t: "Ideas orgánicas con IA y planificación", d: "Aprende a usar inteligencia artificial para generar ideas de contenido, organizar publicaciones y construir una planificación inicial.", temas: ["Ideas de contenido con IA", "Contenido orgánico", "Guionización básica", "Planificación de contenidos", "Organización de publicaciones"] },
      { t: "Campañas publicitarias en Meta Business Suite", d: "Estructura básica para crear anuncios en Meta y conectar una campaña con objetivos comerciales.", temas: ["Meta Business Suite", "Estructura de campañas", "Anuncios", "Métricas iniciales", "Contenido + pauta"] },
      { t: "Recorrido por Canva y fundamentos visuales", d: "Canva como herramienta de diseño y bases visuales para crear piezas más profesionales.", temas: ["Recorrido por Canva", "Fundamentos visuales", "Principios de Gestalt", "Composición básica", "Referencias visuales", "Prompts visuales para diseño"] },
      { t: "Animación y efectos en Canva", d: "Crea piezas dinámicas y animadas para redes sociales usando Canva.", temas: ["Animaciones en Canva", "Efectos visuales", "Formatos para redes", "Piezas estáticas y animadas", "Adaptación de diseños"] },
      { t: "Hooks, grabación y recorrido por CapCut", d: "CapCut como herramienta de edición y la lógica de grabar contenido con intención.", temas: ["Tipos de hooks", "Grabación en campo", "Recorrido por CapCut", "Estructura de un video corto", "Preparación del material"] },
      { t: "Edición básica y efectos en CapCut", d: "Edita videos desde cero y aplica herramientas visuales para mejorar el ritmo del contenido.", temas: ["Edición básica", "Cortes", "Capas", "Máscaras", "Keyframes", "Textos", "Efectos avanzados básicos"] },
      { t: "Prompting básico, agentes e ideas con IA", d: "La inteligencia artificial como apoyo para pensar, planificar y producir contenido más rápido.", temas: ["Prompting básico", "Agentes de IA", "Ideas de contenido con IA", "Organización de tareas", "ChatGPT, Gemini y similares"] },
      { t: "Imagen, video y mini apps con IA", d: "Herramientas de IA para crear imágenes, videos, artefactos, prototipos o recursos visuales.", temas: ["Imágenes con IA", "Video con IA", "Mini aplicaciones", "Artefactos interactivos", "Prototipos simples"] },
      { t: "Google Workspace y organización del trabajo", d: "Herramientas para organizar tareas, archivos, calendario y flujo laboral.", temas: ["Google Drive", "Google Calendar", "Google Sheets", "Google Tasks", "Notion", "Organización de carpetas"] },
      { t: "Proyecto final: sistema completo de trabajo", d: "Integra todo lo aprendido en un sistema práctico de trabajo.", temas: ["Estrategia", "Contenido", "Diseño", "Video", "IA", "Organización", "Presentación final"] },
    ],
  },
  {
    id: "canva-capcut",
    name: "Canva + CapCut",
    short: "Canva + CapCut",
    icon: Clapperboard,
    accent: "#00A8E8",
    tagline: "Diseña piezas visuales y edita videos que enganchan.",
    description:
      "Curso práctico enfocado en diseño visual, creación de piezas para redes, edición de video, grabación, efectos, animación y construcción de portafolio. Combina Canva para diseño y CapCut para edición audiovisual.",
    result: "Terminas con un portafolio visual propio y un proyecto audiovisual editado de inicio a fin.",
    ideal: "Quienes quieren diseñar piezas visuales y editar videos para redes.",
    tools: "Canva · CapCut · IA de apoyo",
    focus: "Creativo · Visual",
    classes: [
      { t: "Recorrido por CapCut", d: "Introducción a la interfaz de CapCut y a las funciones principales para editar videos desde cero.", temas: ["Interfaz de CapCut", "Importación de videos", "Línea de tiempo", "Cortes básicos", "Exportación inicial"] },
      { t: "Recorrido por Canva", d: "Canva como herramienta para crear piezas gráficas, publicaciones, presentaciones y contenido visual.", temas: ["Interfaz de Canva", "Plantillas", "Formatos", "Elementos gráficos", "Organización de diseños"] },
      { t: "Gestalt, teoría del color e identidad de marca", d: "Bases de diseño para crear piezas visuales más limpias, coherentes y profesionales.", temas: ["Principios de Gestalt", "Teoría del color", "Identidad visual", "Composición", "Jerarquía visual", "Marca personal o comercial"] },
      { t: "Hero visual con IA e imágenes en Canva", d: "Creación de imágenes principales, banners o piezas de alto impacto usando Canva e inteligencia artificial.", temas: ["Hero visual", "Imágenes con IA", "Composición publicitaria", "Recursos visuales", "Piezas para redes"] },
      { t: "Formatos en Canva y animación", d: "Adapta piezas a diferentes formatos y crea diseños animados.", temas: ["Formatos para redes", "Historias", "Reels", "Publicaciones", "Animaciones en Canva", "Exportación"] },
      { t: "CapCut: keyframes, capas, efectos y máscaras", d: "Clase técnica para mejorar la edición con herramientas intermedias de CapCut.", temas: ["Keyframes", "Capas", "Máscaras", "Efectos", "Movimiento", "Transiciones"] },
      { t: "Guionización y planificación", d: "Preparación del contenido antes de diseñar o grabar.", temas: ["Guion para video", "Planeación de contenido", "Estructura de piezas", "Organización de ideas", "Storyline básico"] },
      { t: "Grabación y efectos orgánicos", d: "Graba mejor desde el celular y aprovecha recursos visuales naturales.", temas: ["Grabación con celular", "Ángulos", "Movimiento", "Luz", "Efectos orgánicos", "Material base"] },
      { t: "Efectos avanzados en CapCut", d: "Profundización en edición visual para crear videos más dinámicos y profesionales.", temas: ["Efectos avanzados", "Ritmo visual", "Transiciones", "Sincronización", "Textos dinámicos", "Estilo para redes"] },
      { t: "Videos con IA", d: "Inteligencia artificial para apoyar la creación de videos, ideas, recursos visuales o escenas.", temas: ["Videos con IA", "Generación de recursos", "Ideas para escenas", "IA en guiones", "Integración con CapCut"] },
      { t: "Portafolio en Canva", d: "Construcción de un portafolio visual con los diseños creados durante el curso.", temas: ["Organización del portafolio", "Presentación visual", "Selección de piezas", "Diseño de portada", "Estructura profesional"] },
      { t: "Proyecto final en CapCut", d: "Entrega final de un proyecto audiovisual editado en CapCut.", temas: ["Edición final", "Correcciones", "Exportación", "Presentación del video", "Revisión del proyecto"] },
    ],
  },
  {
    id: "mkt-smm",
    name: "Marketing Digital + Social Media",
    short: "Marketing + Social Media",
    icon: Megaphone,
    accent: "#7C5CFC",
    tagline: "Estrategia, contenido, campañas y gestión de redes.",
    description:
      "Curso práctico para entender estrategia digital, creación de contenido, gestión de redes sociales, planificación, campañas publicitarias, métricas y producción de piezas para marcas o negocios.",
    result: "Terminas con estrategia, parrilla de contenido, piezas y campañas reales bajo metodología de proyecto.",
    ideal: "Quienes quieren gestionar redes, comunidades y estrategia comercial.",
    tools: "Meta Business Suite · Canva · CapCut · IA",
    focus: "Estratégico · Comercial",
    classes: [
      { t: "Fundamentos de marketing digital", d: "Introducción a la estrategia digital y al análisis inicial de un negocio.", temas: ["Qué es marketing digital", "Estrategia de marketing", "Análisis micro y macro", "Diagnóstico del negocio", "Oportunidades"] },
      { t: "Formatos para redes y tipos de contenido", d: "Qué publicar según el objetivo de la marca y el nivel de conciencia del cliente.", temas: ["Formatos para redes", "Tipos de contenido", "Niveles de conciencia", "Deseo de compra", "Contenido educativo, comercial y de autoridad"] },
      { t: "IA y prompts para contenido", d: "Inteligencia artificial para generar ideas, textos, guiones y estructuras de contenido.", temas: ["Prompts", "Ideas de contenido", "Investigación con IA", "Textos para redes", "Apoyo creativo"] },
      { t: "Videos virales y creadores de contenido", d: "Análisis de videos que funcionan en redes y cómo aplicar estructuras de retención.", temas: ["Videos virales", "Creadores de contenido", "Hooks", "Ritmo", "Retención", "Ideas replicables"] },
      { t: "Guionización, parrilla y planificación mensual", d: "Construcción de un sistema organizado de contenidos para redes.", temas: ["Guionización", "Parrilla de contenido", "Calendario mensual", "Planificación", "Organización por objetivos"] },
      { t: "Edición de imágenes en Canva", d: "Creación de piezas visuales para redes usando Canva.", temas: ["Diseño de publicaciones", "Plantillas", "Adaptación de formatos", "Piezas promocionales", "Identidad visual aplicada"] },
      { t: "Marca, monetización y gobernanza de accesos", d: "Organización profesional de activos digitales, accesos, páginas y estructura de marca.", temas: ["Organización de marca", "Gobernanza de accesos", "Administración de páginas", "Cuentas publicitarias", "Monetización", "Seguridad de activos"] },
      { t: "Grabación, sistema de producción y organización", d: "Flujo práctico para producir contenido de forma ordenada.", temas: ["Grabación de contenido", "Sistema de producción", "Organización de archivos", "Rutina de creación", "Banco de ideas"] },
      { t: "Edición de videos en CapCut", d: "Edición de videos cortos para redes sociales.", temas: ["Cortes", "Subtítulos", "Música", "Efectos", "Formato vertical", "Exportación para redes"] },
      { t: "Campañas publicitarias en Meta Business Suite", d: "Campañas básicas en Meta para promocionar contenido, productos o servicios.", temas: ["Meta Business Suite", "Objetivos de campaña", "Anuncios", "Segmentación básica", "Presupuesto", "Lectura de resultados"] },
      { t: "Métricas, KPIs y mejora continua", d: "Interpreta resultados y toma decisiones basadas en datos.", temas: ["Métricas", "KPIs", "Estadísticas", "Seguimiento", "Estrategias de mejora", "Optimización continua"] },
      { t: "Proyecto ABP final", d: "Entrega final bajo metodología de aprendizaje basado en proyectos.", temas: ["Entrega de videos", "Corrección de contenidos", "Presentación de estrategia", "Revisión de piezas", "Retroalimentación"] },
    ],
  },
  {
    id: "ia",
    name: "Inteligencia Artificial",
    short: "Inteligencia Artificial",
    icon: Sparkles,
    accent: "#0A9E7B",
    tagline: "Usa la IA para crear, organizar y producir más rápido.",
    description:
      "Curso práctico para aprender a usar herramientas de inteligencia artificial en estudio, trabajo, creación de contenido, diseño, video, documentos, automatización y prototipado.",
    result: "Terminas con un proyecto aplicado usando varias herramientas de IA: contenido, documento, video o prototipo.",
    ideal: "Quienes quieren usar IA para producir más rápido en trabajo, estudio o contenido.",
    tools: "ChatGPT · Gemini · Claude · CapCut · herramientas generativas",
    focus: "Productividad · Creación",
    classes: [
      { t: "Qué es la IA y prompting básico", d: "Introducción a la inteligencia artificial y a la forma correcta de dar instrucciones.", temas: ["Qué es la IA", "Prompting básico", "ChatGPT", "Gemini", "Claude", "Cómo pedir mejores respuestas"] },
      { t: "Agentes de IA", d: "Qué son los agentes de IA y cómo pueden ayudar a ejecutar tareas.", temas: ["Qué es un agente", "Chatbot vs agente", "Casos de uso", "Automatización básica", "Asistentes personalizados"] },
      { t: "Imágenes con IA y aplicaciones creativas", d: "Genera imágenes, conceptos visuales y piezas creativas con IA.", temas: ["Imágenes con IA", "Apps creativas", "Prompts visuales", "Referencias", "Generación de conceptos"] },
      { t: "Herramientas de IA para estudiar y trabajar", d: "Herramientas útiles para productividad, aprendizaje y organización.", temas: ["Herramientas de estudio", "Apps de productividad", "Resúmenes", "Investigación", "Organización de información"] },
      { t: "IA para ideas de contenido", d: "Crea ideas, guiones, textos y estructuras para redes o proyectos.", temas: ["Ideas de contenido", "Guiones", "Publicaciones", "Calendarios", "Adaptación de mensajes"] },
      { t: "Video con IA y Flow", d: "Crea o apoya videos usando herramientas de inteligencia artificial.", temas: ["Video con IA", "Google Flow o similares", "Generación de escenas", "Ideas audiovisuales", "Flujo creativo"] },
      { t: "Edición con CapCut apoyada por IA", d: "IA y CapCut para mejorar videos, subtítulos, ritmo y edición.", temas: ["Edición de video", "Subtítulos automáticos", "Recursos con IA", "CapCut", "Optimización de videos"] },
      { t: "Videos con IA avanzada", d: "Herramientas avanzadas para generar videos, escenas o clips creativos.", temas: ["Videos generativos", "Herramientas tipo Higgsfield", "Animación con IA", "Movimiento", "Clips para redes"] },
      { t: "Informes, documentos y catálogos con IA", d: "Produce documentos profesionales con apoyo de IA.", temas: ["Informes", "Documentos", "Catálogos", "Propuestas", "Textos estructurados"] },
      { t: "Prototipos de apps o páginas con IA", d: "Construye prototipos simples de páginas, interfaces o aplicaciones.", temas: ["Prototipos", "Mini apps", "Páginas web", "Artefactos interactivos", "Herramientas tipo v0 o Claude"] },
      { t: "IA conectada al computador", d: "IA para apoyar tareas directamente relacionadas con archivos, sistemas o flujos de trabajo.", temas: ["IA como asistente de trabajo", "Organización de archivos", "Tareas del computador", "Flujos automatizados", "Productividad avanzada"] },
      { t: "Proyecto final", d: "Integración de todo lo aprendido en un ejercicio práctico.", temas: ["Proyecto aplicado", "Varias herramientas", "Contenido, documento, video o prototipo", "Presentación final", "Retroalimentación"] },
    ],
  },
];

const GLOBAL = [
  { icon: CalendarCheck, k: "12 clases", v: "por curso" },
  { icon: Clock, k: "3 horas", v: "por clase" },
  { icon: MonitorSmartphone, k: "Mixto", v: "presencial o virtual" },
  { icon: Wallet, k: "Desde $20.000", v: "tu inscripción" },
];

const BENEFITS = [
  { icon: GraduationCap, t: "Empiezas desde cero", d: "No necesitas experiencia previa. Solo constancia y tu computador o celular." },
  { icon: Zap, t: "Aprendes haciendo", d: "Cada clase es práctica: creas piezas, videos y proyectos reales desde la primera semana." },
  { icon: MonitorSmartphone, t: "Modalidad flexible", d: "Asiste presencial o conéctate virtual. Tú eliges según tu semana." },
  { icon: Award, t: "Certificado digital PubliSell", d: "Al finalizar recibes un certificado digital de PubliSell que respalda tu formación." },
  { icon: Users, t: "Puerta al equipo PubliSell", d: "Al terminar puedes aplicar para trabajar en proyectos de marketing con nuestro equipo." },
  { icon: CheckCircle2, t: "Herramientas actuales", d: "Trabajas con las mismas herramientas que se usan hoy en agencias y negocios reales." },
];

/* ---------- UI ---------- */

function Chip({ children }) {
  return (
    <span className="inline-block rounded-full bg-[#EEF3F9] px-3 py-1 text-[12px] font-medium text-[#3D5573]">
      {children}
    </span>
  );
}

function ClassRow({ index, cls, accent, open, onToggle }) {
  return (
    <div className="relative pl-10 sm:pl-12">
      {/* rail */}
      <span className="absolute left-[13px] top-0 h-full w-px bg-[#E3EAF3]" aria-hidden />
      <span
        className="absolute left-0 top-5 flex h-7 w-7 items-center justify-center rounded-full border bg-white font-mono text-[11px] font-semibold"
        style={{ borderColor: open ? accent : "#D7E1EC", color: open ? accent : "#7B8FA6" }}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 rounded-2xl border bg-white px-4 py-4 text-left transition-all sm:px-5"
        style={{
          borderColor: open ? accent : "#E7EDF5",
          boxShadow: open ? "0 8px 28px -14px rgba(10,25,48,0.18)" : "none",
        }}
      >
        <div>
          <p className="text-[15px] font-semibold leading-snug text-[#0A1930] sm:text-base">{cls.t}</p>
          {!open && <p className="mt-0.5 line-clamp-1 text-[13px] text-[#7B8FA6]">{cls.d}</p>}
        </div>
        <ChevronDown
          className="h-4 w-4 shrink-0 text-[#7B8FA6] transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="mx-1 mb-4 mt-2 rounded-2xl bg-[#F7FAFD] p-4 sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8FA6]">Qué se aprende</p>
            <p className="mt-1.5 text-[14px] leading-relaxed text-[#33475F]">{cls.d}</p>
            <p className="mb-2 mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8FA6]">Temas de la clase</p>
            <div className="flex flex-wrap gap-1.5">
              {cls.temas.map((tm) => <Chip key={tm}>{tm}</Chip>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PublisellCursos() {
  const [activeCourse, setActiveCourse] = useState(COURSES[0].id);
  const [openClass, setOpenClass] = useState(0);
  const course = COURSES.find((c) => c.id === activeCourse);
  const Icon = course.icon;

  const selectCourse = (id) => { setActiveCourse(id); setOpenClass(0); };

  return (
    <div className="min-h-screen bg-[#FAFBFD] font-[Poppins] text-[#0A1930] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>

      {/* ================= NAV ================= */}
      <header className="sticky top-0 z-40 border-b border-[#EDF1F7] bg-[#FAFBFD]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0A1930] font-bold text-white">P</span>
            <span className="text-[15px] font-bold tracking-tight">PubliSell<span className="text-[#00A8E8]">.</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-[13.5px] font-medium text-[#5A7090] md:flex">
            <a href="#cursos" className="transition-colors hover:text-[#0A1930]">Cursos</a>
            <a href="#clases" className="transition-colors hover:text-[#0A1930]">Clase por clase</a>
            <a href="#comparar" className="transition-colors hover:text-[#0A1930]">Comparar</a>
            <a href="#metodologia" className="transition-colors hover:text-[#0A1930]">Metodología</a>
          </nav>
          <a
            href={WA_LINK} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#0A1930] px-4 py-2 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#E9EFF6 1px, transparent 1px), linear-gradient(90deg, #E9EFF6 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 text-center sm:pb-20 sm:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F5B31C]/40 bg-[#FFF8E5] px-4 py-1.5 text-[12.5px] font-semibold text-[#8A6100]">
            <Wallet className="h-3.5 w-3.5" /> Inscríbete desde solo $20.000
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-[34px] font-extrabold leading-[1.12] tracking-tight sm:text-5xl">
            Aprende habilidades digitales prácticas para{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">crear, vender</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-sm bg-[#00A8E8]/20 sm:h-4" aria-hidden />
            </span>{" "}
            y trabajar mejor
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5A7090] sm:text-base">
            Explora nuestros cursos de CapCut, Canva, Marketing Digital, Social Media,
            Inteligencia Artificial y formación mixta. Cada clase está diseñada para que
            aprendas haciendo, con ejercicios reales y herramientas aplicables desde el primer día.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cursos" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0A1930] px-7 py-3.5 text-[14.5px] font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto">
              Ver cursos <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full border border-[#D7E1EC] bg-white px-7 py-3.5 text-[14.5px] font-semibold text-[#0A1930] transition-colors hover:border-[#0A1930] sm:w-auto">
              <MessageCircle className="h-4 w-4 text-[#00A8E8]" /> Consultar inscripción
            </a>
          </div>

          {/* global stats */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {GLOBAL.map(({ icon: I, k, v }) => (
              <div key={k} className="rounded-2xl border border-[#E7EDF5] bg-white px-4 py-4">
                <I className="mx-auto h-4.5 w-4.5 h-5 w-5 text-[#00A8E8]" />
                <p className="mt-2 text-[15px] font-bold leading-none">{k}</p>
                <p className="mt-1 text-[11.5px] text-[#7B8FA6]">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CURSOS ================= */}
      <section id="cursos" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-4 pt-8">
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A8E8]">Catálogo</p>
        <h2 className="mt-2 text-center text-[26px] font-extrabold tracking-tight sm:text-3xl">Nuestros cursos</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-[14px] text-[#5A7090]">
          Cuatro programas prácticos. Todos desde cero, todos con proyecto final.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {COURSES.map((c) => {
            const CI = c.icon;
            return (
              <div key={c.id} className="group flex flex-col rounded-3xl border border-[#E7EDF5] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-20px_rgba(10,25,48,0.2)] sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ backgroundColor: c.accent + "1A" }}>
                    <CI className="h-5 w-5" style={{ color: c.accent }} />
                  </span>
                  <div className="flex gap-1.5">
                    <Chip>12 clases</Chip>
                    <Chip>Desde cero</Chip>
                  </div>
                </div>
                <h3 className="mt-4 text-[19px] font-bold tracking-tight">{c.name}</h3>
                <p className="mt-0.5 text-[13px] font-medium" style={{ color: c.accent }}>{c.tagline}</p>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[#5A7090]">{c.description}</p>
                <div className="mt-4 rounded-2xl bg-[#F7FAFD] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8FA6]">Resultado</p>
                  <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#33475F]">{c.result}</p>
                </div>
                <button
                  onClick={() => { selectCourse(c.id); document.getElementById("clases")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full border border-[#0A1930] px-5 py-2.5 text-[13.5px] font-semibold transition-colors hover:bg-[#0A1930] hover:text-white"
                >
                  Ver las 12 clases <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CLASE POR CLASE ================= */}
      <section id="clases" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A8E8]">Malla académica</p>
        <h2 className="mt-2 text-center text-[26px] font-extrabold tracking-tight sm:text-3xl">Explora clase por clase</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-[14px] text-[#5A7090]">
          Selecciona un curso y despliega cada clase para ver exactamente qué aprenderás.
        </p>

        {/* tabs */}
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
          {COURSES.map((c) => (
            <button
              key={c.id}
              onClick={() => selectCourse(c.id)}
              className="shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all"
              style={
                activeCourse === c.id
                  ? { backgroundColor: "#0A1930", borderColor: "#0A1930", color: "white" }
                  : { backgroundColor: "white", borderColor: "#D7E1EC", color: "#5A7090" }
              }
            >
              {c.short}
            </button>
          ))}
        </div>

        {/* course header */}
        <div className="mt-6 flex items-center gap-3 rounded-3xl border border-[#E7EDF5] bg-white p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: course.accent + "1A" }}>
            <Icon className="h-5.5 w-5.5 h-6 w-6" style={{ color: course.accent }} />
          </span>
          <div>
            <h3 className="text-[17px] font-bold leading-tight">{course.name}</h3>
            <p className="text-[12.5px] text-[#7B8FA6]">12 clases · 3 horas por clase · presencial o virtual</p>
          </div>
        </div>

        {/* timeline */}
        <div className="mt-6 space-y-3">
          {course.classes.map((cls, i) => (
            <ClassRow
              key={cls.t}
              index={i}
              cls={cls}
              accent={course.accent}
              open={openClass === i}
              onToggle={() => setOpenClass(openClass === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      {/* ================= COMPARADOR ================= */}
      <section id="comparar" className="border-y border-[#EDF1F7] bg-white py-16">
        <div className="mx-auto max-w-6xl scroll-mt-20 px-5">
          <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A8E8]">¿Cuál elegir?</p>
          <h2 className="mt-2 text-center text-[26px] font-extrabold tracking-tight sm:text-3xl">Compara los cursos</h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {COURSES.map((c) => {
              const CI = c.icon;
              return (
                <div key={c.id} className="rounded-3xl border border-[#E7EDF5] bg-[#FAFBFD] p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: c.accent + "1A" }}>
                      <CI className="h-4 w-4" style={{ color: c.accent }} />
                    </span>
                    <h3 className="text-[14.5px] font-bold leading-tight">{c.short}</h3>
                  </div>
                  <dl className="mt-4 space-y-3 text-[13px]">
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8FA6]">Ideal para</dt>
                      <dd className="mt-0.5 leading-relaxed text-[#33475F]">{c.ideal}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8FA6]">Herramientas</dt>
                      <dd className="mt-0.5 leading-relaxed text-[#33475F]">{c.tools}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8FA6]">Enfoque</dt>
                      <dd className="mt-0.5 text-[#33475F]">{c.focus}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8FA6]">Nivel</dt>
                      <dd className="mt-0.5 text-[#33475F]">Desde cero · práctico</dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= METODOLOGÍA ================= */}
      <section id="metodologia" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A8E8]">Metodología</p>
            <h2 className="mt-2 text-[26px] font-extrabold leading-tight tracking-tight sm:text-3xl">
              Una metodología práctica, clara y aplicable
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-[#5A7090]">
              Cada clase está pensada para que no solo entiendas la herramienta, sino que aprendas
              a usarla en situaciones reales: crear contenido, organizar tu trabajo, mejorar tus
              redes, diseñar piezas, editar videos, usar inteligencia artificial y aplicar
              estrategias digitales.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["Clases 100% prácticas con ejercicios guiados", "Casos reales aplicados a negocios y redes", "Explicación sencilla, sin tecnicismos innecesarios", "Acompañamiento paso a paso en cada clase", "Solo necesitas constancia y tu computador o celular"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#33475F]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00A8E8]" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map(({ icon: BI, t, d }) => (
              <div key={t} className="rounded-3xl border border-[#E7EDF5] bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EEF3F9]">
                  <BI className="h-4.5 w-4.5 h-5 w-5 text-[#0A1930]" />
                </span>
                <p className="mt-3 text-[14px] font-bold leading-snug">{t}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#7B8FA6]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="px-5 pb-16">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-[#0A1930] px-6 py-14 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="relative">
            <h2 className="text-[26px] font-extrabold tracking-tight text-white sm:text-3xl">
              ¿Quieres saber cuál curso es mejor para ti?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-white/70">
              Escríbenos y te orientamos según tu nivel, tus objetivos y lo que quieres aprender.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#00A8E8] px-7 py-3.5 text-[14.5px] font-semibold text-white transition-transform hover:scale-[1.03] sm:w-auto">
                <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
              </a>
              <a href="#cursos" className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
                Ver todos los cursos
              </a>
            </div>
            <p className="mt-6 text-[12px] text-white/45">Inscripción desde $20.000 · Certificado digital PubliSell</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#EDF1F7] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A1930] text-[13px] font-bold text-white">P</span>
            <span className="text-[13.5px] font-bold">PubliSell · NeuroMarketing Studio</span>
          </div>
          <p className="text-[12px] text-[#7B8FA6]">Ibagué, Tolima · Colombia · La fusión entre ciencia, emoción y ventas.</p>
        </div>
      </footer>
    </div>
  );
}
