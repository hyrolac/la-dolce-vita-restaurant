# Installation et Configuration - La Dolce Vita

## Prérequis

- Node.js 18+ installé
- Un compte Supabase (gratuit sur https://supabase.com)
- (Optionnel) Un compte Resend pour l'envoi d'emails

## Étape 1 : Cloner et Installer

```bash
npm install
```

## Étape 2 : Configuration Supabase

### 2.1 Créer un projet Supabase

1. Allez sur https://supabase.com et créez un compte
2. Créez un nouveau projet
3. Notez votre **Project URL** et votre **anon public key**

### 2.2 Les tables sont déjà créées

Les tables `reservations` et `contacts` ont été créées automatiquement avec les bonnes politiques RLS.

### 2.3 Configuration des variables d'environnement

Copiez le fichier `.env.example` vers `.env.local` :

```bash
cp .env.example .env.local
```

Modifiez `.env.local` avec vos vraies valeurs :

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_publique
SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key
RESEND_API_KEY=votre_resend_api_key (optionnel)
```

## Étape 3 : Lancer le projet

### Mode développement

```bash
npm run dev
```

Le site sera accessible sur http://localhost:3000

### Build de production

```bash
npm run build
npm start
```

## Structure du Site

### Pages publiques

- **/** - Page d'accueil avec hero, features, galerie, témoignages, horaires
- **/menu** - Menu complet (Antipasti, Pizzas, Pâtes, Desserts, Boissons)
- **/reservation** - Formulaire de réservation (enregistré dans Supabase)
- **/a-propos** - Histoire du restaurant, équipe, valeurs
- **/contact** - Formulaire de contact avec Google Maps

### Page admin

- **/admin** - Dashboard pour gérer les réservations et messages
  - **Mot de passe par défaut** : `admin123`
  - À changer dans `/app/admin/page.tsx` ligne 16

## Fonctionnalités

### Réservations

- Formulaire avec validation
- Stockage dans Supabase
- Gestion des statuts (en attente, confirmée, annulée)
- Dashboard admin pour confirmer/annuler

### Contacts

- Formulaire de contact
- Stockage dans Supabase
- Marquage comme lu/non lu
- Google Maps intégré

### Design

- Couleurs du drapeau italien (Rouge #C8102E, Vert #009246, Blanc)
- Police élégante Playfair Display pour les titres
- Design 100% responsive
- Animations et transitions fluides

## Personnalisation

### Changer le mot de passe admin

Éditez `/app/admin/page.tsx` et changez la ligne :

```typescript
const ADMIN_PASSWORD = 'admin123'; // Changez ceci
```

### Modifier les horaires

Éditez les composants dans :
- `/components/footer.tsx`
- `/app/page.tsx`
- `/app/contact/page.tsx`

### Modifier le menu

Éditez `/app/menu/page.tsx` pour ajouter/modifier les plats

### Changer l'adresse

Modifiez dans :
- `/components/footer.tsx`
- `/app/contact/page.tsx` (y compris l'iframe Google Maps)

## Support

Le site est prêt à l'emploi une fois les variables d'environnement configurées.

Pour toute question, référez-vous à la documentation officielle :
- Next.js : https://nextjs.org/docs
- Supabase : https://supabase.com/docs
- Tailwind CSS : https://tailwindcss.com/docs
