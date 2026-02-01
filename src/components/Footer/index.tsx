import { Button, Card, Container } from '../shared';
import revitalizeIcon from '../../assets/icons/revitalize.svg';

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011-.25 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M12 21s7-5.75 7-11a7 7 0 10-14 0c0 5.25 7 11 7 11z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

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
        <div className="mt-14 flex flex-col gap-10 text-white md:flex-row md:items-start md:justify-between">
          <div className="max-w-[420px] space-y-5">
            <div className="flex items-center gap-2.5">
              <img
                src={revitalizeIcon}
                alt="Revitalize Medical"
                className="h-[41px] w-[41px] object-contain"
              />
              <span className="flex text-[24px] leading-[36px] tracking-[0.3px]">
                <span className="font-heading font-medium text-white">Revitalize</span>
                <span className="font-light text-gray-400">medical</span>
              </span>
            </div>
            <p className="text-[14px] text-white/80">
              Soluciones clínicas e institucionales que mejoran la cicatrización y optimizan los recursos en salud.
            </p>
            <div className="h-[3px] w-[180px] rounded-full bg-white/70"></div>
          </div>

          <div className="flex flex-col gap-5 text-white items-start">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <PhoneIcon />
              </span>
              <p className="text-[1.25rem] tracking-[0.2px]">+411 364 765</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <LocationIcon />
              </span>
              <div className="text-[1.05rem] leading-[1.7] text-white">
                <p>850 NW 42 Ave suite 406</p>
                <p>Miami 33126</p>
              </div>
            </div>
            <div className="h-[3px] w-[180px] rounded-full bg-white/70 md:ml-auto"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
