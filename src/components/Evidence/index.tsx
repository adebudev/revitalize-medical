import { Container, Button } from '../shared';

const Evidence = () => {
  return (
    <section className="pt-[80px] pb-[100px] px-[100px] bg-white" id="nosotros">
      <Container className="flex flex-col lg:flex-row justify-between items-start gap-[50px]">
        {/* Left side - Title and Button */}
        <div className="flex flex-col">
          <h2 className="text-[40px] leading-[60px] tracking-[0.15px] mb-6">
            <span className="font-light text-primary-blue">Trabajo basado en<br /></span>
            <span className="font-bold text-primary-blue">¡Evidencia y experiencia!</span>
          </h2>
          <div>
            <Button variant="primary" size="md">
              Ver evidencia
            </Button>
          </div>
        </div>

        {/* Right side - Description */}
        <div className="max-w-[450px]">
          <p className="text-[32px] font-normal leading-[40px] text-text-light">
            Nuestro enfoque se basa en protocolos clínicos, experiencia profesional y acompañamiento continuo a instituciones de salud.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Evidence;
