import { Container } from '../shared';
import checkIcon from '../../assets/icons/check.svg';
import { ImageWithElipse } from '../shared/ImageWithElipse';

const highlights = [
  'Mejora en la cicatrización',
  'Reducción de complicaciones',
  'Optimización de recursos',
  'Mejora en la experiencia del paciente'
];

const Results = () => {
  return (
    <section className="bg-[#EBFCFF] py-16 lg:py-24 pb-16 lg:pb-[200px] sm:pb-[1000px]">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[40px] font-bold text-primary-blue text-[#00A4D6]">
              ¡Resultados <br />
              <span className="ml-6 mt-2 text-[40px] font-light text-primary-blue text-[#00324B]">
                que importan!
              </span>
            </h2>

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

          <ImageWithElipse />

        </div>
      </Container>
    </section>
  );
};

export default Results;
