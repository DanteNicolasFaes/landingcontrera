'use client';

import React, { useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '5491100000000';
const WHATSAPP_MSG = encodeURIComponent('Hola, quiero hacer una consulta legal.');

export default function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#F7F4EE] relative overflow-hidden" aria-labelledby="cta-title">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-lines opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#C8A96E]/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] font-semibold mb-6">
            <span className="w-6 h-px bg-[#C8A96E]" />
            Empezá hoy
            <span className="w-6 h-px bg-[#C8A96E]" />
          </span>

          <h2 id="cta-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C2B4A] font-medium leading-tight tracking-tight mb-6">
            Tu consulta no tiene<br />
            <span className="italic font-light text-[#5A6475]">por qué esperar.</span>
          </h2>

          <p className="text-[16px] text-[#5A6475] leading-relaxed max-w-xl mx-auto mb-10">
            Respondemos dentro del día hábil. La evaluación inicial no tiene costo. 
            Contanos tu situación y te decimos con honestidad qué podemos hacer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#22C05E] text-white font-semibold text-[13px] uppercase tracking-widest px-10 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.4)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribir por WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 border border-[#1C2B4A]/20 hover:border-[#1C2B4A]/40 text-[#1C2B4A]/70 hover:text-[#1C2B4A] text-[13px] font-medium tracking-wide px-10 py-4 rounded-sm transition-all duration-300 bg-white/50 hover:bg-white"
            >
              Ver información de contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}