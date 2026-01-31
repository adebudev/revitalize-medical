import { Container, Button } from '../shared';

const CTA = () => {
  return (
    <section className="bg-accent-teal py-[60px]">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-10 md:text-left text-center">
        <div>
          <h2 className="text-white text-[1.8rem] md:text-[1.8rem] mb-2.5 font-heading font-semibold">
            ¿Quieres saber cómo implementar Advanced Wound Care?
          </h2>
          <p className="text-white/90 text-base max-w-[600px]">
            Agenda una consulta gratuita con nuestros especialistas y descubre 
            cómo podemos ayudarte a mejorar los resultados de tus pacientes.
          </p>
        </div>
        <Button variant="dark" className="whitespace-nowrap shrink-0">
          Contáctanos a un especialista
        </Button>
      </Container>
    </section>
  );
};

export default CTA;
