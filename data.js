/**
 * ARCHIVE ULTIME : PROGRAMME MATHÉMATIQUES BTS - ÉDITION ENCYCLOPÉDIQUE
 * Structure : Concept > Théorie Profonde > Démonstration & Logique > Applications Réelles > Anecdotes > Astuces
 */

export const coursBTS_Ultra_Complet = [
    {
        id: 1,
        titre: "Suites Numériques : La Discrétisation du Temps",
        concept_cle: "L'art de prédire l'étape suivante à partir du présent.",
        theorie_profonde: `
            Une suite n'est pas simplement une liste de chiffres, c'est une fonction f: ℕ → ℝ. 
            Contrairement aux fonctions continues, on ne peut pas 'glisser' entre deux points ; on saute d'un entier à l'autre.
            
            1. Modèle Arithmétique : C'est la croissance à vitesse constante. Si vous déposez 50€ chaque mois dans une tirelire, vous créez une suite arithmétique. La pente est constante.
            2. Modèle Géométrique : C'est la croissance 'en boule de neige'. Chaque terme est un pourcentage du précédent. C'est le moteur de l'inflation, des intérêts composés, et de la propagation virale.
            3. Limites de Suites : Une suite peut tendre vers un nombre (Convergence) ou vers l'infini (Divergence). On note lim(n→+∞) u_n = L.
        `,
        demonstration_logique: `
            Pourquoi la somme des n premiers termes d'une suite arithmétique est-elle n * (premier + dernier) / 2 ? 
            Imaginez écrire la suite dans un sens, puis juste en dessous dans l'autre sens. Chaque colonne additionnée donnera le même total (u0 + un). Comme on a deux lignes, on divise par deux. Simple et imparable.
        `,
        applications_reelles: [
            "Amortissement constant de machines industrielles (Arithmétique).",
            "Calcul de la dépréciation d'un véhicule - perte de 15% par an (Géométrique).",
            "Algorithmes de recherche de chemins (Suites récurrentes)."
        ],
        anecdotes: "L'anecdote de Gauss : À 7 ans, son maître demanda de sommer les nombres de 1 à 100 pour gagner du temps. Gauss trouva la réponse (5050) en quelques secondes en utilisant la logique des suites arithmétiques, sidérant son professeur.",
        astuces: [
            "Pour savoir si une suite est croissante, calculez u(n+1) - u(n). Si c'est positif, ça monte !",
            "Attention au 'n' : Si la suite commence à u0, le 10ème terme est u9. Si elle commence à u1, c'est u10.",
            "Sur calculatrice (TI/Casio), utilisez le mode 'RECUR' pour visualiser les termes sans calcul manuel."
        ]
    },
    {
        id: 2,
        titre: "Fonctions & Limites : L'Analyse des Frontières",
        concept_cle: "Comprendre comment une courbe se comporte quand elle frôle l'impossible.",
        theorie_profonde: `
            L'étude des limites permet d'analyser les 'points de rupture' d'un système. 
            - Formes Indéterminées (FI) : (+∞ - ∞), (0/0), (∞/∞). Ce sont des combats de géants. Qui gagne ? L'exponentielle gagne toujours sur les puissances, qui gagnent sur le logarithme. C'est la hiérarchie des croissances comparées.
            - Asymptotes : Ce sont les 'rails' invisibles vers lesquels la fonction tend sans jamais les toucher. Une asymptote verticale indique souvent une valeur interdite (division par zéro).
        `,
        demonstration_logique: `
            La levée d'indétermination par factorisation du plus haut degré consiste à dire : 'À l'infini, seul le plus fort compte'. x² + x devient pratiquement x² quand x est gigantesque.
        `,
        applications_reelles: [
            "Modélisation de la saturation d'un marché (Asymptote horizontale).",
            "Seuil critique de température avant rupture d'un matériau.",
            "Calcul de l'autonomie d'une batterie en fin de cycle."
        ],
        anecdotes: "Le Théorème des Gendarmes : Si une fonction est coincée entre deux fonctions qui tendent vers la même limite, elle est 'escortée' de force vers cette même destination. Un exemple parfait de solidarité mathématique.",
        astuces: [
            "Si vous avez (∞/∞) avec des polynômes, la limite est le rapport des coefficients des plus hauts degrés.",
            "Pour vérifier une limite à l'infini sur calculatrice, remplacez x par 999999. Si le résultat stagne, vous avez votre limite.",
            "Ne dites jamais '1/0 = ∞' sur une copie, dites 'la limite du quotient tend vers l'infini'."
        ]
    },
    {
        id: 3,
        titre: "Dérivation : Le Microscope Temporel",
        concept_cle: "Mesurer la variation instantanée : 'À quelle vitesse ça change TOUT DE SUITE ?'",
        theorie_profonde: `
            La dérivée f'(x) est la pente de la tangente. 
            - Si f'(x) > 0, la fonction grimpe.
            - Si f'(x) = 0, vous êtes au sommet (Maximum) ou dans un creux (Minimum). C'est le point d'équilibre.
            
            Dérivées de fonctions composées f(u(x)) : C'est la règle de la chaîne. On dérive 'l'extérieur' en gardant l'intérieur, puis on multiplie par la dérivée de 'l'intérieur'.
        `,
        demonstration_logique: `
            La définition fondamentale f'(a) = lim(h→0) [f(a+h) - f(a)] / h n'est rien d'autre que le calcul du coefficient directeur d'une droite dont on rapproche les deux points jusqu'à ce qu'ils se confondent.
        `,
        applications_reelles: [
            "Optimisation du coût marginal : produire une unité de plus rapporte-t-il plus qu'elle ne coûte ?",
            "Calcul de l'accélération d'un moteur à partir de sa courbe de vitesse.",
            "Détection des pics de charge sur un réseau électrique."
        ],
        anecdotes: "La querelle Newton vs Leibniz : Newton voyait la dérivée comme un flux physique (le temps), Leibniz comme un rapport géométrique. C'est la notation de Leibniz (dy/dx) que nous utilisons encore aujourd'hui car elle est plus élégante.",
        astuces: [
            "La dérivée de ln(u) est u'/u. Retenez : 'u prime sur u'.",
            "Avant de dériver un produit (u*v), vérifiez s'il n'est pas plus simple de développer l'expression d'abord.",
            "Le tableau de signes de f'(x) est l'étape la plus cruciale de tout problème d'analyse."
        ]
    },
    {
        id: 5,
        titre: "Logarithme & Exponentielle : Les Miroirs de la Croissance",
        concept_cle: "L'exponentielle explose, le logarithme tempère.",
        theorie_profonde: `
            Ces deux fonctions sont 'réciproques' : ln(exp(x)) = x. 
            - L'exponentielle (e^x) : C'est la seule fonction qui est sa propre dérivée. Elle représente les phénomènes où plus on en a, plus on en gagne (intérêts, bactéries).
            - Le Logarithme (ln x) : Il transforme les multiplications en additions. ln(a*b) = ln(a) + ln(b). C'est pourquoi on l'utilise pour 'écraser' des données géantes sur des échelles lisibles.
        `,
        demonstration_logique: `
            Pourquoi e^(a+b) = e^a * e^b ? C'est une extension de la règle des puissances (2² * 2³ = 2⁵). Le nombre 'e' (environ 2,718) est le seul nombre qui permet à la courbe d'avoir une pente exactement égale à 1 quand elle croise l'axe des ordonnées.
        `,
        applications_reelles: [
            "Échelle de Richter : un séisme de magnitude 7 est 10 fois plus puissant qu'un séisme de magnitude 6 (Logarithmique).",
            "Datation au Carbone 14 (Décroissance exponentielle).",
            "Calcul de la demi-vie d'un médicament dans le sang."
        ],
        anecdotes: "L'invention du logarithme par Neper visait à simplifier les calculs astronomiques. Avant les calculatrices, les marins utilisaient des 'tables de logarithmes' pour transformer des multiplications complexes en simples additions sur papier.",
        astuces: [
            "e^x est TOUJOURS strictement positif. Une équation e^x = -2 n'a aucune solution.",
            "Pour résoudre e^(2x) = 5, passez au ln : 2x = ln(5), donc x = ln(5)/2.",
            "Le ln n'est défini que pour des nombres strictement positifs. ln(0) est une erreur fatale !"
        ]
    },
    {
        id: 11,
        titre: "Arithmétique & Cryptographie : Le Code Secret des Nombres",
        concept_cle: "La force brute des entiers et la magie des restes.",
        theorie_profonde: `
            - Division Euclidienne : a = bq + r. Le reste r est la clé de tout.
            - Congruences : a ≡ b [n] signifie que a et b ont le même reste. On vit en base 12 (heures) ou 60 (minutes) sans le savoir.
            - Nombres Premiers : Les atomes des mathématiques. On ne peut pas les casser en produits de plus petits nombres.
        `,
        demonstration_logique: `
            L'algorithme d'Euclide pour le PGCD : On remplace le plus grand nombre par le reste de la division jusqu'à tomber sur zéro. C'est le moyen le plus efficace de simplifier n'importe quelle fraction monstrueuse.
        `,
        applications_reelles: [
            "Le protocole RSA qui sécurise vos achats par carte bancaire repose sur la difficulté de factoriser deux très grands nombres premiers.",
            "Numéros de sécurité sociale : le dernier chiffre est une 'clé de contrôle' calculée par congruence (Modulo 97).",
            "Gestion des stocks par lots circulaires."
        ],
        anecdotes: "Le Petit Théorème de Fermat : Il a affirmé qu'une équation simple n'avait pas de solution, mais il a écrit dans la marge de son livre : 'J'ai une démonstration merveilleuse, mais la marge est trop petite pour la contenir'. Il a fallu 350 ans aux mathématiciens pour prouver qu'il avait raison !",
        astuces: [
            "Pour savoir si un nombre est divisible par 3, faites la somme de ses chiffres.",
            "Un nombre est divisible par 4 si ses deux derniers chiffres forment un multiple de 4.",
            "Utilisez toujours la décomposition en facteurs premiers pour trouver un dénominateur commun rapidement."
        ]
    }
];
