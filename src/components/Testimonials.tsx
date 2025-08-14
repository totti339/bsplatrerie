import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Sezgin et son équipe ont réalisé la pose de tout les plafond suspendus de ma maison, leur enduit ainsi qu'un ratissage complet de tout les murs. L'attention aux détails et la finition ont été fortement apprécié.",
      author: "Thomas De Giacinto",
      location: "Sundhoffen",
      rating: 5
    },
    {
      quote: "En tant qu'entrepreneur, j'ai travaillé avec de nombreux spécialistes des cloisons sèches, mais BS Plâtrerie se distingue par son professionnalisme, sa qualité et sa fiabilité. Ils sont devenus notre équipe de référence pour tous les projets.",
      author: "Michael Rodriguez",
      location: "Entrepreneur Général",
      rating: 5
    },
    {
      quote: "Après que des dégâts d'eau aient ruiné les murs de notre cuisine, BS Plâtrerie est venu à la rescousse. Leur travail de réparation était impeccable - on ne peut même pas dire où était le dommage. Service rapide, efficace et amical.",
      author: "Jennifer Williams",
      location: "Propriétaire",
      rating: 5
    },
    {
      quote: "L'équipe de BS Plâtrerie a géré la rénovation de notre bureau avec un minimum de perturbation pour notre entreprise. La qualité du travail était exceptionnelle et terminée avant l'échéance.",
      author: "David Thompson",
      location: "Propriétaire d'Entreprise",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-container bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="section-title">Ce Que Disent Nos Clients</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Ne vous fiez pas seulement à notre parole. Voici ce que nos clients satisfaits disent de nos services de plâtrerie.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-custom relative"
          >
            <Quote className="absolute top-4 right-4 h-10 w-10 text-gray-200" />
            <div className="flex mb-4">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <div className="bg-navy-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {testimonial.author.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-white p-6 rounded-lg shadow-custom max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Prêt à expérimenter notre service de qualité ?</h3>
          <p className="mb-6">Rejoignez notre liste croissante de clients satisfaits et découvrez pourquoi nous sommes le choix privilégié pour les services de plâtrerie.</p>
          <a href="#contact" className="btn-primary">
            Obtenez Votre Devis Gratuit Aujourd'hui
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
