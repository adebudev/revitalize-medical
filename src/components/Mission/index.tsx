import doctorImage from '../../assets/images/doctor.png';

const Mission = () => {
  return (
    <section className="bg-gray-light py-[60px]">
      <div className="w-[1243px] max-w-full h-auto lg:h-[416px] mx-auto px-[30px] flex flex-col lg:flex-row items-center justify-center gap-[30px]">
        <div className="w-full lg:w-[629px] lg:text-left text-center">
          <blockquote className="font-inter text-[1.75rem] lg:text-[1.75rem] italic text-primary-blue leading-[1.6] m-0">
            <span className="text-[3rem] font-bold text-primary-blue italic leading-[0] align-middle mr-0.5">"</span>
            Nuestra visión es <strong className="text-primary-blue font-bold not-italic">transformar</strong>{' '}
            el <strong className="text-primary-blue font-bold not-italic">dolor en esperanza</strong>, elevando 
            el estándar de cuidado médico a 
            través de la <strong className="text-primary-blue font-bold not-italic">ciencia y la empatía</strong>
            <span className="text-[3rem] font-bold text-primary-blue italic leading-[0] align-middle ml-0.5">"</span>
          </blockquote>
        </div>
        <div className="shrink-0 relative flex items-center justify-center">
          {/* Background arc */}
          <div className="absolute w-[180px] h-[220px] lg:w-[332px] lg:h-[416px] bg-[#FAF2E9] rounded-t-full z-0" />
          <img 
            src={doctorImage} 
            alt="Doctor" 
            className="w-[477px] h-[414px] relative z-10 -right-[65px] lg:max-w-none max-w-[200px] right-[65px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
