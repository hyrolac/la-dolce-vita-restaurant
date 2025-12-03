import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function MenuPage() {
  const antipasti = [
    {
      name: 'Bruschetta Classique',
      description: 'Pain grillé, tomates fraîches, ail, basilic et huile d\'olive extra vierge',
      price: '8€',
      image: 'https://images.pexels.com/photos/1437672/pexels-photo-1437672.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Carpaccio de Boeuf',
      description: 'Fines tranches de boeuf, roquette, parmesan et huile de truffe',
      price: '14€',
      image: 'https://images.pexels.com/photos/8753657/pexels-photo-8753657.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Burrata di Bufala',
      description: 'Burrata crémeuse, tomates cerises, basilic frais et pesto maison',
      price: '12€',
      image: 'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Antipasto Misto',
      description: 'Sélection de charcuteries et fromages italiens, légumes marinés',
      price: '16€',
      image: 'https://images.pexels.com/photos/1435896/pexels-photo-1435896.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const pizzas = [
    {
      name: 'Margherita',
      description: 'Tomate San Marzano, mozzarella fior di latte, basilic',
      price: '12€',
      vegetarian: true,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Regina',
      description: 'Tomate, mozzarella, jambon, champignons',
      price: '14€',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Quattro Formaggi',
      description: 'Mozzarella, gorgonzola, parmesan, pecorino',
      price: '15€',
      vegetarian: true,
      image: 'https://images.pexels.com/photos/2762933/pexels-photo-2762933.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Diavola',
      description: 'Tomate, mozzarella, salami piquant, piment',
      price: '15€',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Prosciutto e Rucola',
      description: 'Tomate, mozzarella, jambon de Parme, roquette, parmesan',
      price: '16€',
      image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Capricciosa',
      description: 'Tomate, mozzarella, jambon, artichauts, olives, champignons',
      price: '16€',
      image: 'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Vegetariana',
      description: 'Tomate, mozzarella, légumes grillés de saison',
      price: '14€',
      vegetarian: true,
      image: 'https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Tartufo',
      description: 'Crème de truffe, mozzarella, champignons, copeaux de parmesan',
      price: '18€',
      vegetarian: true,
      image: 'https://images.pexels.com/photos/5903343/pexels-photo-5903343.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const pasta = [
    {
      name: 'Carbonara',
      description: 'Pâtes fraîches, guanciale, pecorino, jaunes d\'œufs',
      price: '14€',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Amatriciana',
      description: 'Tomates, guanciale, pecorino, piment',
      price: '14€',
      image: 'https://images.pexels.com/photos/6287523/pexels-photo-6287523.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Cacio e Pepe',
      description: 'Pecorino romano, poivre noir fraîchement moulu',
      price: '13€',
      vegetarian: true,
      image: 'https://images.pexels.com/photos/4078343/pexels-photo-4078343.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Tagliatelle al Ragù',
      description: 'Pâtes fraîches, sauce bolognaise traditionnelle 6h de cuisson',
      price: '16€',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Lasagne della Nonna',
      description: 'Lasagnes maison, ragù, béchamel, parmesan',
      price: '15€',
      image: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Risotto ai Funghi Porcini',
      description: 'Riz Carnaroli, cèpes, parmesan, truffe',
      price: '18€',
      vegetarian: true,
      image: 'https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const desserts = [
    {
      name: 'Tiramisu Maison',
      description: 'Mascarpone, biscuits imbibés de café, cacao',
      price: '8€',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Panna Cotta',
      description: 'Crème italienne vanillée, coulis de fruits rouges',
      price: '7€',
      image: 'https://images.pexels.com/photos/5945809/pexels-photo-5945809.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Cannoli Siciliani',
      description: 'Rouleaux croustillants fourrés à la ricotta sucrée',
      price: '8€',
      image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Profiteroles al Cioccolato',
      description: 'Choux à la crème, sauce chocolat chaud',
      price: '9€',
      image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const boissons = [
    { name: 'Chianti Classico', description: 'Verre / Bouteille', price: '7€ / 28€' },
    { name: 'Pinot Grigio', description: 'Verre / Bouteille', price: '6€ / 24€' },
    { name: 'Prosecco', description: 'Verre / Bouteille', price: '8€ / 32€' },
    { name: 'Eau Minérale', description: 'Plate ou gazeuse', price: '4€' },
    { name: 'Espresso', description: 'Café italien', price: '2.50€' },
    { name: 'Limonade Maison', description: 'Citron frais', price: '5€' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-[#FFF8F0]">
      <div
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Notre Menu</h1>
          <p className="text-xl">Saveurs authentiques de l\'Italie</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-3">Antipasti</h2>
            <p className="text-gray-600">Pour bien commencer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {antipasti.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 h-48 sm:h-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="sm:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-playfair text-xl font-semibold">{item.name}</h3>
                        <span className="text-[#C8102E] font-bold text-lg ml-2">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-3">Pizzas</h2>
            <p className="text-gray-600">Cuites au feu de bois</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pizzas.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-xl font-semibold">{item.name}</h3>
                    <span className="text-[#C8102E] font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                  {item.vegetarian && (
                    <Badge variant="secondary" className="bg-[#009246] text-white">
                      Végétarien
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-3">Pâtes & Risotto</h2>
            <p className="text-gray-600">Pâtes fraîches maison</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pasta.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 h-48 sm:h-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="sm:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-playfair text-xl font-semibold">{item.name}</h3>
                        <span className="text-[#C8102E] font-bold text-lg ml-2">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                      {item.vegetarian && (
                        <Badge variant="secondary" className="bg-[#009246] text-white">
                          Végétarien
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-3">Desserts</h2>
            <p className="text-gray-600">La dolce vita</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {desserts.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-lg font-semibold">{item.name}</h3>
                    <span className="text-[#C8102E] font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-3">Boissons</h2>
            <p className="text-gray-600">Pour accompagner votre repas</p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {boissons.map((item, index) => (
                  <div key={index} className="flex justify-between items-start border-b pb-4 last:border-b-0">
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <span className="text-[#C8102E] font-bold ml-4 whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
