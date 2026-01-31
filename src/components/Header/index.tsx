import './styles.scss';

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
          <span className="header__brand">
            <span className="header__brand-revitalize">Revitalize</span>
            <span className="header__brand-medical">medical</span>
          </span>
        </a>
        <nav className="header__nav">
          <a href="#inicio" className="header__nav-link">Inicio</a>
          <a href="#que-hacemos" className="header__nav-link">Qué hacemos</a>
          <a href="#tratamientos" className="header__nav-link">Tratamientos</a>
          <a href="#institucional" className="header__nav-link">Institucional</a>
          <a href="#recursos" className="header__nav-link">Recursos</a>
          <a href="#contacto" className="header__nav-link">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
