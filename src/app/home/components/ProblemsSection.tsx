'use client';

import React, { useEffect, useRef } from 'react';

const problems = [
  {
    icon: '👨‍👩‍👧',
    title: 'Tu familia está en crisis',
    desc: 'Separación conflictiva, disputa por la tenencia de los hijos, cuota alimentaria que no llega. Necesitás un abogado que entienda la urgencia y actúe rápido.',
    tag: 'Derecho de Familia',
    href: '#familia',
  },
  {
    icon: '🏠',
    title: 'Falleció un familiar y hay bienes en juego',
    desc: 'No sabés qué hacer con la herencia, hay desacuerdo entre herederos o no hay testamento. Cada día que pasa puede complicar el proceso.',
    tag: 'Sucesiones',
    href: '#sucesiones',
  },
  {
    icon: '🚗',
    title: 'Tuviste un accidente y no sabés qué reclamar',
    desc: 'La aseguradora dilata, no te quieren pagar o la oferta es irrisoria. Tenés derecho a una indemnización justa y el tiempo para reclamar tiene límite.',
    tag: 'Accidentes',
    href: '#accidentes',
  },
  {
    icon: '💼',
    title: 'Te despidieron o trabajás en negro',
    desc: 'Un despido sin causa, liquidación incorrecta, trabajo no registrado o acoso laboral. Tus derechos existen aunque no los hayas ejercido aún.',
    tag: 'Laboral',
    href: '#laboral',
  },
];

export default function ProblemsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    ref?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#F7F4EE] bg-grid-lines" aria-labelledby="problems-title">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] font-semibold mb-4">
            <span className="w-6 h-px bg-[#C8A96E]" />
            Situaciones frecuentes
          </span>
          <h2 id="problems-title" className="section-title font-serif text-[#1C2B4A]">
            ¿Te encontrás<br />
            <span className="italic font-light text-[#5A6475]">en alguna de estas situaciones?</span>
          </h2>
        </div>

        {/* Cards grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems?.map((p, i) => (
            <a
              key={i}
              href={p?.href}
              className={`reveal reveal-delay-${i + 1} group spotlight-card card-lift block bg-white border border-[#1C2B4A]/[0.06] rounded-sm p-8 hover:border-[#C8A96E]/30 transition-all duration-300 ${i === 0 ? 'md:row-span-1' : ''}`}
            >
              <div className="flex flex-col h-full gap-5">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-sm bg-[#F7F4EE] border border-[#1C2B4A]/[0.08] flex items-center justify-center text-2xl group-hover:bg-[#C8A96E]/[0.08] group-hover:border-[#C8A96E]/20 transition-all duration-300">
                    <span role="img" aria-label={p?.tag}>{p?.icon}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#C8A96E] font-semibold border border-[#C8A96E]/25 px-2 py-1 rounded-sm bg-[#C8A96E]/[0.06]">
                    {p?.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#1C2B4A] font-medium mb-3 leading-snug group-hover:text-[#1C2B4A] transition-colors">
                    {p?.title}
                  </h3>
                  <p className="text-[14px] text-[#5A6475] leading-relaxed">
                    {p?.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-auto text-[12px] font-semibold text-[#C8A96E] group-hover:gap-3 transition-all duration-300">
                  Ver más sobre este tema
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}