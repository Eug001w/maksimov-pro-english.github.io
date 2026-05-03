import React, { useState, useEffect } from 'react';
import { Icons } from './ui';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { href: '#about', label: 'Обо мне' },
    { href: '#method', label: 'Методика' },
    { href: '#pricing', label: 'Стоимость' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#faq', label: 'Вопросы' },
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 h-14 flex items-center px-5 md:px-7 bg-white/95 backdrop-blur-md transition-shadow duration-250 border-b border-gray-200 ${scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.07)]' : ''}`}>
        <a href="#" className="flex items-center gap-2.5 font-extrabold text-[0.86rem] text-gray-900 whitespace-nowrap mr-auto">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-black text-[0.62rem] tracking-wider shadow-[0_3px_10px_rgba(0,86,179,0.32)] shrink-0">
            EM
          </div>
          Evgenii Maksimov
        </a>
        
        <div className="hidden md:flex items-center gap-[clamp(10px,1.6vw,26px)]">
          {links.map(link => (
            <a key={link.href} href={link.href} className="text-[0.76rem] font-semibold text-gray-500 hover:text-brand transition-colors tracking-wide">
              {link.label}
            </a>
          ))}
          <a href="#final-cta" className="bg-brand text-white px-4 py-2 rounded-full text-[0.74rem] font-bold shadow-[0_3px_12px_rgba(0,86,179,0.28)] hover:bg-brand-dark transition-colors ml-2">
            Пробный урок
          </a>
        </div>

        <button className="md:hidden p-1.5 ml-3 text-gray-800" onClick={() => setMobileOpen(true)} aria-label="Menu">
          <Icons.Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[99999] bg-white flex flex-col overflow-y-auto transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2 font-extrabold text-[0.88rem] text-gray-900">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-black text-[0.62rem]">EM</div>
            Evgenii Maksimov
          </div>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md text-gray-600" onClick={() => setMobileOpen(false)}>
            <Icons.X className="w-5 h-5" />
          </button>
        </div>
        <ul className="p-5 pb-8 flex-1 flex flex-col gap-1">
          {links.map(link => (
            <li key={link.href} className="border-b border-gray-100 last:border-none last:mt-3">
              <a href={link.href} className="block py-3 px-1 text-[0.96rem] font-semibold text-gray-800 hover:text-brand" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#final-cta" className="block text-center bg-brand text-white py-3 px-5 rounded-lg font-bold text-[0.9rem] shadow-[0_4px_14px_rgba(0,86,179,0.3)] mt-4" onClick={() => setMobileOpen(false)}>
              Пробный урок — бесплатно →
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export const Footer: React.FC = () => (
  <footer className="bg-[#040508] text-white/40 pt-8 px-5 md:px-7 pb-6">
    <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-6">
      <div>
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 bg-gradient-to-br from-brand to-brand-dark rounded-md flex items-center justify-center text-white font-black text-[0.62rem]">EM</div>
          <span className="font-extrabold text-white/75 text-[0.9rem]">Evgenii Maksimov</span>
        </div>
        <p className="text-[0.78rem] leading-[1.7] mb-4 max-w-md">
          Преподаватель английского языка. 20+ лет опыта, 7+ лет в онлайн-образовании (EdTech). General English, разговорный навык, Guided Discovery · Pre-Reading · Task-Based Learning.
        </p>
        <div className="flex flex-col gap-2">
          <a href="https://t.me/Eug001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg p-2.5 hover:bg-white/10 hover:border-white/20 hover:translate-x-1 transition-all w-fit">
            <span className="w-6 h-6 rounded-md bg-brand/25 text-[#7db8ff] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </span>
            <div><div className="text-[0.6rem] font-bold uppercase tracking-wider text-white/30">Telegram</div><div className="text-[0.76rem] font-medium text-white/60">@Eug001</div></div>
          </a>
          <a href="mailto:eugmks@gmail.com" className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg p-2.5 hover:bg-white/10 hover:border-white/20 hover:translate-x-1 transition-all w-fit">
            <span className="w-6 h-6 rounded-md bg-orange/20 text-[#ffb299] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </span>
            <div><div className="text-[0.6rem] font-bold uppercase tracking-wider text-white/30">Эл. почта</div><div className="text-[0.76rem] font-medium text-white/60">eugmks@gmail.com</div></div>
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-white/50 text-[0.66rem] font-bold uppercase tracking-[0.12em] mb-3">Разделы</h4>
        <ul className="flex flex-col gap-1.5">
          {['Обо мне', 'Увлечения', 'Методика', 'Виртуальный класс', 'Стоимость', 'Результаты', 'Отзывы', 'Вопросы'].map((item, i) => (
            <li key={i}><a href="#" className="text-white/35 text-[0.78rem] hover:text-white/75 transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="max-w-[1160px] mx-auto pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
      <p className="text-[0.74rem]">© 2026 Evgenii Maksimov · Преподаватель английского языка · EdTech</p>
      <div className="flex gap-4">
        <a href="#" className="text-[0.74rem] text-white/25 hover:text-white/60 transition-colors">Политика конфиденциальности</a>
        <a href="#" className="text-[0.74rem] text-white/25 hover:text-white/60 transition-colors">Публичная оферта</a>
      </div>
    </div>
  </footer>
);
