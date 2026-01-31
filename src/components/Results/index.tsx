import './styles.scss';

const Results = () => {
  const results = [
    {
      icon: '📈',
      title: 'Mejoría en la cicatrización',
      description: 'Reducción significativa del tiempo de sanación'
    },
    {
      icon: '📉',
      title: 'Reducción de complicaciones',
      description: 'Menor riesgo de infecciones y recurrencias'
    },
    {
      icon: '💰',
      title: 'Optimización de recursos',
      description: 'Tratamientos más eficientes y económicos'
    },
    {
      icon: '😊',
      title: 'Mejora de la experiencia del paciente',
      description: 'Mayor satisfacción y calidad de vida'
    }
  ];

  return (
    <section className="results">
      <div className="container">
        <div className="results__header">
          <span className="results__label">¡Resultados</span>
          <h2 className="results__title">que importan!</h2>
        </div>
        
        <div className="results__list">
          {results.map((item, index) => (
            <div key={index} className="results__item">
              <div className="results__item-icon">{item.icon}</div>
              <div className="results__item-content">
                <h3 className="results__item-title">{item.title}</h3>
                <p className="results__item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
