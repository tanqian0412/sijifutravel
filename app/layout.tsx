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
    default: '北京四季福旅行社 | Four Seasons Fortune Travel - 专注北京团队游与定制游',
    template: '%s | 北京四季福旅行社',
  },
  description: '北京四季福旅行社，专注北京团队游与定制游十余年。50,000+游客选择，专业中英文双语导游。提供北京全景游、长城一日游、胡同文化游等经典线路。',
  keywords: [
    '北京旅游',
    '北京旅行社',
    '北京团队游',
    '北京定制游',
    '北京导游',
    '北京五日游',
    '北京长城',
    '故宫',
    '颐和园',
    '天坛',
    '北京胡同',
    '北京旅游攻略',
    '北京旅行团',
    'Beijing tours',
    'Beijing travel agency',
    'China travel',
    'Great Wall tour',
    'Forbidden City tour',
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
    title: '北京四季福旅行社 | 专注北京团队游与定制游',
    description: '十年深耕北京旅游，50,000+游客选择。提供北京全景游、长城一日游、胡同文化探秘等经典线路，专业中英文双语导游服务。',
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
    siteName: 'sijifutravel.com',
    localeAlternate: locales.filter(l => l.code !== 'zh-CN').map(l => l.hreflang),
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sijifutravel',
    creator: '@sijifutravel',
    title: '北京四季福旅行社 | 专注北京团队游与定制游',
    description: '十年深耕北京旅游，50,000+游客选择。专业中英文双语导游，提供北京全景游、长城一日游等经典线路。',
    images: {
      url: '/素材/hero-bg.jpg',
      alt: '北京四季福旅行社',
    },
  },
  facebook: {
    appId: 'YOUR_FACEBOOK_APP_ID', // 可选：Facebook App ID
    pageId: 'YOUR_FACEBOOK_PAGE_ID', // 可选：Facebook 主页 ID
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
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://sijifutravel.com/#organization',
        name: '北京四季福旅行社',
        alternateName: 'Four Seasons Fortune Travel',
        url: 'https://sijifutravel.com',
        logo: 'https://sijifutravel.com/素材/logo.png',
        description: '专注北京团队游与定制游，为全球游客打造难忘的京城记忆。十年深耕，50,000+游客选择，专业中英文双语导游。',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Beijing',
          addressCountry: 'CN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 39.9042,
          longitude: 116.4074,
        },
        telephone: '+86-10-1234-5678',
        email: 'info@sijifutravel.com',
        sameAs: [
          'https://www.facebook.com/sijifutravel',
          'https://www.instagram.com/sijifutravel',
          'https://www.youtube.com/sijifutravel',
        ],
      },
      {
        '@type': 'TravelAgency',
        '@id': 'https://sijifutravel.com/#travelagency',
        name: '北京四季福旅行社',
        url: 'https://sijifutravel.com',
        parentOrganization: { '@id': 'https://sijifutravel.com/#organization' },
        description: '专注北京团队游与定制游，为全球游客打造难忘的京城记忆',
        areaServed: {
          '@type': 'City',
          name: 'Beijing',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '北京旅游服务',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '团队游',
                description: '北京全景五日游、长城精华一日游、胡同文化探秘等',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '定制游',
                description: '私人定制、企业团建、家庭亲子游、蜜月婚礼',
              },
            },
          ],
        },
        priceRange: '¥¥¥',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '21:00',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://sijifutravel.com/#website',
        url: 'https://sijifutravel.com',
        name: '北京四季福旅行社 | Four Seasons Fortune Travel',
        publisher: { '@id': 'https://sijifutravel.com/#organization' },
        description: '专注北京团队游与定制游，为全球游客打造难忘的京城记忆',
        inLanguage: ['zh-CN', 'en'],
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://sijifutravel.com/?search={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sijifutravel.com/',
        url: 'https://sijifutravel.com/',
        name: '北京四季福旅行社 | Four Seasons Fortune Travel',
        isPartOf: { '@id': 'https://sijifutravel.com/#website' },
        description: '专注北京团队游与定制游，为全球游客打造难忘的京城记忆',
        about: { '@id': 'https://sijifutravel.com/#organization' },
        mainEntity: { '@id': 'https://sijifutravel.com/#travelagency' },
      },
    ],
  };

  return (
    <html lang="zh-CN">
      <head>
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
