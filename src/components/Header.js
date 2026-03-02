import React, { useState, useEffect } from 'react';
import NavMobile from './NavMobile';
import Logo from '../assets/img/header/logo.svg';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        header ? 'bg-neutral-900 py-[16px] shadow-lg' : 'bg-transparent py-[20px]'
      } fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-50 transition-all duration-300`}
    >
      {/* Logo */}
      <a href="#home" className="z-[60]">
        <img src={Logo} alt="Gymme Logo" className="h-[30px]" />
      </a>

      {/* Nav Desktop */}
      <nav className="hidden lg:flex gap-x-8">
        <a href="#workouts" className="text-white text-sm font-medium hover:text-green-400 transition">Funcionalidades</a>
        <a href="#pricing" className="text-white text-sm font-medium hover:text-green-400 transition">Preços</a>
        <a href="#about" className="text-white text-sm font-medium hover:text-green-400 transition">Sobre</a>
      </nav>

      {/* Lado Direito */}
      <div className="flex items-center gap-x-4 lg:gap-x-9">
        <button className="text-white text-sm font-bold hover:text-green-400 transition">Entrar</button>
        <button className="hidden lg:block bg-green-400 text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-green-500 transition">
          Começar Agora
        </button>

        {/* Botão Hambúrguer */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden cursor-pointer flex flex-col gap-y-1.5 z-[60] p-2"
        >
          <div className={`w-7 h-[2px] bg-green-400 transition-all duration-300 ${navMobile ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
          <div className={`w-7 h-[2px] bg-green-400 transition-all duration-300 ${navMobile ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-7 h-[2px] bg-green-400 transition-all duration-300 ${navMobile ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
        </div>
      </div>

      {/* Menu Mobile */}
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;
