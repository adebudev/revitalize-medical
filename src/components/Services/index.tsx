import bloodTestIcon from '../../assets/icons/blood-test.svg';
import dirtyHandsIcon from '../../assets/icons/dirty-hands.svg';
import glovesIcon from '../../assets/icons/gloves.svg';

const services = [
  {
    icon: bloodTestIcon,
    title: 'Tratamiento',
    description: 'Tratamos heridas complejas y crónicas con enfoques avanzados'
  },
  {
    icon: dirtyHandsIcon,
    title: 'Implementación',
    description: 'Implementamos modelos de cuidado en instituciones de salud'
  },
  {
    icon: glovesIcon,
    title: 'Acompañamiento',
    description: 'Acompañamos equipos clínicos con protocolos y seguimiento'
  }
];

const Services = () => {
  return (
    <section className="bg-accent-teal h-auto md:h-[241px] flex items-center py-[30px] md:py-0">
      <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-[60px]">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex items-start gap-[15px] flex-1 w-full md:w-auto"
          >
            <div className="shrink-0 w-[75px] h-[120px] bg-white rounded-[15px] flex items-center justify-center shadow-sm">
              <img 
                src={service.icon} 
                alt={service.title} 
                className="w-[58px] h-[58px] object-contain" 
              />
            </div>
            <div className="flex flex-col gap-2 w-[217px] h-[106px]">
              <h3 className="font-heading text-[1.25rem] font-bold text-white m-0">
                {service.title}
              </h3>
              <p className="font-sans text-[0.95rem] leading-[1.5] text-white m-0 opacity-95">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
