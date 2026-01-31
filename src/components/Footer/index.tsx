import { Container } from '../shared';

const footerLinks = {
  enlaces: [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ],
  servicios: [
    { href: '#', label: 'Tratamiento de heridas' },
    { href: '#', label: 'Consultoría' },
    { href: '#', label: 'Capacitación' },
    { href: '#', label: 'Telemedicina' },
  ],
  contacto: [
    { icon: '📍', text: 'Ciudad de México, México' },
    { icon: '📞', text: '+52 55 1234 5678' },
    { icon: '✉️', text: 'info@revitalizemedical.com' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-20 pb-[30px]" id="contacto">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[60px] mb-[50px]">
          {/* Brand */}
          <div>
            <a href="#inicio" className="inline-block">
              <img 
                src="/revitalize-medical.png" 
                alt="Revitalize Medical" 
                className="h-[50px] w-auto object-contain"
              />
            </a>
            <p className="text-white/70 leading-[1.7] mt-5">
              Especialistas en tratamiento avanzado de heridas complejas.
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[1.1rem] mb-5 text-white font-heading font-semibold">Enlaces</h4>
              {footerLinks.enlaces.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="block text-white/70 mb-3 text-[0.95rem] transition-colors duration-300 hover:text-accent-teal"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="text-[1.1rem] mb-5 text-white font-heading font-semibold">Servicios</h4>
              {footerLinks.servicios.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="block text-white/70 mb-3 text-[0.95rem] transition-colors duration-300 hover:text-accent-teal"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="text-[1.1rem] mb-5 text-white font-heading font-semibold">Contacto</h4>
              {footerLinks.contacto.map((item) => (
                <p key={item.text} className="text-white/70 mb-3 text-[0.95rem]">
                  {item.icon} {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-[30px] text-center">
          <p className="text-white/50 text-[0.9rem]">&copy; 2026 Revitalize Medical. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
