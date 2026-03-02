import React from 'react';
import Logo from '../assets/img/header/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080a] pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Coluna 1 */}
          <div className="flex flex-col gap-8">
            <a href="#home"> {/* Alterado de # para #home */}
              <img src={Logo} alt="Gymme Logo" className="h-10" />
            </a>
            <p className="text-slate-400 text-[15px] leading-relaxed font-light">
              Elevando o padrão do fitness. Uma abordagem holística para transformar seu corpo e mente.
            </p>
            <div className="flex gap-x-6 pt-2">
              {['IG', 'FB', 'YT'].map((item) => (
                <a key={item} href={`https://www.${item.toLowerCase()}.com`} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-green-400 text-xs font-black tracking-widest transition-all uppercase">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 e 3: Links de Navegação */}
          {/* Certifique-se de que os links aqui apontem para IDs reais como #about, #workouts, etc. */}
          <div>
            <h4 className="text-white text-[12px] font-black uppercase tracking-[0.4em] mb-10 opacity-90">Explorar</h4>
            <ul className="flex flex-col gap-y-5">
              <li><a href="#about" className="text-slate-400 hover:text-white text-[15px] transition-all">Sobre nós</a></li>
              <li><a href="#workouts" className="text-slate-400 hover:text-white text-[15px] transition-all">Treinos</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-white text-[15px] transition-all">Planos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-black uppercase tracking-[0.4em] mb-10 opacity-90">Suporte</h4>
            <ul className="flex flex-col gap-y-5">
              <li><a href="#faq" className="text-slate-400 hover:text-white text-[15px] transition-all">FAQ</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white text-[15px] transition-all">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 4 */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-[12px] font-black uppercase tracking-[0.4em] mb-10 opacity-90">Encontre-nos</h4>
            <p className="text-slate-400 text-[15px]">
              <span className="text-white font-semibold">contato@gymme.com.br</span><br />
              <span>(11) 9999-9999</span>
            </p>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 text-[12px]">
          <p>© {currentYear} <span className="text-slate-400 font-bold">GYMME</span>. Todos os direitos reservados.</p>
          <div className="flex gap-x-12">
            {/* Evite href="#" puro. Use caminhos ou mude para <button> se não tiver link */}
            <a href="#terms" className="hover:text-green-400 transition-colors">Termos</a>
            <a href="#cookies" className="hover:text-green-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
