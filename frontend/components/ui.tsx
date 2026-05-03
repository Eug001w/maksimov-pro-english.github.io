import React, { useEffect, useRef, useState } from 'react';

// --- Animation Wrapper ---
export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- UI Elements ---
export const Tag: React.FC<{ children: React.ReactNode; color?: 'blue' | 'gold' | 'teal' | 'orange' | 'dark'; className?: string }> = ({ children, color = 'blue', className = '' }) => {
  const colors = {
    blue: 'bg-brand-light text-brand-dark',
    gold: 'bg-gold-light text-gold-dark',
    teal: 'bg-teal-light text-teal',
    orange: 'bg-orange-light text-orange',
    dark: 'bg-white/10 border border-white/10 text-white/70'
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.09em] uppercase px-3.5 py-1.5 rounded-full leading-none ${colors[color]} ${className}`}>
      {children}
    </span>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'gold' | 'ghost';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'solid', href, className = '', ...props }) => {
  const base = "inline-flex items-center justify-center gap-2 font-bold cursor-pointer border-none rounded-full transition-all duration-250 whitespace-nowrap tracking-wide text-center";
  const variants = {
    solid: "bg-brand text-white px-7 py-3.5 text-[0.86rem] shadow-[0_4px_18px_rgba(0,86,179,0.32)] hover:bg-brand-dark hover:shadow-[0_8px_26px_rgba(0,86,179,0.44)] hover:-translate-y-0.5",
    outline: "bg-transparent text-white/80 px-7 py-3.5 text-[0.86rem] border-[1.5px] border-white/25 hover:border-white/55 hover:bg-white/10 hover:-translate-y-0.5",
    gold: "bg-gradient-to-br from-gold to-[#e0b84d] text-[#3a2800] px-7 py-3.5 text-[0.86rem] shadow-[0_4px_14px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_22px_rgba(201,168,76,0.4)] hover:-translate-y-0.5",
    ghost: "bg-transparent text-brand border-[1.5px] border-brand px-5 py-2.5 text-[0.82rem] hover:bg-brand-light"
  };

  if (href) {
    return <a href={href} className={`${base} ${variants[variant]} ${className}`} {...(props as any)}>{children}</a>;
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

export const Divider = () => (
  <div className="h-[1px] opacity-20 w-full" style={{ background: 'linear-gradient(90deg, transparent, #0056b3, #c9a84c, #0e9aa7, transparent)' }} />
);

export const SectionHeader: React.FC<{ tag: string; tagColor?: any; title: string; subtitle?: string; dark?: boolean }> = ({ tag, tagColor, title, subtitle, dark }) => (
  <div className="mb-8">
    <div className="flex items-baseline gap-2.5 mb-2.5">
      <Tag color={tagColor}>{tag}</Tag>
    </div>
    <h2 className={`text-[clamp(1.4rem,2.1vw,1.85rem)] font-extrabold leading-[1.08] tracking-[-0.028em] ${dark ? 'text-[#edf2ff]' : 'text-gray-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-[0.9rem] leading-[1.7] max-w-[580px] mt-3 ${dark ? 'text-white/45' : 'text-gray-400'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

// --- Icons ---
export const Icons = {
  Check: ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-[2.5px] stroke-linecap-round stroke-linejoin-round ${className}`}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ChevronRight: ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-[2px] stroke-linecap-round stroke-linejoin-round ${className}`}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  Play: ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={`fill-none ${className}`}>
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <polygon points="10 9 15 12 10 15" fill="currentColor" />
    </svg>
  ),
  Menu: ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-[2px] stroke-linecap-round stroke-linejoin-round ${className}`}>
      <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  X: ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-[2px] stroke-linecap-round stroke-linejoin-round ${className}`}>
      <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
};
