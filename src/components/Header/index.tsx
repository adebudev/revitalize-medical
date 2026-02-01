import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#tratamientos', label: 'Tratamiento + tecnología' },
  { href: '/institucional', label: 'Implementación Institucional' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#contacto', label: 'Contacto' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú al hacer resize a pantalla grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white py-[15px] fixed w-full top-0 z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-center w-full px-[26px]">
        <a href="#inicio" className="flex items-center gap-2.5 z-[1001]">
          <img 
            src="/revitalize-medical.png" 
            alt="Revitalize Medical" 
            className="w-[41px] h-[41px] object-contain"
          />
          <span className="hidden sm:flex text-[32.26px] leading-[48.38px] tracking-[0.3px]">
            <span className="font-heading font-medium text-primary-blue">Revitalize</span>
            <span className="font-light text-[#6b7280]">medical</span>
          </span>
        </a>

        {/* Botón hamburguesa - visible solo en móvil */}
        <button
          type="button"
          className="flex lg:hidden flex-col justify-center items-center w-10 h-10 gap-[6px] z-[1001] cursor-pointer bg-transparent border-none p-0 relative"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          <span 
            className={`block w-6 h-[2px] bg-primary-blue transition-all duration-300 ease-in-out origin-center
              ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}
          />
          <span 
            className={`block w-6 h-[2px] bg-primary-blue transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
          />
          <span 
            className={`block w-6 h-[2px] bg-primary-blue transition-all duration-300 ease-in-out origin-center
              ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}
          />
        </button>

        {/* Overlay para cerrar el menú */}
        <div 
          className={`block lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 z-[999]
            ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={closeMenu}
        />

        {/* Navegación desktop */}
        <nav className="hidden lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                relative font-inter font-medium text-[16px] leading-[24px] tracking-[0.15px]
                text-text-dark py-[10px] transition-all duration-200 ease-in-out
                hover:text-primary-blue
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                after:w-0 after:h-[3px] after:bg-accent-light after:rounded-[2px] after:transition-all after:duration-200
                after:shadow-[0_2px_8px_rgba(144,224,239,0.6)]
                hover:after:w-[80%]
                ${index === navLinks.length - 1 ? 'pl-[25px] pr-0' : 'px-[25px]'}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Navegación móvil */}
        <nav 
          className={`flex lg:hidden fixed top-0 right-0 h-screen w-[280px] max-w-[80vw] bg-white shadow-[-4px_0_20px_rgba(0,0,0,0.1)]
            flex-col pt-24 px-6 z-[1000] transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="
                font-inter font-medium text-[18px] leading-[28px] tracking-[0.15px]
                text-text-dark py-4 border-b border-gray-100 transition-all duration-200 ease-in-out
                hover:text-primary-blue hover:pl-2
              "
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
