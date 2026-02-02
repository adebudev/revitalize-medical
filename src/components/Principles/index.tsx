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
      <Container>
        <CustomTitle
          text="PRINCIPIOS QUE SUSTENTAN NUESTRO MODELO"
          underlineText="Fundamentos"
          description=" de nuestro enfoque institucional"
          textColor="text-white"
          classContainer="px-0 mb-10 text-center md:text-left"
        />

        <div className="grid grid-cols-1 gap-x-[40px] gap-y-[35px] md:grid-cols-2">
          {institutionalPrincipies.map((service) => (
            <article key={service.title} className="flex items-start gap-4 text-white">
              <img
                src={service.icon}
                alt={service.title}
                className="mt-1 h-[60px] w-[60px] object-contain"
              />
              <div className="max-w-[320px] space-y-3">
                <h3 className="text-[1.1rem] font-bold leading-tight">
                  {service.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.6] text-white/90">
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
