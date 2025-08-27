
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AboutSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  const services = [
    {
      icon: '/lovable-uploads/4469467f-02e9-495b-bd2c-f62f155161d9.png',
      title: 'Energia Renovável'
    },
    {
      icon: '/lovable-uploads/7fd02d58-7605-49fa-9845-66c81b2c6cf9.png',
      title: 'Consultoria Técnica'
    },
    {
      icon: '/lovable-uploads/590d7fd7-5055-41f9-a29f-95a0c2d77f30.png',
      title: 'Parcerias Estratégicas'
    },
    {
      icon: '/lovable-uploads/9c8e08fd-c8e5-4e8b-acda-4ad009147a77.png',
      title: 'Regulação'
    }
  ];

  return (
    <section className="bg-farm-light py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="font-ibm-plex text-4xl font-bold text-gray-800 mb-12 text-left">
            Quem somos?
          </h2>
          
          {/* Content with text left and logo right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="text-left">
              <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed">
                Somos uma empresa especializada em consultoria de energia renovável, 
                comprometida em desenvolver soluções sustentáveis que transformam o 
                futuro energético do Brasil.
              </p>
            </div>
            <div className="flex justify-center lg:justify-center lg:ml-24">
              <img 
                src="/lovable-uploads/f4cffbf2-58da-4820-9f15-adfc9d8fe979.png" 
                alt="FARM Logo" 
                className="h-60 w-60 object-contain"
              />
            </div>
          </div>

          {/* Botão Saiba mais */}
          <div className="text-left mb-12">
            <Link 
              to="/sobrenos"
              className="inline-block bg-farm-secondary hover:bg-farm-secondary/90 text-white font-ibm-plex font-semibold px-6 py-2 rounded-lg transition-colors text-sm"
            >
              Saiba mais ➔
            </Link>
          </div>
        </div>

        {/* Principais Áreas de Atuação title */}
        <div className="text-center mb-8">
          <h2 className="font-ibm-plex text-4xl font-bold text-gray-800">
            Principais Áreas de Atuação
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 w-full cursor-pointer transform hover:scale-110 active:scale-95 animate-fade-in hover:animate-pulse"
              onClick={() => setSelectedService(index)}
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="font-ibm-plex font-semibold text-xl text-gray-800 text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedService !== null && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setSelectedService(null)}
          >
            <div 
              className="bg-white rounded-lg p-8 max-w-md w-full relative animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* X button no canto superior direito */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors"
              >
                ×
              </button>
              
              <div className="flex justify-center mb-6">
                <img 
                  src={services[selectedService].icon} 
                  alt={services[selectedService].title}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="font-ibm-plex font-bold text-2xl text-gray-800 text-center mb-4">
                {services[selectedService].title}
              </h3>
              <p className="font-ibm-plex text-gray-600 text-center leading-relaxed">
                {services[selectedService].title === 'Energia Renovável' && 
                  'Desenvolvemos soluções inovadoras em energia solar, eólica e outras fontes renováveis para um futuro sustentável.'
                }
                {services[selectedService].title === 'Consultoria Técnica' && 
                  'Oferecemos expertise técnica especializada para otimizar seus projetos de energia renovável.'
                }
                {services[selectedService].title === 'Parcerias Estratégicas' && 
                  'Estabelecemos parcerias sólidas com empresas e instituições para maximizar o impacto dos projetos.'
                }
                {services[selectedService].title === 'Regulação' && 
                  'Auxiliamos na conformidade regulatória e certificações necessárias para projetos de energia renovável.'
                }
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default AboutSection;
