import './Mission.scss';

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <div className="mission__quote">
          <blockquote className="mission__blockquote">
            "Nuestra visión es <strong className="mission__strong">transformar el dolor en esperanza</strong>, elevando 
            el estándar de cuidado médico a través de <span className="mission__highlight">la ciencia y la empatía</span>."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Mission;
