// ImpactSection.jsx
import React from "react";

const PHRASES = [
  "Contribuímos para a transição energética com projetos em fontes renováveis como solar, eólica, biomassa e hidráulica.",
  "Atuamos em soluções de armazenamento de energia.",
  "Promovemos eficiência energética e apoiamos empreendedores em leilões de geração e transmissão.",
  "Participamos do mercado de carbono e da estruturação de negócios sustentáveis. Cada projeto é pensado para gerar valor econômico, social e ambiental."
];

export default function ImpactSection({ items = PHRASES }) {
  return (
    <section aria-labelledby="impactos-title" className="bg-farm-tertiary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="impactos-title"
            className="font-ibm-plex text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100"
          >
            Impactos
          </h2>
          <p className="font-ibm-plex text-xl max-w-3xl mx-auto leading-relaxed text-neutral-900 dark:text-neutral-100">
            Nosso trabalho gera impactos reais e positivos:
          </p>
        </div>

        <ul role="list" className="grid font-bold grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
          {items.map((text, idx) => (
            <li key={idx} className="text-center h-full">
              <p className="font-ibm-plex text-base md:text-lg leading-relaxed text-neutral-900 dark:text-neutral-100">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
