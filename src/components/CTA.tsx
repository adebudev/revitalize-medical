import './CTA.scss';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta__content">
        <div className="cta__text">
          <h2 className="cta__title">¿Quieres saber cómo implementar Advanced Wound Care?</h2>
          <p className="cta__description">
            Agenda una consulta gratuita con nuestros especialistas y descubre 
            cómo podemos ayudarte a mejorar los resultados de tus pacientes.
          </p>
        </div>
        <button className="btn btn--dark cta__button">
          Contáctanos a un especialista
        </button>
      </div>
    </section>
  );
};

export default CTA;
