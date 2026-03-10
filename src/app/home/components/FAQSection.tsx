'use client';

import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: '¿Cuánto cuesta la primera consulta?',
    a: 'La evaluación inicial de tu caso no tiene costo. En esa instancia analizamos la situación, te explicamos las opciones disponibles y, si decidís continuar, acordamos los honorarios de forma clara antes de avanzar.',
  },
  {
    q: '¿Atienden en todo el país o solo en forma local?',
    a: 'Atendemos de forma presencial en nuestra sede y también en forma online por videollamada. Para la representación legal en procesos judiciales, operamos en la jurisdicción correspondiente al caso.',
  },
  {
    q: '¿Cuánto tarda un divorcio en Argentina?',
    a: 'Un divorcio de mutuo acuerdo puede resolverse en pocas semanas si hay acuerdo en todos los puntos (bienes, hijos, alimentos). Un divorcio contencioso puede extenderse varios meses. En la consulta inicial te damos una estimación realista según tu situación.',
  },
  {
    q: '¿Qué necesito para iniciar una sucesión?',
    a: 'Para iniciar una sucesión necesitás el acta de defunción, el DNI del fallecido y documentación básica de los herederos. Si hay bienes inmuebles, los títulos de propiedad. En la consulta te orientamos sobre qué reunir según el caso específico.',
  },
  {
    q: '¿Puedo reclamar si el accidente fue hace varios meses?',
    a: 'Sí, pero el tiempo importa. En Argentina los plazos de prescripción para reclamos por accidentes de tránsito son de 3 años desde el hecho. No esperes más tiempo del necesario. Consultá tu caso para evaluar si todavía estás a tiempo.',
  },
  {
    q: '¿Qué pasa si trabajé en negro y me despidieron?',
    a: 'El trabajo no registrado tiene consecuencias para el empleador. Podés reclamar la indemnización por despido más multas por la falta de registro. Es uno de los casos más frecuentes en derecho laboral y hay precedentes muy favorables para el trabajador.',
  },
  {
    q: '¿Pueden ayudarme en un caso penal?',
    a: 'El derecho penal no es el área principal del estudio, pero si tu situación lo requiere, te orientamos y derivamos a un colega penalista de confianza. No te dejamos sin respuesta.',
  },
  {
    q: '¿Cómo son los honorarios y las formas de pago?',
    a: 'Los honorarios se acuerdan antes de empezar, de forma clara y sin sorpresas. Ofrecemos pago en cuotas para facilitar el acceso al asesoramiento. En algunos casos como accidentes, los honorarios se cobran sobre el resultado obtenido.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32 bg-[#0F1923]" aria-labelledby="faq-title">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-14 reveal text-center">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] font-semibold mb-4">
            <span className="w-6 h-px bg-[#C8A96E]" />
            Preguntas frecuentes
            <span className="w-6 h-px bg-[#C8A96E]" />
          </span>
          <h2 id="faq-title" className="section-title font-serif text-white">
            Dudas frecuentes<br />
            <span className="italic font-light text-white/40">respondidas con claridad.</span>
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} faq-item ${openIndex === i ? 'open' : ''} bg-[#162238] border border-white/[0.06] rounded-sm overflow-hidden hover:border-[#C8A96E]/20 transition-colors duration-300`}
            >
              <button
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-serif text-white font-medium text-base leading-snug flex-1">
                  {faq.q}
                </span>
                <span
                  className={`faq-icon flex-shrink-0 w-6 h-6 rounded-sm bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#C8A96E] mt-0.5 ${openIndex === i ? 'rotate-45' : ''} transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${i}`}
                className={`faq-answer ${openIndex === i ? 'open' : ''} px-6`}
                role="region"
              >
                <div className="pb-6 border-t border-white/[0.05] pt-4">
                  <p className="text-[14px] text-white/55 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}