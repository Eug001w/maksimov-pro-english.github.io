import React from 'react';
import { Reveal, SectionHeader, Icons } from './ui';

export const MethodologySection: React.FC = () => {
  return (
    <section className="py-12 px-5 md:px-7 bg-ink relative overflow-hidden scroll-mt-16" id="method">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_12%_50%,rgba(0,86,179,0.18),transparent_50%),radial-gradient(ellipse_at_88%_30%,rgba(201,168,76,0.07),transparent_50%)]" />
      
      <div className="max-w-[1100px] mx-auto relative z-10">
        <SectionHeader tag="Профессиональный подход" tagColor="dark" title="Методика обучения" subtitle="Три общепризнанных педагогических метода ELT, применяемых в ведущих международных программах." dark />

        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr_1fr] gap-3 items-stretch">
          
          {/* Photo Column */}
          <Reveal className="md:col-start-1 md:row-span-3 lg:col-start-1 lg:row-span-2 flex flex-row md:flex-col gap-2.5 items-start md:items-stretch">
            <div className="flex-1 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_0_5px_rgba(0,86,179,0.1),0_14px_44px_rgba(0,0,0,0.5)] relative min-h-[160px] md:min-h-[240px] w-full max-w-[120px] md:max-w-none">
              <img src="https://picsum.photos/400/600?random=2" alt="Teaching" className="w-full h-full object-cover object-top block" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#07090f]/95 to-transparent p-3.5 pt-6 flex gap-3.5">
                <div className="flex flex-col gap-0.5">
                  <div className="font-serif text-[1.6rem] font-bold text-white leading-none">20<sup className="font-sans text-[0.45em] text-[#5b9fff] align-super">+</sup></div>
                  <div className="text-[0.55rem] text-white/35 uppercase tracking-widest font-semibold">Лет</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* GD Card */}
          <Reveal delay={70} className="md:col-start-2 md:row-start-1 lg:col-start-2 lg:row-start-1 bg-gradient-to-br from-[#04112e] to-[#072057] border border-[#5b99ff]/25 shadow-[0_6px_28px_rgba(0,86,179,0.16)] rounded-xl p-5 flex flex-col gap-2.5 relative overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#3a7fff] to-[#7bb8ff] opacity-60" />
            <div className="font-serif text-[3rem] font-bold italic text-[#5b9fff]/10 leading-none absolute bottom-3.5 right-4 pointer-events-none select-none tracking-tight">GD</div>
            
            <div className="text-[0.62rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full w-fit bg-[#5b99ff]/15 border border-[#5b99ff]/25 text-[#7bb8ff]">Метод 1 из 3</div>
            <h3 className="text-[1.1rem] font-extrabold leading-tight text-[#a3c4ff]">Guided Discovery</h3>
            <p className="font-serif text-[1.04rem] italic leading-snug text-[#a3c4ff]/50 -mt-0.5">«Открой правило — и оно твоё навсегда»</p>
            <p className="text-[0.83rem] leading-relaxed text-[#a3c4ff]/60 flex-1">Ученик сам «открывает» языковое правило — преподаватель направляет через точные вопросы. Знание усваивается глубже.</p>
            <div className="h-px bg-[#5b9fff]/15 my-1" />
            <div className="flex flex-col gap-1.5">
              {['Долгосрочное запоминание', 'Активное обучение', 'Стандарт ELT'].map((b,i) => (
                <div key={i} className="text-[0.76rem] font-semibold flex items-center gap-2 text-[#a3c4ff]/50"><Icons.Check className="w-3 h-3 stroke-[#7bb8ff] shrink-0" />{b}</div>
              ))}
            </div>
          </Reveal>

          {/* PR Card */}
          <Reveal delay={140} className="md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1 bg-gradient-to-br from-[#1a1000] to-[#2e1d00] border border-gold/25 shadow-[0_6px_28px_rgba(201,168,76,0.07)] rounded-xl p-5 flex flex-col gap-2.5 relative overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold to-[#f0d080] opacity-60" />
            <div className="font-serif text-[3rem] font-bold italic text-gold/10 leading-none absolute bottom-3.5 right-4 pointer-events-none select-none tracking-tight">PR</div>
            
            <div className="text-[0.62rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full w-fit bg-gold/10 border border-gold/25 text-[#d4aa5a]">Метод 2 из 3</div>
            <h3 className="text-[1.1rem] font-extrabold leading-tight text-[#f0d080]">Pre-Reading Activities</h3>
            <p className="font-serif text-[1.04rem] italic leading-snug text-[#f0d080]/45 -mt-0.5">«Начни думать на языке до первого слова»</p>
            <p className="text-[0.83rem] leading-relaxed text-[#f0d080]/60 flex-1">Перед работой с текстом активируется словарный запас, строятся прогнозы. Вовлечённость с первой секунды.</p>
            <div className="h-px bg-gold/15 my-1" />
            <div className="flex flex-col gap-1.5">
              {['Активация фоновых знаний', 'Глубокое понимание', 'Лексика в контексте'].map((b,i) => (
                <div key={i} className="text-[0.76rem] font-semibold flex items-center gap-2 text-[#f0d080]/50"><Icons.Check className="w-3 h-3 stroke-[#d4aa5a] shrink-0" />{b}</div>
              ))}
            </div>
          </Reveal>

          {/* TBL Card */}
          <Reveal delay={70} className="md:col-span-full lg:col-start-2 lg:col-span-2 lg:row-start-2 bg-gradient-to-br from-[#001518] to-[#002530] border border-teal/25 shadow-[0_6px_28px_rgba(14,154,167,0.07)] rounded-xl p-5 flex flex-col md:flex-row items-start gap-5 relative overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal to-[#4ecbd6] opacity-60" />
            <div className="font-serif text-[3rem] font-bold italic text-teal/10 leading-none absolute bottom-3.5 right-4 pointer-events-none select-none tracking-tight">TBL</div>
            
            <div className="flex flex-col gap-2 md:flex-[0_0_220px]">
              <div className="text-[0.62rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full w-fit bg-teal/15 border border-teal/25 text-[#4ecbd6]">Метод 3 из 3</div>
              <h3 className="text-[1.1rem] font-extrabold leading-tight text-[#7ee0e8]">Task-Based Learning</h3>
              <p className="text-[0.83rem] leading-relaxed text-[#7ee0e8]/60">Каждый урок строится вокруг реальной коммуникативной задачи. Язык осваивается через действие.</p>
            </div>
            
            <div className="flex-1 pt-0.5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4">
                {['Переговоры и деловое общение', 'Презентации и публичная речь', 'Путешествия и ситуации', 'Немедленное применение', 'Уверенность в реальных ситуациях', 'Коммуникативная компетентность'].map((b,i) => (
                  <div key={i} className="text-[0.76rem] font-semibold flex items-center gap-2 text-[#7ee0e8]/50"><Icons.Check className="w-3 h-3 stroke-[#4ecbd6] shrink-0" />{b}</div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
