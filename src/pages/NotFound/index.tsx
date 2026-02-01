const NotFound = () => {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold text-primary-blue">Página no encontrada</h1>
      <p className="text-lg text-[#123B4F]">La ruta solicitada no existe. Por favor, vuelve al inicio.</p>
    </section>
  );
};

export default NotFound;
