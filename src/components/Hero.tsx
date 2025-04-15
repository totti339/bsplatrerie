import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' 
      }}
    >
      <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          Transformez Vos Espaces avec des Services Experts en Plâtrerie
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Installation, réparation et finition professionnelles de cloisons sèches avec une attention méticuleuse aux détails et un service client exceptionnel.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="btn-primary text-lg"
          >
            Obtenez Votre Devis Gratuit
          </a>
          <a 
            href="#services" 
            className="btn-secondary text-lg bg-transparent text-white border-white hover:bg-white hover:text-navy-700"
          >
            Découvrez Nos Services
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="h-10 w-10" />
      </a>
    </section>
  );
};

export default Hero;
