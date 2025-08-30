import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen font-ibm-plex">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('/static/imagemCentralContato.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="font-ibm-plex text-5xl md:text-6xl font-bold text-white mb-4">
            ENTRE EM CONTATO
          </h1>
        </div>
        
        {/* Onda decorativa */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" className="w-full h-20" preserveAspectRatio="none">
            <path d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z" fill="#1EC4BF" />
            <path d="M0,80 Q300,110 600,80 T1200,80 L1200,120 L0,120 Z" fill="#f8fafc" />
          </svg>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">
            
            {/* Telefone */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-farm-primary rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-ibm-plex text-2xl font-bold text-farm-dark mb-4">
                Telefone
              </h3>
              <a 
                href="tel:+5581988814100"
                className="font-ibm-plex text-lg text-farm-dark hover:text-farm-primary transition-colors"
              >
                +55 (81) 98881-4100
              </a>
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden md:flex justify-center items-start pt-2">
              <div className="w-1 bg-[#D9D9D9] h-32"></div>
            </div>

            {/* E-mail */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-farm-primary rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-ibm-plex text-2xl font-bold text-farm-dark mb-4">
                E-mail
              </h3>
              <a 
                href="mailto:farm@farmenergia.com.br"
                rel="noopener noreferrer"
                className="font-ibm-plex text-lg text-farm-dark hover:text-farm-primary transition-colors"
              >
                farm@farmenergia.com.br
              </a>
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden md:flex justify-center items-start pt-2">
              <div className="w-1 bg-[#D9D9D9] h-32"></div>
            </div>

            {/* Localização */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-farm-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-ibm-plex text-2xl font-bold text-farm-dark mb-4">
                Localização
              </h3>
              <div className="font-ibm-plex text-lg text-farm-dark">
                <a 
                  href="https://www.google.com/maps/place/EMPRESARIAL+RIO+MAR+TORRE+4/@-8.0848396,-34.9013288,862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7ab1f9c507ee1df:0xd7ed4c5a48797476!8m2!3d-8.0848396!4d-34.8964579!16s%2Fg%2F11vdxpr5j4?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-farm-primary transition-colors whitespace-nowrap block"
                >
                  Av. República do Líbano 251 <br />
                  Torre 4 Sala 1314
                </a>
              </div>
            </div>

            {/* Mobile Dividers */}
            <div className="md:hidden flex justify-center col-span-full">
              <div className="w-32 h-1 bg-[#D9D9D9]"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contato;