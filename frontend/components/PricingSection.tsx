import React from 'react';
import { Reveal, SectionHeader, Divider } from './ui';

export const PricingSection: React.FC = () => {
  return (
    <>
      <Divider />
      <section className="py-12 px-5 md:px-7 bg-white scroll-mt-16" id="pricing">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader tag="Стоимость занятий" title="Выберите удобный пакет" subtitle="Чем больше уроков — тем выгоднее цена за одно занятие. Пробный урок всегда бесплатно." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 items-stretch">
            {[
              { qty: '4 урока', total: '5 599 ₽', per: '1 400 ₽ за урок' },
              { qty: '8 уроков', total: '8 959 ₽', per: '1 120 ₽ за урок' },
              { qty: '16 уроков', total: '15 679 ₽', per: '980 ₽ за урок' },
              { qty: '32 урока', total: '29 119 ₽', per: '910 ₽ за урок', feat: true, badge: 'Максимальная выгода' },
            ].map((plan, i) => (
              <Reveal key={i} delay={i * 70} className={`rounded-xl p-5 flex flex-col items-center text-center transition-all duration-250 border ${plan.feat ? 'bg-gradient-to-br from-[#003d80] via-brand to-[#1a6fd4] border-transparent shadow-[0_10px_34px_rgba(0,86,179,0.36)] hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(0,86,179,0.46)]' : 'bg-gray-50 border-gray-200 hover:-translate-y-1 hover:shadow-[0_10px_34px_rgba(0,86,179,0.11)] hover:border-brand/20'}`}>
                {plan.badge && <div className="bg-gold text-[#3a2800] text-[0.6rem] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3">{plan.badge}</div>}
                <div className={`text-[0.72rem] font-bold uppercase tracking-wider mb-2 ${plan.feat ? 'text-white/60' : 'text-gray-400'}`}>{plan.qty}</div>
                <div className={`text-[1.9rem] font-black leading-none mb-1 tracking-tight ${plan.feat ? 'text-white' : 'text-gray-900'}`}>{plan.total}</div>
                <div className={`text-[0.76rem] leading-relaxed flex-1 ${plan.feat ? 'text-white/60' : 'text-gray-400'}`}>{plan.per}</div>
                <a href="#final-cta" className={`block w-full rounded-full py-2.5 text-[0.8rem] font-bold transition-all mt-4 ${plan.feat ? 'bg-white text-brand hover:bg-brand-light' : 'bg-brand text-white hover:bg-brand-dark shadow-[0_4px_14px_rgba(0,86,179,0.32)]'}`}>
                  Начать обучение
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={280}>
            <p className="text-center mt-4.5 text-[0.78rem] text-gray-400">Первый пробный урок — <strong className="text-gray-600">бесплатно</strong>. Оплата пакета после того, как убедитесь, что формат вам подходит.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
};
