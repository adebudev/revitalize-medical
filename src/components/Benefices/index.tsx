import { Container } from "../shared";
import { CustomTitle } from "../shared/CustomTitle";
import { HighLights } from "../shared/HighLights";
import { ImageWithElipse } from "../shared/ImageWithElipse";
import NurseHappy from "../../assets/images/nurse.png";
import HospitalCenter from "../../assets/images/hospital-center.png";

const highLights = [
  "Mejora en los resultados de cicatrización",
  "Reducción del tiempo de tratamiento",
  "Optimización de los costos asistenciales a largo plazo",
  "Estandarización de las prácticas de cuidado de heridas",
  "Uso más eficiente de los recursos clínicos",
];

const targetHighlights = [
  "Hospitales y redes de salud",
  "Clínicas especializadas en cuidado de heridas",
  "Centros de atención prolongada",
  "Equipos médicos y multidisciplinarios",
];
export const Benefices = () => {
  return (
    <section className="bg-[#E8F8FF] py-16 lg:py-24" id="beneficios">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <CustomTitle
            text="BENEFICIOS PARA LA INSTITUCIÓN"
            underlineText="Beneficios"
            description=" a nivel institucional"
            classContainer="space-y-3"
            classNameDescription="text-lg font-semibold text-primary-blue"
          />

          <HighLights
            highlights={highLights}
            className="mt-8 flex flex-col gap-2"
            itemClassName="flex items-center gap-2"
            iconWrapperClassName="inline-flex h-11 w-11 items-center justify-center"
            textClassName="text-lg leading-[1.7] text-[#123B4F]"
          />
        </div>

        <div className="relative flex w-full justify-center lg:w-1/2">
          <ImageWithElipse imgSrc={NurseHappy} />
        </div>
      </Container>

      <Container className="bg-[#E8F8FF] mt-16 px-6 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="relative flex w-full justify-center">
            <div className="">
              <ImageWithElipse imgSrc={HospitalCenter} />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <CustomTitle
              text="¿A QUIÉN ESTÁ DIRIGIDO?"
              classContainer="space-y-3"
              classNameDescription="text-lg font-semibold text-primary-blue"
            />

            <HighLights
              highlights={targetHighlights}
              className="mt-8 flex flex-col gap-2"
              itemClassName="flex items-center gap-2"
              iconWrapperClassName="inline-flex h-11 w-11 items-center justify-center"
              textClassName="text-lg text-[#123B4F]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
