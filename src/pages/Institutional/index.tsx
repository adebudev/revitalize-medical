import Audience from "../../components/Audience";
import ContextInstitutional from "../../components/ContextInstitutional";
import Container from "../../components/shared/Container";
import { CustomHero } from "../../components/shared/CutomHero";
import { CustomTitle } from "../../components/shared/CustomTitle";
import { Benefices } from "../../components/Benefices";

import biologicalImg from "../../assets/images/biological.png";
import protocolsImg from "../../assets/images/protocols.png";
import formationImg from "../../assets/images/formation.png";
import Principles from "../../components/Principles";
import implementacionImage from "../../assets/images/implementacion.jpg";

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
        image={implementacionImage}
        title={hero.title}
        description={hero.description}
      />

      <ContextInstitutional />

      <Principles />

      <section className="py-12">
        <Container>
          <CustomTitle
            text="COMPONENTES DE LA IMPLEMENTACIÓN"
            underlineText="Componentes"
            description=" clave del proceso de implementación"
            classContainer="px-0 mb-8 text-center md:text-left"
          />
        </Container>
        <Audience
          id="implementacion"
          heading={{
            light: "¿Quiénes",
            bold: "impulsan la implementación",
            suffix: "?",
          }}
          items={institutionalAudience}
          gridClassName="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-12"
        />
      </section>
      <Benefices />
      <section className="px-6 md:px-12 lg:px-0 mt-16 mb-20 md:mb-32">
        <p className="mx-auto max-w-4xl text-center text-[1.5rem] md:text-[2.25rem] leading-relaxed font-light text-[#0077B6]">
          Respaldado por investigaciones, nuestro modelo mejora resultados y eficiencia en el cuidado de heridas.
        </p>
      </section>
    </>
  );
};

export default Institutional;
