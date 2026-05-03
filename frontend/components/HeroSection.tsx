import React from 'react';
import { Reveal, Button } from './ui';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-ink relative overflow-hidden flex flex-col items-center justify-center min-h-[calc(100vh-56px)] px-5 py-10 md:py-16" id="hero">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.016) 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }} />
      <div className="absolute rounded-full pointer-events-none blur-[90px] w-[560px] h-[560px] bg-[radial-gradient(circle,rgba(0,86,179,.44),transparent_70%)] -top-[180px] -left-[120px] opacity-55" />
      <div className="absolute rounded-full pointer-events-none blur-[90px] w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(201,168,76,.18),transparent_70%)] -bottom-[100px] -right-[60px] opacity-60" />

      {/* Tetris Grid */}
      <div className="relative z-10 max-w-[980px] w-full mx-auto grid grid-cols-1 sm:grid-cols-[130px_1fr] lg:grid-cols-[196px_1fr_1fr] gap-3.5 items-start">
        
        {/* Col A: Photo */}
        <Reveal className="sm:col-start-1 sm:row-span-3 lg:col-start-1 lg:row-span-3 flex flex-col gap-2.5">
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_0_6px_rgba(0,86,179,0.12),0_16px_48px_rgba(0,0,0,0.5)] max-w-[200px] mx-auto sm:max-w-none">
            <img src="https://picsum.photos/400/600?random=1" alt="Evgenii Maksimov" className="w-full h-full object-cover object-top" />
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2 max-w-[200px] mx-auto sm:max-w-none w-full">
            <div className="w-2 h-2 rounded-full bg-green shrink-0 animate-pulse" />
            <div className="text-[0.64rem] font-semibold text-white/50 leading-snug">
              <strong className="text-white/80 font-bold block">Принимает учеников</strong>
              Онлайн · Гибкое расписание
            </div>
          </div>
        </Reveal>

        {/* Col B: Stats */}
        <Reveal delay={70} className="sm:col-start-2 sm:row-start-1 lg:col-start-2 lg:row-span-3 flex flex-col gap-2.5">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-1 text-center hover:bg-white/10 hover:border-white/15 transition-all">
            <div className="font-serif text-[2.6rem] font-bold text-white leading-none tracking-tight">20<sup className="font-sans text-[0.48em] text-[#5b9fff] align-super">+</sup></div>
            <div className="text-[0.64rem] text-white/40 uppercase tracking-widest font-semibold">Лет практики</div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
              <div className="font-serif text-[1.85rem] font-bold text-white leading-none">7<sup className="font-sans text-[0.5em] text-[#5b9fff] align-super">+</sup></div>
              <div className="text-[0.6rem] text-white/35 uppercase tracking-wider font-semibold">Лет в EdTech</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
              <div className="font-serif text-[1.85rem] font-bold text-white leading-none">200<sup className="font-sans text-[0.5em] text-[#5b9fff] align-super">+</sup></div>
              <div className="text-[0.6rem] text-white/35 uppercase tracking-wider font-semibold">Учеников</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-[0.62rem] text-white/30 uppercase tracking-widest font-semibold mb-2.5">Педагогические методы</div>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {['Guided Discovery', 'Pre-Reading', 'Task-Based', 'General English'].map(skill => (
                <span key={skill} className="text-[0.63rem] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/55 tracking-wide hover:bg-brand/30 hover:border-brand/45 hover:text-[#a3c4ff] transition-all">{skill}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Col C1: Title */}
        <Reveal delay={140} className="sm:col-start-2 sm:row-start-2 lg:col-start-3 lg:row-start-1 flex flex-col gap-2.5">
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-brand/20 border border-brand/35 text-[#7bb8ff]">20+ лет опыта</span>
            <span className="text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-[#d4aa5a]">Онлайн</span>
          </div>
          <p className="font-serif text-[1.1rem] italic text-white/40 tracking-wide mt-1">English Language Professional</p>
          <h1 className="text-[clamp(1.75rem,2.8vw,2.55rem)] font-black text-[#edf2ff] leading-[1.06] tracking-tight drop-shadow-[0_2px_28px_rgba(0,86,179,0.4)]">
            Экспертное преподавание<br />
            <em className="not-italic bg-gradient-to-br from-[#f0c040] to-[#e08a18] text-transparent bg-clip-text">английского языка</em>
          </h1>
          <p className="text-[0.9rem] text-white/55 leading-[1.75] max-w-[340px] sm:max-w-none lg:max-w-[340px] mx-auto sm:mx-0 text-center sm:text-left mt-2">
            Авторская методика, 20+ лет практики и 7+ лет в онлайн-образовании. General English для взрослых — глубоко, культурно насыщенно, с реальным результатом.
          </p>
        </Reveal>

        {/* Col C2: Quote */}
        <Reveal delay={210} className="sm:col-span-2 lg:col-start-3 lg:col-span-1 lg:row-start-2 mt-2 lg:mt-0">
          <div className="bg-gold/5 border border-gold/20 border-l-[3px] border-l-gold rounded-lg p-3.5">
            <p className="font-serif text-[1.16rem] italic text-white/70 leading-relaxed">
              "Язык — это не набор правил. Это живой инструмент для настоящей жизни."
            </p>
          </div>
        </Reveal>

        {/* Col C3: CTA */}
        <Reveal delay={210} className="sm:col-span-2 lg:col-start-3 lg:col-span-1 lg:row-start-3 flex flex-wrap gap-2.5 justify-center sm:justify-start mt-2 lg:mt-0">
          <Button href="#final-cta">Записаться — 1-й урок бесплатно</Button>
          <Button href="#method" variant="outline">Методика →</Button>
        </Reveal>

      </div>
    </div>
  );
};
