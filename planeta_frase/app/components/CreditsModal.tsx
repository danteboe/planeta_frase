"use client";

interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreditsModal({ isOpen, onClose }: CreditsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-white/50 hover:text-white transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          &times;
        </button>

        <h2
          className="text-2xl font-bold mb-6 glow-text"
          style={{ color: "var(--cyan)" }}
        >
          Acerca de Planeta Frase
        </h2>

        <div className="space-y-5 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold text-base mb-1" style={{ color: "var(--gold)" }}>
              Recurso digital elaborado por
            </h3>
            <p className="text-white/90">Juan David Torres Albarracín</p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-1" style={{ color: "var(--gold)" }}>
              Contenido basado en
            </h3>
            <p className="text-white/80 mb-2">
              Recurso sobre <strong>La oración</strong>, elaborado por Angie Mojica para el
              Centro de Español de la Universidad de los Andes (LEO).
            </p>
            <a
              href="https://leo.uniandes.edu.co/la-oracion/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors"
              style={{ color: "var(--cyan)" }}
            >
              leo.uniandes.edu.co/la-oracion/
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-1" style={{ color: "var(--gold)" }}>
              Preguntas basadas en
            </h3>
            <p className="text-white/80 mb-2">
              Conjunto de ejercicios personalizados sobre la oración, elaborados por
              LEO&nbsp;Uniandes.
            </p>
            <a
              href="https://leo.uniandes.edu.co/conjunto-la-oracion/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors"
              style={{ color: "var(--cyan)" }}
            >
              leo.uniandes.edu.co/conjunto-la-oracion/
            </a>
          </div>

          <div
            className="p-3 rounded-lg text-xs text-white/60 leading-relaxed"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <p>
              Los contenidos originales son propiedad de la Universidad de los
              Andes y del Centro de Español LEO. Este recurso digital los
              referencia y reconoce conforme a sus licencias de uso. Uso
              exclusivamente educativo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
