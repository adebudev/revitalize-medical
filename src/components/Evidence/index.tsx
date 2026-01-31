import { Container, Text } from '../shared';

const features = [
  'Protocolos basados en evidencia científica',
  'Equipo multidisciplinario especializado',
  'Tecnología de última generación'
];

const Evidence = () => {
  return (
    <section className="py-[100px] bg-gray-light" id="nosotros">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[80px] items-center">
        {/* Images */}
        <div className="relative">
          <div className="relative h-[300px] lg:h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" 
              alt="Laboratorio médico" 
              className="absolute top-0 left-0 w-[70%] rounded-[15px] shadow-lg object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop" 
              alt="Equipo médico" 
              className="absolute bottom-0 right-0 w-[70%] rounded-[15px] shadow-lg border-[5px] border-white object-cover"
            />
          </div>
        </div>
        
        {/* Text */}
        <div>
          <Text variant="label" className="mb-5">Trabajo basado en</Text>
          <Text variant="h2" className="text-primary-dark mb-5">Evidencia y experiencia</Text>
          <p className="text-[1.1rem] text-text-light leading-[1.8] mb-[30px]">
            Nuestro enfoque se basa en protocolos clínicos, <strong className="text-primary-dark">experiencia 
            profesional</strong> y acompañamiento continuo a instituciones en salud.
          </p>
          <ul className="list-none">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center gap-3 py-2.5 text-base text-text-dark"
              >
                <span className="flex items-center justify-center w-6 h-6 bg-accent-teal text-white rounded-full text-[0.8rem] font-bold shrink-0">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Evidence;
