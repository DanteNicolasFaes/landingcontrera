'use client';

import React, { useEffect, useRef } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const WHATSAPP_MSG = encodeURIComponent('Hola, me gustaría conocer más sobre el estudio.');

const differentials = [
  { icon: '🤝', title: 'Honestidad', desc: 'Evaluamos tu caso con realismo. Si no podemos ayudarte, te lo decimos.' },
  { icon: '💬', title: 'Claridad', desc: 'Sin tecnicismos innecesarios. Entendés qué pasa en tu caso en todo momento.' },
  { icon: '🧭', title: 'Acompañamiento', desc: 'No desaparecemos después de la primera consulta. Estamos en cada etapa.' },
  { icon: '💳', title: 'Pago en cuotas', desc: 'Acceso a la justicia no debería depender de pagar todo de entrada.' },
  { icon: '🌐', title: 'Presencial y online', desc: 'Atención presencial con cita previa y consultas online, según lo que te resulte más cómodo.' },
];

export default function AboutSection() {
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
    <section id="estudio" ref={ref} className="py-24 md:py-32 bg-[#F7F4EE]" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left: Authority content */}
          <div className="lg:col-span-5 flex flex-col gap-8 reveal">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] font-semibold mb-6">
                <span className="w-6 h-px bg-[#C8A96E]" />
                El estudio
              </span>
              <h2 id="about-title" className="section-title font-serif text-[#1C2B4A] mb-6">
                Abogados que<br />
                <span className="italic font-light text-[#5A6475]">escuchan primero.</span>
              </h2>
              <p className="text-[15px] text-[#5A6475] leading-relaxed mb-4">
                <strong className="text-[#1C2B4A] font-semibold">Marcela Contrera</strong> dirige el estudio desde hace más de 20 años, especializándose en conflictos que afectan directamente la vida de las personas: su familia, su patrimonio, su trabajo.
              </p>
              <p className="text-[15px] text-[#5A6475] leading-relaxed mb-4">
                El equipo trabaja de forma colaborativa, incorporando colegas especialistas cuando el caso lo requiere —especialmente en materia penal— para garantizar la mejor atención posible.
              </p>
              <p className="text-[15px] text-[#5A6475] leading-relaxed">
                La atención es personalizada desde la primera consulta. No somos un estudio masivo. Cada caso importa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.open(getWhatsAppUrl(WHATSAPP_MSG), '_blank', 'noopener,noreferrer'); }}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1C2B4A] hover:bg-[#2A3F6A] text-white text-[12px] font-semibold uppercase tracking-widest px-7 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 shadow-navy"
              >
                Conocer el estudio
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1C2B4A]/[0.08]">
              {[
                { num: '+20', label: 'años' },
                { num: 'Varias', label: 'áreas' },
                { num: '1 día', label: 'respuesta' },
              ]?.map((m) => (
                <div key={m?.label} className="text-center">
                  <div className="font-serif text-3xl text-[#1C2B4A] font-medium">{m?.num}</div>
                  <div className="text-[11px] text-[#5A6475] uppercase tracking-wide mt-1">{m?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Differentials */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials?.map((d, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} spotlight-card bg-white border border-[#1C2B4A]/[0.06] rounded-sm p-6 hover:border-[#C8A96E]/30 transition-all duration-300 card-lift ${i === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#F7F4EE] border border-[#1C2B4A]/[0.06] flex items-center justify-center text-xl flex-shrink-0">
                      <span role="img" aria-label={d?.title}>{d?.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-[#1C2B4A] font-medium text-base mb-1.5">{d?.title}</h3>
                      <p className="text-[13px] text-[#5A6475] leading-relaxed">{d?.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}