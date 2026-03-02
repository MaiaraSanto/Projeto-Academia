import React from 'react';
import CommunitySlider from './CommunitySlider';
// Se houver um ícone na pasta icons da community, você pode importar aqui
import CommunityIcon from '../assets/img/community/icons/community-icn.svg'; 

const Community = () => {
  return (
    <section className="section bg-neutral-900 py-[80px] lg:py-[120px]" id="community">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-x-10">
          
          {/* Lado Esquerdo: Texto */}
          <div 
            className="lg:w-[40%] text-center lg:text-left mb-10 lg:mb-0"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <img src={CommunityIcon} alt="" className="w-10 h-10" />
              <h2 className="h2 text-white">Comunidade <span className="text-green-400">Gymme</span></h2>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Faça parte de um grupo focado em resultados. Compartilhe suas conquistas e inspire-se com quem treina ao seu lado.
            </p>
            <button className="btn btn-sm btn-primary lg:btn-lg">Ver histórias</button>
          </div>

          {/* Lado Direito: Slider */}
          <div 
            className="lg:w-[60%] w-full"
            data-aos="fade-left"
          >
            <CommunitySlider />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Community;