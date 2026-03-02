import React, { useState } from 'react';

// Importação do ícone de preço da sua pasta pricing
import PriceIcon from '../assets/img/pricing/price.svg';

const pricingData = [
  { name: 'Básico', price: '99', features: ['Acesso à academia', 'Vestiário completo', 'App exclusivo'] },
  { name: 'Premium', price: '159', features: ['Tudo do Básico', 'Aulas de Boxe & Yoga', 'Avaliação mensal'], recommended: true },
  { name: 'Elite', price: '299', features: ['Tudo do Premium', 'Personal Trainer', 'Suplementação inclusa'] },
];

const PlanList = () => {
  const [activePlan, setActivePlan] = useState(1); // Plano Premium selecionado por padrão

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-x-8 w-full">
      {pricingData.map((plan, index) => {
        const { name, price, features, recommended } = plan;
        return (
          <div 
            key={index}
            onClick={() => setActivePlan(index)}
            className={`w-full max-w-[350px] min-h-[500px] p-10 rounded-3xl transition-all duration-500 cursor-pointer flex flex-col items-center ${
              activePlan === index 
              ? 'bg-white shadow-2xl shadow-green-400/20 scale-105' 
              : 'bg-neutral-900 border border-white/5 hover:border-green-400/30'
            }`}
          >
            {/* Ícone de Preço */}
            <div className="mb-8 relative">
              <img src={PriceIcon} alt="" className={`w-12 h-12 ${activePlan === index ? 'invert' : ''}`} />
              {recommended && (
                <span className="absolute -top-4 -right-16 bg-green-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">
                  Popular
                </span>
              )}
            </div>

            {/* Título e Preço */}
            <h3 className={`text-2xl font-black uppercase italic mb-4 ${activePlan === index ? 'text-black' : 'text-white'}`}>
              {name}
            </h3>
            <div className="flex items-start gap-1 mb-10">
              <span className={`text-2xl font-bold ${activePlan === index ? 'text-neutral-500' : 'text-green-400'}`}>R$</span>
              <span className={`text-6xl font-black tracking-tighter ${activePlan === index ? 'text-black' : 'text-white'}`}>
                {price}
              </span>
              <span className="text-sm font-bold self-end mb-2 text-neutral-500">/mês</span>
            </div>

            {/* Lista de Benefícios */}
            <ul className="flex flex-col gap-y-4 mb-12 w-full">
              {features.map((item, idx) => (
                <li key={idx} className={`flex items-center gap-3 text-sm font-medium ${activePlan === index ? 'text-neutral-600' : 'text-neutral-400'}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${activePlan === index ? 'bg-green-600' : 'bg-green-400'}`}></div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Botão de Chamada */}
            <button className={`mt-auto w-full py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all ${
              activePlan === index 
              ? 'bg-black text-white hover:bg-neutral-800' 
              : 'bg-green-400 text-black hover:bg-green-500'
            }`}>
              Assinar Agora
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;