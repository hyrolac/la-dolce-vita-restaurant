import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Heart, Store, Star, Clock } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Store,
      title: 'Produits Italiens',
      description:
        'Tous nos produits sont soigneusement sélectionnés et importés directement d\'Italie pour une authenticité garantie.',
    },
    {
      icon: ChefHat,
      title: 'Fait Maison',
      description:
        'Nos pâtes fraîches, sauces et desserts sont préparés chaque jour par notre chef avec passion et savoir-faire.',
    },
    {
      icon: Heart,
      title: 'Ambiance Chaleureuse',
      description:
        'Plongez dans une atmosphère conviviale et élégante qui vous transportera directement en Italie.',
    },
  ];

  const dishes = [
    {
      name: 'Pizza Margherita',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Pâtes Carbonara',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Risotto aux Champignons',
      image: 'https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Tiramisu Maison',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Osso Buco',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Panna Cotta',
      image: 'https://images.pexels.com/photos/5945809/pexels-photo-5945809.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const testimonials = [
    {
      name: 'Sophie Martin',
      comment:
        'Une expérience culinaire exceptionnelle ! Les pâtes sont divines et l\'ambiance nous transporte vraiment en Italie. Un vrai voyage des sens.',
      rating: 5,
    },
    {
      name: 'Pierre Dubois',
      comment:
        'Le meilleur restaurant italien de Paris sans aucun doute. Le service est impeccable et les plats sont authentiques. Je recommande vivement !',
      rating: 5,
    },
    {
      name: 'Marie Lefebvre',
      comment:
        'Nous y allons régulièrement en famille et c\'est toujours un délice. Le chef connaît son métier et ça se sent dans chaque assiette.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            La Dolce Vita
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Cuisine Italienne Authentique à Paris
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#C8102E] hover:bg-[#A00D24] text-lg px-8 py-6"
          >
            <Link href="/reservation">Réserver une Table</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">
            Pourquoi nous choisir
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez ce qui fait de La Dolce Vita une adresse incontournable
            pour les amateurs de cuisine italienne authentique
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#009246] to-[#C8102E] mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">
            Nos Spécialités
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Un aperçu de nos délicieuses créations culinaires
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="font-playfair text-white text-xl font-semibold p-6">
                    {dish.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white"
            >
              <Link href="/menu">Voir le Menu Complet</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">
            Témoignages
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Ce que nos clients disent de nous
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#C8102E] text-[#C8102E]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            Nos Horaires
          </h2>
          <Card className="border-2 border-[#C8102E]/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-br from-[#009246] to-[#C8102E] p-4 rounded-full">
                  <Clock className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="space-y-6 text-center">
                <div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2">
                    Lundi - Vendredi
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Déjeuner : 12h00 - 14h30
                  </p>
                  <p className="text-gray-600 text-lg">
                    Dîner : 19h00 - 22h30
                  </p>
                </div>
                <div className="border-t pt-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-2">
                    Samedi - Dimanche
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Service continu : 12h00 - 23h00
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C8102E] hover:bg-[#A00D24]"
                >
                  <Link href="/reservation">Réserver Maintenant</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
