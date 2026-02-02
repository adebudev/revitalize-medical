import Container from "../shared/Container";
import { CustomTitle } from "../shared/CustomTitle";

import ContextImage from "../../assets/images/context.png";

const ContextInstitutional = () => {
  return (
    <section className="py-12">
      <Container className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <CustomTitle
            text="¿QUÉ ES LA IMPLEMENTACIÓN INSTITUCIONAL?"
            underlineText="Un modelo"
            description=" estructurado para el cuidado avanzado de heridas"
            classContainer="px-0 text-center lg:text-left mb-6"
          />
          <p className="font-semibold text-base md:text-lg leading-relaxed text-[#123B4F]">
            Nuestro modelo de implementación institucional está diseñado para
            integrar soluciones avanzadas para el cuidado de heridas dentro de los
            flujos de trabajo clínicos existentes. Combina evidencia científica,
            protocolos estandarizados y acompañamiento clínico para garantizar
            resultados seguros, eficaces y medibles en entornos institucionales.
          </p>
        </div>
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src={ContextImage}
            alt="Contexto Institucional"
            className="w-full max-w-[420px] rounded-[28px] object-cover shadow-lg"
          />
        </div>
      </Container>
    </section>
  );
};

export default ContextInstitutional;