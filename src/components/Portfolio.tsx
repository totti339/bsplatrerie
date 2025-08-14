import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

// Import local images
import portfolio1 from '../img/portfolio-1.jpeg';
import portfolio2 from '../img/portfolio-2.jpeg';
import portfolio3 from '../img/portfolio-3.jpeg';
import portfolio4 from '../img/portfolio-4.jpeg';
import portfolio5 from '../img/portfolio-5.jpeg';
import portfolio6 from '../img/portfolio-6.jpeg';

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      image: portfolio1,
      title: "Rénovation de Salon Moderne",
      description: "Installation complète et finition de cloisons sèches et plafond suspendu, pour un espace de vie contemporain."
    },
    {
      image: portfolio2,
      title: "Réaménagement d'Espace de Bureau",
      description: "Projet commercial de plafond suspendu design et acoustique."
    },
    {
      image: portfolio3,
      title: "Rénovation d'un salon de coiffure",
      description: "Installation de cloisons sèches et création de niches XXL."
    },
    {
      image: portfolio4,
      title: "Creation design pour Maison de standing",
      description: "Travail personnalisé de cloisons sèches avec insonorisation et faux-plafond design."
    },
    {
      image: portfolio5,
      title: "Isolation et structure métallique",
      description: "Installation de cloisons sèches et isolation thermique étanche."
    },
    {
      image: portfolio6, // Reusing portfolio1 as we only have 5 images
      title: "Enduit et Finition",
      description: "Bande et enduit de cloisons sèches pour une finition parfaite."
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
