import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Heart, Award, Users } from 'lucide-react';

export default function AProposPage() {
  const team = [
    {
      name: 'Marco Bianchi',
      role: 'Chef Exécutif',
      description: 'Originaire de Naples, Marco apporte 25 ans d\'expérience culinaire et une passion sans égale pour la cuisine authentique italienne.',
      image: 'https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Sofia Rossi',
      role: 'Sous-Chef',
      description: 'Diplômée de l\'Institut Culinaire de Florence, Sofia est spécialisée dans les pâtes fraîches et les desserts traditionnels.',
      image: 'https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Luca Romano',
      role: 'Maître d\'Hôtel',
      description: 'Avec son sourire chaleureux et son expertise, Luca veille à ce que chaque client vive une expérience mémorable.',
      image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Elena Moretti',
      role: 'Sommelière',
      description: 'Passionnée par les vins italiens, Elena guide nos clients dans le choix du vin parfait pour accompagner leur repas.',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const valeurs = [
    {
      icon: Heart,
      title: 'Authenticité',
      description: 'Nous restons fidèles aux recettes traditionnelles italiennes transmises de génération en génération.',
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Tous nos produits sont soigneusement sélectionnés et importés directement d\'Italie.',
    },
    {
      icon: ChefHat,
      title: 'Fait Maison',
      description: 'Nos pâtes, sauces et desserts sont préparés quotidiennement dans notre cuisine.',
    },
    {
      icon: Users,
      title: 'Convivialité',
      description: 'Nous créons une atmosphère chaleureuse où chaque client se sent comme à la maison.',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">À Propos</h1>
          <p className="text-xl">L\'histoire de La Dolce Vita</p>
        </div>
      </div>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Fondé en 2010 par la famille Bianchi, La Dolce Vita est né d\'une passion profonde
                  pour la cuisine italienne authentique et le désir de partager les saveurs de leur
                  Italie natale avec les Parisiens.
                </p>
                <p>
                  Notre chef Marco Bianchi, originaire de Naples, a grandi dans la cuisine de sa
                  grand-mère où il a appris les secrets des recettes traditionnelles italiennes.
                  Après avoir perfectionné son art dans les meilleurs restaurants d\'Italie, il a
                  décidé de s\'installer à Paris pour ouvrir son propre établissement.
                </p>
                <p>
                  Aujourd\'hui, La Dolce Vita est devenu une référence de la gastronomie italienne à
                  Paris. Nous importons nos ingrédients directement d\'Italie - de l\'huile d\'olive
                  des Pouilles, au Parmigiano Reggiano de Parme, en passant par les tomates San
                  Marzano de Campanie.
                </p>
                <p>
                  Notre philosophie est simple : utiliser les meilleurs produits, respecter les
                  traditions culinaires italiennes, et créer une atmosphère conviviale où chaque
                  client se sent comme en Italie.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/2291597/pexels-photo-2291597.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Restaurant"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chef cooking"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Kitchen"
                className="rounded-lg shadow-lg w-full h-64 object-cover -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Restaurant interior"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">Notre Équipe</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Une équipe passionnée et dévouée à vous offrir une expérience culinaire exceptionnelle
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#C8102E] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-[#FFF8F0] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">Nos Valeurs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Les principes qui guident notre cuisine et notre service au quotidien
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#009246] to-[#C8102E] mb-6">
                    <valeur.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-3">{valeur.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{valeur.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Notre cuisine"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-playfair text-4xl font-bold mb-6">Notre Engagement</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-[#C8102E]">Produits d\'exception :</strong> Nous
                  travaillons exclusivement avec des fournisseurs italiens triés sur le volet pour
                  garantir l\'authenticité et la qualité de nos plats.
                </p>
                <p>
                  <strong className="text-[#C8102E]">Respect de la tradition :</strong> Chaque
                  recette est fidèle aux méthodes traditionnelles italiennes, préservant ainsi les
                  saveurs authentiques de l\'Italie.
                </p>
                <p>
                  <strong className="text-[#C8102E]">Préparation quotidienne :</strong> Nos pâtes
                  sont fabriquées chaque matin, nos sauces mijotent pendant des heures, et nos
                  desserts sont préparés sur place.
                </p>
                <p>
                  <strong className="text-[#C8102E]">Accueil chaleureux :</strong> Nous traitons
                  chaque client comme un membre de notre famille, dans la plus pure tradition
                  italienne de l\'hospitalité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
