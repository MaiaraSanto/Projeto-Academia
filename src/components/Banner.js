import React from 'react';
// Importando a imagem de fundo dos seus assets
import BgImage from '../assets/img/banner/bg.png';

const Banner = () => {
  return (
    <section 
      className="relative h-[80vh] lg:h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay Escuro: Essencial para dar contraste ao texto e parecer profissional */}
      <div className="absolute inset-0 bg-black/50 lg:bg-black/40"></div>

      {/* Conteúdo do Banner */}
      <div className="container mx-auto z-10 px-4 text-center">
        
        <h1 
          className="text-white text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tighter mb-6 italic"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Academia <span className="text-green-400">Moderna</span>
        </h1>

        <p 
          className="text-gray-200 text-lg md:text-2xl max-w-[600px] mx-auto mb-10 leading-relaxed font-light"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Treine com os melhores profissionais e alcance sua melhor versão com tecnologia de ponta.
        </p>

        <div 
          className="flex flex-col md:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-widest text-sm">
            Começar Agora
          </button>
          
          <button className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-12 rounded-full transition-all duration-300 uppercase tracking-widest text-sm">
            Ver Planos
          </button>
        </div>

      </div>

      {/* Efeito Visual: Gradiente na parte inferior para suavizar a transição com a próxima seção */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </section>
  );
};

export default Banner;