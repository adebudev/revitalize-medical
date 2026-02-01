import type { CSSProperties } from "react";
import ellipseIcon from "../../../assets/icons/ellipse.svg";

import Nurse from "../../../assets/images/nurse-person.png";

const ellipsePositions = (ellipseBottom: boolean) => {
  return (
    <div className="relative hidden mt-6 w-[calc(220px*var(--image-scale,1))] sm:block sm:w-[calc(260px*var(--image-scale,1))] lg:mt-[-35px] lg:w-[calc(260px*var(--image-scale,1))] xl:w-[calc(300px*var(--image-scale,1))]">
      <img
        src={ellipseIcon}
        alt="Decorative ellipse"
        className={`w-full z-10 lg:absolute lg:right-0 ${ellipseBottom ? "lg:top-[-105px] sm:top-[-100px]" : ""}`}
      />
      <span className="pointer-events-none hidden h-4 w-4 rounded-full bg-[#1F2C45] lg:absolute lg:block lg:right-[-2px] lg:top-[-130px] sm:top-[-130px]"></span>
    </div>
  );
};

export const ImageWithElipse = ({
  ellipseBottom = true,
  positionAbsolute = false,
  imgSrc = Nurse,
  scale = 1,
}: {
  ellipseBottom?: boolean;
  positionAbsolute?: boolean;
  imgSrc?: string;
  scale?: number;
}) => {
  const normalizedScale = Math.max(0.5, Math.min(scale, 2));
  const scaleStyles = {
    "--image-scale": normalizedScale,
  } as CSSProperties;

  return (
    <div className="flex w-full justify-center lg:w-1/2" style={scaleStyles}>
      <div className="lg:relative flex flex-col items-center">
        <div
          className={`flex flex-col items-center ${positionAbsolute ? "lg:absolute lg:top-[-280px]" : ""}`}
        >
          <div className="z-10 mx-auto w-[calc(200px*var(--image-scale,1))] overflow-hidden sm:w-[calc(240px*var(--image-scale,1))] lg:w-[calc(260px*var(--image-scale,1))]">
            <img
              src={imgSrc}
              alt="Profesional de la salud atendiendo a una paciente"
              className="h-full w-full object-cover"
            />
          </div>

          {ellipsePositions(ellipseBottom)}
        </div>
      </div>
    </div>
  );
};
