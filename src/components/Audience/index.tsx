import { Container, Text, Card } from '../shared';

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

const Audience = () => {
  return (
    <section className="py-[100px] bg-white" id="servicios">
      <Container>
        <h2 className="text-center text-[2.5rem] text-primary-dark mb-2.5 font-heading font-semibold">
          ¿Para quién trabajamos?
        </h2>
        <p className="text-center text-text-light text-[1.1rem] mb-[60px]">
          Conoce a nuestros pacientes
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {audiences.map((item, index) => (
            <Card key={index} className="px-[25px] py-[40px]">
              <div className="text-[3rem] mb-5">{item.icon}</div>
              <h3 className="text-[1.1rem] text-primary-dark mb-3 font-heading font-semibold">
                {item.title}
              </h3>
              <p className="text-[0.95rem] text-text-light leading-[1.6]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Audience;
