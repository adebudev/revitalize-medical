import './Mission.scss';
import doctorImage from '../assets/images/doctor.png';

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission__container">
        <div className="mission__quote">
          <blockquote className="mission__blockquote">
            <span className="mission__open-quote">"</span>
            Nuestra visión es <strong className="mission__strong">transformar</strong>{' '}
            el <strong className="mission__strong">dolor en esperanza</strong>, elevando 
            el estándar de cuidado médico a 
            través de la <strong className="mission__strong">ciencia y la empatía</strong><span className="mission__close-quote">"</span>
          </blockquote>
        </div>
        <div className="mission__image">
          <img src={doctorImage} alt="Doctor" className="mission__img" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
