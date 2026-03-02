import React from 'react';
// Importação dos dados
import { about } from '../data';
// Importação do ícone específico que você mencionou
// Ajuste o caminho se o ícone estiver em outra subpasta de assets
import UsersIcon from '../assets/img/about/icons/users-icn.svg';

const About = () => {
  return (
    <section className="py-[80px] lg:py-[120px] bg-neutral-900" id="about">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        
        {/* Título e Ícone */}
        <div 
          className="flex flex-col items-center mb-[40px] lg:mb-[60px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center gap-x-4 mb-4">
            <img
              src={UsersIcon} // Usando a imagem que você pediu
              alt="Users Icon"
              className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
            />
            <h2 className="h2 text-white">
              {about.title}
            </h2>
          </div>
          {/* Linha decorativa profissional */}
          <div className="w-[80px] h-[4px] bg-green-400 rounded-full"></div>
        </div>

        {/* Conteúdo Centralizado */}
        <div className="max-w-[800px] mx-auto text-center">
          <p 
            className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {about.subtitle1}
          </p>

          <p 
            className="text-gray-400 text-md lg:text-lg leading-relaxed mb-12 italic border-l-4 border-green-400/30 pl-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {about.subtitle2}
          </p>

          {/* Botão com efeito de hover profissional */}
          <div data-aos="fade-up" data-aos-delay="400">
            <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-400/20">
              {about.link}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;