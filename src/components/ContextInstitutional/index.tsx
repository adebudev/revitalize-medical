import { CustomTitle } from "../shared/CustomTitle";

import ContextImage from "../../assets/images/context.png";

const ContextInstitutional = () => {
  return (
    <div className="flex mx-[80px] mt-[30px]">
      <div>
        <CustomTitle
          text="¿QUÉ ES LA IMPLEMENTACIÓN INSTITUCIONAL?"
          underlineText="Un modelo"
          description=" estructurado para el cuidado avanzado de heridas"
          classContainer="mt-[30px] mb-[30px]"
        />
        <p className="font-semibold w-[732px]">
          Nuestro modelo de implementación institucional está diseñado para
          integrar soluciones avanzadas para el cuidado de heridas dentro de los
          flujos de trabajo clínicos existentes. Combina evidencia científica,
          protocolos estandarizados y acompañamiento clínico para garantizar
          resultados seguros, eficaces y medibles en entornos institucionales.
        </p>
      </div>
        <div className="mt-[30px] mb-[40px]">
      <img src={ContextImage} alt="Contexto Institucional" className="w-[70%]" />
      </div>

    </div>
  );
};

export default ContextInstitutional;