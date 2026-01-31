import './styles.scss';
import bloodTestIcon from '../../assets/icons/blood-test.svg';
import dirtyHandsIcon from '../../assets/icons/dirty-hands.svg';
import glovesIcon from '../../assets/icons/gloves.svg';

const Services = () => {
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

  return (
    <section className="services">
      <div className="services__container">
        {services.map((service, index) => (
          <div key={index} className="services__item">
            <div className="services__icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="services__content">
              <h3 className="services__title">{service.title}</h3>
              <p className="services__description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
