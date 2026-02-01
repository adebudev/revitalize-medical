import { Container, Button } from '../shared';

const Evidence = () => {
  return (
    <section className="pt-[60px] md:pt-[80px] pb-[80px] md:pb-[100px] px-6 sm:px-[60px] lg:px-[100px] bg-white" id="nosotros">
      <Container className="flex flex-col lg:flex-row justify-between items-start gap-[30px] md:gap-[50px]">
        {/* Left side - Title and Button */}
        <div className="flex flex-col w-full lg:w-auto">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] leading-[40px] sm:leading-[48px] lg:leading-[60px] tracking-[0.05px] sm:tracking-[0.1px] lg:tracking-[0.15px] mb-6">
            <span className="font-light text-primary-blue">Trabajo basado en<br className="hidden sm:block" /></span>
            <span className="font-bold text-primary-blue">¡Evidencia y experiencia!</span>
          </h2>
          <div className="w-full sm:w-auto">
            <Button variant="primary" size="md">
              Ver evidencia
            </Button>
          </div>
        </div>

        {/* Right side - Description */}
        <div className="w-full max-w-[600px]">
          <p className="text-[18px] sm:text-[22px] lg:text-[28px] leading-relaxed font-medium text-[#123B4F]">
            Nuestro enfoque se basa en protocolos clínicos, experiencia profesional y acompañamiento continuo a instituciones de salud.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Evidence;
