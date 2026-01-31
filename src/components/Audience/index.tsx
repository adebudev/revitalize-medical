import './styles.scss';

const Audience = () => {
  const audiences = [
    {
      icon: '🏥',
      title: 'Pacientes con heridas crónicas',
      description: 'Úlceras diabéticas, úlceras por presión y heridas que no sanan'
    },
    {
      icon: '👨‍⚕️',
      title: 'Profesionales de la salud',
      description: 'Médicos y enfermeras que buscan capacitación especializada'
    },
    {
      icon: '🏛️',
      title: 'Instituciones médicas',
      description: 'Hospitales y clínicas que requieren consultoría experta'
    },
    {
      icon: '👴',
      title: 'Adultos mayores',
      description: 'Cuidado especializado para pieles frágiles y condiciones crónicas'
    }
  ];

  return (
    <section className="audience" id="servicios">
      <div className="container">
        <h2 className="audience__title">¿Para quién trabajamos?</h2>
        <p className="audience__subtitle">Conoce a nuestros pacientes</p>
        
        <div className="audience__grid">
          {audiences.map((item, index) => (
            <div key={index} className="audience__card">
              <div className="audience__card-icon">{item.icon}</div>
              <h3 className="audience__card-title">{item.title}</h3>
              <p className="audience__card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
