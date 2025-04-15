import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Hammer } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Hammer className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">BS Plâtrerie</span>
            </div>
            <p className="text-gray-300 mb-4">
              Services professionnels de plâtrerie pour projets résidentiels et commerciaux. Qualité du travail et satisfaction client garanties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Installation de Cloisons Sèches</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Enduit et finition de Cloisons Sèches</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Travail de Texture</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Installation de Plafonds</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services d'Ossature</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Informations de Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>68280 Sundhoffen</p>
              <p>Téléphone: 06.35.46.22.89</p>
              <p>Email: bsplatrerie@gmail.com</p>
              <p>Heures: Lun-Ven 8h-17h, Sam 9h-14h</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© {currentYear} BS Plâtrerie. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Politique de Confidentialité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Conditions d'Utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Plan du Site</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
