
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farm-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img 
              src="/lovable-uploads/b48a9089-cba9-43af-8ea6-f37cd74adf47.png" 
              alt="FARM Logo B&W" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="space-y-4 md:text-right">
            <div className="flex items-center justify-center md:justify-end text-white">
              <MapPin className="w-5 h-5 mr-3 text-white" />
              <span className="font-ibm-plex">
                Rua das Energias, 123 - Centro, São Paulo - SP
              </span>
            </div>
            
            <div className="flex items-center justify-center md:justify-end text-white">
              <Mail className="w-5 h-5 mr-3 text-white" />
              <span className="font-ibm-plex">
                contato@farm.com.br
              </span>
            </div>
            
            <div className="flex items-center justify-center md:justify-end text-white">
              <Phone className="w-5 h-5 mr-3 text-white" />
              <span className="font-ibm-plex">
                (11) 9999-9999
              </span>
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
