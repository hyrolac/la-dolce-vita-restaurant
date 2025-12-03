'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, Clock, Users, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    date_rdv: '',
    heure_rdv: '',
    nb_personnes: '2',
    demandes_speciales: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(formData.date_rdv);

    if (selectedDate < today) {
      setError('La date de réservation ne peut pas être dans le passé');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Envoi de la réservation:', {
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone,
        date_rdv: formData.date_rdv,
        heure_rdv: formData.heure_rdv,
        nb_personnes: parseInt(formData.nb_personnes),
        demandes_speciales: formData.demandes_speciales,
        statut: 'en_attente',
      });

      const { data, error: dbError } = await supabase
        .from('reservations')
        .insert([
          {
            nom: formData.nom,
            email: formData.email,
            telephone: formData.telephone,
            date_rdv: formData.date_rdv,
            heure_rdv: formData.heure_rdv,
            nb_personnes: parseInt(formData.nb_personnes),
            demandes_speciales: formData.demandes_speciales,
            statut: 'en_attente',
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
        date_rdv: '',
        heure_rdv: '',
        nb_personnes: '2',
        demandes_speciales: '',
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

  const heuresDisponibles = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const minDate = new Date().toISOString().split('T')[0];

  if (isSuccess) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#FFF8F0] flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-[#009246] p-4 rounded-full">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </div>
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Réservation confirmée !
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Merci pour votre réservation. Nous avons bien reçu votre demande et nous vous
              enverrons un email de confirmation sous peu.
            </p>
            <p className="text-gray-500 mb-8">
              Notre équipe vous contactera pour confirmer définitivement votre réservation.
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              className="bg-[#C8102E] hover:bg-[#A00D24]"
            >
              Faire une nouvelle réservation
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#FFF8F0]">
      <div
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Réserver une Table
          </h1>
          <p className="text-xl">Rejoignez-nous pour une expérience inoubliable</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <Card className="shadow-xl">
          <CardHeader className="bg-gradient-to-r from-[#009246]/10 to-[#C8102E]/10 border-b">
            <CardTitle className="font-playfair text-3xl">Formulaire de Réservation</CardTitle>
            <CardDescription className="text-base">
              Remplissez ce formulaire et nous vous confirmerons votre réservation dans les plus
              brefs délais
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="date_rdv" className="text-base flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    Date *
                  </Label>
                  <Input
                    id="date_rdv"
                    type="date"
                    required
                    min={minDate}
                    value={formData.date_rdv}
                    onChange={(e) => setFormData({ ...formData, date_rdv: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="heure_rdv" className="text-base flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Heure *
                  </Label>
                  <Select
                    required
                    value={formData.heure_rdv}
                    onValueChange={(value) => setFormData({ ...formData, heure_rdv: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Choisir" />
                    </SelectTrigger>
                    <SelectContent>
                      {heuresDisponibles.map((heure) => (
                        <SelectItem key={heure} value={heure}>
                          {heure}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="nb_personnes" className="text-base flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Personnes *
                  </Label>
                  <Select
                    required
                    value={formData.nb_personnes}
                    onValueChange={(value) => setFormData({ ...formData, nb_personnes: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((nb) => (
                        <SelectItem key={nb} value={nb.toString()}>
                          {nb} {nb === 1 ? 'personne' : 'personnes'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="demandes_speciales" className="text-base">
                  Demandes spéciales (optionnel)
                </Label>
                <Textarea
                  id="demandes_speciales"
                  value={formData.demandes_speciales}
                  onChange={(e) =>
                    setFormData({ ...formData, demandes_speciales: e.target.value })
                  }
                  placeholder="Allergies, préférences de table, occasion spéciale..."
                  rows={4}
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
                {isSubmitting ? 'Envoi en cours...' : 'Confirmer la réservation'}
              </Button>
            </form>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Informations importantes</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Les réservations sont confirmées sous 24h maximum</li>
                <li>• Pour les groupes de plus de 10 personnes, contactez-nous directement</li>
                <li>• En cas d\'empêchement, merci de nous prévenir au moins 24h à l\'avance</li>
                <li>• Nous acceptons les enfants avec plaisir</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
