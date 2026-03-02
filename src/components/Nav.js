import React from 'react';

// Dados de navegação (idealmente viriam do seu arquivo data.js)
const navData = [
  { name: 'Sobre', href: '#about' },
  { name: 'Treinos', href: '#workouts' },
  { name: 'Preços', href: '#pricing' },
  { name: 'Comunidade', href: '#community' },
  { name: 'FAQ', href: '#faq' },
];

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-12">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a 
                href={item.href}
                className="text-white font-medium uppercase tracking-[0.2em] text-sm transition-all duration-300 relative group"
              >
                {/* Texto do Link */}
                <span className="group-hover:text-green-400 transition-colors">
                  {item.name}
                </span>

                {/* Linha Decorativa Animada (Underline Premium) */}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                
                {/* Ponto sutil que aparece no hover */}
                <span className="absolute -top-1 -right-2 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;