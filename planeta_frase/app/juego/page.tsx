"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import StarBackground from "../components/StarBackground";
import CreditsModal from "../components/CreditsModal";
import {
  selectGameQuestions,
  getReplacementQuestion,
  type Question,
} from "../data/questions";

/* ================================================================
   CONSTANTS
   ================================================================ */
const TOTAL_LEVELS = 10;
const CHECKPOINTS = [3, 6]; // After answering Q3 and Q6 correctly
const PLANET_NAMES = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Neptuno",
  "Plutón",
  "Galaxia Final",
];
const OPTION_LABELS = ["A", "B", "C", "D"];

type GamePhase =
  | "start"
  | "playing"
  | "answered-correct"
  | "answered-wrong"
  | "checkpoint-fall"
  | "won"
  | "hint-shown";

/* ================================================================
   COMPONENT
   ================================================================ */
export default function JuegoPage() {
  /* ---------- state ---------- */
  const [phase, setPhase] = useState<GamePhase>("start");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [level, setLevel] = useState(0); // 0-indexed, 0..9
  const [selected, setSelected] = useState<number | null>(null);
  const [usedIds, setUsedIds] = useState<number[]>([]);
  const [creditsOpen, setCreditsOpen] = useState(false);

  // Powers
  const [fiftyUsed, setFiftyUsed] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [skipUsed, setSkipUsed] = useState(false);
  const [eliminated, setEliminated] = useState<number[]>([]); // indexes
  const [showHint, setShowHint] = useState(false);

  /* ---------- derived ---------- */
  const currentQ: Question | undefined = questions[level];

  const lastCheckpoint = useMemo(() => {
    let cp = 0;
    for (const c of CHECKPOINTS) {
      if (level >= c) cp = c;
    }
    return cp;
  }, [level]);

  /* ---------- init game ---------- */
  const startGame = useCallback(() => {
    const selected = selectGameQuestions();
    setQuestions(selected);
    setUsedIds(selected.map((q) => q.id));
    setLevel(0);
    setSelected(null);
    setEliminated([]);
    setShowHint(false);
    setFiftyUsed(false);
    setHintUsed(false);
    setSkipUsed(false);
    setPhase("playing");
  }, []);

  /* ---------- answer ---------- */
  function handleSelect(idx: number) {
    if (phase !== "playing" || eliminated.includes(idx)) return;
    setSelected(idx);
  }

  function confirmAnswer() {
    if (selected === null || !currentQ) return;
    if (selected === currentQ.correctAnswer) {
      if (level === TOTAL_LEVELS - 1) {
        setPhase("won");
      } else {
        setPhase("answered-correct");
      }
    } else {
      setPhase("answered-wrong");
    }
  }

  function nextQuestion() {
    setSelected(null);
    setEliminated([]);
    setShowHint(false);
    setLevel((l) => l + 1);
    setPhase("playing");
  }

  function fallToCheckpoint() {
    setSelected(null);
    setEliminated([]);
    setShowHint(false);
    // re-pick questions for levels from checkpoint onward
    const kept = questions.slice(0, lastCheckpoint);
    const needed = TOTAL_LEVELS - lastCheckpoint;
    const freshPick = selectGameQuestions();
    const newQs = freshPick.filter((q) => !kept.find((k) => k.id === q.id));
    const fill = newQs.slice(0, needed);
    setQuestions([...kept, ...fill]);
    setUsedIds((prev) => [...prev, ...fill.map((q) => q.id)]);
    setLevel(lastCheckpoint);
    setPhase("playing");
  }

  /* ---------- powers ---------- */
  function useFiftyFifty() {
    if (fiftyUsed || !currentQ || phase !== "playing") return;
    setFiftyUsed(true);
    // Eliminate 2 random wrong answers
    const wrongIndices = [0, 1, 2, 3].filter(
      (i) => i !== currentQ.correctAnswer && !eliminated.includes(i)
    );
    const shuffled = wrongIndices.sort(() => Math.random() - 0.5);
    setEliminated((prev) => [...prev, shuffled[0], shuffled[1]]);
  }

  function useHint() {
    if (hintUsed || !currentQ || phase !== "playing") return;
    setHintUsed(true);
    setShowHint(true);
  }

  function useSkip() {
    if (skipUsed || !currentQ || phase !== "playing") return;
    setSkipUsed(true);
    const replacement = getReplacementQuestion(currentQ.difficulty, usedIds);
    if (replacement) {
      const newQs = [...questions];
      newQs[level] = replacement;
      setQuestions(newQs);
      setUsedIds((prev) => [...prev, replacement.id]);
    }
    setSelected(null);
    setEliminated([]);
    setShowHint(false);
  }

  /* ---------- keyboard nav ---------- */
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (phase === "playing") {
        if (e.key === "1" || e.key === "a") handleSelect(0);
        if (e.key === "2" || e.key === "b") handleSelect(1);
        if (e.key === "3" || e.key === "c") handleSelect(2);
        if (e.key === "4" || e.key === "d") handleSelect(3);
        if (e.key === "Enter" && selected !== null) confirmAnswer();
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, selected, currentQ]);

  /* ================================================================
     RENDER HELPERS
     ================================================================ */
  function renderProgressBar() {
    return (
      <div className="flex items-center gap-1 sm:gap-2 mb-6">
        {Array.from({ length: TOTAL_LEVELS }).map((_, i) => {
          let state: "completed" | "current" | "locked" = "locked";
          if (i < level) state = "completed";
          else if (i === level) state = "current";

          const isCheckpoint = CHECKPOINTS.includes(i);
          return (
            <div key={i} className="flex items-center gap-1 sm:gap-2">
              <div
                className={`progress-planet ${state} ${isCheckpoint ? "checkpoint" : ""}`}
                title={PLANET_NAMES[i]}
              >
                <span>{i + 1}</span>
              </div>
              {i < TOTAL_LEVELS - 1 && (
                <div
                  className="h-0.5 w-3 sm:w-5"
                  style={{
                    background:
                      i < level
                        ? "var(--green)"
                        : "rgba(255,255,255,0.15)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function getOptionClass(idx: number) {
    const base = "answer-btn";
    if (
      phase === "answered-correct" ||
      phase === "answered-wrong" ||
      phase === "won"
    ) {
      if (idx === currentQ?.correctAnswer) return `${base} correct`;
      if (idx === selected && idx !== currentQ?.correctAnswer)
        return `${base} incorrect`;
    }
    if (eliminated.includes(idx)) return `${base} eliminated`;
    if (idx === selected) return `${base} selected`;
    return base;
  }

  /* ================================================================
     RENDER
     ================================================================ */
  return (
    <div className="relative min-h-screen flex flex-col items-center px-4 py-6">
      <StarBackground />

      {/* Header */}
      <header className="relative z-10 w-full max-w-3xl flex items-center justify-between mb-4">
        <Link
          href="/"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          &#x2190; Inicio
        </Link>
        <button
          onClick={() => setCreditsOpen(true)}
          className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer"
        >
          &#x2139;&#xFE0F; Info
        </button>
      </header>

      <main className="relative z-10 w-full max-w-3xl flex-1 flex flex-col items-center">
        {/* ── START SCREEN ── */}
        {phase === "start" && (
          <div className="flex flex-col items-center text-center mt-12 animate-fade-in">
            <span className="text-6xl mb-4">&#x1F680;</span>
            <h1
              className="text-3xl sm:text-4xl font-bold mb-3 glow-text"
              style={{ color: "var(--cyan)" }}
            >
              Misión Planeta Frase
            </h1>
            <p className="text-white/60 mb-2 max-w-md text-sm">
              Responde 10 preguntas sobre la estructura de la oración para
              completar tu viaje por el sistema solar.
            </p>
            <div className="glass-card p-4 text-sm text-white/70 mb-6 max-w-sm text-left space-y-2">
              <p>
                <strong style={{ color: "var(--gold)" }}>Checkpoints:</strong>{" "}
                en el planeta 4 y 7 tendrás puntos de guardado. Si fallas,
                regresarás al último checkpoint.
              </p>
              <p>
                <strong style={{ color: "var(--gold)" }}>Poderes</strong> (un
                solo uso cada uno):
              </p>
              <ul className="ml-4 space-y-1">
                <li>
                  &#x1F6E1;&#xFE0F; <strong>Escudo Espacial (50/50):</strong>{" "}
                  elimina 2 opciones incorrectas.
                </li>
                <li>
                  &#x1F468;&#x200D;&#x1F680;{" "}
                  <strong>Consultar Astronauta:</strong> recibe una pista.
                </li>
                <li>
                  &#x1FA90; <strong>Cambiar de Planeta:</strong> salta la
                  pregunta por otra distinta.
                </li>
              </ul>
            </div>
            <button onClick={startGame} className="btn-primary text-lg">
              &#x1F680; Iniciar Misión
            </button>
          </div>
        )}

        {/* ── GAME PLAY ── */}
        {phase !== "start" && phase !== "won" && currentQ && (
          <div className="w-full animate-fade-in">
            {renderProgressBar()}

            {/* Planet name */}
            <p className="text-xs text-white/40 mb-1 text-center">
              Planeta {level + 1}: {PLANET_NAMES[level]}
            </p>

            {/* Question */}
            <div className="glass-card p-5 sm:p-6 mb-5">
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                {currentQ.question}
              </p>
            </div>

            {/* Hint */}
            {showHint && (
              <div
                className="glass-card p-3 mb-4 text-sm animate-fade-in flex items-start gap-2"
                style={{ borderLeft: "3px solid var(--gold)" }}
              >
                <span>&#x1F468;&#x200D;&#x1F680;</span>
                <span className="text-white/80">{currentQ.hint}</span>
              </div>
            )}

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={
                    phase !== "playing" || eliminated.includes(idx)
                  }
                  className={getOptionClass(idx)}
                >
                  <span
                    className="font-bold text-sm shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "var(--cyan)",
                    }}
                  >
                    {OPTION_LABELS[idx]}
                  </span>
                  <span className="text-sm">{opt}</span>
                </button>
              ))}
            </div>

            {/* Powers + Confirm row */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
              {/* Powers */}
              <div className="flex gap-2">
                <button
                  onClick={useFiftyFifty}
                  disabled={fiftyUsed || phase !== "playing"}
                  className="power-btn"
                >
                  <span className="text-lg">&#x1F6E1;&#xFE0F;</span>
                  50/50
                </button>
                <button
                  onClick={useHint}
                  disabled={hintUsed || phase !== "playing"}
                  className="power-btn"
                >
                  <span className="text-lg">&#x1F468;&#x200D;&#x1F680;</span>
                  Pista
                </button>
                <button
                  onClick={useSkip}
                  disabled={skipUsed || phase !== "playing"}
                  className="power-btn"
                >
                  <span className="text-lg">&#x1FA90;</span>
                  Saltar
                </button>
              </div>

              {/* Confirm / Continue */}
              {phase === "playing" && (
                <button
                  onClick={confirmAnswer}
                  disabled={selected === null}
                  className="btn-primary text-sm disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Confirmar respuesta
                </button>
              )}
              {phase === "answered-correct" && (
                <button onClick={nextQuestion} className="btn-primary text-sm">
                  Siguiente planeta &#x2192;
                </button>
              )}
              {phase === "answered-wrong" && (
                <button
                  onClick={fallToCheckpoint}
                  className="btn-primary text-sm"
                  style={{
                    background: "linear-gradient(135deg, #ef4444, #b91c1c)",
                  }}
                >
                  {lastCheckpoint === 0
                    ? "Reiniciar misión"
                    : `Volver al checkpoint (Planeta ${lastCheckpoint + 1})`}
                </button>
              )}
            </div>

            {/* Feedback */}
            {(phase === "answered-correct" || phase === "answered-wrong") && (
              <div
                className="glass-card p-4 mt-5 text-sm animate-fade-in"
                style={{
                  borderColor:
                    phase === "answered-correct"
                      ? "var(--green)"
                      : "var(--red, #ef4444)",
                  borderWidth: 2,
                }}
              >
                <p
                  className="font-bold mb-2"
                  style={{
                    color:
                      phase === "answered-correct"
                        ? "var(--green)"
                        : "var(--red, #ef4444)",
                  }}
                >
                  {phase === "answered-correct"
                    ? "¡Correcto! +"
                    : "Incorrecto"}
                </p>
                <p className="text-white/75">{currentQ.explanation}</p>
              </div>
            )}
          </div>
        )}

        {/* ── WIN SCREEN ── */}
        {phase === "won" && (
          <div className="flex flex-col items-center text-center mt-10 animate-celebrate">
            <span className="text-7xl mb-4">&#x1F31F;</span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3 glow-text-gold"
              style={{ color: "var(--gold)" }}
            >
              ¡Misión Completada!
            </h2>
            <p className="text-white/70 mb-2 max-w-md">
              Has llegado a la Galaxia Final. Ahora dominas la estructura de la
              oración.
            </p>
            {currentQ && (
              <div
                className="glass-card p-4 mt-2 mb-6 text-sm max-w-md"
                style={{ borderColor: "var(--green)", borderWidth: 2 }}
              >
                <p className="font-bold mb-1" style={{ color: "var(--green)" }}>
                  ¡Última respuesta correcta!
                </p>
                <p className="text-white/75">{currentQ.explanation}</p>
              </div>
            )}
            <div className="flex gap-4">
              <button onClick={startGame} className="btn-primary">
                &#x1F504; Jugar de nuevo
              </button>
              <Link href="/" className="btn-secondary">
                &#x2190; Inicio
              </Link>
            </div>
          </div>
        )}
      </main>

      <CreditsModal
        isOpen={creditsOpen}
        onClose={() => setCreditsOpen(false)}
      />
    </div>
  );
}
