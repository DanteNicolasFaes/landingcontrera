'use client';

import React, { useState, useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '5491100000000';
const WHATSAPP_MSG = encodeURIComponent('Hola, quiero hacer una consulta legal.');

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ nombre: '', email: '', consulta: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point — connect to your email/CRM service here
    setSubmitted(true);
  };

  return (
    <section id="contacto" ref={ref} className="py-24 md:py-32 bg-[#0F1923]" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left: Contact info */}
          <div className="flex flex-col gap-8 reveal">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] font-semibold mb-4">
                <span className="w-6 h-px bg-[#C8A96E]" />
                Contacto
              </span>
              <h2 id="contact-title" className="section-title font-serif text-white mb-4">
                Estamos<br />
                <span className="italic font-light text-white/40">disponibles.</span>
              </h2>
              <p className="text-[15px] text-white/50 leading-relaxed max-w-sm">
                El canal más rápido es WhatsApp. También ofrecemos atención presencial con cita previa y consultas online.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#162238] border border-white/[0.06] rounded-sm p-5 hover:border-[#25D366]/30 transition-all duration-300 card-lift"
              >
                <div className="w-10 h-10 rounded-sm bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] text-white/30 uppercase tracking-widest mb-0.5">WhatsApp</div>
                  <div className="text-white font-medium text-[14px]">Canal principal de contacto</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-4 bg-[#162238] border border-white/[0.06] rounded-sm p-5">
                <div className="w-10 h-10 rounded-sm bg-[#C8A96E]/10 border border-[#C8A96E]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl" role="img" aria-label="Horario">🕐</span>
                </div>
                <div>
                  <div className="text-[11px] text-white/30 uppercase tracking-widest mb-0.5">Horario de atención</div>
                  <div className="text-white font-medium text-[14px]">Lunes a viernes · 13:00 a 19:00</div>
                </div>
              </div>

              {/* Modality */}
              <div className="flex items-center gap-4 bg-[#162238] border border-white/[0.06] rounded-sm p-5">
                <div className="w-10 h-10 rounded-sm bg-[#C8A96E]/10 border border-[#C8A96E]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl" role="img" aria-label="Modalidad">🌐</span>
                </div>
                <div>
                  <div className="text-[11px] text-white/30 uppercase tracking-widest mb-0.5">Modalidad</div>
                  <div className="text-white font-medium text-[14px]">Atención presencial con cita previa y consultas online</div>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-4 bg-[#162238] border border-white/[0.06] rounded-sm p-5">
                <div className="w-10 h-10 rounded-sm bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                </div>
                <div>
                  <div className="text-[11px] text-white/30 uppercase tracking-widest mb-0.5">Tiempo de respuesta</div>
                  <div className="text-white font-medium text-[14px]">Dentro del día hábil</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Optional form */}
          <div className="reveal reveal-delay-2">
            <div className="bg-[#162238] border border-white/[0.06] rounded-sm p-8">
              <h3 className="font-serif text-white text-xl font-medium mb-2">Dejanos tu consulta</h3>
              <p className="text-[13px] text-white/40 mb-6">También podés escribirnos directamente por WhatsApp si preferís una respuesta más rápida.</p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4" role="img" aria-label="Éxito">✅</div>
                  <p className="font-serif text-white text-lg font-medium mb-2">¡Consulta recibida!</p>
                  <p className="text-[13px] text-white/50">Te respondemos dentro del día hábil.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="nombre" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full bg-[#0F1923] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#C8A96E]/40 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0F1923] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#C8A96E]/40 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="consulta" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">
                      Consultá brevemente
                    </label>
                    <textarea
                      id="consulta"
                      required
                      rows={4}
                      value={formData.consulta}
                      onChange={(e) => setFormData({ ...formData, consulta: e.target.value })}
                      className="w-full bg-[#0F1923] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#C8A96E]/40 transition-colors resize-none"
                      placeholder="Describí brevemente tu situación..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#C8A96E] hover:bg-[#D9BE8A] text-[#0F1923] font-semibold text-[12px] uppercase tracking-widest py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 shadow-gold"
                  >
                    Enviar consulta
                  </button>
                  <p className="text-[11px] text-white/25 text-center">
                    Para respuesta inmediata, escribinos directamente por WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}