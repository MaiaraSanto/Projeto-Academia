import React from 'react';
// Importação da logo/ícone de preço
import PriceIcon from '../assets/img/pricing/icons/price.svg';

const pricingData = [
  {
    name: 'Básico',
    price: '99',
    features: ['Acesso à academia 24/7', 'Treino personalizado', 'Área de cardio'],
    recommended: false,
  },
  {
    name: 'Premium',
    price: '159',
    features: ['Tudo do Básico', 'Aulas de Boxe e Yoga', 'Personal Trainer 1x/mês', 'Acesso ao Spa'],
    recommended: true,
  },
  {
    name: 'Elite',
    price: '249',
    features: ['Tudo do Premium', 'Plano nutricional', 'Massagem semanal', 'Toalhas e Kimono inclusos'],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-[80px] lg:py-[120px] bg-neutral-900" id="pricing">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16" data-aos="fade-up">
          <img src={PriceIcon} alt="Price Icon" className="mx-auto mb-4 w-16 h-16" />
          <h2 className="h2 text-white mb-4">Nossos <span className="text-green-400">Planos</span></h2>
          <p className="text-gray-400 max-w-[600px] mx-auto">
            Escolha o plano ideal para o seu ritmo e comece sua jornada fitness.
          </p>
        </div>

        {/* Cards de Preço */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {pricingData.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.recommended 
                ? 'bg-neutral-800 border-2 border-green-400 scale-105 shadow-2xl shadow-green-400/10' 
                : 'bg-neutral-800/50 border border-neutral-700 hover:border-gray-500'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {plan.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-400 text-black text-xs font-bold px-4 py-1 rounded-full uppercase">
                  Recomendado
                </span>
              )}

              <h3 className="text-white text-2xl font-bold mb-4">{plan.name}</h3>
              
              <div className="flex items-baseline text-white mb-8">
                <span className="text-2xl font-semibold">R$</span>
                <span className="text-5xl font-bold ml-1">{plan.price}</span>
                <span className="text-gray-400 ml-1">/mês</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${
                plan.recommended 
                ? 'bg-green-400 text-black hover:bg-green-500' 
                : 'bg-white text-black hover:bg-gray-200'
              }`}>
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;