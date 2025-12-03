import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock, UtensilsCrossed } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-[#009246] to-[#C8102E] p-2 rounded-lg">
                <UtensilsCrossed className="h-5 w-5 text-white" />
              </div>
              <span className="font-playfair text-xl font-bold">La Dolce Vita</span>
            </div>
            <p className="text-gray-400 text-sm">
              Cuisine italienne authentique au cœur de Paris depuis 2010.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C8102E] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C8102E] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-gray-400 hover:text-white transition-colors">
                  Réservation
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Lundi - Vendredi</p>
                  <p>12h00 - 14h30, 19h00 - 22h30</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Samedi - Dimanche</p>
                  <p>12h00 - 23h00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>15 Rue de la Roquette<br />75011 Paris</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+33142785643" className="hover:text-white transition-colors">
                  01 42 78 56 43
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:contact@ladolcevita-paris.fr" className="hover:text-white transition-colors">
                  contact@ladolcevita-paris.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} La Dolce Vita. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
