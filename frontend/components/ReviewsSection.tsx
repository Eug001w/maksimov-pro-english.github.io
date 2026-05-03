import React, { useState } from 'react';
import { Reveal, SectionHeader, Divider, Icons } from './ui';

export const ReviewsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 4000);
  };

  const faqs = [
    { q: 'Где проходят уроки?', a: 'В интерактивном виртуальном классе — с видеосвязью и встроенными учебными материалами. Вам потребуется только стабильный интернет и любое устройство.' },
    { q: 'Нужно ли покупать учебники?', a: 'Нет, все материалы включены в онлайн-класс и доступны 24/7. Возвращайтесь к пройденным урокам и словарю в любое время.' },
    { q: 'Можно ли переносить занятия?', a: 'Да, перенос возможен при предупреждении минимум за 8 часов до начала урока.' },
    { q: 'Для кого подходят ваши уроки?', a: 'Мои уроки ориентированы на взрослых, которые хотят освоить General English и научиться свободно говорить: для работы, путешествий или удовольствия. Уровень — от Elementary до Upper-Intermediate.' },
    { q: 'Что такое Task-Based Learning?', a: 'TBL — метод, при котором каждый урок строится вокруг реальной коммуникативной задачи: провести переговоры, описать ситуацию, объяснить проблему. Вы получаете навык, который сразу работает в жизни.' }
  ];

  return (
    <>
      <Divider />
      {/* Reviews */}
      <section className="py-12 px-5 md:px-7 bg-gray-50 scroll-mt-16" id="reviews">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader tag="Отзывы учеников" title="Реальные результаты реальных людей" subtitle="Не шаблонные «стало лучше», а живые истории о переломных моментах." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {[
              { text: '«Раньше на звонках с иностранными партнёрами я только кивал и улыбался. После занятий впервые сам, без подготовки, провёл переговоры об условиях контракта. Ощущение, что решаешь рабочие задачи без посредников — это бесценно».', author: 'Арман Ибрагимов', pos: 'Менеджер по продажам', init: 'АИ', bg: 'from-[#0056b3] to-[#4da6ff]' },
              { text: '«Я долго боялась показаться нелепой, хотя грамматику знала неплохо. На занятиях работали именно над тем, чтобы "развязать язык". Перелом случился, когда я так увлеклась идеей, что начала объяснять её, совсем забыв про страх ошибиться».', author: 'Елена В.', pos: 'Маркетолог', init: 'ЕВ', bg: 'from-[#7c3aed] to-[#c084fc]' },
              { text: '«Долго был в режиме "Read Only" — всё понимал, но на созвонах молчал. На уроках убрали этот барьер. На прошлой неделе впервые не просто понял шутку тимлида, но и сам удачно вставил комментарий. Ощущение, что ты "свой" в международной команде».', author: 'Дмитрий П.', pos: 'IT-специалист', init: 'ДП', bg: 'from-[#00b894] to-[#00cec9]' },
              { text: '«В поездках я чувствовала себя беспомощной. Думала, что в моём возрасте учиться уже поздно. Но в этом отпуске сама, без переводчика, смогла обсудить детали брони и попросить другой номер. Это была такая чистая, почти детская радость!»', author: 'Марина С.', pos: 'Дизайнер', init: 'МС', bg: 'from-gold to-[#e0b84d]' },
            ].map((rev, i) => (
              <Reveal key={i} delay={(i%2)*70} className="bg-white border border-gray-200 rounded-xl p-4.5 relative hover:-translate-y-1 hover:shadow-[0_6px_22px_rgba(0,0,0,0.07)] hover:border-brand/15 transition-all">
                <div className="absolute top-2.5 right-3.5 font-serif text-[5rem] font-black text-brand/5 leading-none italic">“</div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_,j) => <span key={j} className="w-2.5 h-2.5 bg-gold rounded-sm" />)}
                </div>
                <p className="text-[0.84rem] text-gray-600 leading-relaxed mb-3 italic relative z-10">{rev.text}</p>
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${rev.bg} flex items-center justify-center font-bold text-[0.74rem] text-white shrink-0`}>{rev.init}</div>
                  <div>
                    <div className="font-bold text-[0.86rem] text-gray-900 leading-tight">{rev.author}</div>
                    <div className="text-[0.72rem] text-gray-400 mt-px">{rev.pos}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="py-12 px-5 md:px-7 bg-white scroll-mt-16" id="faq">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader tag="Вопросы и ответы" title="Часто задаваемые вопросы" subtitle="Ответы на популярные вопросы об организации занятий." />
          
          <div className="flex flex-col gap-1.5">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={i} delay={i*50} className={`border rounded-lg overflow-hidden transition-all duration-250 ${isOpen ? 'border-brand/25 shadow-[0_2px_14px_rgba(0,86,179,0.06)]' : 'border-gray-200'}`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className={`w-full flex items-center justify-between gap-3 bg-white px-4 py-3.5 text-left transition-colors duration-250 hover:bg-gray-50 ${isOpen ? '!bg-brand-xl' : ''}`}>
                    <span className={`font-sans text-[0.86rem] font-bold leading-snug ${isOpen ? 'text-brand-dark' : 'text-gray-900'}`}>{faq.q}</span>
                    <span className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-brand border-brand rotate-45' : 'border-gray-200'}`}>
                      <svg viewBox="0 0 12 12" className={`w-2 h-2 fill-none stroke-[2.5px] stroke-linecap-round stroke-linejoin-round ${isOpen ? 'stroke-white' : 'stroke-gray-400'}`}>
                        <line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/>
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
                    <div className="px-4 pb-4 pt-1.5 text-[0.82rem] text-gray-600 leading-relaxed bg-brand-xl">
                      {faq.a}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-11 px-5 md:px-7 bg-ink relative overflow-hidden scroll-mt-16" id="final-cta">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,86,179,0.28),transparent_55%),radial-gradient(ellipse_at_82%_50%,rgba(201,168,76,0.06),transparent_55%)]" />
        
        <div className="max-w-[1160px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-9 items-start">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.09em] uppercase px-3.5 py-1.5 rounded-full leading-none bg-white/10 border border-white/10 text-white/70 mb-3.5">Запись на пробный урок</span>
            <h2 className="text-[clamp(1.6rem,2.8vw,2.3rem)] font-black text-white leading-[1.08] tracking-tight mb-3">Первый шаг —<br/>бесплатно</h2>
            <p className="text-[0.88rem] text-white/50 leading-[1.75] max-w-[440px]">Запишитесь на пробный урок в виртуальном классе. Познакомимся, поговорим о ваших целях — и вы сами почувствуете, как комфортно учиться в таком формате.</p>
            <div className="flex flex-col gap-2 mt-5">
              {['Без оплаты заранее', 'Гибкое расписание', 'Ответ в течение часа', 'Без навязчивых звонков'].map((t,i) => (
                <div key={i} className="flex items-center gap-2 text-[0.75rem] text-white/40"><Icons.Check className="w-3 h-3 stroke-[#5b9fff]" />{t}</div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-2.5">
              <input required type="text" placeholder="Ваше имя" className="px-4 py-3 rounded-lg border-[1.5px] border-white/10 bg-white/5 text-white text-[0.82rem] outline-none transition-all focus:border-brand/65 focus:bg-brand/10 placeholder:text-white/30" />
              <input required type="text" placeholder="Телефон или Telegram" className="px-4 py-3 rounded-lg border-[1.5px] border-white/10 bg-white/5 text-white text-[0.82rem] outline-none transition-all focus:border-brand/65 focus:bg-brand/10 placeholder:text-white/30" />
              <select className="px-4 py-3 rounded-lg border-[1.5px] border-white/10 bg-white/5 text-white text-[0.82rem] outline-none transition-all focus:border-brand/65 focus:bg-brand/10 appearance-none cursor-pointer" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,.45)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 13px center', paddingRight: '34px' }} defaultValue="">
                <option value="" disabled className="bg-[#1e2535] text-white">Ваш уровень английского</option>
                <option value="beginner" className="bg-[#1e2535] text-white">Beginner — начинаю с нуля</option>
                <option value="elementary" className="bg-[#1e2535] text-white">Elementary — знаю базу</option>
                <option value="pre-intermediate" className="bg-[#1e2535] text-white">Pre-Intermediate — понимаю, но говорю с трудом</option>
                <option value="intermediate" className="bg-[#1e2535] text-white">Intermediate — общаюсь, но не уверен</option>
                <option value="upper-intermediate" className="bg-[#1e2535] text-white">Upper-Intermediate — хочу довести до автоматизма</option>
              </select>
              <button type="submit" className={`mt-1 px-6 py-3.5 rounded-full font-bold text-[0.84rem] transition-all shadow-[0_4px_16px_rgba(0,86,179,0.32)] ${formStatus === 'success' ? 'bg-green text-white' : 'bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,86,179,0.46)]'}`}>
                {formStatus === 'success' ? '✓ Заявка принята' : 'Записаться на бесплатный урок →'}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};
