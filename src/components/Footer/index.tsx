import { Button, Card, Container } from '../shared';
import revitalizeIcon from '../../assets/icons/revitalize.svg';

const Footer = () => {
  return (
    <footer className="bg-[#374151] pt-[180px] pb-8" id="contacto">
      {/* CTA Card - Positioned to overlap the top of the footer */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[calc(100%--80px)] w-full max-w-[1183px] px-4">
        <Card 
          className="w-full min-h-[220px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center py-12 px-6"
          hover={false}
        >
          <h3 className="text-[1.5rem] md:text-[1.75rem] font-[400] text-center text-gray-800 mb-2">
            ¿Quieres <span className="font-bold">saber</span> cómo <span className="font-bold">implementar</span>
          </h3>
          <h3 className="text-[1.5rem] md:text-[1.75rem] font-[400]  text-center text-gray-800 mb-4">
            Nuestro tratamiento?
          </h3>
          <p className="text-gray-500 text-center text-sm mb-6">
            Te acompañamos desde la evaluación hasta la implementación.
          </p>
          <Button variant="primary" size="lg" className="px-10 py-4 text-base rounded-md absolute left-1/2 top-[calc(100%-30px)] -translate-x-1/2">
            Contactar a un especialista
          </Button>
        </Card>
      </div>

      <Container>
        {/* Brand - Bottom left corner */}
        <div className="flex items-center gap-2.5 mt-8">
          <img 
            src={revitalizeIcon} 
            alt="Revitalize Medical" 
            className="w-[41px] h-[41px] object-contain"
          />
          <span className="flex text-[24px] leading-[36px] tracking-[0.3px]">
            <span className="font-heading font-medium text-white">Revitalize</span>
            <span className="font-light text-gray-400">medical</span>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
