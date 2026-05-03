import React from 'react';
import { Reveal, SectionHeader, Divider } from './ui';

export const FeaturesSection: React.FC = () => {
  return (
    <>
      <Divider />
      {/* Platform Section */}
      <section className="py-12 px-5 md:px-7 bg-gray-50 scroll-mt-16" id="platform">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader tag="Виртуальный класс" tagColor="teal" title="Всё в одном окне браузера" subtitle="Занятия проходят в интерактивном виртуальном классе — с видеосвязью, встроенными материалами и словарём." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {[
              { title: 'Встроенный словарь', desc: 'Новые слова фиксируются прямо в ходе урока.', icon: '📚', bg: 'bg-[#e0faf4]', text: 'text-[#006b52]' },
              { title: 'Интерактивные упражнения', desc: 'Задания разных форматов делают закрепление живым.', icon: '⚡', bg: 'bg-orange-light', text: 'text-orange' },
              { title: 'Автопроверка заданий', desc: 'Выполнили задание — сразу видите результат.', icon: '✅', bg: 'bg-purple-50', text: 'text-purple-600' },
              { title: 'Отслеживание прогресса', desc: 'Наглядная статистика показывает ваш рост.', icon: '📈', bg: 'bg-gold-light', text: 'text-gold-dark' },
              { title: 'Доступ 24/7', desc: 'Все материалы доступны в любое время суток.', icon: '🕒', bg: 'bg-brand-light', text: 'text-brand-dark' },
              { title: 'С любого устройства', desc: 'Компьютер, планшет, телефон — учитесь откуда удобно.', icon: '📱', bg: 'bg-pink-50', text: 'text-pink-700' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 70} className="bg-white border border-gray-200 rounded-xl p-3.5 flex flex-col gap-2 hover:-translate-y-1 hover:shadow-[0_6px_22px_rgba(0,86,179,0.08)] hover:border-brand/15 transition-all group">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0 transition-colors ${item.bg} ${item.text} group-hover:bg-brand group-hover:text-white`}>{item.icon}</div>
                <div className="text-[0.84rem] font-bold text-gray-900">{item.title}</div>
                <p className="text-[0.76rem] text-gray-400 leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Results Section */}
      <section className="py-12 px-5 md:px-7 bg-brand-dark scroll-mt-16" id="results">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader tag="Результаты" tagColor="dark" title="Что изменится для вас" subtitle="Конкретные изменения — не обещания, а то, что происходит с каждым учеником." dark />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              { num: '01', color: 'text-[#7bb8ff]', title: 'Свободная речь', desc: 'Говорите без долгих пауз и мучительного подбора слов. Речь становится естественной.' },
              { num: '02', color: 'text-[#f0d080]', title: 'Уверенная речь', desc: 'Тот самый внутренний блок исчезает. Вы поймёте, что умели больше, чем думали.' },
              { num: '03', color: 'text-[#4ecbd6]', title: 'Уверенность в себе', desc: 'В переговорах, на собеседовании, в путешествии — в любом разговоре с иностранцем.' },
              { num: '04', color: 'text-[#86efac]', title: 'Понимание на слух', desc: 'Фильмы, подкасты, диалоги перестают быть «кашей из слов». Вы начинаете слышать язык.' },
              { num: '05', color: 'text-[#fca5a5]', title: 'Живой навык', desc: 'Не багаж правил в голове, а реальный инструмент, которым пользуетесь каждый день.' },
              { num: '06', color: 'text-[#f9a8d4]', title: 'Английский для жизни', desc: 'Путешествия, карьера, общение — язык открывает двери, которые раньше казались закрытыми.' },
            ].map((item, i) => (
              <Reveal key={i} delay={(i%3) * 70} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:-translate-y-1 transition-all">
                <div className={`font-serif text-[2rem] font-bold leading-none mb-1.5 ${item.color}`}>{item.num}</div>
                <div className="text-[0.86rem] font-bold text-white mb-1">{item.title}</div>
                <p className="text-[0.74rem] text-white/50 leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
