
const ImpactSection = () => {
  const impacts = [
    {
      number: "236",
      description: "Consultorias Realizadas"
    },
    {
      number: "Nacional",
      description: "Nosso alcance"
    },
    {
      number: "+1000",
      description: "Regulações realizadas e certificadas"
    }
  ];

  return (
    <section className="bg-farm-tertiary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ibm-plex text-4xl font-bold mb-6" style={{color: '#1E1E1E'}}>
            Impactos
          </h2>
          <p className="font-ibm-plex text-xl max-w-3xl mx-auto leading-relaxed" style={{color: '#1E1E1E'}}>
            Nosso compromisso com a sustentabilidade gera resultados mensuráveis 
            que transformam o meio ambiente e a sociedade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
               <div className="mb-4">
                <span className="font-ibm-plex text-5xl md:text-6xl font-bold" style={{color: '#1E1E1E'}}>
                  {impact.number}
                </span>
              </div>
              <p className="font-ibm-plex text-lg leading-relaxed" style={{color: '#1E1E1E'}}>
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
