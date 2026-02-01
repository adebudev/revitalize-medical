import nursePerson from '../../../assets/images/nurse-person.png';
import ellipseIcon from '../../../assets/icons/ellipse.svg';

const ellipsePositions = (ellipseBottom: boolean) => {

  return (
    <div className="relative hidden mt-6 w-[220px] sm:block sm:w-[260px] lg:mt-[-35px] lg:w-[260px] xl:w-[300px]">
      <img
        src={ellipseIcon}
        alt="Decorative ellipse"
        className={`w-full z-10 lg:absolute lg:right-0 ${ellipseBottom ? 'lg:top-[-105px] sm:top-[-100px]' : ''}`}
      />
      <span className="pointer-events-none hidden h-4 w-4 rounded-full bg-[#1F2C45] lg:absolute lg:block lg:right-[-2px] lg:top-[-130px] sm:top-[-130px]"></span>
    </div>
  )
}

export const ImageWithElipse = ({ ellipseBottom = true }: { ellipseBottom?: boolean }) => {
  return (
    <div className="flex w-full justify-center lg:w-1/2">
      <div className="lg:relative flex flex-col items-center">
        <div className="flex flex-col items-center lg:absolute lg:top-[-280px]">
          <div className="z-10 mx-auto w-[200px] overflow-hidden sm:w-[240px] lg:w-[260px]">
            <img
              src={nursePerson}
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