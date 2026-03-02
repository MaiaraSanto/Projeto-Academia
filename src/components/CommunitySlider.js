import React from 'react';
// Importação das imagens da pasta community
import Img1 from '../assets/img/community/img1.png';
import Img2 from '../assets/img/community/img2.png';
import Img3 from '../assets/img/community/img3.png';
import Img4 from '../assets/img/community/img4.png';

const communityMembers = [
  { image: Img1, name: 'Rodrigo Silva', message: 'A Gymme mudou minha rotina e minha saúde!' },
  { image: Img2, name: 'Ana Costa', message: 'O melhor ambiente para treinar pesado.' },
  { image: Img3, name: 'Lucas Melo', message: 'Comunidade incrível e professores nota 10.' },
  { image: Img4, name: 'Carla Dias', message: 'Resultados reais com suporte profissional.' },
];

const CommunitySlider = () => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide">
      {communityMembers.map((member, index) => (
        <div 
          key={index} 
          className="min-w-[280px] lg:min-w-[320px] bg-neutral-800 rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Imagem do Membro */}
          <div className="h-[240px] relative group">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
          </div>

          {/* Depoimento Sutil */}
          <div className="p-6">
            <h4 className="text-white font-bold mb-2">{member.name}</h4>
            <p className="text-gray-400 text-sm italic italic">"{member.message}"</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunitySlider;