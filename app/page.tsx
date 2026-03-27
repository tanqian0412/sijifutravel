'use client';

import { useState, useEffect, createContext, useContext, useRef } from 'react';
import zhCN from '@/locales/zh.json';
import zhTW from '@/locales/zh-TW.json';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';
import de from '@/locales/de.json';
import es from '@/locales/es.json';
import ja from '@/locales/ja.json';
import ko from '@/locales/ko.json';
import vi from '@/locales/vi.json';
import th from '@/locales/th.json';
import ms from '@/locales/ms.json';
import id from '@/locales/id.json';
import tl from '@/locales/tl.json';
import ru from '@/locales/ru.json';
import it from '@/locales/it.json';
import pt from '@/locales/pt.json';
import Image from 'next/image';

type Locale = 'zh-CN' | 'zh-TW' | 'en' | 'fr' | 'de' | 'es' | 'ja' | 'ko' | 'vi' | 'th' | 'ms' | 'id' | 'tl' | 'ru' | 'it' | 'pt';
type Translations = typeof zhCN;

const translations: Record<Locale, Translations> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en,
  'fr': fr,
  'de': de,
  'es': es,
  'ja': ja,
  'ko': ko,
  'vi': vi,
  'th': th,
  'ms': ms,
  'id': id,
  'tl': tl,
  'ru': ru,
  'it': it,
  'pt': pt,
};

// Language configuration
const languages: { code: Locale; name: string; nativeName: string; flag: string }[] = [
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文', flag: '🇹🇼' },
  { code: 'en', name: 'English', nativeName: 'English', flag: 'EN' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'Thai', nativeName: 'ภาษาไทย', flag: '🇹🇭' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'tl', name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
];

// Detect browser language
function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'zh-CN';

  // FIRST: Check URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const urlLocale = urlParams.get('locale');
  if (urlLocale && urlLocale in translations) {
    return urlLocale as Locale;
  }

  // THEN: Fall back to browser language
  const browserLang = navigator.language.toLowerCase();

  // Check for exact match first
  if (browserLang in translations) {
    return browserLang as Locale;
  }

  // Check for language prefix match
  for (const lang of Object.keys(translations)) {
    if (browserLang.startsWith(lang.split('-')[0].toLowerCase())) {
      return lang as Locale;
    }
  }

  return 'zh-CN';
}

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'zh-CN',
  t: zhCN,
  toggleLocale: () => {},
  setLocale: () => {},
});

function useLanguage() {
  return useContext(LanguageContext);
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function WechatIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.87c-.135-.004-.272-.012-.407-.012zm-1.93 2.177c.536 0 .97.44.97.983a.976.976 0 0 1-.97.983.976.976 0 0 1-.97-.983c0-.542.434-.983.97-.983zm4.842 0c.536 0 .97.44.97.983a.976.976 0 0 1-.97.983.976.976 0 0 1-.97-.983c0-.542.434-.983.97-.983z"/>
    </svg>
  );
}

function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MailIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function GlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

function ChevronDownIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

// ─── Floating Contact Button ─────────────────────────────────────────────────
function FloatingContactButton() {
  const { t } = useLanguage();

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 group md:bottom-8 md:right-8"
    >
      <div className="relative">
        {/* Pulse ring animation */}
        <div className="absolute inset-0 rounded-full bg-[#C41E3A] animate-ping opacity-30" />
        {/* Main button */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#A01830] flex items-center justify-center shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 hover:scale-110">
          <WechatIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-lg whitespace-nowrap font-serif text-xs md:text-sm">
            {t.contact?.title || 'Contact'}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-8 border-transparent border-l-gray-900" />
          </div>
        </div>
      </div>
    </a>
  );
}

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// ─── Language Selector ─────────────────────────────────────────────────────────
function LanguageSelector({ className = '', scrolled = false }: { className?: string; scrolled?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    // Use touchend for mobile
    function handleTouchOutside(event: TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchend', handleTouchOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleTouchOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onTouchEnd={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 md:py-1.5 rounded-full text-xs md:text-sm font-serif font-medium transition-all duration-300 backdrop-blur-sm ${
          scrolled
            ? 'bg-gray-100/90 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-200'
            : 'bg-white/10 text-white hover:bg-white hover:text-gray-900 border border-white/20'
        }`}
      >
        <GlobeIcon className="w-3 h-3 md:w-4 md:h-4" />
        <span className="hidden sm:inline">{currentLang.nativeName}</span>
        <span className="sm:hidden">
          {currentLang.flag.length > 2 ? (
            currentLang.flag
          ) : (
            <span className="w-6 h-6 rounded bg-white/20 flex items-center justify-center text-xs font-bold">{currentLang.flag}</span>
          )}
        </span>
        <ChevronDownIcon className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-full mt-2 z-50 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{ minWidth: '180px' }}
      >
        <div className="py-2 max-h-64 md:max-h-80 overflow-y-auto touch-auto">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setIsOpen(false);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                setLocale(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-2.5 text-left transition-colors hover:bg-gray-50 active:bg-gray-100 ${
                locale === lang.code ? 'bg-red-50 text-[#C41E3A]' : 'text-gray-700'
              }`}
            >
              {lang.flag.length > 2 ? (
                <span className="text-lg md:text-xl">{lang.flag}</span>
              ) : (
                <span className="w-7 h-7 rounded bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">{lang.flag}</span>
              )}
              <div className="flex-1">
                <div className="font-serif text-sm">{lang.nativeName}</div>
                <div className="font-serif text-xs text-gray-400 hidden md:block">{lang.name}</div>
              </div>
              {locale === lang.code && (
                <CheckIcon className="w-4 h-4 text-[#C41E3A]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
interface NavbarProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

function Navbar({ isMusicPlaying, onToggleMusic }: NavbarProps) {
  const { locale, t, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'destinations', href: '#destinations' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-2 md:py-4'
        : 'bg-black/30 backdrop-blur-sm py-3 md:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 md:gap-4 group">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#C41E3A] to-[#A01830] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 ${scrolled ? 'shadow-primary/20' : 'shadow-white/20'}`}>
            <span className="text-white font-serif font-bold text-lg md:text-xl tracking-wider">福</span>
          </div>
          <div className="hidden sm:block">
            <div className={`font-serif font-semibold text-sm md:text-base leading-tight transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {locale === 'zh-CN' ? '四季福旅行社' : locale === 'zh-TW' ? '四季福旅行社' : (t.hero.companyName || 'Four Seasons Fortune')}
            </div>
            <div className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? 'text-gray-400' : 'text-white/60'
            }`}>
              {locale === 'zh-CN' || locale === 'zh-TW' ? '专注北京之旅' : (t.hero.companySubname || 'Beijing Travel Expert')}
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 md:gap-10">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`relative font-serif text-sm font-medium transition-colors duration-300 group ${
                scrolled ? 'text-gray-700 hover:text-[#C41E3A]' : 'text-white/90 hover:text-white'
              }`}
            >
              {t.nav[item.key as keyof typeof t.nav]}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrolled ? 'bg-[#C41E3A]' : 'bg-white'
              }`} />
            </a>
          ))}
        </div>

        {/* Language Selector & Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Music Toggle */}
          <button
            onClick={onToggleMusic}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'
            }`}
            title={isMusicPlaying ? '关闭音乐' : '播放音乐'}
          >
            {isMusicPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            )}
          </button>

          <LanguageSelector scrolled={scrolled} />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {menuOpen ? <CloseIcon className="w-5 h-5 md:w-6 md:h-6" /> : <MenuIcon className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
        menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 md:px-6 py-4 md:py-6 space-y-2">
          {navItems.map(item => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block font-serif text-gray-800 py-2 md:py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/75 z-10" />
        <Image
          src="/素材/01_gugong.jpg"
          alt="Beijing Forbidden City"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />
        {/* Imperial pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Gold corner decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#D4A84B]/30 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#D4A84B]/30 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#D4A84B]/30 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#D4A84B]/30 rounded-br-3xl" />
        {/* Center glow */}
        <div className="absolute inset-0 bg-radial-gradient from-[#D4A84B]/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 md:px-8 max-w-5xl mx-auto">
        {/* Elegant top decoration */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent" />
          <span className="text-[#D4A84B] font-serif text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase">
            {locale === 'zh-CN' || locale === 'zh-TW' ? '北京 · 十年匠心' : (t.hero.heroDecoration || 'Beijing · A Decade of Excellence')}
          </span>
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent" />
        </div>

        {/* Main headline with imperial gold effect */}
        <h1 className="relative font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <span className="bg-gradient-to-r from-[#D4A84B] via-[#F5D78E] to-[#D4A84B] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {t.hero.tagline}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-0 md:px-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-gradient-to-r from-[#C41E3A] to-[#8B1528] text-white font-serif font-semibold text-base md:text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#C41E3A]/40 hover:scale-105"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#A01830] to-[#C41E3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#services"
            className="group w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-serif font-medium text-base md:text-lg rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            {t.hero.exploreTours || (locale === 'zh-CN' || locale === 'zh-TW' ? '探索行程' : 'Explore Tours')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in hidden md:block" style={{ animationDelay: '1500ms' }}>
        <a href="#about" className="flex flex-col items-center gap-3 text-white/60 hover:text-[#D4A84B] transition-colors duration-300">
          <span className="font-serif text-xs tracking-[0.2em] uppercase">
            {t.hero.scroll || (locale === 'zh-CN' || locale === 'zh-TW' ? '向下探索' : 'Scroll')}
          </span>
          <div className="w-7 h-11 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/50 to-transparent pointer-events-none" />

      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-10 md:w-12 h-px bg-[#C41E3A]" />
              <span className="text-[#C41E3A] font-serif text-xs md:text-sm tracking-widest uppercase">
                {t.about.title}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              {t.about.title}
            </h2>

            <p className="font-serif text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              {t.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {t.about.features.map((f, i) => (
                <div key={i} className="relative">
                  <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#C41E3A] to-[#A01830] bg-clip-text text-transparent">
                    {f.value}
                  </div>
                  <div className="font-serif text-xs md:text-sm text-gray-500 mt-1 md:mt-2 tracking-wide">{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
              <Image
                src="/素材/beijing_yiheyuan_02.png"
                alt="Summer Palace"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative floating card */}
            <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl shadow-gray-200/50">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#A01830] flex items-center justify-center">
                  <span className="text-white font-serif text-lg md:text-xl font-bold">10+</span>
                </div>
                <div>
                  <div className="font-serif font-semibold text-gray-900 text-sm md:text-base">{t.hero.years || 'Years'}</div>
                  <div className="font-serif text-xs md:text-sm text-gray-500">{t.hero.yearsOfExcellence || 'of Excellence'}</div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-20 md:w-24 h-20 md:h-24 border-2 border-[#D4A84B]/20 rounded-2xl md:rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const { locale, t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const services = [t.services.teamTours, t.services.customTours];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/素材/universal_studios.jpg"
          alt="Universal Studios"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85" />
      </div>

      {/* Background texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Decorative shapes */}
      <div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 md:w-64 h-48 md:h-64 bg-[#C41E3A]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-[#D4A84B]/20 rounded-full blur-3xl" />

      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-10 md:w-12 h-px bg-[#D4A84B]" />
            <span className="text-[#D4A84B] font-serif text-xs md:text-sm tracking-widest uppercase">
              {t.services.title}
            </span>
            <div className="w-10 md:w-12 h-px bg-[#D4A84B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">{t.services.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10 hover:border-[#D4A84B]/50 transition-all duration-500 hover:bg-white/10"
            >
              {/* Icon */}
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#C41E3A]/20 to-[#D4A84B]/20 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-serif">{idx === 0 ? '✦' : '◈'}</span>
              </div>

              {/* Subtitle tag */}
              {svc.subtitle && (
                <span className="inline-block px-3 py-1 bg-[#D4A84B]/20 text-[#D4A84B] text-xs rounded-full mb-3 font-serif">
                  {svc.subtitle}
                </span>
              )}

              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 md:mb-4">{svc.title}</h3>
              <p className="font-serif text-white/60 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">{svc.description}</p>

              {/* Features tags */}
              {svc.features && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {svc.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 font-serif">
                      {feature}
                    </span>
                  ))}
                </div>
              )}

              {/* Service items */}
              <div className="space-y-3 md:space-y-4 mb-6">
                {svc.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 font-serif">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#D4A84B]" />
                    <span className="text-white/80 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              {svc.highlights && (
                <div className="pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-2">
                    {svc.highlights.map((highlight, i) => (
                      <div key={i} className="text-xs text-white/50 font-serif flex items-center gap-1.5">
                        <span className="text-[#D4A84B]">✓</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C41E3A] to-[#D4A84B] rounded-full text-white text-sm font-serif font-bold hover:opacity-90 transition-opacity">
                {locale === 'zh-CN' ? '立即咨询' : 'Contact Us'}
                <span>→</span>
              </a>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-bl from-[#D4A84B]/10 to-transparent rounded-tr-2xl md:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tour Itineraries ─────────────────────────────────────────────────────────
function TourItineraries() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const teamItineraries = t.services.teamTours.itineraries || [];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-stone-50">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-10 md:w-12 h-px bg-[#C41E3A]" />
            <span className="text-[#C41E3A] font-serif text-xs md:text-sm tracking-widest uppercase">
              {t.tours?.title || 'Featured Tours'}
            </span>
            <div className="w-10 md:w-12 h-px bg-[#C41E3A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.tours?.subtitle || 'Classic routes, authentic experiences'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {teamItineraries.map((itinerary: any, idx: number) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Header with gradient */}
              <div className="relative p-6 md:p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                  backgroundSize: '20px 20px',
                }} />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 md:px-3 py-1 bg-[#C41E3A]/20 text-[#D4A84B] font-serif text-xs rounded-full mb-2 md:mb-3">
                      {itinerary.duration}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {itinerary.name}
                    </h3>
                  </div>
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#A01830] flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-white text-lg md:text-xl font-serif font-bold">{idx + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 lg:p-8">
                <p className="font-serif text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  {itinerary.desc}
                </p>

                {/* Day by Day Itinerary */}
                {itinerary.itinerary && (
                  <div className="mb-6 md:mb-8">
                    <h4 className="font-serif text-xs md:text-sm font-semibold text-[#C41E3A] uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
                      <ChevronDownIcon className="w-3 h-3 md:w-4 md:h-4" />
                      {t.tours?.itinerary || 'Itinerary'}
                    </h4>
                    <div className="space-y-3 md:space-y-4">
                      {itinerary.itinerary.map((day: any, i: number) => (
                        <div key={i} className="flex gap-3 md:gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-[#C41E3A]/10 to-[#D4A84B]/10 flex items-center justify-center">
                              <span className="font-serif font-bold text-[#C41E3A] text-xs md:text-sm">{day.day}</span>
                            </div>
                          </div>
                          <div className="pt-1.5 md:pt-2 min-w-0">
                            <p className="font-serif font-semibold text-gray-900 text-sm md:text-base">{day.title}</p>
                            <p className="font-serif text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1 leading-relaxed">{day.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div className="mb-6 md:mb-8">
                  <h4 className="font-serif text-xs md:text-sm font-semibold text-[#C41E3A] uppercase tracking-wider mb-3 md:mb-4">
                    {t.tours?.highlights || 'Highlights'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {itinerary.highlights.map((h: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 bg-stone-100 text-gray-700 font-serif text-xs md:text-sm rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info pills */}
                <div className="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6">
                  {itinerary.meals && (
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                      <span className="text-base md:text-lg">🍜</span>
                      <span className="font-serif">{itinerary.meals}</span>
                    </div>
                  )}
                  {itinerary.hotel && (
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                      <span className="text-base md:text-lg">🏨</span>
                      <span className="font-serif">{itinerary.hotel}</span>
                    </div>
                  )}
                </div>

                {/* Included */}
                <div className="pt-4 md:pt-6 border-t border-gray-100">
                  <p className="font-serif text-xs md:text-sm text-gray-500">
                    <span className="text-[#D4A84B] font-semibold">{t.tours?.included || 'Included'}:</span> {itinerary.included}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Destinations ─────────────────────────────────────────────────────────────
function Destinations() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="destinations" className="py-16 md:py-24 lg:py-32 bg-stone-50">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-10 md:w-12 h-px bg-[#C41E3A]" />
            <span className="text-[#C41E3A] font-serif text-xs md:text-sm tracking-widest uppercase">
              {t.destinations.title}
            </span>
            <div className="w-10 md:w-12 h-px bg-[#C41E3A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {t.destinations.title}
          </h2>
          <p className="font-serif text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-4">
            {t.destinations.intro}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {t.destinations.items.map((dest: any, i: number) => (
            <div
              key={i}
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/素材/${dest.img}`}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-1">{dest.name}</h3>
                  <p className="font-serif text-white/80 text-sm">{dest.desc}</p>
                </div>

                {/* Hover reveal */}
                <div className="absolute inset-0 bg-[#C41E3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-lg">+</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-4 md:p-6">
                <p className="font-serif text-gray-600 text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
                  {dest.detail}
                </p>

                {/* Highlights */}
                <div className="mb-3 md:mb-4">
                  <h4 className="font-serif text-xs font-semibold text-[#C41E3A] uppercase tracking-wider mb-2">
                    {t.destinations.highlights || 'Highlights'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.highlights.slice(0, 3).map((h: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-stone-100 text-gray-600 text-xs font-serif rounded"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best Time */}
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>🕐</span>
                  <span className="font-serif">{dest.bestTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const { locale, t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [localTime, setLocalTime] = useState<string>('');
  const [localTimezone, setLocalTimezone] = useState<string>('');
  const [isBeijingWorkingHours, setIsBeijingWorkingHours] = useState<boolean>(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    socialMedia: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate: name is required, at least one contact method is required
    if (!formData.name.trim()) {
      alert(locale === 'zh-CN' ? '请填写姓名' : 'Please enter your name');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim() && !formData.socialMedia.trim()) {
      alert(locale === 'zh-CN' ? '请至少填写一种联系方式（电话、Email或社媒账号）' : 'Please fill in at least one contact method (phone, email or social media)');
      return;
    }

    setFormStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', socialMedia: '', message: '' });
    } catch {
      setFormStatus('error');
    }
  };

  useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date();
      const localTimeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Check Beijing working hours (08:00 - 22:00)
      const beijingTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
      const beijingHour = beijingTime.getHours();
      const isWorking = beijingHour >= 8 && beijingHour < 22;

      setLocalTime(localTimeStr);
      setLocalTimezone(localTz);
      setIsBeijingWorkingHours(isWorking);
    };
    updateLocalTime();
    const interval = setInterval(updateLocalTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const contactData = {
    wechat: 'ziyue11-15',
    whatsapp: '8618908651384',
    phone: '+86 186 0078 9081',
    email: '2584144797@qq.com',
  };

  const contacts = [
    {
      icon: <WechatIcon className="w-7 h-7 md:w-8 md:h-8" />,
      label: t.contact.wechat,
      value: contactData.wechat,
      note: t.contact.wechatNote,
      color: '#07C160',
      href: null,
    },
    {
      icon: <PhoneIcon className="w-7 h-7 md:w-8 md:h-8" />,
      label: t.contact.phone,
      value: contactData.phone,
      note: t.contact.phoneNote,
      color: '#C41E3A',
      href: `tel:${contactData.phone}`,
    },
    {
      icon: <MailIcon className="w-7 h-7 md:w-8 md:h-8" />,
      label: t.contact.email,
      value: contactData.email,
      note: t.contact.emailNote,
      color: '#D4A84B',
      href: `mailto:${contactData.email}`,
    },
  ];

  return (
    <section id="contact" className="py-6 md:py-8 text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/素材/contact-bg.jpg"
          alt="Beijing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/50 to-gray-900/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C41E3A]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4A84B]/20 rounded-full blur-[120px]" />

      <div ref={ref} className={`max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 bg-[#C41E3A]/20 text-[#D4A84B] font-serif text-xs tracking-[0.2em] rounded-full mb-3">
            {t.contact?.title || 'CONTACT'}
          </span>
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            {t.contact?.subtitle || 'We look forward to meeting you in Beijing'}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="text-[#D4A84B]">✦</span>
            <span className="text-white/60 font-serif">{t.contact?.multilingual || 'Bilingual Chinese-English Service'}</span>
            <span className="text-[#D4A84B]">✦</span>
          </div>
        </div>

        {/* Main Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-3 mb-4">
          {/* WeChat Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-[#07C160]/50 transition-all duration-500 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-xl overflow-hidden border-2 border-[#07C160]/50 mb-4 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center bg-white">
                <Image
                  src="/素材/wechat-qr.png"
                  alt="WeChat QR Code"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <WechatIcon className="w-6 h-6 text-[#07C160]" />
                <h3 className="font-serif text-xl font-bold">{t.contact?.wechat || 'WeChat'}</h3>
              </div>
              <p className="font-serif text-2xl font-bold text-white mb-1">{contactData.wechat}</p>
              <p className="font-serif text-white/50 text-xs">{t.contact?.wechatNote || 'Add us for instant consultation'}</p>
            </div>
          </div>

          {/* Quick Contact Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Phone */}
            <a href={`tel:${contactData.phone}`} className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#C41E3A]/50 hover:bg-white/15 transition-all duration-300 text-center group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C41E3A]/30 to-[#C41E3A]/10 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <PhoneIcon className="w-5 h-5 text-[#C41E3A]" />
              </div>
              <h4 className="font-serif font-bold text-sm mb-1">{t.contact?.phone || 'Phone'}</h4>
              <p className="font-serif text-white/70 text-xs">{contactData.phone}</p>
              <p className="font-serif text-white/40 text-xs mt-1">{t.contact?.phoneNote || 'Chinese only'}</p>
            </a>

            {/* Email */}
            <a href={`mailto:${contactData.email}`} className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#D4A84B]/50 hover:bg-white/15 transition-all duration-300 text-center group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A84B]/30 to-[#D4A84B]/10 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <MailIcon className="w-5 h-5 text-[#D4A84B]" />
              </div>
              <h4 className="font-serif font-bold text-sm mb-1">{t.contact?.email || 'Email'}</h4>
              <p className="font-serif text-white/70 text-xs break-all">{contactData.email}</p>
              <p className="font-serif text-white/40 text-xs mt-1">{t.contact?.emailNote || 'All languages'}</p>
            </a>

            {/* WhatsApp */}
            <a href={`https://wa.me/${contactData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#25D366]/50 hover:bg-white/15 transition-all duration-300 text-center group col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#25D366]/30 to-[#25D366]/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-serif font-bold text-sm mb-0.5">WhatsApp</h4>
                  <p className="font-serif text-white/70 text-xs">+{contactData.whatsapp}</p>
                  <p className="font-serif text-white/40 text-xs">{t.contact?.whatsappNote || 'Faster response'}</p>
                </div>
                <div className="text-[#25D366]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 mb-4">
          <h3 className="font-serif text-lg font-bold text-center mb-4 text-[#D4A84B]">✉️ {locale === 'zh-CN' ? '给我们留言' : 'Leave us a Message'}</h3>
          {formStatus === 'success' ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-2">✅</div>
              <p className="font-serif text-white">{locale === 'zh-CN' ? '留言已发送！我们会尽快联系您。' : 'Message sent! We will contact you soon.'}</p>
              <button onClick={() => setFormStatus('idle')} className="mt-3 px-4 py-1.5 bg-[#C41E3A]/20 text-[#D4A84B] rounded-lg text-sm font-serif hover:bg-[#C41E3A]/30 transition-colors">
                {locale === 'zh-CN' ? '继续留言' : 'Send Another'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder={locale === 'zh-CN' ? '姓名 *' : 'Name *'}
                    required
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-serif placeholder-white/40 focus:outline-none focus:border-[#D4A84B]/50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder={locale === 'zh-CN' ? '电话' : 'Phone'}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-serif placeholder-white/40 focus:outline-none focus:border-[#D4A84B]/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder={locale === 'zh-CN' ? 'Email（选填）' : 'Email (optional)'}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-serif placeholder-white/40 focus:outline-none focus:border-[#D4A84B]/50"
                />
                <input
                  type="text"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleFormChange}
                  placeholder={locale === 'zh-CN' ? '微信/WhatsApp' : 'WeChat/WhatsApp'}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-serif placeholder-white/40 focus:outline-none focus:border-[#D4A84B]/50"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder={locale === 'zh-CN' ? '请留下您的留言或问题（选填）' : 'Message (optional)'}
                rows={2}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-serif placeholder-white/40 focus:outline-none focus:border-[#D4A84B]/50 resize-none"
              />
              {formStatus === 'error' && (
                <p className="text-red-400 text-xs text-center font-serif">{locale === 'zh-CN' ? '发送失败，请稍后重试' : 'Failed to send, please try again later'}</p>
              )}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-2 bg-gradient-to-r from-[#C41E3A] to-[#D4A84B] text-white rounded-lg font-serif text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {formStatus === 'submitting' ? (locale === 'zh-CN' ? '发送中...' : 'Sending...') : (locale === 'zh-CN' ? '提交留言' : 'Submit Message')}
              </button>
            </form>
          )}
        </div>

        {/* Service Hours - Inline */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs bg-white/5 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="text-[#D4A84B]">🕐</span>
            <span className="text-white/60">{t.contact?.hours || 'Service Hours'}:</span>
            <span className="text-white font-bold">周一至周日 08:00 - 22:00</span>
            <span className="text-white/40">(北京时间)</span>
          </div>
          {localTime && (
            <>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-1.5">
                <span>🌍</span>
                <span className="text-white/60">{t.contact?.localTime || 'Local Time'}:</span>
                <span className="text-white font-bold">{localTime} ({localTimezone})</span>
                <span className={isBeijingWorkingHours ? 'text-green-400' : 'text-red-400'}>
                  {isBeijingWorkingHours ? t.contact?.workingNow : t.contact?.notWorkingNow}
                </span>
              </div>
            </>
          )}
          <span className="text-white/20 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5">
            <span>💬</span>
            <span className="text-white/40">{t.contact?.delayedReply || '12h reply'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-950 text-white/60 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-xl bg-gradient-to-br from-[#C41E3A] to-[#A01830] flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xs md:text-sm">福</span>
            </div>
            <div className="font-serif text-sm">{t.footer?.tagline || 'Your Beijing journey begins with us'}</div>
          </div>
          <p className="font-serif text-xs md:text-sm">{t.footer?.copyright || '© 2024 Beijing Four Seasons Fortune Travel'}</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [locale, setLocaleState] = useState<Locale>('zh-CN');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  // Sync music state with audio element events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsMusicPlaying(true);
    const handlePause = () => setIsMusicPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  useEffect(() => {
    const detected = detectLocale();
    setLocaleState(detected);
    document.documentElement.lang = detected;
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      // Try to auto play, but browser might block it
      audioRef.current.play().then(() => {
        setIsMusicPlaying(true);
      }).catch(() => {
        // Autoplay was blocked, user can click to play
        setIsMusicPlaying(false);
      });
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
  };

  const toggleLocale = () => {
    // Fallback toggle for simple switching
    const newLocale = locale === 'zh-CN' ? 'en' : 'zh-CN';
    setLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale, setLocale }}>
      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto" controlsList="nodownload" style={{ display: 'none' }}>
        <source src="/素材/bgm.mp3" type="audio/mpeg" />
      </audio>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        :root {
          --color-primary: #C41E3A;
          --color-gold: #D4A84B;
          --color-charcoal: #1a1a1a;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Noto Serif SC', 'Playfair Display', Georgia, serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .font-serif {
          font-family: 'Noto Serif SC', 'Playfair Display', Georgia, serif;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        @keyframes gold-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-gold-shimmer {
          background: linear-gradient(90deg, #D4A84B 0%, #F5D78E 25%, #D4A84B 50%, #F5D78E 75%, #D4A84B 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gold-shimmer 4s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slow-zoom {
          animation: slow-zoom 20s ease-out forwards;
        }

        /* Better text rendering */
        h1, h2, h3, h4, h5, h6 {
          text-rendering: optimizeLegibility;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Responsive typography */
        @media (max-width: 640px) {
          html {
            font-size: 14px;
          }
        }

        @media (min-width: 1536px) {
          html {
            font-size: 18px;
          }
        }
      `}</style>

      <main lang={locale}>
        <Navbar isMusicPlaying={isMusicPlaying} onToggleMusic={toggleMusic} />
        <Hero />
        <About />
        <Services />
        <TourItineraries />
        <Destinations />
        <Contact />
        <Footer />
        <FloatingContactButton />
      </main>
    </LanguageContext.Provider>
  );
}
