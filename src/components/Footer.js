import React from 'react';
import Logo from '../assets/img/header/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080a] pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Detalhe de luz ambiente (Glow) para dar profundidade */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[200px] bg-green-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Coluna 1: Logo & Bio */}
          <div className="flex flex-col gap-8">
            <a href="/" className="transition-transform duration-300 hover:scale-105 inline-block">
              <img src={Logo} alt="Gymme Logo" className="h-10" />
            </a>
            <p className="text-slate-400 text-[15px] leading-relaxed font-light">
              Elevando o padrão do fitness. Uma abordagem holística para transformar seu corpo e mente através da tecnologia e comunidade.
            </p>
            {/* Social Buttons Estilizados */}
            <div className="flex gap-x-6 pt-2">
              {['IG', 'FB', 'YT'].map((item) => (
                <a key={item} href="#" className="text-slate-500 hover:text-green-400 text-xs font-black tracking-widest transition-all uppercase underline-offset-8 hover:underline">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-white text-[12px] font-black uppercase tracking-[0.4em] mb-10 opacity-90">Explorar</h4>
            <ul className="flex flex-col gap-y-5">
              {['Sobre nós', 'Treinos', 'Planos'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-[15px] transition-all flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-green-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Suporte */}
          <div>
            <h4 className="text-white text-[12px] font-black uppercase tracking-[0.4em] mb-10 opacity-90">Suporte</h4>
            <ul className="flex flex-col gap-y-5">
              {['FAQ', 'Contato', 'Privacidade'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-[15px] transition-all flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-green-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Localização & Newsletter */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-white text-[12px] font-black uppercase tracking-[0.4em] mb-10 opacity-90">Encontre-nos</h4>
              <p className="text-slate-400 text-[15px] flex flex-col gap-2">
                <span className="text-white font-semibold">contato@gymme.com.br</span>
                <span>(11) 9999-9999</span>
                <span className="mt-2 text-slate-500 border-l border-green-400/50 pl-4 italic">Av. Fitness, 123 - São Paulo, SP</span>
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-[12px] tracking-tight">
            © {currentYear} <span className="text-slate-400 font-bold tracking-normal italic">GYMME</span>. All rights reserved.
          </p>
          <div className="flex gap-x-12 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
            <a href="#" className="hover:text-green-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;