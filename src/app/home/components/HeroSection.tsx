'use client';

import React, { useEffect, useRef } from 'react';


const WHATSAPP_NUMBER = '5491100000000';
const WHATSAPP_MSG_CONSULT = encodeURIComponent('Hola, quisiera hacer una consulta legal.');
const WHATSAPP_MSG_INFO = encodeURIComponent('Hola, quisiera obtener más información sobre sus servicios.');

const badges = [
  { icon: '⚖️', label: '20 años de experiencia' },
  { icon: '📱', label: 'Atención presencial y online' },
  { icon: '💳', label: 'Pago en cuotas' },
  { icon: '⏱️', label: 'Respuesta el mismo día' },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('.spotlight-card');
    const handleMouseMove = (e: MouseEvent) => {
      cards?.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen bg-[#0F1923] overflow-hidden flex flex-col justify-center"
      aria-label="Inicio — Marcela Contrera & Asoc."
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,169,110,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,110,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Atmospheric beams */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-8 md:px-16 lg:px-32">
        <div className="relative w-px h-full bg-white/[0.02] overflow-hidden">
          <div className="beam" />
        </div>
        <div className="relative w-px h-full bg-white/[0.02] overflow-hidden hidden md:block absolute left-1/3">
          <div className="beam beam-delay-1" />
        </div>
        <div className="relative w-px h-full bg-white/[0.02] overflow-hidden hidden lg:block absolute left-2/3">
          <div className="beam beam-delay-2" />
        </div>
        <div className="relative w-px h-full bg-white/[0.02] overflow-hidden">
          <div className="beam beam-delay-3" />
        </div>
      </div>

      {/* Glow orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#C8A96E]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#1C2B4A]/[0.3] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: Main content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#C8A96E]/20 bg-[#C8A96E]/[0.07] w-fit"
              style={{ animation: 'animationIn 0.7s ease-out 0.1s both' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]" />
              <span className="text-[11px] font-medium tracking-[0.18em] text-[#C8A96E]/90 uppercase font-sans">
                Estudio Jurídico — Argentina
              </span>
            </div>

            {/* H1 */}
            <h1
              className="hero-title font-serif text-white text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-[0.95]"
              style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}
            >
              <span className="block text-white/75 font-light italic">Abogada en derecho de familia,</span>
              <span className="block font-medium">sucesiones y</span>
              <span className="block italic text-gold-gradient" style={{
                background: 'linear-gradient(135deg, #C8A96E 0%, #D9BE8A 50%, #E8D4A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>derecho laboral.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed font-light"
              style={{ animation: 'animationIn 0.8s ease-out 0.35s both' }}
            >
              Asesoramiento legal en Argentina en familia, sucesiones, accidentes de tránsito y derecho laboral. Consultas por WhatsApp y atención presencial con cita previa.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              style={{ animation: 'animationIn 0.8s ease-out 0.5s both' }}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG_CONSULT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#C8A96E] hover:bg-[#D9BE8A] text-[#0F1923] font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 shadow-gold hover:shadow-gold-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar ahora
              </a>
              <a
                href="#servicios"
                className="group inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#C8A96E]/40 text-white/70 hover:text-white text-[13px] font-medium tracking-wide px-8 py-4 rounded-sm transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05]"
              >
                Ver servicios
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="grid grid-cols-2 gap-3 pt-4"
              style={{ animation: 'animationIn 0.8s ease-out 0.65s both' }}
            >
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="spotlight-card flex items-center gap-3 px-4 py-3 rounded-sm bg-white/[0.03] border border-white/[0.06]"
                >
                  <span className="text-lg" role="img" aria-label={badge.label}>{badge.icon}</span>
                  <span className="text-[12px] text-white/60 font-medium leading-tight">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div
            className="lg:col-span-5 hidden lg:flex flex-col gap-4"
            style={{ animation: 'animationIn 0.9s ease-out 0.7s both' }}
          >
            {/* Main visual card */}
            <div className="spotlight-card relative rounded-sm overflow-hidden bg-[#162238] border border-white/[0.06] p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A96E]/[0.06] rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-sm bg-[#C8A96E]/10 border border-[#C8A96E]/20 flex items-center justify-center">
                    <span className="text-lg" aria-hidden="true">⚖️</span>
                  </div>
                  <div>
                    <div className="text-white font-serif font-medium text-base">Marcela Contrera</div>
                    <div className="text-[11px] text-[#C8A96E]/70 tracking-wide uppercase">Abogada · 20 años</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { area: 'Derecho de Familia', color: 'bg-[#C8A96E]/80' },
                    { area: 'Sucesiones', color: 'bg-[#D9BE8A]/70' },
                    { area: 'Accidentes de Tránsito', color: 'bg-[#C8A96E]/60' },
                    { area: 'Derecho Laboral', color: 'bg-[#E8D4A0]/50' },
                  ].map((item) => (
                    <div key={item.area} className="flex items-center gap-3">
                      <div className={`h-0.5 flex-1 ${item.color} rounded-full`} />
                      <span className="text-[11px] text-white/50 font-medium min-w-fit">{item.area}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/[0.06] pt-4 flex justify-between items-center">
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Disponibilidad</div>
                    <div className="text-[12px] text-white/70 font-medium">Lun–Vie · 13:00–19:00</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                    <span className="text-[11px] text-emerald-400/80 font-medium">Disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: '20', unit: 'años', label: 'de experiencia' },
                { num: 'Varias', unit: '', label: 'áreas de práctica' },
                { num: '1', unit: 'día', label: 'tiempo de respuesta' },
              ].map((stat) => (
                <div key={stat.label} className="spotlight-card bg-[#162238] border border-white/[0.06] rounded-sm p-4 text-center">
                  <div className="font-serif text-2xl text-white font-light">
                    {stat.num}<span className="text-sm text-[#C8A96E]/70 ml-0.5">{stat.unit}</span>
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] text-white/60 uppercase tracking-widest">Explorar</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}