import React, { useRef } from 'react';

// Imagens dos Treinos
import BattleRopeImg from '../assets/img/workouts/battle-rope.png';
import BodyPumpImg from '../assets/img/workouts/body-pump.png';
import BoxingImg from '../assets/img/workouts/boxing.png';
import FitnessImg from '../assets/img/workouts/fitness.png';
import FullBodyImg from '../assets/img/workouts/full-body.png';
import ResistanceImg from '../assets/img/workouts/resistance.png';
import YogaImg from '../assets/img/workouts/yoga.png';

// Novos Ícones da pasta workouts/icons
import CalendarIcon from '../assets/img/workouts/icons/calendar.svg';
import ChevronLeft from '../assets/img/workouts/icons/chevron-left.svg';
import ChevronRight from '../assets/img/workouts/icons/chevron-right.svg';

const workoutData = [
  { name: 'Battle Rope', image: BattleRopeImg },
  { name: 'Body Pump', image: BodyPumpImg },
  { name: 'Boxing', image: BoxingImg },
  { name: 'Fitness', image: FitnessImg },
  { name: 'Full Body', image: FullBodyImg },
  { name: 'Resistance', image: ResistanceImg },
  { name: 'Yoga', image: YogaImg },
];

const Workouts = () => {
  const scrollRef = useRef(null);

  // Função para usar os chevrons importados
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden" id="workouts">
      <div className="container mx-auto px-6">
        
        {/* Header da Seção com Ícones de Navegação */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-4">
              <img src={CalendarIcon} alt="" className="w-6 h-6 text-green-400" />
              <span className="text-green-400 uppercase tracking-[0.3em] text-sm font-bold">Cronograma</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase italic">
              Treinos <span className="text-neutral-500">Elite</span>
            </h2>
          </div>

          {/* Controles usando chevron-left.svg e chevron-right.svg */}
          <div className="flex gap-4" data-aos="fade-left">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-400 transition-all group"
            >
              <img src={ChevronLeft} alt="Anterior" className="w-4 h-4 group-hover:invert" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-400 transition-all group"
            >
              <img src={ChevronRight} alt="Próximo" className="w-4 h-4 group-hover:invert" />
            </button>
          </div>
        </div>

        {/* Listagem Horizontal com Scroll Suave */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-10"
        >
          {workoutData.map((workout, index) => (
            <div 
              key={index}
              className="min-w-[300px] lg:min-w-[400px] aspect-[4/5] relative rounded-3xl overflow-hidden group snap-center"
            >
              <img 
                src={workout.image} 
                alt={workout.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-2xl font-black uppercase italic tracking-wider mb-2">
                  {workout.name}
                </h3>
                <div className="flex items-center gap-2 text-green-400 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ver Detalhes</span>
                  <img src={ChevronRight} alt="" className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workouts;