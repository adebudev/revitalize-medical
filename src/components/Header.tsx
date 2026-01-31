import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <a href="#inicio" className="header__logo">
          <img 
            src="/revitalize-medical.png" 
            alt="Revitalize Medical" 
            className="header__logo-img"
          />
        </a>
        <nav className="header__nav">
          <a href="#inicio" className="header__nav-link">Inicio</a>
          <a href="#servicios" className="header__nav-link">Servicios</a>
          <a href="#nosotros" className="header__nav-link">Nosotros</a>
          <a href="#contacto" className="header__nav-link">Contacto</a>
        </nav>
        <button className="btn btn--primary header__cta">Agendar Cita</button>
      </div>
    </header>
  );
};

export default Header;
