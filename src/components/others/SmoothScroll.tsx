'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializa o Lenis
    const lenis = new Lenis({
      duration: 1.2, // Duração do efeito de scroll (em segundos)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Função de transição suave
      smoothWheel: true, // Ativa o scroll suave no mouse
    });

    // Função de loop que atualiza o Lenis a cada frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpa a instância quando o componente é desmontado
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}