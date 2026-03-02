import React, { useState, useEffect } from 'react';

// Importação dos componentes de navegação
import Nav from './Nav';
import NavMobile from './NavMobile';

// Importação da Logo conforme sua estrutura
import Logo from '../assets/img/header/logo.svg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  // Efeito para mudar o fundo do header ao rolar a página
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? 'bg-neutral-900 py-[16px]' : 'bg-transparent py-[20px]'
      } fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}
    >
      {/* Logo */}
      <a href="#home">
        <img className="h-[30px]" src={Logo} alt="Gymme Logo" />
      </a>

      {/* Nav Desktop (Escondida no Mobile) */}
      <Nav />

      {/* Botões da Direita (Login + Hambúrguer) */}
      <div className="flex items-center gap-x-4 lg:gap-x-9">
        <button className="text-white text-sm font-black uppercase italic hover:text-green-400 transition">
          Log In
        </button>
        <button className="btn btn-sm btn-primary hidden lg:block">
          Matricular-se
        </button>

        {/* Ícone do Menu Hambúrguer (Apenas Mobile) */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden cursor-pointer flex flex-col gap-y-1.5 z-50"
        >
          {/* Linhas do Hambúrguer com Animação para "X" */}
          <div className={`w-8 h-[2px] bg-green-400 transition-all duration-300 ${navMobile ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
          <div className={`w-8 h-[2px] bg-green-400 transition-all duration-300 ${navMobile ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-8 h-[2px] bg-green-400 transition-all duration-300 ${navMobile ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;
