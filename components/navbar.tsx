'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/menu', label: 'Menu' },
    { href: '/reservation', label: 'Réservation' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-[#009246] to-[#C8102E] p-2 rounded-lg group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="h-6 w-6 text-white" />
            </div>
            <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-[#009246] via-[#C8102E] to-[#009246] bg-clip-text text-transparent">
              La Dolce Vita
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#C8102E] font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8102E] transition-all group-hover:w-full" />
              </Link>
            ))}
            <Button asChild className="bg-[#C8102E] hover:bg-[#A00D24]">
              <Link href="/reservation">Réserver</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-[#C8102E] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-[#C8102E] hover:bg-[#A00D24]">
              <Link href="/reservation" onClick={() => setIsOpen(false)}>
                Réserver une Table
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
