import { useState } from "react";
import { CustomHero } from "../../components/shared/CutomHero";
import { Card, Container } from "../../components/shared";

import tratamientoImage from "../../assets/images/tratamientos.jpg";

import piesImage from "../../assets/images/pie.png";
import manoImage from "../../assets/images/mano.png";
import pielHerida from "../../assets/images/piel-herida.png";
import faseUnoImage from "../../assets/images/fase1.png";
import faseDosImage from "../../assets/images/fase2.png";
import checkIcon from "../../assets/icons/check.svg";
import cavitacionIcon from "../../assets/icons/cavitacion.svg";
import neurologyIcon from "../../assets/icons/neurology.svg";
import ensureIcon from "../../assets/icons/ensure.svg";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";

import animacionTratamiento from "../../assets/videos/animacion-tratamiento.mp4";

type Phase = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  subtitle2?: string;
  description2?: string;
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

const phasesSlider: Phase[] = [
  {
    id: "fase-1",
    number: "1",
    title: "Preparación para el lecho",
    subtitle: "Debridación ultrasónica de baja frecuencia (Qoustic – 35 kHz)",
    description:
      "Tecnología de ultrasonido diseñada para limpiar la herida, remover tejido no viable y reducir la carga biológica, preservando el tejido sano.",
    subtitle2: "",
    description2: "",
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
    id: "fase-1-slide-2",
    number: "1",
    title: "¿Cómo actúa la tecnología Qoustic?",
    subtitle: "Corriente acústica",
    description:
      "Movimiento de fluido que contribuye a remover desechos y bacterias fragmentadas.",
    subtitle2: "Corriente acústica ",
    description2:
      "Movimiento de fluido que contribuye a remover desechos y bacterias fragmentadas.",
    benefits: [],
    image: faseUnoImage,
    imageAlt: "Dispositivo de debridación ultrasónica",
    background: "bg-[#E8F4FF]",
    imagePosition: "left",
    imageClass: "w-[876px] h-[727px] rotate-[8.53deg] -ml-[231px]",
  },
];

const fase2 = {
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
};

const TreatmentTechnology = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? phasesSlider.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === phasesSlider.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <CustomHero image={tratamientoImage} title="Tratamiento + tecnología" />

      <section className="py-16 bg-white" id="tratamientos">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] items-start pb-[60px]">
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
            <video
              className="absolute w-[525px] h-[282px] object-cover"
              src={animacionTratamiento}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </Container>

        <Container className="mt-16">
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

      <section
        className={`${phasesSlider[activeSlide].background} py-16 md:py-20 overflow-hidden relative transition-colors duration-500`}
      >
        {/* Botón anterior - Lateral izquierdo */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 lg:left-12 top-[400px] -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center hover:scale-110 transition-all duration-300"
          aria-label="Anterior"
        >
         <img src={arrowLeftIcon} alt="Anterior" />
        </button>

        {/* Botón siguiente - Lateral derecho */}
        <button
          onClick={handleNextSlide}
          className="absolute right-4 lg:right-12 top-[400px] -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center hover:scale-110 transition-all duration-300"
          aria-label="Siguiente"
        >
          <img src={arrowRightIcon} alt="Siguiente" />
        </button>

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center lg:justify-start transition-opacity duration-500 animate-fadeIn">
              <img
                key={activeSlide}
                src={phasesSlider[activeSlide].image}
                alt={phasesSlider[activeSlide].imageAlt}
                className={`object-contain ${phasesSlider[activeSlide].imageClass || "max-w-[480px]"}`}
              />
            </div>

            <div className="order-2 space-y-6 transition-opacity duration-500 animate-fadeIn">
              <div className="space-y-3">
                <div className="flex flex-wrap items-end text-primary-blue">
                  <span className="text-[5.75rem] leading-none font-heading font-bold">
                    {phasesSlider[activeSlide].number}
                  </span>
                  <div>
                    <span className="text-[3rem] leading-none font-heading font-semibold">
                      Fase
                    </span>
                    <p className="text-2xl italic text-primary-blue/80">
                      {phasesSlider[activeSlide].title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xl text-primary-dark font-semibold">
                  {phasesSlider[activeSlide].subtitle}
                </p>
                <p className="text-lg leading-relaxed text-[#475569]">
                  {phasesSlider[activeSlide].description}
                </p>
              </div>
              <span className="block w-16 border-b-2 border-primary-blue" />
              {phasesSlider[activeSlide].subtitle2 &&
                phasesSlider[activeSlide].description2 && (
                  <div className="space-y-4">
                    <p className="text-xl text-primary-dark font-semibold">
                      {phasesSlider[activeSlide].subtitle2}
                    </p>
                    <p className="text-lg leading-relaxed text-[#475569]">
                      {phasesSlider[activeSlide].description2}
                    </p>
                  </div>
                )}
              {phasesSlider[activeSlide].benefits.length > 0 && (
                <div>
                  <p className="mb-4 text-lg font-semibold text-primary-dark">
                    Beneficios:
                  </p>
                  <ul className="space-y-3">
                    {phasesSlider[activeSlide].benefits.map((benefit) => (
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
              )}
            </div>
          </div>
        </Container>

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
      </section>

      <section
        key={fase2.id}
        className={`${fase2.background} py-16 md:py-20 overflow-hidden`}
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className={`${"order-1"} flex justify-center lg:justify-start`}
            >
              <img
                src={fase2.image}
                alt={fase2.imageAlt}
                className={`object-contain ${"max-w-[480px]"}`}
              />
            </div>

            <div className={`${"order-2"} space-y-6`}>
              <div className="space-y-3">
                <div className="flex flex-wrap items-end text-primary-blue">
                  <span className="text-[5.75rem] leading-none font-heading font-bold">
                    {fase2.number}
                  </span>
                  <div>
                    <span className="text-[3rem] leading-none font-heading font-semibold">
                      Fase
                    </span>
                    <p className="text-2xl italic text-primary-blue/80">
                      {fase2.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xl text-primary-dark font-semibold">
                  {fase2.subtitle}
                </p>
                <p className="text-lg leading-relaxed text-[#475569]">
                  {fase2.description}
                </p>
              </div>
              <span className="block w-16 border-b-2 border-primary-blue" />
              <div>
                <p className="mb-4 text-lg font-semibold text-primary-dark">
                  Beneficios:
                </p>
                <ul className="space-y-3">
                  {fase2.benefits.map((benefit) => (
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
      </section>

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
