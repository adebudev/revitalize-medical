import Services from '../../components/Services';
import Mission from '../../components/Mission';
import Audience from '../../components/Audience';
import Procedure from '../../components/Procedure';
import Evidence from '../../components/Evidence';
import Results from '../../components/Results';
import { CustomHero } from '../../components/shared/CutomHero';

const Institutional = () => {
  return (
    <>
      <CustomHero image="url-to-image" title="Implementación Institucional" description="Soluciones basadas en evidencia para el cuidado
avanzado de heridas en instituciones clínicas" />
      <Services />
      <Mission />
      <Audience />
      <Procedure />
      <Evidence />
      <Results />
    </>
  );
};

export default Institutional;
