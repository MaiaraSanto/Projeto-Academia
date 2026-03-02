import React, { useState } from 'react';

// Importação do ícone de interrogação conforme sua estrutura de pastas
import QuestionIcon from '../assets/img/faq/icons/question-mark.svg';

const Accordion = ({ accordion }) => {
  // Desestruturando os dados (assumindo a estrutura do seu data.js)
  const { question, answer } = accordion;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="cursor-pointer border-b border-white/5 last:border-none select-none group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between py-6 lg:py-8 transition-all">
        
        {/* Lado Esquerdo: Ícone + Pergunta */}
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <img 
            src={QuestionIcon} 
            alt="" 
            className={`w-5 h-5 lg:w-6 lg:h-6 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`} 
          />
          <h4 className={`text-base lg:text-xl font-bold tracking-wide transition-colors duration-300 ${isOpen ? 'text-green-400' : 'text-white'}`}>
            {question}
          </h4>
        </div>

        {/* Lado Direito: Indicador de Estado customizado */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          <div className={`absolute w-full h-[2px] bg-green-400 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-90'}`}></div>
          <div className="absolute w-full h-[2px] bg-green-400 transition-transform duration-500"></div>
        </div>
      </div>

      {/* Conteúdo da Resposta com Animação de Expansão */}
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mb-8' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-neutral-400 text-sm lg:text-base leading-relaxed max-w-[90%] pl-9 lg:pl-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;