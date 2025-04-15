import React from 'react';
import { Award, Clock, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">À Propos de Nous</h2>
          <p className="text-lg mb-6">
            Avec plus de 15 ans d'expérience dans l'industrie des cloisons sèches, BS Plâtrerie a établi une réputation d'excellence dans les projets résidentiels et commerciaux. Notre équipe de professionnels qualifiés est dédiée à fournir des résultats impeccables dépassant les attentes de nos clients.
          </p>
          <p className="text-lg mb-6">
            Nous sommes fiers de notre savoir-faire et de notre attention aux détails, garantissant que chaque projet est réalisé selon les normes les plus élevées. Notre engagement envers la qualité, la fiabilité et la satisfaction du client a fait de nous le choix privilégié pour les services de plâtrerie dans la région.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-custom">
              <Award className="h-10 w-10 text-navy-700 mb-2" />
              <h3 className="font-bold text-lg mb-1">Travail de Qualité</h3>
              <p className="text-gray-600">Matériaux premium et savoir-faire expert</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-custom">
              <Clock className="h-10 w-10 text-navy-700 mb-2" />
              <h3 className="font-bold text-lg mb-1">Ponctualité</h3>
              <p className="text-gray-600">Respect des délais</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-custom">
              <ThumbsUp className="h-10 w-10 text-navy-700 mb-2" />
              <h3 className="font-bold text-lg mb-1">Satisfaction</h3>
              <p className="text-gray-600">Satisfaction client 100% garantie</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1581775231124-4f70b143b85c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            alt="Plâtrier professionnel travaillant sur une cloison sèche" 
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-navy-700 text-white p-4 rounded-lg shadow-lg">
            <p className="text-2xl font-bold">15+</p>
            <p className="text-sm">Années d'Expérience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
