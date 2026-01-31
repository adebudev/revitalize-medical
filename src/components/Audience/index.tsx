import { Card, Container } from '../shared';
import hospitalImg from '../../assets/images/hospital.png';
import nursesImg from '../../assets/images/nurses.png';
import proyectImg from '../../assets/images/proyect.png';

const audiences = [
  {
    image: hospitalImg,
    title: 'Instituciones de salud',
    description: 'Hospitales, clínicas y centros de atención',
    accentColor: '#E9F7F8'
  },
  {
    image: nursesImg,
    title: 'Instituciones de salud',
    description: 'Hospitales, clínicas y centros de atención',
    accentColor: '#F1F5E9'
  },
  {
    image: proyectImg,
    title: 'Instituciones de salud',
    description: 'Hospitales, clínicas y centros de atención',
    accentColor: '#FEEFEB'
  }
];

const Audience = () => {
  return (
    <section className="py-[66px] bg-white" id="servicios">
      <Container>
        <h2 className="text-left text-[2.5rem] text-primary-blue mb-2.5]">
          <span className="font-light">¿Para quién</span> <span className="font-bold">trabajamos</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[35px]">
          {audiences.map((item, index) => (
            <Card key={index} className="flex flex-col rounded-br-3xl overflow-hidden" style={{ backgroundColor: item.accentColor }}>
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />
              </div>
              <div className="flex items-start gap-3">
                <div className="p-5">
                  <h3 className="text-[1.1rem] text-primary-dark font-heading font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[0.95rem] text-text-light leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Audience;
