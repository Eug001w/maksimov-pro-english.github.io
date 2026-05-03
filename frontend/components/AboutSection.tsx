import React from 'react';
import { Reveal, SectionHeader, Tag, Icons, Divider } from './ui';

export const AboutSection: React.FC = () => {
  return (
    <>
      <section className="py-12 px-5 md:px-7 bg-white scroll-mt-16" id="about">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader tag="Профессиональный профиль" title="Evgenii Maksimov · Эксперт в преподавании" />
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
            {/* Left: Perks */}
            <Reveal>
              <p className="font-serif text-[1.32rem] italic text-gray-900 leading-snug pb-3.5 border-b border-gray-200 mb-3.5">
                Более 20 лет педагогической практики — последние 7+ лет полностью в онлайн-формате. Специализация — General English для взрослых.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-brand/20 hover:shadow-[0_4px_16px_rgba(0,86,179,0.06)] hover:bg-white transition-all">
                  <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-brand-light flex items-center justify-center text-[0.88rem]">🎓</div><div className="text-[0.84rem] font-bold text-gray-900">20+ лет практики</div></div>
                  <div className="text-[0.81rem] text-gray-500 leading-relaxed">Частные ученики, ведущие онлайн-платформы и образовательные организации.</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-brand/20 hover:shadow-[0_4px_16px_rgba(0,86,179,0.06)] hover:bg-white transition-all">
                  <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-green-light flex items-center justify-center text-[0.88rem]">💬</div><div className="text-[0.84rem] font-bold text-gray-900">General English</div></div>
                  <div className="text-[0.81rem] text-gray-500 leading-relaxed">Разговорный навык, свободное общение, преодоление языкового барьера.</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-brand/20 hover:shadow-[0_4px_16px_rgba(0,86,179,0.06)] hover:bg-white transition-all">
                  <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-gold-light flex items-center justify-center text-[0.88rem]">⚙️</div><div className="text-[0.84rem] font-bold text-gray-900">3 метода в уроке</div></div>
                  <div className="text-[0.81rem] text-gray-500 leading-relaxed">Guided Discovery, Pre-Reading, Task-Based Learning — стандарт ELT.</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-brand/20 hover:shadow-[0_4px_16px_rgba(0,86,179,0.06)] hover:bg-white transition-all">
                  <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-md bg-teal-light flex items-center justify-center text-[0.88rem]">🌐</div><div className="text-[0.84rem] font-bold text-gray-900">7+ лет в EdTech</div></div>
                  <div className="text-[0.81rem] text-gray-500 leading-relaxed">Глубокая интеграция с интерактивными онлайн-инструментами.</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['General English', 'Guided Discovery', 'Task-Based Learning', 'Взрослые A2–C1'].map((chip, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 rounded-full px-3 py-1 text-[0.7rem] font-semibold text-gray-600 hover:border-brand hover:bg-brand-light hover:text-brand-dark transition-all">
                    <span className={`w-1.5 h-1.5 rounded-full ${i%2===0 ? 'bg-brand' : 'bg-gold'}`} />{chip}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Right: VeeDiscover */}
            <Reveal delay={100} className="bg-gradient-to-br from-[#07091a] to-[#0d1628] border border-gold/20 rounded-2xl p-4.5 relative overflow-hidden flex flex-col gap-3">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(201,168,76,0.09),transparent_70%)] pointer-events-none" />
              <div className="flex items-center gap-2 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0 text-gold">
                  <Icons.Play className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[0.62rem] font-bold tracking-widest uppercase text-[#d4aa5a]">YouTube · VeeDiscover</div>
                  <div className="text-[0.6rem] text-white/30 mt-px">Variety of Ethnics, Entertainment & Dining</div>
                </div>
              </div>
              <h3 className="font-serif text-[1.22rem] italic text-[#edf2ff] leading-snug relative z-10">Мои уроки —<br/>это культурные путешествия</h3>
              <p className="text-[0.78rem] text-white/50 leading-relaxed relative z-10">
                Я веду YouTube-канал <strong className="text-white/75">VeeDiscover</strong> — о кухнях мира, музыке и истории цивилизаций. Культура — живая основа каждого урока.
              </p>
              <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden bg-black shadow-[0_6px_24px_rgba(0,0,0,0.5)] z-10">
                <iframe src="https://www.youtube.com/embed?listType=user_uploads&list=Veediscover&rel=0" title="VeeDiscover" className="absolute inset-0 w-full h-full border-0" allowFullScreen loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* Interests Section */}
      <section className="py-12 px-5 md:px-7 bg-gray-50 scroll-mt-16" id="interests">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader tag="Вне уроков" tagColor="gold" title="Широкие горизонты — живые уроки" subtitle="Из реальных увлечений рождаются темы и примеры, которые запоминаются надолго." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
            {[
              { title: 'VeeDiscover', desc: 'YouTube-канал о кухнях мира и истории.', icon: '🎥', bg: 'bg-red-50', text: 'text-red-500' },
              { title: 'История', desc: 'Древний мир — богатейший контекст для уроков.', icon: '🏛️', bg: 'bg-gold-light', text: 'text-gold-dark' },
              { title: 'Нейросети', desc: 'Применяю ИИ в образовательных проектах.', icon: '🤖', bg: 'bg-teal-light', text: 'text-teal' },
              { title: 'Музыка', desc: 'Space, Berlin School, Synth-pop, неоклассика.', icon: '🎹', bg: 'bg-brand-light', text: 'text-brand-dark' },
              { title: 'Кино', desc: 'Научная фантастика и историческое кино.', icon: '🎬', bg: 'bg-orange-light', text: 'text-orange' },
              { title: 'Плавание', desc: 'Открытая вода — лучшая перезагрузка.', icon: '🏊', bg: 'bg-green-light', text: 'text-green' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 70} className="bg-white border border-gray-200 rounded-xl p-3.5 flex flex-col gap-2 hover:-translate-y-1 hover:shadow-[0_6px_22px_rgba(0,0,0,0.08)] hover:border-brand/15 transition-all">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0 ${item.bg} ${item.text}`}>{item.icon}</div>
                <div className="text-[0.76rem] font-extrabold text-gray-900 leading-tight">{item.title}</div>
                <p className="text-[0.7rem] text-gray-400 leading-relaxed flex-1">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
