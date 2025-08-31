
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-farm-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <Link to = "/">
            <img 
              src="/static/FARMLogoBranca.png" 
              alt="FARM Logo B&W" 
              className="h-12 w-auto"
            />
            </Link>
          </div>
          
          <div className="space-y-4 md:text-right">
            <div className="flex items-center justify-center md:justify-end text-white">
              <MapPin className="w-5 h-5 mr-3 text-white" />
              <a href="https://www.google.com/maps/place/EMPRESARIAL+RIO+MAR+TORRE+4/@-8.0848396,-34.9013288,862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7ab1f9c507ee1df:0xd7ed4c5a48797476!8m2!3d-8.0848396!4d-34.8964579!16s%2Fg%2F11vdxpr5j4?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" 
              rel="noopener noreferrer">
              <span className="font-ibm-plex">
                Av. República do Líbano 251 - Empresarial Riomar Torre 4 Sala 1314
              </span>
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-end text-white">
              <Mail className="w-5 h-5 mr-3 text-white" />
              <a href="mailto:farm@farmenergia.com.br"
                 rel="noopener noreferrer">
              <span className="font-ibm-plex">
                farm@farmenergia.com.br
              </span>
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-end text-white">
              <Phone className="w-5 h-5 mr-3 text-white" />
              <a href="tel:+5581988814100">
              <span className="font-ibm-plex">
                +55 (81) 98881-4100
              </span>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-600 my-8" />
        
        <div className="text-center text-gray-400">
          <p className="font-ibm-plex">
            © 2025 FARM. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
