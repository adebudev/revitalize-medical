import { CustomHero } from "../../components/shared/CutomHero";
import { Card, Container } from "../../components/shared";

import tratamientoImage from "../../assets/images/tratamientos.jpg";

import piesImage from "../../assets/images/pie.png";
import manoImage from "../../assets/images/mano.png";
import tejidoImage from "../../assets/icons/berruga.svg";
import pielHerida from "../../assets/images/piel-herida.png";
import faseUnoImage from "../../assets/images/fase1.png";
import faseDosImage from "../../assets/images/fase2.png";
import checkIcon from "../../assets/icons/check.svg";
import cavitacionIcon from "../../assets/icons/cavitacion.svg";
import neurologyIcon from "../../assets/icons/neurology.svg";
import ensureIcon from "../../assets/icons/ensure.svg";

type Phase = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  background: string;
  imagePosition: "left" | "right";
  imageClass?: string;
};

const indicationCards = [
  {
    id: "diabetico",
    image: piesImage,
    bgColor: "bg-[#E4F4FB]",
    items: ["Úlceras de pie diabético", "Úlceras venosas"],
  },
  {
    id: "postquirurgicas",
    image: manoImage,
    bgColor: "bg-[#F1F5E9]",
    items: ["Heridas postquirúrgicas", "Quemaduras"],
  },
  {
    id: "traumaticas",
    image: pielHerida,
    bgColor: "bg-[#FEF1F6]",
    items: ["Heridas traumáticas", "Defectos de tejidos blandos"],
  },
];

const highlights = [
  {
    id: "cavitacion",
    icon: cavitacionIcon,
    title: "Cavitación & Flujo Acústico",
    description:
      "Microburbujas oscilantes fragmentan biofilm y bacterias, estimulando la regeneración celular.",
  },
  {
    id: "selectividad",
    icon: neurologyIcon,
    title: "Selectividad tisular",
    description:
      "La energía se focaliza en tejido necrótico, preservando tejido sano, nervios y vasos sanguíneos.",
  },
  {
    id: "seguridad",
    icon: ensureIcon,
    title: "Seguridad",
    description:
      "Estudios muestran mínima aerosolización bacteriana, protegiendo al personal clínico y al entorno hospitalario.",
  },
];

const phases: Phase[] = [
  {
    id: "fase-1",
    number: "1",
    title: "Preparación para el lecho",
    subtitle: "Debridación ultrasónica de baja frecuencia (Qoustic – 35 kHz)",
    description:
      "Tecnología de ultrasonido diseñada para limpiar la herida, remover tejido no viable y reducir la carga biológica, preservando el tejido sano.",
    benefits: [
      "Debridación selectiva y controlada",
      "Eliminación de biofilm bacteriano",
      "Reducción de biocarga",
      "Preservación del tejido viable",
      "Menor dolor para el paciente",
    ],
    image: faseUnoImage,
    imageAlt: "Dispositivo de debridación ultrasónica",
    background: "bg-[#E8F4FF]",
    imagePosition: "left",
    imageClass: "w-[876px] h-[727px] rotate-[8.53deg] -ml-[231px]",
  },
  {
    id: "fase-2",
    number: "2",
    title: "Regeneración tisular (AmchoPlast)",
    subtitle: "Tecnología biológica avanzada",
    description:
      "Aloinjerto biológico tricapa derivado de membrana placentaria humana, diseñado para apoyar la regeneración del tejido.",
    benefits: [
      "Andamio biológico estructural",
      "Favorece migración e integración celular",
      "Modula inflamación crónica",
      "Estimula angiogénesis y reparación tisular",
    ],
    image: faseDosImage,
    imageAlt: "Representación de regeneración tisular",
    background: "bg-[#F0F6FF]",
    imagePosition: "left",
  },
];

const TreatmentTechnology = () => {
  return (
    <>
      <CustomHero image={tratamientoImage} title="Tratamiento + tecnología" />

      <section className="py-16 bg-white" id="tratamientos">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] items-start">
          <div className="space-y-5 max-w-[597px]">
            <h2 className="text-[2.5rem] leading-tight font-heading font-light text-primary-blue">
              Nuestro
              <span className="block text-primary-blue font-semibold">
                tratamiento
              </span>
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              Enfoque integral que combina preparación avanzada del{" "}
              <span className="font-semibold">lecho</span> y la
              <span className="font-semibold"> regeneración tisular</span> para
              acelerar la cicatrización y reducir complicaciones.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <img
              src={tejidoImage}
              alt="Guantes estériles"
              className="w-[525px] h-[282px] object-contain"
            />
          </div>
        </Container>

        <Container className="mt-14">
          <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            {indicationCards.map((card) => (
              <Card
                key={card.id}
                hover={false}
                bgColor={card.bgColor}
                className="mx-auto flex h-[350px] w-full max-w-[300px] flex-col items-center justify-center px-8 py-8 text-center shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
              >
                <img
                  src={card.image}
                  alt="Indicador clínico"
                  className="mb-8 h-24 w-24"
                />
                <ul className="space-y-4 text-base font-semibold leading-[18px] tracking-[0.015em] text-primary-dark">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center gap-3"
                    >
                      <span className="block h-2 w-2 rounded-full bg-primary-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {phases.map((phase, index) => {
        const isImageLeft = phase.imagePosition === "left";

        return (
          <section
            key={phase.id}
            className={`${phase.background} py-16 md:py-20 overflow-hidden`}
          >
            <Container>
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div
                  className={`${
                    isImageLeft ? "order-1" : "order-2"
                  } flex justify-center lg:justify-start`}
                >
                  <img
                    src={phase.image}
                    alt={phase.imageAlt}
                    className={`object-contain ${
                      phase.imageClass || "max-w-[480px]"
                    }`}
                  />
                </div>

                <div
                  className={`${isImageLeft ? "order-2" : "order-1"} space-y-6`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-end text-primary-blue">
                      <span className="text-[5.75rem] leading-none font-heading font-bold">
                        {phase.number}
                      </span>
                      <div>
                        <span className="text-[3rem] leading-none font-heading font-semibold">
                          Fase
                        </span>
                        <p className="text-2xl italic text-primary-blue/80">
                          {phase.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xl text-primary-dark font-semibold">
                      {phase.subtitle}
                    </p>
                    <p className="text-lg leading-relaxed text-[#475569]">
                      {phase.description}
                    </p>
                  </div>
                  <span className="block w-16 border-b-2 border-primary-blue" />
                  <div>
                    <p className="mb-4 text-lg font-semibold text-primary-dark">
                      Beneficios:
                    </p>
                    <ul className="space-y-3">
                      {phase.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-primary-dark"
                        >
                          <img
                            src={checkIcon}
                            alt=""
                            className="w-5 h-5 mt-1"
                            aria-hidden
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Container>

            {index === 0 && (
              <div className="mt-16 bg-[#00B4D8] py-12 text-white">
                <Container className="grid gap-8 md:grid-cols-3">
                  {highlights.map((feature) => (
                    <article
                      key={feature.id}
                      className="space-y-4 flex flex-col items-center text-center"
                    >
                      <span className="inline-flex h-20 w-20 items-center justify-center">
                        <img
                          src={feature.icon}
                          alt=""
                          className="w-[70px] h-[70px]"
                          aria-hidden
                        />
                      </span>
                      <h4 className="text-xl font-semibold">{feature.title}</h4>
                      <p className="text-sm leading-relaxed text-white/90 max-w-[300px]">
                        {feature.description}
                      </p>
                    </article>
                  ))}
                </Container>
              </div>
            )}
          </section>
        );
      })}

      <section className="bg-[#90E0EF] py-16">
        <Container>
          <p className="mx-auto max-w-4xl text-center text-[1.25rem] md:text-[1.75rem] leading-relaxed text-primary-blue font-light">
            La adopción de tecnologías avanzadas no es un gasto, es una{" "}
            <span className="font-semibold">
              inversión en eficiencia operativa
            </span>
            . Reducir el tiempo de cicatrización disminuye drásticamente los
            costos asociados a hospitalización prolongada, reingresos y
            amputaciones.
          </p>
        </Container>
      </section>

      <section className="py-18 bg-white" id="tratamientos"></section>
    </>
  );
};

export default TreatmentTechnology;
