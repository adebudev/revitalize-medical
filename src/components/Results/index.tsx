import { Container } from '../shared';

const results = [
  {
    icon: '📈',
    title: 'Mejoría en la cicatrización',
    description: 'Reducción significativa del tiempo de sanación'
  },
  {
    icon: '📉',
    title: 'Reducción de complicaciones',
    description: 'Menor riesgo de infecciones y recurrencias'
  },
  {
    icon: '💰',
    title: 'Optimización de recursos',
    description: 'Tratamientos más eficientes y económicos'
  },
  {
    icon: '😊',
    title: 'Mejora de la experiencia del paciente',
    description: 'Mayor satisfacción y calidad de vida'
  }
];

const Results = () => {
  return (
    <section className="bg-linear-to-br from-primary-dark to-primary-blue py-20">
      <Container>
        <div className="text-center mb-[50px]">
          <span className="text-accent-teal text-[1.2rem] font-semibold">¡Resultados</span>
          <h2 className="text-white text-[2.5rem] mt-[5px] font-heading font-semibold">que importan!</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[900px] mx-auto">
          {results.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-5 bg-white/10 p-[25px] rounded-[15px] backdrop-blur-sm transition-all duration-300 hover:translate-x-2.5 hover:bg-white/15"
            >
              <div className="text-[2.5rem] shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-white text-[1.1rem] mb-2 font-heading font-semibold">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[0.95rem] leading-[1.5]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Results;
