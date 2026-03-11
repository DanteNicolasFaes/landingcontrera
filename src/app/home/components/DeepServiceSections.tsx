'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceDeepSection {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  cases: string[];
  ctaMsg: string;
  ctaLabel: string;
  imageUrl: string;
  imageAlt: string;
  bgClass: string;
  textClass: string;
  accentClass: string;
  reverse?: boolean;
}

const sections: ServiceDeepSection[] = [
{
  id: 'familia-detail',
  tag: 'Derecho de Familia',
  title: 'Cuando la familia necesita un orden legal',
  subtitle: 'Divorcios, alimentos, tenencia, responsabilidad parental',
  body: 'Los conflictos familiares son de los más difíciles de atravesar. No solo porque implican emociones intensas, sino porque las decisiones que se tomen hoy afectan el futuro de todos. El estudio acompaña cada proceso con claridad y sin dramatismos innecesarios, buscando siempre la solución más ordenada y humana posible.',
  cases: ['Divorcio vincular por presentación conjunta o contencioso', 'Cuota alimentaria: fijación, aumento y ejecución', 'Régimen de comunicación con hijos', 'Responsabilidad parental y acuerdos de crianza', 'Violencia familiar: medidas cautelares y protección'],
  ctaMsg: 'Hola, necesito consultar sobre Derecho de Familia.',
  ctaLabel: 'Consultar sobre Familia',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_15222b596-1773140105247.png",
  imageAlt: 'Abogada atendiendo a una familia en consulta jurídica',
  bgClass: 'bg-[#0F1923]',
  textClass: 'text-white',
  accentClass: 'text-[#C8A96E]',
  reverse: true
},
{
  id: 'sucesiones-detail',
  tag: 'Sucesiones',
  title: 'La herencia, resuelta con orden y sin conflictos',
  subtitle: 'Transmisión de bienes, testamentos, conflictos entre herederos',
  body: 'El fallecimiento de un ser querido ya es suficientemente difícil. Que la herencia se convierta en un problema legal adicional no es inevitable. Con asesoramiento claro desde el inicio, es posible transmitir bienes de forma ordenada, resolver desacuerdos entre herederos y cerrar el proceso sin que se prolongue innecesariamente.',
  cases: ['Sucesión con testamento válido', 'Sucesión intestada (sin testamento)', 'Bienes inmuebles y vehículos en la herencia', 'Conflictos entre coherederos', 'Transmisión a menores de edad'],
  ctaMsg: 'Hola, necesito consultar sobre una sucesión.',
  ctaLabel: 'Consultar sobre Sucesiones',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1f62a12da-1773140100883.png",
  imageAlt: 'Documentos legales de sucesión y herencia sobre escritorio',
  bgClass: 'bg-[#F7F4EE]',
  textClass: 'text-[#1C2B4A]',
  accentClass: 'text-[#C8A96E]',
  reverse: false
},
{
  id: 'accidentes-detail',
  tag: 'Accidentes de Tránsito',
  title: 'Tu indemnización no debería negociarse sola',
  subtitle: 'Reclamos a aseguradoras, lesiones, incapacidades',
  body: 'Después de un accidente, las aseguradoras actúan rápido para ofrecer lo menos posible. Sin representación legal, muchas personas aceptan montos muy por debajo de lo que les corresponde. El estudio evalúa tu caso sin cargo inicial y trabaja sobre el resultado obtenido.',
  cases: ['Accidentes entre vehículos (auto, moto, camión)', 'Atropello de peatones y ciclistas', 'Lesiones leves: traumatismos, esguinces, fracturas', 'Lesiones graves e incapacidades permanentes', 'Reclamos cuando la aseguradora no responde'],
  ctaMsg: 'Hola, tuve un accidente de tránsito y necesito asesoramiento.',
  ctaLabel: 'Consultar sobre mi Accidente',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_13fffeb76-1773140103139.png",
  imageAlt: 'Accidente de tránsito en Argentina — reclamo a aseguradora',
  bgClass: 'bg-[#0F1923]',
  textClass: 'text-white',
  accentClass: 'text-[#C8A96E]',
  reverse: true
},
{
  id: 'laboral-detail',
  tag: 'Derecho Laboral',
  title: 'Si te perjudicaron en el trabajo, tenés derechos',
  subtitle: 'Despidos, indemnizaciones y acuerdos laborales',
  body: 'El derecho laboral protege al trabajador, pero esa protección solo funciona si la ejercés. Muchos empleadores cuentan con que no vas a reclamar. El estudio analiza tu situación, te explica qué corresponde y actúa para que obtengas lo que legalmente te pertenece: la indemnización correcta, el acuerdo justo o el reconocimiento de tus derechos.',
  cases: ['Despido sin causa y liquidación incorrecta', 'Indemnizaciones adeudadas o mal calculadas', 'Diferencias salariales y horas extras', 'Acuerdos laborales y homologación ante el SECLO', 'Reclamos del trabajador frente al empleador'],
  ctaMsg: 'Hola, tengo una consulta laboral.',
  ctaLabel: 'Consultar sobre mi caso Laboral',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_122dcd94c-1773140102971.png",
  imageAlt: 'Trabajador reclamando derechos laborales con asesoramiento jurídico',
  bgClass: 'bg-[#F7F4EE]',
  textClass: 'text-[#1C2B4A]',
  accentClass: 'text-[#C8A96E]',
  reverse: false
}];


export default function DeepServiceSections() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add('visible');}),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {sections.map((s) =>
      <section
        key={s.id}
        id={s.id}
        className={`py-20 md:py-28 ${s.bgClass}`}
        aria-labelledby={`${s.id}-title`}>
        
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className={`grid lg:grid-cols-2 gap-14 items-center ${s.reverse ? 'lg:grid-flow-col-dense' : ''}`}>

              {/* Text */}
              <div className={`flex flex-col gap-6 reveal ${s.reverse ? 'lg:col-start-2' : ''}`}>
                <span className={`inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold ${s.accentClass}`}>
                  <span className="w-6 h-px bg-[#C8A96E]" />
                  {s.tag}
                </span>

                <h2 id={`${s.id}-title`} className={`font-serif text-3xl md:text-4xl font-medium leading-snug ${s.textClass}`}>
                  {s.title}
                </h2>

                <p className={`text-[13px] font-semibold uppercase tracking-wide ${s.accentClass} opacity-70`}>
                  {s.subtitle}
                </p>

                <p className={`text-[15px] leading-relaxed ${s.bgClass === 'bg-[#0F1923]' ? 'text-white/55' : 'text-[#5A6475]'}`}>
                  {s.body}
                </p>

                <ul className="space-y-2.5">
                  {s.cases.map((c) =>
                <li key={c} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] mt-2 flex-shrink-0" />
                      <span className={`text-[14px] ${s.bgClass === 'bg-[#0F1923]' ? 'text-white/65' : 'text-[#5A6475]'}`}>{c}</span>
                    </li>
                )}
                </ul>

                <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.open(getWhatsAppUrl(encodeURIComponent(s.ctaMsg)), '_blank', 'noopener,noreferrer'); }}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 w-fit font-semibold text-[12px] uppercase tracking-widest px-7 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 ${
                s.bgClass === 'bg-[#0F1923]' ?
                'bg-[#C8A96E] hover:bg-[#D9BE8A] text-[#0F1923] shadow-gold' : 'bg-[#1C2B4A] hover:bg-[#2A3F6A] text-white shadow-navy'}`
                }>
                
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {s.ctaLabel}
                </a>
              </div>

              {/* Image */}
              <div className={`reveal reveal-delay-2 ${s.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                  <AppImage
                  src={s.imageUrl}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw" />
                
                  <div className={`absolute inset-0 ${s.bgClass === 'bg-[#0F1923]' ? 'bg-gradient-to-tr from-[#0F1923]/30 to-transparent' : 'bg-gradient-to-tr from-[#1C2B4A]/10 to-transparent'}`} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>);

}