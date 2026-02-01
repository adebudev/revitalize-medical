import Audience from "../../components/Audience";
import ContextInstitutional from "../../components/ContextInstitutional";
import { CustomHero } from "../../components/shared/CutomHero";
import { CustomTitle } from "../../components/shared/CustomTitle";
import { Benefices } from "../../components/Benefices";

import biologicalImg from "../../assets/images/biological.png";
import protocolsImg from "../../assets/images/protocols.png";
import formationImg from "../../assets/images/formation.png";
import Principles from "../../components/Principles";

const institutionalAudience = [
  {
    image: biologicalImg,
    title: "Soluciones biológicas avanzadas",
    description:
      "Aloinertos derivados de membrana amniótica y coriónica humana que actúan como soporte biológico para favorecer la regeneración tisular en heridas agudas y crónicas.",
    accentColor: "#E9F7F8",
  },
  {
    image: protocolsImg,
    title: "Protocolos clínicos estandarizados",
    description:
      "Guías claras para la evaluación, preparación, aplicación y seguimiento del tratamiento, promoviendo consistencia y eficiencia en la práctica clínica.",
    accentColor: "#F1F5E9",
  },
  {
    image: formationImg,
    title: "Formación y soporte profesional",
    description:
      "Acompañamiento continuo a los equipos de salud para asegurar el uso adecuado de las soluciones y la optimización de los resultados clínicos.",
    accentColor: "#FEEFEB",
  },
];

const hero = {
  image: "",
  title: "Implementación Institucional",
  description:
    "Soluciones basadas en evidencia para el cuidado\navanzado de heridas en instituciones clínicas",
};

const Institutional = () => {
  return (
    <>
      <CustomHero
        image={hero.image}
        title={hero.title}
        description={hero.description}
      />

      <ContextInstitutional />
      
      <Principles />

      <div>
        <CustomTitle
          text="COMPONENTES DE LA IMPLEMENTACIÓN"
          underlineText="Componentes"
          description=" clave del proceso de implementación"
        />
        <Audience
          id="implementacion"
          heading={{
            light: "¿Quiénes",
            bold: "impulsan la implementación",
            suffix: "?",
          }}
          items={institutionalAudience}
        />
      </div>
      <Benefices />
      <div className="mx-auto mt-16 mb-[220px] px-6">
        <p className="mx-auto mt-12 text-center text-[2.25rem] leading-relaxed font-light text-[#0077B6]">
          Respaldado por investigaciones, nuestro modelo mejora resultados y eficiencia en el cuidado de heridas.
        </p>
      </div>
    </>
  );
};

export default Institutional;
