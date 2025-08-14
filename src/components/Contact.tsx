import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.'
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    // send form data by mail 

  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Contactez-Nous</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Prêt à commencer votre projet ? Contactez-nous dès aujourd'hui pour une consultation et un devis gratuits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-navy-700 mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Téléphone</h4>
                <p className="text-gray-700">06.35.46.22.89</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-navy-700 mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-700">bsplatrerie@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-navy-700 mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Adresse</h4>
                <p className="text-gray-700"><br />68280 Sundhoffen</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-6 w-6 text-navy-700 mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Heures d'Ouverture</h4>
                <p className="text-gray-700">Lundi - Vendredi: 8h00 - 17h00<br />Samedi: 9h00 - 14h00<br />Dimanche: Fermé</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Zone de Service</h3>
            <p className="text-gray-700 mb-4">
              Nous servons fièrement des clients résidentiels et commerciaux dans toute la région.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Envoyez-Nous un Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-transparent"
                placeholder="Votre Nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-transparent"
                placeholder="Votre Email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Numéro de Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-transparent"
                placeholder="Votre Numéro de Téléphone"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-transparent"
                placeholder="Parlez-nous de votre projet..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              Envoyer le Message
            </button>
          </form>

          {formStatus && (
            <div className={`mt-6 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {formStatus.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
