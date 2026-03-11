'use client';

import React from 'react';
import AppLogo from '@/components/ui/AppLogo';


import { getWhatsAppUrl } from '@/lib/whatsapp';

const WHATSAPP_MSG = encodeURIComponent('Hola, quisiera hacer una consulta legal.');

export default function Footer() {
  return (
    <footer className="bg-[#0F1923] border-t border-white/[0.06] py-10 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Arc Browser Split Pattern */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex flex-col">
                <span className="font-serif text-white font-medium text-xl leading-tight">
                  Marcela Contrera & Asoc.
                </span>
                <span className="text-[11px] text-[#C8A96E] tracking-[0.2em] uppercase mt-1">
                  Estudio Jurídico
                </span>
              </div>
            </div>
            <p className="text-white/40 text-[13px] leading-relaxed">
              20 años acompañando personas en sus conflictos legales más importantes.
            </p>
          </div>

          {/* Right: links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium">Servicios</span>
              <div className="flex flex-col gap-2">
                {['Derecho de Familia', 'Sucesiones', 'Accidentes', 'Derecho Laboral']?.map((s) => (
                  <a key={s} href="#servicios" className="text-[13px] text-white/50 hover:text-white transition-colors font-medium">{s}</a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium">Estudio</span>
              <div className="flex flex-col gap-2">
                <a href="#estudio" className="text-[13px] text-white/50 hover:text-white transition-colors font-medium">El Estudio</a>
                <a href="#como-trabajamos" className="text-[13px] text-white/50 hover:text-white transition-colors font-medium">Cómo trabajamos</a>
                <a href="#contacto" className="text-[13px] text-white/50 hover:text-white transition-colors font-medium">Contacto</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-[12px] text-white/25">
            © 2025 Marcela Contrera & Asoc. Todos los derechos reservados. T° XVI F° 125 CASM
          </span>
          <div className="flex items-center gap-6">
            <a href="#" onClick={(e) => { e.preventDefault(); window.open(getWhatsAppUrl(WHATSAPP_MSG), '_blank', 'noopener,noreferrer'); }} rel="noopener noreferrer" className="text-[12px] text-white/40 hover:text-[#C8A96E] transition-colors font-medium cursor-pointer">
              WhatsApp
            </a>
            <span className="text-white/20 text-[12px]">Privacidad</span>
            <span className="text-white/20 text-[12px]">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}