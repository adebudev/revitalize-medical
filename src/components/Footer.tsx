import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo">
              <img 
                src="/revitalize-medical.png" 
                alt="Revitalize Medical" 
                className="footer__logo-img"
              />
            </a>
            <p className="footer__brand-description">
              Especialistas en tratamiento avanzado de heridas complejas.
            </p>
          </div>
          
          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">Enlaces</h4>
              <a href="#inicio" className="footer__column-link">Inicio</a>
              <a href="#servicios" className="footer__column-link">Servicios</a>
              <a href="#nosotros" className="footer__column-link">Nosotros</a>
              <a href="#contacto" className="footer__column-link">Contacto</a>
            </div>
            
            <div className="footer__column">
              <h4 className="footer__column-title">Servicios</h4>
              <a href="#" className="footer__column-link">Tratamiento de heridas</a>
              <a href="#" className="footer__column-link">Consultoría</a>
              <a href="#" className="footer__column-link">Capacitación</a>
              <a href="#" className="footer__column-link">Telemedicina</a>
            </div>
            
            <div className="footer__column">
              <h4 className="footer__column-title">Contacto</h4>
              <p className="footer__column-text">📍 Ciudad de México, México</p>
              <p className="footer__column-text">📞 +52 55 1234 5678</p>
              <p className="footer__column-text">✉️ info@revitalizemedical.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">&copy; 2026 Revitalize Medical. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
