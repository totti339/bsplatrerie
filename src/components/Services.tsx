import React from 'react';
import { Hammer, Wrench, PaintBucket, Ruler, Layers, Brush } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layers className="h-12 w-12 text-navy-700" />,
      title: 'Installation de Cloisons Sèches',
      description: 'Installation professionnelle de cloisons sèches pour les projets de construction neuve ou de rénovation, garantissant un ajustement précis et des résultats impeccables.'
    },
    {
      icon: <Wrench className="h-12 w-12 text-navy-700" />,
      title: 'Réparation de Cloisons Sèches',
      description: 'Réparation experte de trous, fissures, dégâts des eaux et autres problèmes pour restaurer vos murs à leur état d\'origine.'
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-navy-700" />,
      title: 'Finition de Cloisons Sèches',
      description: 'Rubanage, jointoiement et ponçage méticuleux pour créer une surface parfaitement lisse, prête pour la peinture ou d\'autres finitions.'
    },
    {
      icon: <Brush className="h-12 w-12 text-navy-700" />,
      title: 'Travail de Texture',
      description: 'Application de diverses textures pour correspondre aux surfaces existantes ou créer des effets décoratifs uniques pour vos murs et plafonds.'
    },
    {
      icon: <Ruler className="h-12 w-12 text-navy-700" />,
      title: 'Installation de Plafonds',
      description: 'Installation de plafonds en cloisons sèches, y compris les plafonds suspendus, les plafonds à caissons et autres traitements décoratifs de plafond.'
    },
    {
      icon: <Hammer className="h-12 w-12 text-navy-700" />,
      title: 'Services d\'Ossature',
      description: 'Construction d\'ossatures de murs intérieurs pour soutenir l\'installation de cloisons sèches pour les ajouts de pièces, l\'aménagement de sous-sols et plus encore.'
    }
  ];

  return (
    <section id="services" className="section-container bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="section-title">Nos Services</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Nous offrons une gamme complète de services de plâtrerie pour répondre à tous vos besoins résidentiels et commerciaux. Notre équipe d'experts est équipée pour gérer des projets de toute taille avec précision et soin.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="#contact" className="btn-primary">
          Demander un Service
        </a>
      </div>
    </section>
  );
};

export default Services;
