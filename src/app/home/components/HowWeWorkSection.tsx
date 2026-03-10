'use client';

import React, { useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '5491100000000';
const WHATSAPP_MSG = encodeURIComponent('Hola, quiero hacer una consulta inicial.');

const steps = [
  {
    num: '01',
    title: 'Primera consulta',
    desc: 'Nos contactás por WhatsApp o en forma presencial. Escuchamos tu situación sin apuro, hacemos las preguntas necesarias y evaluamos el caso con honestidad.',
    detail: 'Sin costo de evaluación inicial.',
    icon: '💬',
  },
  {
    num: '02',
    title: 'Diagnóstico y estrategia',
    desc: 'Te explicamos qué opciones tenés, cuáles son los caminos posibles, los tiempos estimados y los costos. Todo claro, sin promesas que no podamos cumplir.',
    detail: 'Información real, no lo que querés escuchar.',
    icon: '🧭',
  },
  {
    num: '03',
    title: 'Acompañamiento hasta el resultado',
    desc: 'Si decidís avanzar, nos encargamos del proceso completo. Estamos disponibles para informarte en cada etapa. No desaparecemos una vez firmado el contrato.',
    detail: 'Atención directa con la abogada a cargo.',
    icon: '⚖️',
  },
];

export default function HowWeWorkSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="como-trabajamos" ref={ref} className="py-24 md:py-32 bg-[#F7F4EE] border-t border-[#1C2B4A]/[0.06]" aria-labelledby="how-title">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] font-semibold mb-4">
              <span className="w-6 h-px bg-[#C8A96E]" />
              Cómo trabajamos
            </span>
            <h2 id="how-title" className="section-title font-serif text-[#1C2B4A]">
              Tres pasos para<br />
              <span className="italic font-light text-[#5A6475]">resolver tu caso.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-1 flex items-end">
            <p className="text-[15px] text-[#5A6475] leading-relaxed max-w-sm">
              Atendemos de lunes a viernes de 13:00 a 19:00. Respondemos dentro del día hábil. Presencial u online, según lo que te resulte más cómodo.
            </p>
          </div>
        </div>

        {/* Steps — horizontal layout desktop, vertical mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps?.map((step, i) => (
            <div
              key={step?.num}
              className={`reveal reveal-delay-${i + 1} relative bg-white border border-[#1C2B4A]/[0.06] rounded-sm p-8 hover:border-[#C8A96E]/30 transition-all duration-300 card-lift`}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-mono text-[11px] text-[#1C2B4A]/20 font-medium">
                {step?.num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-[#F7F4EE] border border-[#1C2B4A]/[0.08] flex items-center justify-center text-2xl mb-8">
                <span role="img" aria-label={step?.title}>{step?.icon}</span>
              </div>

              <h3 className="font-serif text-xl text-[#1C2B4A] font-medium mb-3">{step?.title}</h3>
              <p className="text-[14px] text-[#5A6475] leading-relaxed mb-5">{step?.desc}</p>

              <div className="flex items-center gap-2 pt-4 border-t border-[#1C2B4A]/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]" />
                <span className="text-[12px] text-[#C8A96E] font-medium italic font-serif">{step?.detail}</span>
              </div>

              {/* Connector line (desktop only) */}
              {i < steps?.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#C8A96E]/30" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-4 text-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1C2B4A] hover:bg-[#2A3F6A] text-white font-semibold text-[13px] uppercase tracking-widest px-10 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 shadow-navy"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Empezar con una consulta
          </a>
        </div>
      </div>
    </section>
  );
}