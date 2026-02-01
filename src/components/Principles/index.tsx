import Container from "../shared/Container";

import alertImage from "../../assets/icons/alert.svg";
import ensureImage from "../../assets/icons/ensure.svg";
import integrationImage from "../../assets/icons/integration.svg";
import nurseImage from "../../assets/icons/nurse.svg";
import { CustomTitle } from "../shared/CustomTitle";

const institutionalPrincipies = [
  {
    icon: alertImage,
    title: "Evidencia científica",
    description:
      "Respaldado por estudios clínicos y literatura especializada en medicina regenerativa y cuidado avanzado de heridas.",
  },
  {
    icon: integrationImage,
    title: "Integración clínica",
    description:
      "Diseñado para adaptarse a los protocolos institucionales y al trabajo de equipos multidisciplinarios.",
  },
  {
    icon: ensureImage,
    title: "Seguridad y cumplimiento",
    description:
      "Procesos estrictos de selección, control y esterilidad, alineados con los estándares médicos vigentes.",
  },
  {
    icon: nurseImage,
    title: "Atención centrada en el paciente",
    description:
      "Enfocado en la cicatrización, la calidad de vida y la mejora de los resultados clínicos.",
  },
];

const Principles = () => {
  return (
    <section className="bg-[#00A9C9] py-[60px] md:py-[85px]">

      <CustomTitle
        text="PRINCIPIOS QUE SUSTENTAN NUESTRO MODELO"
        underlineText="Fundamentos"
        description=" de nuestro enfoque institucional"
        textColor="text-white"
        classContainer="mx-[100px] mb-[60px]"
      />

      <Container className="flex flex-col gap-[40px] md:flex-row md:items-start md:gap-[80px]">

        <div className="flex-1 grid grid-cols-1 gap-x-[70px] gap-y-[35px] md:grid-cols-2 justify-items-center">
          {institutionalPrincipies.map((service) => (
            <article key={service.title} className="flex items-start gap-[18px] text-white">
              <img
                src={service.icon}
                alt={service.title}
                className="mt-1 h-[60px] w-[60px] object-contain"
              />
              <div className="space-y-3 max-w-[280px]">
                <h3 className="text-[1.1rem] font-bold leading-tight">
                  {service.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.5] text-white/90">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Principles;
