'use client';

import React, { useEffect, useRef } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const services = [
  {
    id: 'familia',
    icon: '👨‍👩‍👧',
    title: 'Derecho de Familia',
    subtitle: 'Responsabilidad parental, régimen comunicacional y alimentos',
    cases: ['Responsabilidad parental', 'Régimen comunicacional', 'Alimentos', 'Adopción', 'Curatela'],
    trust: 'Acompañamiento en cada etapa del proceso.',
    msg: 'Hola, necesito consultar sobre Derecho de Familia.',
    span: 'md:col-span-2',
  },
  {
    id: 'sucesiones',
    icon: '📋',
    title: 'Sucesiones',
    subtitle: 'Sucesión con o sin testamento, herencias y bienes inmuebles',
    cases: ['Sucesión con testamento', 'Sucesión intestada', 'Bienes inmuebles heredados', 'Conflictos entre herederos', 'Transmisión de bienes'],
    trust: 'Proceso ordenado y claro desde el inicio.',
    msg: 'Hola, necesito consultar sobre una sucesión.',
    span: '',
  },
  {
    id: 'accidentes',
    icon: '🚗',
    title: 'Accidentes de Tránsito',
    subtitle: 'Accidentes de auto o moto, lesiones y reclamos a aseguradoras',
    cases: ['Accidentes en auto o moto', 'Atropello de peatones', 'Reclamos a aseguradoras', 'Lesiones leves y graves'],
    trust: 'Sin cargo inicial. Honorarios sobre resultado.',
    msg: 'Hola, tuve un accidente de tránsito y necesito asesoramiento.',
    span: '',
  },
  {
    id: 'laboral',
    icon: '💼',
    title: 'Derecho Laboral',
    subtitle: 'Indemnización por despido, incapacidad y acuerdos laborales',
    cases: ['Despido sin causa', 'Liquidación incorrecta', 'Indemnizaciones adeudadas', 'Acuerdos laborales', 'Reclamos ante el SECLO', 'Incapacidad laboral', 'Enfermedad inculpable'],
    trust: 'Defendemos tus derechos como trabajador.',
    msg: 'Hola, tengo una consulta laboral.',
    span: 'md:col-span-2',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll<HTMLElement>('.spotlight-card');
    const handleMouseMove = (e: MouseEvent) => {
      cards?.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    document.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="servicios" ref={ref} className="py-24 md:py-32 bg-[#0F1923]" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] font-semibold mb-4">
            <span className="w-6 h-px bg-[#C8A96E]" />
            Áreas de práctica
          </span>
          <h2 id="services-title" className="section-title font-serif text-white">
            Áreas del derecho en las que<br />
            <span className="italic font-light text-white/40">podemos ayudarte.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`reveal reveal-delay-${i + 1} spotlight-card group ${s.span} bg-[#162238] border border-white/[0.06] rounded-sm p-8 flex flex-col gap-6 hover:border-[#C8A96E]/25 transition-all duration-300`}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-sm bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl group-hover:bg-[#C8A96E]/[0.1] group-hover:border-[#C8A96E]/20 transition-all duration-500">
                  <span role="img" aria-label={s.title}>{s.icon}</span>
                </div>
                <span className="text-[10px] font-mono text-white/20">0{i + 1}</span>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white font-medium mb-1">{s.title}</h3>
                <p className="text-[12px] text-[#C8A96E]/60 font-medium uppercase tracking-wide">{s.subtitle}</p>
              </div>

              <ul className="flex flex-col gap-2 flex-1 justify-between min-h-[140px]">
                {s.cases.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-[13px] text-white/55">
                    <span className="w-1 h-1 rounded-full bg-[#C8A96E]/50 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/[0.05] pt-5 flex flex-col gap-4">
                <p className="text-[12px] text-white/40 italic font-serif">{s.trust}</p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.open(getWhatsAppUrl(encodeURIComponent(s.msg)), '_blank', 'noopener,noreferrer'); }}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#C8A96E] hover:text-[#D9BE8A] font-semibold transition-colors group-hover:gap-3 duration-300"
                >
                  Consultar por WhatsApp
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Penal note */}
        <div className="mt-6 reveal reveal-delay-5">
          <div className="spotlight-card bg-[#162238]/60 border border-white/[0.04] rounded-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-2xl" role="img" aria-label="Derecho Penal">🛡️</span>
            <div>
              <h3 className="text-white font-serif font-medium text-base mb-1">Asistencia penal mediante colegas especializados</h3>
              <p className="text-[13px] text-white/45 leading-relaxed">
                Para casos penales, trabajamos con un colega penalista de confianza. Si tu situación lo requiere, te orientamos y derivamos a la persona indicada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}