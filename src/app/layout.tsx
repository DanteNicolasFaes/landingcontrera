import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Marcela Contrera & Asoc. | Abogada en Derecho de Familia, Sucesiones y Laboral',
  description: 'Asesoramiento legal en derecho de familia, sucesiones, accidentes de tránsito y derecho laboral. Atención presencial con cita previa y consultas por WhatsApp.',
  keywords: 'abogada familia argentina, sucesiones abogado, accidente tránsito abogado, derecho laboral despido, estudio jurídico',
  openGraph: {
    title: 'Marcela Contrera & Asoc. | Abogada en Derecho de Familia, Sucesiones y Laboral',
    description: 'Asesoramiento legal en derecho de familia, sucesiones y derecho laboral. Consultas por WhatsApp y atención presencial con cita previa.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Marcela Contrera & Asoc.",
              "description": "Estudio jurídico con asesoramiento en derecho de familia, sucesiones, accidentes de tránsito y derecho laboral.",
              "areaServed": "Argentina",
              "availableLanguage": "Spanish",
              "serviceType": [
                "Derecho de Familia",
                "Sucesiones",
                "Accidentes de Tránsito",
                "Derecho Laboral"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuánto cuesta la primera consulta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La evaluación inicial de tu caso no tiene costo. En esa instancia analizamos la situación, te explicamos las opciones disponibles y, si decidís continuar, acordamos los honorarios de forma clara antes de avanzar."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Atienden en todo el país o solo en forma local?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Atendemos de forma presencial en nuestra sede y también en forma online por videollamada. Para la representación legal en procesos judiciales, operamos en la jurisdicción correspondiente al caso."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto tarda un divorcio en Argentina?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un divorcio de mutuo acuerdo puede resolverse en pocas semanas si hay acuerdo en todos los puntos (bienes, hijos, alimentos). Un divorcio contencioso puede extenderse varios meses. En la consulta inicial te damos una estimación realista según tu situación."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué necesito para iniciar una sucesión?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para iniciar una sucesión necesitás el acta de defunción, el DNI del fallecido y documentación básica de los herederos. Si hay bienes inmuebles, los títulos de propiedad. En la consulta te orientamos sobre qué reunir según el caso específico."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Puedo reclamar si el accidente fue hace varios meses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, pero el tiempo importa. En Argentina los plazos de prescripción para reclamos por accidentes de tránsito son de 3 años desde el hecho. No esperes más tiempo del necesario. Consultá tu caso para evaluar si todavía estás a tiempo."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué pasa si trabajé en negro y me despidieron?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El trabajo no registrado tiene consecuencias para el empleador. Podés reclamar la indemnización por despido más multas por la falta de registro. Es uno de los casos más frecuentes en derecho laboral y hay precedentes muy favorables para el trabajador."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Pueden ayudarme en un caso penal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El derecho penal no es el área principal del estudio, pero si tu situación lo requiere, te orientamos y derivamos a un colega penalista de confianza. No te dejamos sin respuesta."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cómo son los honorarios y las formas de pago?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Los honorarios se acuerdan antes de empezar, de forma clara y sin sorpresas. Ofrecemos pago en cuotas para facilitar el acceso al asesoramiento. En algunos casos como accidentes, los honorarios se cobran sobre el resultado obtenido."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}