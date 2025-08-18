// import AboutHero from './components/AboutHero';
// import { CultureSection } from './components/CultureSection';
// import { LeadershipSection } from './components/LeadershipSection';
// import { MissionSection } from './components/MissionSection';
// import { PartnersSection } from './components/PartnersSection';
// import { StatsSection } from './components/StatsSection';
// import { StoryTimeline } from './components/StoryTimeline';
// import { ValuesSection } from './components/ValuesSection';


// export default function AboutPage() {
//   return (
//     <div className="bg-gray-900 text-white">
//       <AboutHero />
//        <MissionSection />
//       <ValuesSection />
//       <StoryTimeline />
//       <StatsSection />
//       <LeadershipSection />
//       <CultureSection />
//       <PartnersSection />
//     </div>
//   );
// }

import { Metadata } from 'next';
import AboutHero from './components/AboutHero';
import { CultureSection } from './components/CultureSection';
import { LeadershipSection } from './components/LeadershipSection';
import { MissionSection } from './components/MissionSection';
import { PartnersSection } from './components/PartnersSection';
import { StatsSection } from './components/StatsSection';
import { StoryTimeline } from './components/StoryTimeline';
import { ValuesSection } from './components/ValuesSection';

export const metadata: Metadata = {
  title: 'About Sendexa | Revolutionizing African Business Communications',
  description: 'Discover Sendexa - the leading African communications platform. Learn about our mission, values, leadership team, and how we\'re transforming business communications across the continent.',
  keywords: [
    'Sendexa',
    'African communications',
    'business messaging',
    'SMS API Africa',
    'OTP services',
    'enterprise communications',
    'African tech company',
    'communication infrastructure'
  ],
  openGraph: {
    title: 'About Sendexa | Building Africa\'s Communication Future',
    description: 'Learn about Sendexa\'s journey, mission, and the team revolutionizing business communications across Africa.',
    url: 'https://sendexa.co/about',
    siteName: 'Sendexa',
    images: [
      {
        url: 'https://sendexa.co/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Sendexa Team Building Communication Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sendexa | Revolutionizing African Business Communications',
    description: 'Discover how Sendexa is transforming business communications across Africa with innovative solutions.',
    images: ['https://sendexa.co/images/twitter-about.jpg'],
  },
  alternates: {
    canonical: 'https://sendexa.co/about',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sendexa",
    "url": "https://sendexa.co",
    "logo": "https://sendexa.co/images/logo.svg",
    "description": "Sendexa provides enterprise-grade communication solutions for businesses across Africa, including SMS, voice, and verification services.",
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "Collins Joe"
      },
      {
        "@type": "Person",
        "name": "Kane Vidzro"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Communication Avenue",
      "addressLocality": "Accra",
      "addressRegion": "Greater Accra",
      "postalCode": "GA123",
      "addressCountry": "GH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233-551196764",
      "contactType": "customer service",
      "email": "info@sendexa.co",
      "areaServed": "Africa"
    },
    "sameAs": [
      "https://twitter.com/sendexa",
      "https://linkedin.com/company/sendexa",
      "https://facebook.com/sendexa"
    ]
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <StoryTimeline />
      <StatsSection />
      <LeadershipSection />
      <CultureSection />
      <PartnersSection />
    </div>
  );
}