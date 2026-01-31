import { Container } from '../shared';
import nursePerson from '../../assets/images/nurse-person.png';
import checkIcon from '../../assets/icons/check.svg';

const highlights = [
  'Mejora en la cicatrización',
  'Reducción de complicaciones',
  'Optimización de recursos',
  'Mejora en la experiencia del paciente'
];

const Results = () => {
  return (
    <section className="bg-[#EBFCFF] py-16 pb-[200px]">
      <Container>
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <p className="text-[1.1rem] font-semibold uppercase tracking-[0.2em] text-[#00A4D6]">
              ¡Resultados
            </p>
            <h2 className="mt-2 text-3xl font-heading font-semibold text-[#00324B] md:text-[2.6rem]">
              que importan!
            </h2>
            <p className="mt-4 text-lg text-[#4A5E6B]">
              Evidencia clínica que respalda mejoras tangibles en el bienestar de tus pacientes.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#123B4F]">
                  <span className="mt-[2px] inline-flex p-">
                    <img src={checkIcon} alt="Check icon" />
                  </span>
                  <p className="text-base md:text-lg font-medium text-[#123B4F]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[250px] md:w-[320px]">
              <div className="relative overflow-hidden rounded-full shadow-xl">
                <img
                  src={nursePerson}
                  alt="Profesional de la salud atendiendo a una paciente"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="pointer-events-none absolute -bottom-6 right-1 h-[85%] w-[85%] rounded-full border-[10px] border-[#79D8FF] border-l-transparent border-t-transparent"></div>
              <div className="pointer-events-none absolute -bottom-10 right-4 h-[95%] w-[95%] rounded-full border-[10px] border-[#BDEEFF] border-l-transparent border-t-transparent"></div>
              <span className="pointer-events-none absolute top-1/3 -right-4 h-4 w-4 rounded-full bg-[#1F2C45]"></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Results;
