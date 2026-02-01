export const CustomHero = ({ image = '', title = '', description = '' }: { image?: string; title?: string; description?: string }) => {
  const imageDefault = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='0.5'/%3E%3C/svg%3E")`;

  const withImageStyles = image
    ? {
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : null;

  const fallbackStyles = {
    backgroundImage: `linear-gradient(120deg, #012d59 0%, #0077b6 100%), ${imageDefault}`,
    backgroundSize: 'cover, 50px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section
      className="flex items-center relative pt-20 overflow-hidden"
      id="institucional"
      style={withImageStyles || fallbackStyles}
    >
      {/* Overlay gradient keeps text legible over photos */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="max-w-[842px] max-h-[480px] mx-auto py-[100px] grid grid-cols-1 place-items-center text-center relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[3rem] text-white mb-5 font-heading font-[700] [text-shadow:0px_4px_4px_#00000040]">
            {title}
          </h1>
          <p className="text-[2rem] text-white mb-[30px] [text-shadow:0px_4px_4px_#00000040]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};