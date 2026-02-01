export const CustomHero = ({ image = '', title = '', description = '' }: { image?: string; title?: string; description?: string }) => {
  const imageDefault = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='0.5'/%3E%3C/svg%3E")`;

  return (<section
    className="bg-linear-to-br from-primary-dark to-primary-blue flex items-center relative pt-20 overflow-hidden"
    id="institucional"
  >
    {/* Overlay pattern */}
    <div
      className="absolute inset-0 opacity-50 pointer-events-none"
      style={{
        backgroundImage: image || imageDefault,
        backgroundSize: '200px',
      }}
    />

    <div className="max-w-[842px] mx-auto px-5 pb-[119px] pt-[216px] grid grid-cols-1 place-items-center text-center relative z-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[3rem] text-white mb-5 font-heading font-[700] [text-shadow:0px_4px_4px_#00000040]">
          {title}
        </h1>
        <p className="text-[2.25rem] text-white mb-[30px] [text-shadow:0px_4px_4px_#00000040]">
          {description}
        </p>
      </div>
    </div>
  </section>);
}