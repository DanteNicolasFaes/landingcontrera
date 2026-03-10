import React from 'react';

const items = [
  { icon: '⚖️', label: 'DERECHO DE FAMILIA' },
  { icon: '📋', label: 'SUCESIONES' },
  { icon: '🚗', label: 'ACCIDENTES DE TRÁNSITO' },
  { icon: '💼', label: 'DERECHO LABORAL' },
  { icon: '🤝', label: 'ATENCIÓN PERSONALIZADA' },
  { icon: '💳', label: 'PAGO EN CUOTAS' },
  { icon: '🌐', label: 'PRESENCIAL Y ONLINE' },
  { icon: '⏱️', label: 'RESPUESTA EN EL DÍA' },
];

export default function TickerSection() {
  return (
    <div className="overflow-hidden bg-[#162238] border-y border-white/[0.04] py-5" aria-hidden="true">
      <div className="flex w-max animate-ticker">
        {[...items, ...items]?.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-white/35 text-[10px] tracking-[0.2em] uppercase font-semibold mx-8 whitespace-nowrap"
          >
            <span className="text-base">{item?.icon}</span>
            {item?.label}
            <span className="w-1 h-1 rounded-full bg-[#C8A96E]/40 ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
}