import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://sijifutravel.com';

const locales = [
  { code: 'zh-CN', hreflang: 'zh-CN', name: '简体中文', region: 'CN' },
  { code: 'zh-TW', hreflang: 'zh-TW', name: '繁體中文', region: 'TW' },
  { code: 'en', hreflang: 'en', name: 'English', region: 'US' },
  { code: 'fr', hreflang: 'fr', name: 'Français', region: 'FR' },
  { code: 'de', hreflang: 'de', name: 'Deutsch', region: 'DE' },
  { code: 'es', hreflang: 'es', name: 'Español', region: 'ES' },
  { code: 'ja', hreflang: 'ja', name: '日本語', region: 'JP' },
  { code: 'ko', hreflang: 'ko', name: '한국어', region: 'KR' },
  { code: 'vi', hreflang: 'vi', name: 'Tiếng Việt', region: 'VN' },
  { code: 'th', hreflang: 'th', name: 'ไทย', region: 'TH' },
  { code: 'ms', hreflang: 'ms', name: 'Bahasa Melayu', region: 'MY' },
  { code: 'id', hreflang: 'id', name: 'Bahasa Indonesia', region: 'ID' },
  { code: 'tl', hreflang: 'tl', name: 'Filipino', region: 'PH' },
  { code: 'ru', hreflang: 'ru', name: 'Русский', region: 'RU' },
  { code: 'it', hreflang: 'it', name: 'Italiano', region: 'IT' },
  { code: 'pt', hreflang: 'pt', name: 'Português', region: 'PT' },
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: '北京旅行社 | 四季福旅行社 - 专注北京团队游与定制游',
    template: '%s | 北京四季福旅行社',
  },
  description: '北京旅行社首选——四季福旅行社，专注北京团队游与定制游十余年。50,000+游客信赖，专业中英文双语导游，提供故宫、长城、胡同等经典线路，立即咨询定制您的北京之旅。',
  keywords: [
    // 中文核心词
    '北京旅游',
    '北京旅行社',
    '北京旅行社推荐',
    '北京团队游',
    '北京定制游',
    '北京私人团',
    '北京深度游',
    '北京文化游',
    '北京美食游',
    '北京导游',
    '北京五日游',
    '北京长城',
    '北京故宫',
    '故宫',
    '颐和园',
    '天坛',
    '北京胡同',
    '北京旅游攻略',
    '北京旅行团',
    '北京自由行',
    // 繁体中文（港澳台、新马华人）
    '北京旅遊',
    '北京旅行社',
    '北京旅行團',
    '北京定製遊',
    '北京私人團',
    '北京深度遊',
    // 英文关键词（东南亚、菲律宾、印尼、越南、泰国）
    'Beijing tours',
    'Beijing travel agency',
    'Beijing private tour',
    'Beijing Great Wall tour',
    'China tours for Chinese speakers',
    'Mandarin speaking Beijing tour guide',
    'Beijing cultural tour',
    'China travel agency',
    'Great Wall tour from Singapore',
    'Great Wall tour from Malaysia',
    'Great Wall tour from Philippines',
    'Great Wall tour from Indonesia',
    'China tour for overseas Chinese',
    'Private Beijing tour',
    'Custom Beijing itinerary',
    // 品牌词
    '四季福旅行社',
    '北京四季福',
  ],
  authors: [{ name: '四季福旅行社', url: 'https://sijifutravel.com' }],
  creator: '四季福旅行社',
  publisher: '四季福旅行社',
  category: 'Travel & Tourism',
  classification: 'Travel Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // 需要替换为您的 Google 验证码
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: locales.filter(l => l.code !== 'zh-CN').map(l => l.hreflang),
    url: BASE_URL,
    siteName: '北京四季福旅行社',
    title: '北京旅行社 | 四季福旅行社 - 专注北京团队游与定制游',
    description: '北京旅行社首选——四季福旅行社，专注北京团队游与定制游十余年。50,000+游客信赖，专业中英文双语导游，提供故宫、长城、胡同等经典线路。',
    images: [
      {
        url: '/素材/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: '北京四季福旅行社 - 京城之旅，四季如福',
        type: 'image/jpeg',
      },
      {
        url: '/素材/四季福员工合影_final.png',
        width: 928,
        height: 1152,
        alt: '北京四季福旅行社团队',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sijifutravel',
    creator: '@sijifutravel',
    title: '北京旅行社 | 四季福旅行社 - 专注北京团队游与定制游',
    description: '北京旅行社首选——四季福旅行社，专注北京团队游与定制游十余年。专业中英文双语导游，提供故宫、长城、胡同等经典线路。',
    images: {
      url: '/素材/hero-bg.jpg',
      alt: '北京四季福旅行社',
    },
  },
  facebook: {
    appId: 'YOUR_FACEBOOK_APP_ID', // 可选：Facebook App ID
  },
  alternates: {
    canonical: BASE_URL,
    languages: Object.fromEntries(locales.map(l => [l.hreflang, `${BASE_URL}?lang=${l.code}`])),
    types: {
      'text/html': BASE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    nocache: false,
    noimageindex: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sijifutravel.com/#organization",
        "name": "Beijing Four Seasons Fortune Travel",
        "alternateName": "Four Seasons Fortune Travel",
        "url": "https://sijifutravel.com",
        "logo": "https://sijifutravel.com/素材/logo.png",
        "description": "Expert Beijing tours and custom itineraries for global travelers. 10+ years experience, 50,000+ satisfied travelers, professional bilingual guides.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Beijing",
          "addressCountry": "CN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.9042,
          "longitude": 116.4074
        },
        "telephone": "+86-10-1234-5678",
        "email": "info@sijifutravel.com",
        "sameAs": [
          "https://www.facebook.com/sijifutravel",
          "https://www.instagram.com/sijifutravel",
          "https://www.youtube.com/sijifutravel"
        ]
      },
      {
        "@type": "TravelAgency",
        "@id": "https://sijifutravel.com/#travelagency",
        "name": "Beijing Four Seasons Fortune Travel",
        "url": "https://sijifutravel.com",
        "parentOrganization": { "@id": "https://sijifutravel.com/#organization" },
        "description": "Expert Beijing tours and custom itineraries",
        "areaServed": {
          "@type": "City",
          "name": "Beijing"
        },
        "priceRange": "$$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "21:00"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sijifutravel.com/#website",
        "url": "https://sijifutravel.com",
        "name": "Beijing Four Seasons Fortune Travel",
        "publisher": { "@id": "https://sijifutravel.com/#organization" },
        "description": "Expert Beijing tours and custom itineraries for global travelers",
        "inLanguage": ["zh-CN", "en"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://sijifutravel.com/?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://sijifutravel.com/",
        "url": "https://sijifutravel.com/",
        "name": "Beijing Four Seasons Fortune Travel",
        "isPartOf": { "@id": "https://sijifutravel.com/#website" },
        "description": "Expert Beijing tours and custom itineraries",
        "about": { "@id": "https://sijifutravel.com/#organization" },
        "mainEntity": { "@id": "https://sijifutravel.com/#travelagency" }
      }
    ]
  };

  return (
    <html lang="zh-CN">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7BBBB6S3E7"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7BBBB6S3E7');
        ` }} />
        {/* Hreflang tags for all locales */}
        <link rel="canonical" href={BASE_URL} />
        {locales.map((locale) => (
          <link
            key={locale.hreflang}
            rel="alternate"
            hrefLang={locale.hreflang}
            href={`${BASE_URL}?lang=${locale.code}`}
          />
        ))}
        {/* Default to x-default for the main page */}
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
        {/* Geo tags */}
        <meta name="geo.region" content="CN" />
        <meta name="geo.placename" content="Beijing, China" />
        <meta name="geo.position" content="39.9042;116.4074" />
        <meta name="ICBM" content="39.9042, 116.4074" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
