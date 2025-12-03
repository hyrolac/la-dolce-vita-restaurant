'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, CheckCircle, Facebook, Instagram } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      console.log('Envoi du message de contact:', {
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone,
        message: formData.message,
        lu: false,
      });

      const { data, error: dbError } = await supabase
        .from('contacts')
        .insert([
          {
            nom: formData.nom,
            email: formData.email,
            telephone: formData.telephone,
            message: formData.message,
            lu: false,
          },
        ])
        .select();

      console.log('Réponse Supabase - Data:', data);
      console.log('Réponse Supabase - Error:', dbError);

      if (dbError) {
        console.error('Erreur Supabase détaillée:', dbError);
        throw new Error(dbError.message || 'Erreur lors de l\'insertion');
      }

      setIsSuccess(true);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        message: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.';
      setError(errorMessage);
      console.error('Erreur complète:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#FFF8F0]">
      <div
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl">Nous sommes à votre écoute</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-6">Envoyez-nous un message</h2>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-6">
                      <div className="bg-[#009246] p-4 rounded-full">
                        <CheckCircle className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <h3 className="font-playfair text-2xl font-bold mb-4">Message envoyé !</h3>
                    <p className="text-gray-600 mb-6">
                      Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      className="bg-[#C8102E] hover:bg-[#A00D24]"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nom" className="text-base">
                        Nom complet *
                      </Label>
                      <Input
                        id="nom"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        placeholder="Votre nom"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="telephone" className="text-base">
                        Téléphone *
                      </Label>
                      <Input
                        id="telephone"
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Votre message..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C8102E] hover:bg-[#A00D24] text-lg py-6"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-6">Nos Coordonnées</h2>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#009246] to-[#C8102E] p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                      <p className="text-gray-600">
                        15 Rue de la Roquette
                        <br />
                        75011 Paris
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#009246] to-[#C8102E] p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                      <a
                        href="tel:+33142785643"
                        className="text-[#C8102E] hover:underline text-lg"
                      >
                        01 42 78 56 43
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#009246] to-[#C8102E] p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <a
                        href="mailto:contact@ladolcevita-paris.fr"
                        className="text-[#C8102E] hover:underline"
                      >
                        contact@ladolcevita-paris.fr
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#009246] to-[#C8102E] p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                      <div className="text-gray-600 space-y-1">
                        <p className="font-medium">Lundi - Vendredi</p>
                        <p className="text-sm">12h00 - 14h30, 19h00 - 22h30</p>
                        <p className="font-medium mt-2">Samedi - Dimanche</p>
                        <p className="text-sm">12h00 - 23h00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#009246]/10 to-[#C8102E]/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full hover:bg-[#C8102E] hover:text-white transition-colors shadow-md"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full hover:bg-[#C8102E] hover:text-white transition-colors shadow-md"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-playfair text-3xl font-bold mb-6 text-center">Comment nous trouver</h2>
          <Card className="overflow-hidden shadow-xl">
            <div className="h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3045819847285!2d2.3710999999999998!3d48.8534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672a170000001%3A0x0!2z!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Dolce Vita - 15 Rue de la Roquette, 75011 Paris"
              />
            </div>
          </Card>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Métro : Bastille (Lignes 1, 5, 8) - 5 minutes à pied
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
