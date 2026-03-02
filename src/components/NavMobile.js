import React from 'react';

// Dados de navegação consistentes com a Nav desktop
const navData = [
  { name: 'Sobre', href: '#about' },
  { name: 'Treinos', href: '#workouts' },
  { name: 'Preços', href: '#pricing' },
  { name: 'Comunidade', href: '#community' },
  { name: 'FAQ', href: '#faq' },
];

const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <nav 
      className={`${
        navMobile ? 'min-h-screen' : 'min-h-0'
      } lg:hidden w-full bg-[#05080a] fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden transition-all duration-500`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-10">
        {navData.map((item, index) => {
          return (
            <li 
              key={index}
              className="transform transition-all duration-500"
              style={{ 
                opacity: navMobile ? 1 : 0,
                transform: navMobile ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <a 
                href={item.href}
                onClick={() => setNavMobile(false)} // Fecha o menu ao clicar
                className="text-white text-3xl font-black uppercase italic tracking-[0.2em] hover:text-green-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          );
        })}
        
        {/* Botão de Ação no Mobile */}
        <li 
          className="mt-6 transform transition-all duration-500"
          style={{ 
            opacity: navMobile ? 1 : 0, 
            transitionDelay: '600ms' 
          }}
        >
          <button className="btn btn-sm btn-primary py-4 px-12 rounded-full font-bold uppercase tracking-widest text-xs">
            Matricular-se
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;