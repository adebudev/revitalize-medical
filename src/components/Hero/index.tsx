import heroVideo from '../../assets/videos/video_medical.mp4';
import { Button } from '../shared';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center relative pt-20 overflow-hidden"
      id="inicio"
    >
      <video
        className="absolute h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute bg-primary-dark/60" />
      
      <div className="max-w-[1300px] mx-auto px-5 pb-[112px] pt-[75px] grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center relative z-10">
        <div className="lg:text-left text-center">
          <h1 className="text-[3rem] text-white mb-5 leading-[1.2] font-heading font-[700] [text-shadow:0px_4px_4px_#00000040]">
            Tratamiento avanzado<br/>para heridas complejas
          </h1>
          <p className="text-[1.1rem] text-white/85 mb-[30px] leading-[1.7] [text-shadow:0px_4px_4px_#00000040]">
            Especialistas en el cuidado integral de heridas difíciles de sanar. 
            Utilizamos tecnología de vanguardia y protocolos basados en evidencia 
            para acelerar tu recuperación.
          </p>
          <div className="flex gap-[15px] flex-wrap lg:justify-start justify-center">
            <Button variant="primary">Solicitar información</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
