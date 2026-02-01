import Container from "../../components/shared/Container";
import { CustomHero } from "../../components/shared/CutomHero";

import heroBackground from "../../assets/images/context.png";
import evidenceImage from "../../assets/images/mask-doctor.png";
import downloadIcon from "../../assets/icons/download.svg";

type ResourceItem = {
  id: number;
  title: string;
  category: string;
  fileSize: string;
  image: string;
};

const heroContent = {
  image: `url(${heroBackground})`,
  title: "Evidencias",
  description: "Documentación clínica, científica y técnica disponible en formato PDF.",
};

const resourcesList: ResourceItem[] = [
  {
    id: 1,
    title: "Evidencias",
    category: "Evidencias",
    fileSize: "29.35 MB",
    image: evidenceImage,
  },
  {
    id: 2,
    title: "Evidencias",
    category: "Protocolos",
    fileSize: "24.02 MB",
    image: evidenceImage,
  },
  {
    id: 3,
    title: "Evidencias",
    category: "Academia",
    fileSize: "18.64 MB",
    image: evidenceImage,
  },
];

const Resources = () => {
  return (
    <>
      <CustomHero
        image={heroContent.image}
        title={heroContent.title}
        description={heroContent.description}
      />

      <section className="bg-[#f8fafc] py-16" id="recursos">
        <Container className="flex flex-col gap-12">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-[30px]">
            {resourcesList.map((resource) => (
              <article
                key={resource.id}
                className="bg-[#CAF0F8] border border-[#e2e8f0] flex flex-col overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-[220px] object-cover"
                  />
                  <span className="absolute left-6 bottom-6 bg-white/90 text-primary-blue text-xs font-semibold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full">
                    {resource.category}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-2 gap-4">
                  <div className="mt-auto flex items-center justify-between">
                     <h3 className="text-xl font-heading font-semibold text-primary-blue mb-2">
                      {resource.title}
                    </h3>
                    <button
                      type="button"
                      className="w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-primary-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark transition-colors"
                      aria-label={`Descargar ${resource.title}`}
                    >
                      <img src={downloadIcon} alt="" className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-[#475569] italic max-w-4xl mx-auto mb-[130px]">
            La información contenida en estos documentos está dirigida exclusivamente a profesionales de la salud y no sustituye el criterio clínico.
          </p>
        </Container>
      </section>
    </>
  );
};

export default Resources;
