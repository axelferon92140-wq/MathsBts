# 🎓 MathsBTS — La plateforme maths BTS gratuite

> Des cours de maths complets, des exercices corrigés et un assistant IA pour réussir ton BTS.

## 🚀 Démo en ligne

[Voir le site](https://ton-pseudo.github.io/mathsbts)

-----

## 📦 Contenu du projet

```
mathsbts/
├── index.html    → Page principale (toutes les pages)
├── styles.css    → Design complet
├── data.js       → Cours + exercices (12 chapitres)
└── app.js        → Logique, IA, navigation
```

-----

## 🌐 Déployer GRATUITEMENT sur GitHub Pages (5 minutes)

### Étape 1 — Créer un compte GitHub

→ https://github.com (gratuit)

### Étape 2 — Créer un nouveau repository

1. Cliquer sur “New repository”
1. Nommer le repo : `mathsbts`
1. Cocher “Public”
1. Cliquer “Create repository”

### Étape 3 — Uploader les fichiers

1. Cliquer “uploading an existing file”
1. Glisser-déposer les 4 fichiers : index.html, styles.css, data.js, app.js
1. Cliquer “Commit changes”

### Étape 4 — Activer GitHub Pages

1. Aller dans Settings → Pages
1. Source : “Deploy from a branch”
1. Branch : main → / (root)
1. Sauvegarder

⏱ Ton site sera en ligne à : `https://ton-pseudo.github.io/mathsbts`

-----

## 🤖 Configurer l’IA (Anthropic Claude)

L’IA est déjà intégrée dans le code. Pour qu’elle fonctionne :

1. Créer un compte sur https://console.anthropic.com
1. Aller dans “API Keys” → créer une clé
1. **Option A (simple) :** Configurer un proxy CORS gratuit (voir ci-dessous)
1. **Option B :** Utiliser Cloudflare Workers (gratuit)

### Solution simple — Cloudflare Workers (GRATUIT)

1. Créer un compte sur https://workers.cloudflare.com
1. Créer un Worker avec ce code :

```javascript
export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }
    const body = await request.json();
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
    });
  }
};
```

1. Ajouter la variable d’environnement `ANTHROPIC_KEY` = ta clé API
1. Remplacer l’URL dans app.js par ton Worker URL

-----

## 💳 Système de paiement (GRATUIT avec Stripe)

1. Créer un compte Stripe : https://stripe.com (gratuit)
1. Mode test disponible immédiatement
1. Intégrer Stripe Checkout (no-code possible)

**Tarifs recommandés :**

- Essai gratuit : 1 mois
- Mensuel : 7,99€/mois
- Annuel : 59€/an (économie 38%)

-----

## 📊 Analytics gratuits

- Google Analytics → https://analytics.google.com
- Plausible → https://plausible.io (gratuit pour open source)

-----

## 🎯 Stack 100% GRATUIT

|Service           |Usage      |Prix                     |
|------------------|-----------|-------------------------|
|GitHub Pages      |Hébergement|0€                       |
|Cloudflare Workers|Proxy IA   |0€ (100k req/jour)       |
|Anthropic Claude  |IA         |~0,01€/message           |
|Stripe            |Paiements  |0€ + 1,4% par transaction|

-----

## 📈 Pour aller plus loin (quand tu as des revenus)

- **Base de données utilisateurs** : Supabase (gratuit jusqu’à 500MB)
- **Auth/Connexion** : Supabase Auth (gratuit)
- **Newsletter** : Brevo / Mailchimp (gratuit jusqu’à 300 emails/jour)

-----

## 📄 Licence

Ce projet est open source. Tu peux l’utiliser et le modifier librement.

-----

**Créé avec ❤️ pour les étudiants BTS**