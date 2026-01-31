import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Tratamiento avanzado<br/>para heridas complejas
          </h1>
          <p className="hero__description">
            Especialistas en el cuidado integral de heridas difíciles de sanar. 
            Utilizamos tecnología de vanguardia y protocolos basados en evidencia 
            para acelerar tu recuperación.
          </p>
          <div className="hero__buttons">
            <button className="btn btn--primary">Conocer más</button>
            <button className="btn btn--secondary">Contáctanos</button>
          </div>
        </div>
        <div className="hero__image">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop" 
            alt="Profesional médico"
            className="hero__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
