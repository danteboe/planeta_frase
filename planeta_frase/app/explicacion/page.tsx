"use client";

import { useState } from "react";
import Link from "next/link";
import StarBackground from "../components/StarBackground";

/* ================================================================
   SLIDE DATA
   ================================================================ */
interface Slide {
  title: string;
  content: React.ReactNode;
}

function SB({ children }: { children: React.ReactNode }) {
  return <span className="highlight-subject">{children}</span>;
}
function PB({ children }: { children: React.ReactNode }) {
  return <span className="highlight-predicate">{children}</span>;
}
function VB({ children }: { children: React.ReactNode }) {
  return <span className="highlight-verb">{children}</span>;
}

const slides: Slide[] = [
  /* 0 */ {
    title: "Bienvenido/a al universo de la oración",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <p>
          La construcción adecuada de oraciones es{" "}
          <strong style={{ color: "var(--cyan)" }}>imprescindible</strong> para
          que los textos sean claros, precisos y amenos para el lector.
        </p>
        <p>
          Si las oraciones no se redactan apropiadamente, resultan
          incomprensibles y afectan la fluidez y la claridad comunicativa.
        </p>
        <div
          className="glass-card p-4 text-sm"
          style={{ borderLeft: "3px solid var(--gold)" }}
        >
          Escribir bien las oraciones es un paso importante para cumplir los
          propósitos comunicativos (narrar, argumentar, exponer, etc.) del
          autor.
        </div>
      </div>
    ),
  },
  /* 1 */ {
    title: "¿Qué es la oración?",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <div
          className="glass-card p-5 text-center text-base"
          style={{ borderColor: "var(--cyan)" }}
        >
          La oración es una{" "}
          <strong style={{ color: "var(--cyan)" }}>
            unidad gramatical
          </strong>{" "}
          que comunica ideas con sentido completo a partir de la unión entre un{" "}
          <SB>sujeto</SB> y un <PB>predicado</PB>.
        </div>
        <p>Analiza estos ejemplos:</p>
        <ul className="space-y-2 text-sm">
          <li>
            &#x274C; <em>&quot;¡No a la experimentación con animales!&quot;</em> → Enunciado (no tiene verbo conjugado)
          </li>
          <li>
            &#x2705;{" "}
            <em>
              &quot;<SB>La junta de especialistas</SB>{" "}
              <VB>conformará</VB> un comité de ética.&quot;
            </em>{" "}
            → Oración
          </li>
          <li>
            &#x274C; <em>&quot;Prohibido parquear.&quot;</em> → Enunciado (participio + infinitivo, no hay verbo conjugado)
          </li>
        </ul>
        <p className="text-sm text-white/60">
          Recuerda: todas las oraciones son enunciados, pero <strong>no todos
          los enunciados son oraciones</strong>.
        </p>
      </div>
    ),
  },
  /* 2 */ {
    title: "Sujeto y Predicado",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            className="glass-card p-4"
            style={{ borderTop: "3px solid var(--cyan)" }}
          >
            <h3 className="font-bold mb-2" style={{ color: "var(--cyan)" }}>
              Sujeto
            </h3>
            <p className="text-sm">
              Aquello (persona, objeto, concepto…) sobre lo cual se predica o se
              dice algo. Concuerda en <strong>número</strong> y{" "}
              <strong>persona</strong> con el verbo.
            </p>
          </div>
          <div
            className="glass-card p-4"
            style={{ borderTop: "3px solid var(--purple)" }}
          >
            <h3 className="font-bold mb-2" style={{ color: "var(--purple)" }}>
              Predicado
            </h3>
            <p className="text-sm">
              Aquello que se dice del sujeto. Está formado por un{" "}
              <strong>verbo conjugado</strong> (verbo en forma personal) que
              puede aparecer con complementos.
            </p>
          </div>
        </div>
        <div className="glass-card p-4 text-sm">
          <p className="mb-2 font-semibold" style={{ color: "var(--gold)" }}>
            Ejemplo analizado:
          </p>
          <p>
            <SB>La junta de especialistas en ingeniería biomédica</SB>{" "}
            <VB>conformará</VB>{" "}
            <PB>un comité de ética para discutir sobre la modificación
            genética de los alimentos.</PB>
          </p>
          <p className="mt-2 text-white/60">
            Verbo principal: <VB>conformará</VB> (conjugado, 3.ª persona) · Sujeto:{" "}
            <SB>la junta de especialistas</SB> · Complemento: parte del predicado.
          </p>
        </div>
      </div>
    ),
  },
  /* 3 */ {
    title: "El verbo conjugado vs. formas no personales",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <p>
          El predicado se construye a partir de un{" "}
          <strong style={{ color: "var(--gold)" }}>verbo conjugado</strong>{" "}
          (forma personal): tiene persona, tiempo y número.
        </p>
        <p>
          Existen también <strong>formas no personales</strong> del verbo que
          NO funcionan como verbo principal por sí solas:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="glass-card p-3 text-center">
            <p className="font-bold mb-1" style={{ color: "var(--cyan)" }}>
              Gerundio
            </p>
            <p>Terminado en <strong>-ndo</strong></p>
            <p className="text-white/50 mt-1">esperando, leyendo</p>
          </div>
          <div className="glass-card p-3 text-center">
            <p className="font-bold mb-1" style={{ color: "var(--purple)" }}>
              Infinitivo
            </p>
            <p>Terminado en <strong>-ar, -er, -ir</strong></p>
            <p className="text-white/50 mt-1">inferir, creer, pensar</p>
          </div>
          <div className="glass-card p-3 text-center">
            <p className="font-bold mb-1" style={{ color: "var(--gold)" }}>
              Participio
            </p>
            <p>Terminado en <strong>-do</strong></p>
            <p className="text-white/50 mt-1">acabado, perdido</p>
          </div>
        </div>
        <div
          className="glass-card p-3 text-sm"
          style={{ borderLeft: "3px solid var(--red, #ef4444)" }}
        >
          <strong>Excepción:</strong> en tiempos compuestos (
          <em>&quot;He pensado&quot;</em>) y perífrasis verbales (
          <em>&quot;Siguen aprendiendo&quot;</em>), el verbo auxiliar conjugado
          + la forma no personal conforman juntos el predicado.
        </div>
      </div>
    ),
  },
  /* 4 */ {
    title: "Datos clave sobre el sujeto",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <div className="space-y-3 text-sm">
          <div className="glass-card p-3 flex items-start gap-3">
            <span className="text-xl mt-0.5">&#x1F440;</span>
            <div>
              <strong style={{ color: "var(--cyan)" }}>
                Puede ser tácito (implícito).
              </strong>
              <p className="text-white/70 mt-1">
                <em>&quot;<VB>Haremos</VB> una investigación…&quot;</em> → el sujeto
                es <strong>nosotros</strong>, oculto en la conjugación.
              </p>
            </div>
          </div>
          <div className="glass-card p-3 flex items-start gap-3">
            <span className="text-xl mt-0.5">&#x1F504;</span>
            <div>
              <strong style={{ color: "var(--cyan)" }}>
                No siempre va al inicio.
              </strong>
              <p className="text-white/70 mt-1">
                <em>&quot;¡Ahí <VB>viene</VB> <SB>el bus</SB>!&quot;</em> → el
                sujeto está al final.
              </p>
            </div>
          </div>
          <div className="glass-card p-3 flex items-start gap-3">
            <span className="text-xl mt-0.5">&#x1F91D;</span>
            <div>
              <strong style={{ color: "var(--cyan)" }}>
                Concuerda con el verbo en número y persona.
              </strong>
            </div>
          </div>
          <div className="glass-card p-3 flex items-start gap-3">
            <span className="text-xl mt-0.5">&#x1F937;</span>
            <div>
              <strong style={{ color: "var(--cyan)" }}>
                No siempre realiza la acción.
              </strong>
              <p className="text-white/70 mt-1">
                <em>&quot;<SB>Juan</SB> <VB>fue castigado</VB> por sus
                padres.&quot;</em> → Juan recibe la acción, pero sigue siendo
                sujeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  /* 5 */ {
    title: "Truco: ¿Cómo encontrar el sujeto?",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <div
          className="glass-card p-5 text-center"
          style={{ borderColor: "var(--gold)", borderWidth: 2 }}
        >
          <p className="text-lg font-bold mb-3" style={{ color: "var(--gold)" }}>
            Jugar con el número del verbo ayuda a encontrar el sujeto
          </p>
        </div>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            <strong>Halla</strong> el verbo principal de la oración.
          </li>
          <li>
            <strong>Cambia</strong> su número (singular → plural o viceversa).
          </li>
          <li>
            <strong>Observa</strong> qué otras palabras deben cambiar para
            que la oración tenga sentido: esas conforman el sujeto.
          </li>
        </ol>
        <div className="glass-card p-4 text-sm">
          <p className="font-semibold mb-2" style={{ color: "var(--gold)" }}>
            Ejemplo:
          </p>
          <p>
            <em>
              &quot;A ellos les <VB>aburren</VB>{" "}
              <SB>los tratados filosóficos</SB>.&quot;
            </em>
          </p>
          <p className="mt-2 text-white/70">
            Si cambiamos <em>aburren</em> → <em>aburre</em>, debemos cambiar{" "}
            <em>los tratados filosóficos</em> → <em>el tratado filosófico</em>.
            ¡Ese es el sujeto!
          </p>
        </div>
      </div>
    ),
  },
  /* 6 */ {
    title: "Concordancia",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <p>
          La <strong style={{ color: "var(--cyan)" }}>concordancia</strong> es
          la igualdad de <strong>número</strong>, <strong>género</strong> y{" "}
          <strong>tiempo</strong> entre las partes de la oración. Es
          imprescindible para conservar el sentido.
        </p>
        <div className="glass-card p-4 text-sm">
          <p className="font-semibold mb-2" style={{ color: "var(--red, #ef4444)" }}>
            Ejemplo con errores:
          </p>
          <p>
            <em>
              &quot;Los grabados y la pintura <span style={{ color: "var(--red, #ef4444)", textDecoration: "underline" }}>será exhibida</span> por primera vez en el museo, el cual los{" "}
              <span style={{ color: "var(--red, #ef4444)", textDecoration: "underline" }}>expuso</span>…&quot;
            </em>
          </p>
          <ul className="mt-3 space-y-1 text-white/70">
            <li>
              &#x274C; <strong>Número:</strong> &quot;será&quot; (singular) vs. sujeto compuesto (plural) → <strong style={{ color: "var(--green)" }}>serán</strong>
            </li>
            <li>
              &#x274C; <strong>Género:</strong> &quot;exhibida&quot; (fem.) vs. sujeto compuesto masculino → <strong style={{ color: "var(--green)" }}>exhibidos</strong>
            </li>
            <li>
              &#x274C; <strong>Tiempo:</strong> &quot;expuso&quot; (pasado) vs. &quot;será&quot; (futuro) → <strong style={{ color: "var(--green)" }}>expondrá</strong>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  /* 7 */ {
    title: "Oraciones compuestas",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <p className="text-sm">
          Las oraciones compuestas tienen más de un verbo conjugado y se forman
          interconectando oraciones simples.
        </p>
        <div className="space-y-3">
          <div
            className="glass-card p-4"
            style={{ borderLeft: "3px solid var(--cyan)" }}
          >
            <h4 className="font-bold text-sm mb-1" style={{ color: "var(--cyan)" }}>
              Coordinadas
            </h4>
            <p className="text-sm text-white/70 mb-2">
              Oraciones <strong>independientes</strong> unidas por nexos: <em>y, o, pero…</em>
            </p>
            <p className="text-sm italic text-white/60">
              &quot;¿Cerrarán las fronteras <strong>o</strong> acogerán a los
              inmigrantes?&quot;
            </p>
          </div>
          <div
            className="glass-card p-4"
            style={{ borderLeft: "3px solid var(--purple)" }}
          >
            <h4 className="font-bold text-sm mb-1" style={{ color: "var(--purple)" }}>
              Subordinadas
            </h4>
            <p className="text-sm text-white/70 mb-2">
              Oraciones <strong>dependientes</strong> entre sí, unidas por nexos: <em>que, cuando, quien…</em>
            </p>
            <p className="text-sm italic text-white/60">
              &quot;Esperamos <strong>que</strong> desciendan las cifras de
              desempleo.&quot;
            </p>
          </div>
          <div
            className="glass-card p-4"
            style={{ borderLeft: "3px solid var(--gold)" }}
          >
            <h4 className="font-bold text-sm mb-1" style={{ color: "var(--gold)" }}>
              Yuxtapuestas
            </h4>
            <p className="text-sm text-white/70 mb-2">
              Sin nexo explícito, unidas solo por <strong>signos de puntuación</strong>: coma, dos puntos, punto y coma.
            </p>
            <p className="text-sm italic text-white/60">
              &quot;Culminaron la sesión una hora después<strong>:</strong>{" "}
              muchos llegaron tarde.&quot;
            </p>
          </div>
        </div>
      </div>
    ),
  },
  /* 8 */ {
    title: "Incisos gramaticales",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <p>
          Los incisos son <strong style={{ color: "var(--cyan)" }}>aclaraciones o
          explicaciones intercaladas</strong> en la oración para complementar lo
          que se dice. Se delimitan con comas, rayas o guiones.
        </p>
        <div className="glass-card p-4 text-sm">
          <p className="font-semibold mb-2" style={{ color: "var(--gold)" }}>
            Ejemplo:
          </p>
          <p>
            <em>
              &quot;<SB>México</SB>,{" "}
              <span style={{ color: "var(--gold)" }}>
                un país exportador de combustibles
              </span>
              , <VB>depende</VB> cada vez más del combustible
              estadounidense…&quot;
            </em>
          </p>
          <p className="mt-2 text-white/60">
            El inciso amplía información sobre el sujeto (México). Si se
            elimina, la oración sigue teniendo sentido.
          </p>
        </div>
        <div
          className="glass-card p-3 text-sm"
          style={{ borderLeft: "3px solid var(--red, #ef4444)" }}
        >
          <strong>Cuidado:</strong> un inciso mal ubicado genera ambigüedad. Ubícalo
          justo en la parte sobre la cual amplía información y delimítalo
          correctamente con signos de puntuación.
        </div>
      </div>
    ),
  },
  /* 9 */ {
    title: "Errores comunes",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <div className="space-y-3 text-sm">
          <div className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--red, #ef4444)" }} className="text-lg font-bold mt-0.5">1</span>
            <div>
              <strong>Omitir el sujeto o el predicado</strong> cuando son
              necesarios.
              <p className="text-white/60 mt-1">
                &#x274C; <em>&quot;Hizo varios dibujos sorprendentes…&quot;</em>
                → ¿Quién los hizo?
              </p>
              <p className="text-white/60">
                &#x2705; <em>&quot;Sandro Botticelli hizo varios
                dibujos…&quot;</em>
              </p>
            </div>
          </div>
          <div className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--red, #ef4444)" }} className="text-lg font-bold mt-0.5">2</span>
            <div>
              <strong>Separar sujeto y predicado con coma</strong>,
              especialmente cuando el sujeto es extenso.
              <p className="text-white/60 mt-1">
                &#x274C; <em>&quot;La sentencia dictada por la Corte
                Suprema<strong>,</strong> fue injusta.&quot;</em>
              </p>
            </div>
          </div>
          <div className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--red, #ef4444)" }} className="text-lg font-bold mt-0.5">3</span>
            <div>
              <strong>Subordinación excesiva</strong> que dificulta la
              comprensión.
              <p className="text-white/60 mt-1">
                Procura oraciones breves y concretas; finaliza con punto antes
                de encadenar demasiadas ideas.
              </p>
            </div>
          </div>
          <div className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--red, #ef4444)" }} className="text-lg font-bold mt-0.5">4</span>
            <div>
              <strong>Incisos confusos o mal ubicados</strong> que generan
              ambigüedades en la idea.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  /* 10 */ {
    title: "Recomendaciones finales",
    content: (
      <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed">
        <ul className="space-y-3 text-sm">
          <li className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--green)" }}>&#x2705;</span>
            <span>
              Identifica a qué te refieres (<strong>sujeto</strong>) y qué
              quieres decir sobre eso (<strong>predicado</strong>). Usa verbos
              conjugados.
            </span>
          </li>
          <li className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--green)" }}>&#x2705;</span>
            <span>
              Utiliza adecuadamente los <strong>signos de puntuación</strong>.
            </span>
          </li>
          <li className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--green)" }}>&#x2705;</span>
            <span>
              Evita ambigüedades y discordancias. Garantiza la correspondencia
              de tiempo, número y género.
            </span>
          </li>
          <li className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--green)" }}>&#x2705;</span>
            <span>
              Usa la estructura{" "}
              <strong style={{ color: "var(--cyan)" }}>
                sujeto–verbo–complemento
              </strong>{" "}
              para mayor claridad.
            </span>
          </li>
          <li className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--green)" }}>&#x2705;</span>
            <span>
              Evita oraciones demasiado largas o con subordinaciones excesivas.
            </span>
          </li>
          <li className="glass-card p-3 flex items-start gap-3">
            <span style={{ color: "var(--green)" }}>&#x2705;</span>
            <span>
              Ubica los incisos correctamente y delimítalos con sus signos de
              puntuación.
            </span>
          </li>
        </ul>
        <div className="text-center mt-4">
          <Link href="/juego" className="btn-primary">
            <span>&#x1F680;</span> ¡Pon a prueba lo aprendido!
          </Link>
        </div>
      </div>
    ),
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */
export default function ExplicacionPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [animKey, setAnimKey] = useState(0);

  const total = slides.length;

  function goTo(idx: number) {
    if (idx < 0 || idx >= total) return;
    setDirection(idx > current ? "right" : "left");
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  }

  const slide = slides[current];

  return (
    <div className="relative min-h-screen flex flex-col items-center px-4 py-8">
      <StarBackground />

      {/* Header */}
      <header className="relative z-10 w-full max-w-3xl flex items-center justify-between mb-6">
        <Link
          href="/"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          &#x2190; Inicio
        </Link>
        <span className="text-sm text-white/40">
          {current + 1} / {total}
        </span>
      </header>

      {/* Slide */}
      <main className="relative z-10 w-full max-w-3xl flex-1">
        <div
          key={animKey}
          className={direction === "right" ? "slide-in-right" : "slide-in-left"}
        >
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 glow-text"
            style={{ color: "var(--cyan)" }}
          >
            {slide.title}
          </h2>
          {slide.content}
        </div>
      </main>

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-3xl mt-8 flex items-center justify-between">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="btn-secondary text-sm disabled:opacity-20 disabled:cursor-not-allowed"
        >
          &#x2190; Anterior
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 flex-wrap justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="w-2.5 h-2.5 rounded-full transition-all cursor-pointer"
              style={{
                background:
                  i === current ? "var(--cyan)" : "rgba(255,255,255,0.2)",
                boxShadow:
                  i === current ? "0 0 8px var(--cyan)" : "none",
              }}
              aria-label={`Ir a diapositiva ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === total - 1}
          className="btn-secondary text-sm disabled:opacity-20 disabled:cursor-not-allowed"
        >
          Siguiente &#x2192;
        </button>
      </nav>
    </div>
  );
}
