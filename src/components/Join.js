import React from 'react';
// Importação da imagem da mulher treinando
import WomanImg from '../assets/img/join/woman.png';

const Join = () => {
  return (
    <section className="bg-neutral-900 py-[80px] lg:py-[120px]" id="join">
      <div className="container mx-auto px-4">
        
        {/* Card Principal com Gradiente */}
        <div className="bg-green-400 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center relative overflow-hidden shadow-2xl shadow-green-400/20">
          
          {/* Lado Esquerdo: Texto e Chamada */}
          <div className="lg:w-[60%] text-black z-10 text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-black uppercase italic mb-6 leading-tight" data-aos="fade-right">
              Pronto para elevar <br /> <span className="text-white">seu nível?</span>
            </h2>
            <p className="text-lg lg:text-xl mb-10 max-w-[450px] font-medium" data-aos="fade-right" data-aos-delay="200">
              Junte-se a nós agora e ganhe 50% de desconto no primeiro mês de qualquer plano.
            </p>
            
            {/* Formulário Simples / Botão */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-white/90 border-none px-6 py-4 rounded-full text-black focus:ring-2 focus:ring-black outline-none w-full sm:w-[300px]"
              />
              <button className="bg-black text-white font-bold py-4 px-10 rounded-full hover:bg-neutral-800 transition-all duration-300 uppercase tracking-widest text-sm">
                Matricular-se
              </button>
            </div>
          </div>

          {/* Lado Direito: Imagem (woman.png) */}
          <div 
            className="hidden lg:block absolute right-0 bottom-0 h-full w-[45%]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img 
              src={WomanImg} 
              alt="Woman training" 
              className="h-full w-full object-contain object-bottom transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Elementos Decorativos de Fundo */}
          <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default Join;