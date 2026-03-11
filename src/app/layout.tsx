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

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}