import { Container } from '../shared';
import neurologyIcon from '../../assets/icons/neurology.svg';

const procedures = [
  {
    icon: neurologyIcon,
    title: 'Evaluación inicial',
    description: 'Análisis clínico y del modelo actual',
  },
  {
    icon: neurologyIcon,
    title: 'Diseño del tratamiento o modelo',
    description: 'Protocolos y soluciones a medida',
  },
  {
    icon: neurologyIcon,
    title: 'Implementación y seguimiento',
    description: 'Acompañamiento continuo y medición de resultados',
  }
];

const Procedure = () => {
  return (
    <section className="py-[80px] bg-accent-teal">
      <Container>
        <div className="flex justify-between items-start mb-[50px]">
          <h2 className="text-left text-[2.5rem] text-white">
            <span className="font-semibold underline decoration-[#90E0EF] decoration-[6px] underline-offset-4">¿Cómo</span> lo hacemos?
          </h2>
          <a
            href="#"
            className="text-white text-[18px] font-medium flex items-center tracking-[0.15px] leading-[60px] gap-2"
          >
            <span className="underline decoration-[1px] decoration-white">Conocer la implementación institucional</span>
            <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px]">
          {procedures.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-5 rounded-[5px] border border-white/30 bg-white/10 backdrop-blur-sm"
              style={{ minHeight: '254px' }}
            >
              <div className="mb-4 flex items-center gap-4 max-h-[90px] h-full">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-15 h-15"
                />
                <h3 className="text-white text-[24px] font-semibold mb-2">
                  {item.title}
                </h3>
              </div>

              <p className="text-white text-[20px] leading-relaxed mb-4">
                {item.description}
              </p>
              <a
                href="#"
                className="text-white text-sm font-medium hover:underline mt-auto"
              >
                Ver más
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Procedure;
