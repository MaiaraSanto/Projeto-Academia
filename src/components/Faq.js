import React, { useState } from 'react';
// Importação dos dados (títulos e perguntas)
import { faq } from '../data';

// Importações das imagens baseadas na sua nova estrutura de pastas
import QuestionIcon from '../assets/img/faq/icons/question-mark.svg'; // Dentro de icons
import BgImage from '../assets/img/faq/bg.svg'; // Na raiz da pasta faq

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative pt-[80px] lg:pt-[120px] bg-neutral-900 overflow-hidden" id="faq">
      
      {/* Imagem de Fundo (bg.svg) posicionada de forma absoluta */}
      <img 
        src={BgImage} 
        alt="" 
        className="absolute right-0 top-0 h-full opacity-10 pointer-events-none select-none" 
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Título com o Ícone (question-mark.svg) */}
        <div 
          className="flex items-center justify-center gap-4 mb-12 lg:mb-20"
          data-aos="fade-up"
        >
          <img src={QuestionIcon} alt="FAQ Icon" className="w-10 h-10 lg:w-12 lg:h-12" />
          <h2 className="h2 text-white text-center">
            {faq.title}
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="max-w-[800px] mx-auto flex flex-col gap-y-4">
          {faq.accordions.map((item, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index}
                className="cursor-pointer border-b border-neutral-800 transition-all duration-300"
                onClick={() => toggleAccordion(index)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Pergunta */}
                <div className="flex items-center justify-between py-6 group">
                  <h4 className={`text-lg lg:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-green-400' : 'text-white group-hover:text-green-400'}`}>
                    {item.question}
                  </h4>
                  {/* Ícone de Toggle animado */}
                  <div className={`text-green-400 text-3xl transition-transform duration-500 font-light ${isOpen ? 'rotate-[135deg]' : 'rotate-0'}`}>
                    +
                  </div>
                </div>

                {/* Resposta com animação de altura */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed text-md lg:text-lg pr-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;