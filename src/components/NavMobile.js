import React from 'react';

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
        navMobile ? 'min-h-screen opacity-100 visible' : 'h-0 opacity-0 invisible'
      } lg:hidden w-full bg-[#05080a] fixed top-0 left-0 right-0 bottom-0 transition-all duration-500 z-40 overflow-y-auto`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-6 p-8">
        {navData.map((item, index) => (
          <li
            key={index}
            className="transform transition-all duration-500 w-full text-center"
            style={{
              opacity: navMobile ? 1 : 0,
              transform: navMobile ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 50}ms`,
            }}
          >
            <a
              href={item.href}
              onClick={() => setNavMobile(false)}
              className="text-white text-2xl font-black uppercase italic tracking-widest hover:text-green-400 transition-colors block py-2"
            >
              {item.name}
            </a>
          </li>
        ))}
        <li
          className="mt-4 transform transition-all duration-500"
          style={{ opacity: navMobile ? 1 : 0, transitionDelay: '400ms' }}
        >
          <button className="bg-green-400 text-black py-4 px-10 rounded-full font-bold uppercase tracking-widest text-[10px]">
            Matricular-se
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
