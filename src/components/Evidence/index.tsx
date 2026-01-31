import './styles.scss';

const Evidence = () => {
  return (
    <section className="evidence" id="nosotros">
      <div className="evidence__content">
        <div className="evidence__images">
          <div className="evidence__image-stack">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" 
              alt="Laboratorio médico" 
              className="evidence__img evidence__img--back"
            />
            <img 
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop" 
              alt="Equipo médico" 
              className="evidence__img evidence__img--front"
            />
          </div>
        </div>
        
        <div className="evidence__text">
          <span className="evidence__label">Trabajo basado en</span>
          <h2 className="evidence__title">Evidencia y experiencia</h2>
          <p className="evidence__description">
            Nuestro enfoque se basa en protocolos clínicos, <strong>experiencia 
            profesional</strong> y acompañamiento continuo a instituciones en salud.
          </p>
          <ul className="evidence__features">
            <li className="evidence__feature">
              <span className="evidence__check-icon">✓</span>
              Protocolos basados en evidencia científica
            </li>
            <li className="evidence__feature">
              <span className="evidence__check-icon">✓</span>
              Equipo multidisciplinario especializado
            </li>
            <li className="evidence__feature">
              <span className="evidence__check-icon">✓</span>
              Tecnología de última generación
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Evidence;
