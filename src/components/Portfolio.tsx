import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1614707585284-9cb9fc018387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Rénovation de Salon Moderne",
      description: "Installation complète et finition de cloisons sèches pour un espace de vie contemporain."
    },
    {
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Réaménagement d'Espace de Bureau",
      description: "Projet commercial de cloisons sèches avec travail de texture personnalisé et plafond acoustique."
    },
    {
      image: "https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Rénovation de Cuisine",
      description: "Réparation et installation de cloisons sèches pour une transformation complète de cuisine."
    },
    {
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Home Cinéma de Luxe",
      description: "Travail personnalisé de cloisons sèches avec insonorisation pour une expérience immersive de home cinéma."
    },
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Suite Parentale",
      description: "Finition élégante de cloisons sèches avec traitement décoratif du plafond."
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Conversion de Sous-sol",
      description: "Installation complète de cloisons sèches transformant un sous-sol non fini en espace de vie."
    }
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Nos Réalisations</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Parcourez notre portfolio de projets réalisés pour voir la qualité et le savoir-faire que nous apportons à chaque travail.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-lg shadow-custom cursor-pointer"
            onClick={() => openModal(item.image)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-700 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
              <p className="text-gray-200">{item.description}</p>
              <div className="mt-2">
                <span className="inline-flex items-center text-white">
                  <ExternalLink className="h-4 w-4 mr-1" /> Voir le Projet
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Élément de portfolio agrandi" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
      
      <div className="mt-12 text-center">
        <a href="#contact" className="btn-primary">
          Discuter de Votre Projet
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
