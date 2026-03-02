import React, { useState, useEffect } from 'react';
import NavMobile from './NavMobile';
import Logo from '../assets/img/header/logo.svg';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  // Lógica para mudar o fundo do header ao rolar
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? 'bg-neutral-900 py-[16px] shadow-lg' : 'bg-transparent py-[20px]'
      } fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-50 transition-all duration-300`}
    >
      {/* Logo */}
      <a href="#home">
        <img src={Logo} alt="Gymme Logo" className="h-[30px]" />
      </a>

      {/* Navegação Desktop (esconde no mobile) */}
      <nav className="hidden lg:flex gap-x-8">
        <a href="#workouts" className="text-white text-sm font-medium hover:text-green-400 transition">Funcionalidades</a>
        <a href="#pricing" className="text-white text-sm font-medium hover:text-green-400 transition">Preços</a>
        <a href="#about" className="text-white text-sm font-medium hover:text-green-400 transition">Sobre</a>
      </nav>

      {/* Lado Direito: Botões + Hambúrguer */}
      <div className="flex items-center gap-x-4 lg:gap-x-9">
        <button className="text-white text-sm font-bold hover:text-green-400 transition">Entrar</button>
        <button className="btn btn-sm btn-primary hidden lg:block">Começar Agora</button>

        {/* Ícone Menu Hambúrguer / Fechar */}
<div
  onClick={() => setNavMobile(!navMobile)}
  className="lg:hidden cursor-pointer flex flex-col gap-y-1.5 z-50 p-2"
>
  {/* A classe 'z-50' garante que o ícone fique por cima do menu preto */}
  <div className={`w-7 h-[2px] bg-green-400 transition-all ${navMobile ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
  <div className={`w-7 h-[2px] bg-green-400 transition-all ${navMobile ? 'opacity-0' : ''}`}></div>
  <div className={`w-7 h-[2px] bg-green-400 transition-all ${navMobile ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
</div>

      {/* Componente NavMobile */}
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;
