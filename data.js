// ============================================================
// DATA.JS — Cours complets BTS Maths (1 année entière)
// ============================================================

const CHAPITRES = [

// ===== CHAPITRE 1 =====
{
titre: “Chapitre 1 — Suites numériques”,
meta: [“📅 Semestre 1”, “⏱ 6h de cours”, “🎯 Fondamental”],
sections: [
{
titre: “1. Définitions et vocabulaire”,
contenu: `<p>Une <strong>suite numérique</strong> est une fonction définie sur ℕ (ou une partie de ℕ), qui à chaque entier n associe un nombre réel noté u<sub>n</sub>.</p> <ul> <li><strong>u<sub>n</sub></strong> : terme de rang n (terme général)</li> <li><strong>u<sub>0</sub></strong> ou <strong>u<sub>1</sub></strong> : premier terme</li> <li>Une suite peut être définie explicitement : u<sub>n</sub> = f(n)</li> <li>Ou par récurrence : u<sub>n+1</sub> = f(u<sub>n</sub>)</li> </ul>`
},
{
titre: “2. Suites arithmétiques”,
contenu: `<p>Une suite est <strong>arithmétique</strong> si chaque terme s'obtient en ajoutant une constante <strong>r</strong> (raison) au terme précédent.</p> <div class="formula-box">u<sub>n+1</sub> = u<sub>n</sub> + r &nbsp;&nbsp;&nbsp; r = u<sub>n+1</sub> − u<sub>n</sub></div> <p><strong>Terme général :</strong></p> <div class="formula-box">u<sub>n</sub> = u<sub>0</sub> + n·r &nbsp;&nbsp;&nbsp; ou &nbsp;&nbsp;&nbsp; u<sub>n</sub> = u<sub>p</sub> + (n−p)·r</div> <p><strong>Somme des termes :</strong></p> <div class="formula-box">S = (premier terme + dernier terme) × nombre de termes / 2</div> <div class="example-box"> <strong>✏️ Exemple :</strong> <p>Suite arithmétique de premier terme u<sub>0</sub> = 3, de raison r = 5.<br/> u<sub>1</sub> = 8, u<sub>2</sub> = 13, u<sub>3</sub> = 18...<br/> Terme général : u<sub>n</sub> = 3 + 5n<br/> u<sub>10</sub> = 3 + 5×10 = 53</p> </div>`
},
{
titre: “3. Suites géométriques”,
contenu: `<p>Une suite est <strong>géométrique</strong> si chaque terme s'obtient en multipliant le terme précédent par une constante <strong>q</strong> (raison).</p> <div class="formula-box">u<sub>n+1</sub> = u<sub>n</sub> × q &nbsp;&nbsp;&nbsp; q = u<sub>n+1</sub> / u<sub>n</sub></div> <p><strong>Terme général :</strong></p> <div class="formula-box">u<sub>n</sub> = u<sub>0</sub> × q<sup>n</sup></div> <p><strong>Somme des termes (q ≠ 1) :</strong></p> <div class="formula-box">S = u<sub>0</sub> × (1 − q<sup>n</sup>) / (1 − q)</div> <div class="example-box"> <strong>✏️ Exemple :</strong> <p>Capital initial : 1000€, taux annuel : 5%.<br/> C<sub>n</sub> = 1000 × 1,05<sup>n</sup><br/> Après 10 ans : C<sub>10</sub> = 1000 × 1,05<sup>10</sup> ≈ 1628,89€</p> </div> <div class="warning-box"> <strong>⚠️ Attention !</strong> Les placements bancaires, les emprunts et les remboursements utilisent presque toujours des suites géométriques. C'est un thème très fréquent en BTS ! </div>`
},
{
titre: “4. Sens de variation et limites”,
contenu: `<p><strong>Suite arithmétique :</strong> croissante si r > 0, décroissante si r &lt; 0.</p> <p><strong>Suite géométrique :</strong></p> <ul> <li>Si q > 1 et u<sub>0</sub> > 0 → suite croissante → limite +∞</li> <li>Si 0 &lt; q &lt; 1 → suite décroissante → limite 0</li> <li>Si q &lt; 0 → suite oscille</li> </ul> <div class="formula-box">Si |q| &lt; 1, alors lim q<sup>n</sup> = 0 quand n → +∞</div>`
}
]
},

// ===== CHAPITRE 2 =====
{
titre: “Chapitre 2 — Fonctions & Limites”,
meta: [“📅 Semestre 1”, “⏱ 8h de cours”, “🎯 Fondamental”],
sections: [
{
titre: “1. Rappels sur les fonctions”,
contenu: `<p>Une <strong>fonction</strong> f associe à chaque réel x d'un ensemble de définition D<sub>f</sub> un unique réel y = f(x).</p> <ul> <li><strong>Domaine de définition</strong> : ensemble des x pour lesquels f(x) existe</li> <li><strong>Image</strong> : f(x) est l'image de x par f</li> <li><strong>Antécédent</strong> : x est antécédent de y si f(x) = y</li> </ul> <div class="example-box"> <strong>✏️ Exemple :</strong> <p>f(x) = √(x−2) → D<sub>f</sub> = [2 ; +∞) car il faut x−2 ≥ 0</p> </div>`
},
{
titre: “2. Limites — définitions et règles”,
contenu: `<p>La <strong>limite</strong> d'une fonction en un point décrit le comportement de f(x) lorsque x s'approche de ce point.</p> <p><strong>Opérations sur les limites :</strong></p> <div class="formula-box"> +∞ + ∞ = +∞ &nbsp;|&nbsp; ∞ × ∞ = +∞ &nbsp;|&nbsp; k/∞ = 0 (k fini)<br/> ∞/∞ = FI &nbsp;|&nbsp; ∞ − ∞ = FI &nbsp;|&nbsp; 0 × ∞ = FI </div> <p>FI = Forme Indéterminée → il faut lever l'indétermination</p> <div class="example-box"> <strong>✏️ Forme indéterminée ∞/∞ :</strong> <p>lim (3x² + 2x) / (x² − 5) quand x→+∞<br/> On divise par x² : lim (3 + 2/x) / (1 − 5/x²) = 3/1 = <strong>3</strong></p> </div>`
},
{
titre: “3. Continuité et tableau de signes”,
contenu: `<p>Une fonction est <strong>continue</strong> sur un intervalle si on peut tracer sa courbe sans lever le crayon.</p> <p><strong>Théorème des valeurs intermédiaires (TVI) :</strong><br/> Si f est continue sur [a,b] et si f(a) et f(b) sont de signes opposés, alors il existe au moins un c ∈ ]a,b[ tel que f(c) = 0.</p> <div class="formula-box">f(a) × f(b) &lt; 0 → il existe une racine dans ]a,b[</div> <div class="example-box"> <strong>✏️ Application :</strong> <p>f(x) = x³ − 2x − 5<br/> f(2) = 8 − 4 − 5 = −1 &lt; 0<br/> f(3) = 27 − 6 − 5 = 16 > 0<br/> → Il existe une racine dans ]2 ; 3[</p> </div>`
}
]
},

// ===== CHAPITRE 3 =====
{
titre: “Chapitre 3 — Dérivation”,
meta: [“📅 Semestre 1”, “⏱ 10h de cours”, “🎯 Essentiel”],
sections: [
{
titre: “1. Nombre dérivé et définition”,
contenu: `<p>Le <strong>nombre dérivé</strong> de f en a est la limite du taux d'accroissement :</p> <div class="formula-box">f'(a) = lim<sub>h→0</sub> [f(a+h) − f(a)] / h</div> <p>Géométriquement, f'(a) est la pente de la tangente à la courbe au point d'abscisse a.</p> <p><strong>Équation de la tangente au point (a ; f(a)) :</strong></p> <div class="formula-box">y = f'(a)(x − a) + f(a)</div>`
},
{
titre: “2. Tableau des dérivées usuelles”,
contenu: `<div class="formula-box"> f(x) = k &nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp; f'(x) = 0<br/> f(x) = x &nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp; f'(x) = 1<br/> f(x) = xⁿ &nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp; f'(x) = n·xⁿ⁻¹<br/> f(x) = √x &nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp; f'(x) = 1/(2√x)<br/> f(x) = 1/x &nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp; f'(x) = −1/x²<br/> f(x) = eˣ &nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp; f'(x) = eˣ<br/> f(x) = ln(x) &nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp; f'(x) = 1/x </div>`
},
{
titre: “3. Règles de dérivation”,
contenu: `<div class="formula-box"> (u + v)' = u' + v'<br/> (k·u)' = k·u'<br/> (u·v)' = u'v + uv'<br/> (u/v)' = (u'v − uv') / v²<br/> (u∘v)' = v' × u'(v) &nbsp;&nbsp;&nbsp; [dérivée composée] </div> <div class="example-box"> <strong>✏️ Exemples :</strong> <p>f(x) = 3x² + 5x − 2 → f'(x) = 6x + 5<br/> g(x) = (2x+1)³ → g'(x) = 2 × 3(2x+1)² = 6(2x+1)²<br/> h(x) = ln(3x²+1) → h'(x) = 6x/(3x²+1)</p> </div>`
},
{
titre: “4. Étude de variations et extrema”,
contenu: `<p>Le signe de f'(x) donne le sens de variation de f :</p> <div class="formula-box"> f'(x) > 0 → f croissante<br/> f'(x) &lt; 0 → f décroissante<br/> f'(a) = 0 → possible extremum en a </div> <div class="example-box"> <strong>✏️ Exemple complet :</strong> <p>f(x) = x³ − 3x + 1 sur ℝ<br/> f'(x) = 3x² − 3 = 3(x²−1) = 3(x−1)(x+1)<br/> f'(x) = 0 pour x = −1 ou x = 1<br/> f croissante sur ]−∞;−1[, décroissante sur ]−1;1[, croissante sur ]1;+∞[<br/> Maximum local : f(−1) = 3 &nbsp;&nbsp; Minimum local : f(1) = −1</p> </div>`
}
]
},

// ===== CHAPITRE 4 =====
{
titre: “Chapitre 4 — Intégration”,
meta: [“📅 Semestre 2”, “⏱ 8h de cours”, “🎯 Essentiel”],
sections: [
{
titre: “1. Primitives”,
contenu: `<p>F est une <strong>primitive</strong> de f si F' = f. On note ∫f(x)dx = F(x) + C.</p> <div class="formula-box"> ∫xⁿ dx = xⁿ⁺¹/(n+1) + C &nbsp;&nbsp; (n ≠ −1)<br/> ∫eˣ dx = eˣ + C<br/> ∫1/x dx = ln|x| + C<br/> ∫k dx = kx + C<br/> ∫u'·eᵘ dx = eᵘ + C<br/> ∫u'/u dx = ln|u| + C </div>`
},
{
titre: “2. Intégrale définie”,
contenu: `<p>L'intégrale de a à b de f(x) représente l'aire algébrique entre la courbe et l'axe des abscisses.</p> <div class="formula-box">∫ₐᵇ f(x)dx = [F(x)]ₐᵇ = F(b) − F(a)</div> <div class="example-box"> <strong>✏️ Exemple :</strong> <p>∫₀² (3x² + 2x) dx = [x³ + x²]₀²<br/> = (8 + 4) − (0 + 0) = <strong>12</strong></p> </div> <p><strong>Propriétés :</strong></p> <div class="formula-box"> ∫ₐᵇ f dx = −∫ᵦₐ f dx<br/> ∫ₐᵃ f dx = 0<br/> ∫ₐᵇ [f+g] dx = ∫ₐᵇ f dx + ∫ₐᵇ g dx </div>`
},
{
titre: “3. Calcul d’aires”,
contenu: `<p>Aire entre deux courbes f et g sur [a;b] (avec f ≥ g) :</p> <div class="formula-box">Aire = ∫ₐᵇ [f(x) − g(x)] dx</div> <div class="example-box"> <strong>✏️ Aire entre f(x) = x² et g(x) = x sur [0;1] :</strong> <p>Sur [0;1], x ≥ x², donc :<br/> Aire = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = <strong>1/6 unités d'aire</strong></p> </div>`
}
]
},

// ===== CHAPITRE 5 =====
{
titre: “Chapitre 5 — Logarithme & Exponentielle”,
meta: [“📅 Semestre 1-2”, “⏱ 8h de cours”, “🎯 Essentiel”],
sections: [
{
titre: “1. Fonction exponentielle”,
contenu: `<p>La fonction exponentielle exp ou eˣ est <strong>l'unique fonction</strong> dérivable sur ℝ telle que f' = f et f(0) = 1.</p> <div class="formula-box"> (eˣ)' = eˣ<br/> eᵃ × eᵇ = eᵃ⁺ᵇ<br/> eᵃ / eᵇ = eᵃ⁻ᵇ<br/> (eᵃ)ᵇ = eᵃᵇ<br/> e⁰ = 1 &nbsp;&nbsp; e¹ = e ≈ 2,718 </div> <div class="formula-box"> lim eˣ = +∞ (x→+∞) &nbsp;&nbsp;&nbsp; lim eˣ = 0 (x→−∞)<br/> Croissances comparées : lim xⁿeˣ = +∞ et lim eˣ/xⁿ = +∞ quand x→+∞ </div>`
},
{
titre: “2. Fonction logarithme”,
contenu: `<p>ln est la réciproque de exp. ln(x) est défini pour x > 0.</p> <div class="formula-box"> ln(eˣ) = x &nbsp;&nbsp;&nbsp; e^(ln x) = x<br/> ln(ab) = ln a + ln b<br/> ln(a/b) = ln a − ln b<br/> ln(aⁿ) = n·ln a<br/> ln(1) = 0 &nbsp;&nbsp;&nbsp; ln(e) = 1 </div> <p><strong>Dérivée :</strong></p> <div class="formula-box">[ln(u)]' = u'/u &nbsp;&nbsp;&nbsp; [ln(x)]' = 1/x</div> <div class="example-box"> <strong>✏️ Résoudre e²ˣ = 7 :</strong> <p>On prend le ln des deux membres :<br/> 2x = ln(7)<br/> x = ln(7)/2 ≈ <strong>0,973</strong></p> </div>`
},
{
titre: “3. Application : modèles de croissance”,
contenu: `<p>En économie et biologie, on utilise souvent :</p> <div class="formula-box">N(t) = N₀ × e^(kt)</div> <p>k > 0 : croissance exponentielle &nbsp;&nbsp; k &lt; 0 : décroissance</p> <div class="example-box"> <strong>✏️ Doublement de population :</strong> <p>Population P(t) = 1000 × e^(0,03t) (t en années)<br/> Quand double-t-elle ? e^(0,03t) = 2 → 0,03t = ln(2) → t = ln(2)/0,03 ≈ <strong>23,1 ans</strong></p> </div>`
}
]
},

// ===== CHAPITRE 6 =====
{
titre: “Chapitre 6 — Probabilités”,
meta: [“📅 Semestre 2”, “⏱ 10h de cours”, “🎯 Essentiel”],
sections: [
{
titre: “1. Vocabulaire et définitions”,
contenu: `<p>Une <strong>expérience aléatoire</strong> a plusieurs issues possibles dont on ne peut prédire le résultat avec certitude.</p> <ul> <li><strong>Univers Ω</strong> : ensemble de toutes les issues possibles</li> <li><strong>Événement</strong> : sous-ensemble de Ω</li> <li><strong>P(A)</strong> : probabilité de l'événement A, avec 0 ≤ P(A) ≤ 1</li> </ul> <div class="formula-box"> P(Ω) = 1 &nbsp;&nbsp;&nbsp; P(∅) = 0<br/> P(Ā) = 1 − P(A) &nbsp;&nbsp;&nbsp; [événement contraire]<br/> P(A ∪ B) = P(A) + P(B) − P(A ∩ B) </div>`
},
{
titre: “2. Probabilités conditionnelles”,
contenu: `<p>La probabilité de A sachant B :</p> <div class="formula-box">P(A|B) = P(A ∩ B) / P(B) &nbsp;&nbsp;&nbsp; [avec P(B) ≠ 0]</div> <p>A et B sont <strong>indépendants</strong> si P(A ∩ B) = P(A) × P(B).</p> <div class="example-box"> <strong>✏️ Exemple :</strong> <p>Dans une entreprise, 60% des employés sont satisfaits (S). Parmi les satisfaits, 80% sont productifs (P).<br/> P(S) = 0,6 &nbsp;&nbsp; P(P|S) = 0,8<br/> P(S ∩ P) = 0,6 × 0,8 = <strong>0,48</strong></p> </div>`
},
{
titre: “3. Formule des probabilités totales”,
contenu: `<p>Si {A₁, A₂, …, Aₙ} forment une partition de Ω :</p> <div class="formula-box">P(B) = P(B|A₁)P(A₁) + P(B|A₂)P(A₂) + … + P(B|Aₙ)P(Aₙ)</div> <div class="example-box"> <strong>✏️ Exemple concret :</strong> <p>Une usine a 2 machines. M1 produit 60% des pièces (3% de défauts), M2 produit 40% (5% de défauts).<br/> P(défaut) = 0,6×0,03 + 0,4×0,05 = 0,018 + 0,020 = <strong>0,038 = 3,8%</strong></p> </div>`
},
{
titre: “4. Loi binomiale”,
contenu: `<p>On répète n fois une épreuve de Bernoulli (succès p, échec 1−p). X = nombre de succès suit la loi B(n,p).</p> <div class="formula-box"> P(X = k) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ<br/> C(n,k) = n! / [k!(n−k)!]<br/> Espérance : E(X) = np<br/> Variance : V(X) = np(1−p) </div> <div class="example-box"> <strong>✏️ Exemple :</strong> <p>On lance 5 fois un dé. P(6) = 1/6. P(exactement 2 six) ?<br/> P(X=2) = C(5,2) × (1/6)² × (5/6)³ = 10 × 1/36 × 125/216 ≈ <strong>0,161 = 16,1%</strong></p> </div>`
}
]
},

// ===== CHAPITRE 7 =====
{
titre: “Chapitre 7 — Statistiques”,
meta: [“📅 Semestre 1”, “⏱ 8h de cours”, “🎯 Pratique”],
sections: [
{
titre: “1. Indicateurs de position”,
contenu: `<p><strong>Moyenne :</strong></p> <div class="formula-box">x̄ = (Σ fᵢxᵢ) / (Σ fᵢ)</div> <p><strong>Médiane Me :</strong> valeur qui partage la série en deux parties égales (50% de chaque côté).</p> <p><strong>Mode :</strong> valeur (ou classe) de plus grande fréquence.</p> <div class="example-box"> <strong>✏️ Exemple :</strong> <p>Notes : 8, 10, 12, 14, 16 (5 élèves)<br/> x̄ = (8+10+12+14+16)/5 = 60/5 = <strong>12</strong><br/> Médiane = 12 (3ème valeur)</p> </div>`
},
{
titre: “2. Indicateurs de dispersion”,
contenu: `<p><strong>Étendue :</strong> e = max − min</p> <p><strong>Variance :</strong></p> <div class="formula-box">σ² = Σ fᵢ(xᵢ − x̄)² / Σ fᵢ &nbsp;&nbsp;&nbsp; ou &nbsp;&nbsp;&nbsp; σ² = (Σ fᵢxᵢ²/N) − x̄²</div> <p><strong>Écart-type :</strong> σ = √(σ²) — même unité que les données</p> <p>Plus σ est grand, plus les données sont dispersées autour de la moyenne.</p>`
},
{
titre: “3. Régression linéaire”,
contenu: `<p>La droite des moindres carrés y = ax + b s'appelle droite de régression.</p> <div class="formula-box"> a = [Σ xᵢyᵢ − n·x̄·ȳ] / [Σ xᵢ² − n·x̄²]<br/> b = ȳ − a·x̄ </div> <p><strong>Coefficient de corrélation linéaire r :</strong></p> <div class="formula-box">−1 ≤ r ≤ 1 &nbsp;&nbsp;&nbsp; |r| proche de 1 → lien linéaire fort</div> <div class="example-box"> <strong>✏️ Interprétation de r :</strong> <p>|r| > 0,9 → très forte corrélation<br/> |r| entre 0,7 et 0,9 → forte corrélation<br/> |r| &lt; 0,5 → faible corrélation</p> </div>`
}
]
},

// ===== CHAPITRE 8 =====
{
titre: “Chapitre 8 — Algèbre linéaire”,
meta: [“📅 Semestre 1”, “⏱ 6h de cours”, “🎯 Algèbre”],
sections: [
{
titre: “1. Systèmes d’équations linéaires”,
contenu: `<p>Un système linéaire de 2 équations à 2 inconnues :</p> <div class="formula-box"> ax + by = e<br/> cx + dy = f </div> <p><strong>Méthode de substitution :</strong> exprimer une variable en fonction de l'autre, puis substituer.</p> <p><strong>Méthode de combinaison :</strong> additionner ou soustraire les équations pour éliminer une variable.</p> <div class="example-box"> <strong>✏️ Exemple :</strong> <p>2x + y = 7 &nbsp;&nbsp; (1)<br/> x − y = 2 &nbsp;&nbsp; (2)<br/> (1)+(2) : 3x = 9 → x = 3<br/> Dans (2) : 3 − y = 2 → y = 1<br/> Solution : <strong>(3 ; 1)</strong></p> </div>`
},
{
titre: “2. Déterminants d’ordre 2”,
contenu: `<div class="formula-box">det(M) = |a b; c d| = ad − bc</div> <p>Si det ≠ 0 → système a une solution unique.</p> <p><strong>Règle de Cramer :</strong></p> <div class="formula-box"> x = |e b; f d| / |a b; c d| = (ed − bf) / (ad − bc)<br/> y = |a e; c f| / |a b; c d| = (af − ce) / (ad − bc) </div>`
}
]
},

// ===== CHAPITRE 9 =====
{
titre: “Chapitre 9 — Matrices”,
meta: [“📅 Semestre 2”, “⏱ 8h de cours”, “🎯 Algèbre”],
sections: [
{
titre: “1. Définitions et opérations”,
contenu: `<p>Une matrice de type (m,n) a m lignes et n colonnes. Aᵢⱼ est le coefficient ligne i, colonne j.</p> <div class="formula-box"> (A+B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ &nbsp;&nbsp;&nbsp; [addition]<br/> (k·A)ᵢⱼ = k·Aᵢⱼ &nbsp;&nbsp;&nbsp; [multiplication scalaire] </div>`
},
{
titre: “2. Produit de matrices”,
contenu: `<p>Le produit A×B est possible si le nombre de colonnes de A = nombre de lignes de B.</p> <div class="formula-box">(AB)ᵢⱼ = Σₖ Aᵢₖ × Bₖⱼ</div> <div class="warning-box"> <strong>⚠️ Attention !</strong> Le produit de matrices n'est généralement pas commutatif : AB ≠ BA </div> <div class="example-box"> <strong>✏️ Exemple :</strong> <p>A = [1 2; 3 4] &nbsp;&nbsp; B = [5 6; 7 8]<br/> AB = [1×5+2×7, 1×6+2×8; 3×5+4×7, 3×6+4×8]<br/> AB = [19 22; 43 50]</p> </div>`
},
{
titre: “3. Matrice inverse et résolution de systèmes”,
contenu: `<p>La matrice inverse A⁻¹ vérifie : A × A⁻¹ = I (matrice identité).</p> <div class="formula-box"> Pour A = [a b; c d] :<br/> A⁻¹ = 1/(ad−bc) × [d −b; −c a]  &nbsp;&nbsp;&nbsp; si ad−bc ≠ 0 </div> <p>Résoudre AX = B ⟺ X = A⁻¹B</p> <div class="example-box"> <strong>✏️ Application :</strong> <p>A = [2 1; 1 3], B = [7; 11]<br/> det(A) = 6−1 = 5<br/> A⁻¹ = 1/5 × [3 −1; −1 2]<br/> X = A⁻¹B = 1/5 × [21−11; −7+22] = 1/5 × [10; 15] = [2; 3]</p> </div>`
}
]
},

// ===== CHAPITRE 10 =====
{
titre: “Chapitre 10 — Optimisation”,
meta: [“📅 Semestre 2”, “⏱ 6h de cours”, “🎯 Appliqué”],
sections: [
{
titre: “1. Optimisation avec dérivées”,
contenu: `<p>Chercher le maximum ou minimum d'une fonction f sur un intervalle [a;b] :</p> <ul> <li>Calculer f'(x)</li> <li>Résoudre f'(x) = 0</li> <li>Dresser le tableau de variation</li> <li>Vérifier les bornes</li> </ul> <div class="example-box"> <strong>✏️ Problème de profit :</strong> <p>Profit P(x) = −2x² + 40x − 50 (x en centaines d'unités)<br/> P'(x) = −4x + 40 = 0 → x = 10<br/> P''(x) = −4 &lt; 0 → maximum !<br/> Profit max : P(10) = −200 + 400 − 50 = <strong>150 (milliers d'€)</strong></p> </div>`
},
{
titre: “2. Programmation linéaire”,
contenu: `<p>Maximiser/minimiser une fonction objectif sous des contraintes linéaires.</p> <p><strong>Méthode graphique :</strong></p> <ul> <li>Tracer les contraintes (demi-plans)</li> <li>Identifier le domaine réalisable (intersection)</li> <li>Évaluer la fonction objectif aux sommets du domaine</li> <li>Le maximum/minimum est atteint en un sommet</li> </ul> <div class="formula-box">Toujours évaluer f aux SOMMETS du domaine réalisable</div>`
}
]
},

// ===== CHAPITRE 11 =====
{
titre: “Chapitre 11 — Arithmétique”,
meta: [“📅 Semestre 1”, “⏱ 4h de cours”, “🎯 Base”],
sections: [
{
titre: “1. Divisibilité et PGCD”,
contenu: `<p>a divise b (noté a|b) si il existe un entier k tel que b = ka.</p> <p><strong>PGCD</strong> (Plus Grand Commun Diviseur) — algorithme d'Euclide :</p> <div class="formula-box">PGCD(a,b) = PGCD(b, a mod b) jusqu'à reste = 0</div> <div class="example-box"> <strong>✏️ PGCD(48, 18) :</strong> <p>48 = 2×18 + 12<br/> 18 = 1×12 + 6<br/> 12 = 2×6 + 0 → PGCD = <strong>6</strong></p> </div>`
},
{
titre: “2. Congruences”,
contenu: `<p>a ≡ b [n] signifie que a et b ont le même reste dans la division par n.</p> <div class="formula-box">a ≡ b [n] ⟺ n | (a−b)</div> <div class="example-box"> <strong>✏️ Application :</strong> <p>Quel est le reste de 2¹⁰⁰ divisé par 3 ?<br/> 2¹ ≡ 2 [3], 2² ≡ 1 [3], 2³ ≡ 2 [3]...<br/> Période 2. 100 est pair → 2¹⁰⁰ ≡ 2² ≡ <strong>1 [3]</strong></p> </div>`
}
]
},

// ===== CHAPITRE 12 =====
{
titre: “Chapitre 12 — Révisions & Annales”,
meta: [“📅 Fin d’année”, “⏱ 10h de cours”, “🎯 Révisions”],
sections: [
{
titre: “1. Méthode pour les examens BTS”,
contenu: `<p><strong>Conseils pour le jour de l'examen :</strong></p> <ul> <li>📖 Lire tout le sujet avant de commencer</li> <li>⏱ Gérer son temps : 30 min max par exercice</li> <li>✏️ Montrer sa démarche même si le résultat est faux</li> <li>🔁 Vérifier ses calculs à la fin</li> <li>📐 Toujours faire un tableau de variation propre</li> </ul>`
},
{
titre: “2. Formulaire de révision complet”,
contenu: `<p><strong>À connaître par cœur :</strong></p> <div class="formula-box"> SUITES : uₙ = u₀ + nr (arith.) | uₙ = u₀·qⁿ (géo.)<br/> DÉRIVÉES : (xⁿ)' = nxⁿ⁻¹ | (eˣ)' = eˣ | (ln x)' = 1/x<br/> INTÉGRALES : ∫xⁿ = xⁿ⁺¹/(n+1) | ∫eˣ = eˣ | ∫1/x = ln|x|<br/> PROBA : P(A|B) = P(A∩B)/P(B) | Binomiale : E(X) = np<br/> STATS : x̄ = Σfᵢxᵢ/N | σ² = Σfᵢ(xᵢ−x̄)²/N </div>`
},
{
titre: “3. Erreurs classiques à éviter”,
contenu: `<div class="warning-box"> <strong>⚠️ Erreurs fréquentes en BTS :</strong> <ul> <li>Oublier les conditions de définition (ln x → x > 0 !)</li> <li>Confondre dérivée de uv et u×v</li> <li>Ne pas vérifier les bornes en optimisation</li> <li>Oublier la constante C lors du calcul de primitive</li> <li>Ne pas interpréter les résultats dans le contexte du problème</li> </ul> </div>`
}
]
}
];

// ============================================================
// EXERCICES
// ============================================================
const EXERCICES = [
// ANALYSE
{
categorie: “analyse”,
titre: “Dérivée d’une fonction polynôme”,
niveau: “facile”,
enonce: “Calculer la dérivée de f(x) = 3x⁴ − 2x² + 5x − 1”,
correction: `<strong>Solution :</strong><br/> On dérive terme par terme :<br/> f'(x) = 4×3x³ − 2×2x + 5 − 0<br/> <strong>f'(x) = 12x³ − 4x + 5</strong>`
},
{
categorie: “analyse”,
titre: “Dérivée composée”,
niveau: “moyen”,
enonce: “Calculer la dérivée de f(x) = (3x² + 1)⁵”,
correction: `<strong>Solution :</strong><br/> On utilise la règle (uⁿ)' = n·u'·uⁿ⁻¹ avec u = 3x²+1<br/> u' = 6x<br/> <strong>f'(x) = 5 × 6x × (3x²+1)⁴ = 30x(3x²+1)⁴</strong>`
},
{
categorie: “analyse”,
titre: “Intégrale définie”,
niveau: “moyen”,
enonce: “Calculer ∫₁³ (2x + 1) dx”,
correction: `<strong>Solution :</strong><br/> Primitive : F(x) = x² + x<br/> ∫₁³ (2x+1) dx = [x²+x]₁³ = (9+3) − (1+1) = 12 − 2 = <strong>10</strong>`
},
{
categorie: “analyse”,
titre: “Extremum d’une fonction”,
niveau: “difficile”,
enonce: “Étudier les variations de f(x) = x³ − 6x² + 9x + 1 et trouver ses extrema.”,
correction: `<strong>Solution :</strong><br/> f'(x) = 3x² − 12x + 9 = 3(x² − 4x + 3) = 3(x−1)(x−3)<br/> f'(x) = 0 pour x = 1 ou x = 3<br/> Signe de f' : + sur ]−∞;1[, − sur ]1;3[, + sur ]3;+∞[<br/> Maximum local en x=1 : f(1) = 1−6+9+1 = <strong>5</strong><br/> Minimum local en x=3 : f(3) = 27−54+27+1 = <strong>1</strong>`
},
{
categorie: “analyse”,
titre: “Tangente à une courbe”,
niveau: “moyen”,
enonce: “Trouver l’équation de la tangente à f(x) = x² + 3x au point d’abscisse x = 2.”,
correction: `<strong>Solution :</strong><br/> f(2) = 4 + 6 = 10 → point (2 ; 10)<br/> f'(x) = 2x + 3 → f'(2) = 7 (pente de la tangente)<br/> Équation : y = 7(x−2) + 10<br/> <strong>y = 7x − 4</strong>`
},
{
categorie: “analyse”,
titre: “Résolution avec ln”,
niveau: “moyen”,
enonce: “Résoudre l’équation ln(2x−1) = 3”,
correction: `<strong>Solution :</strong><br/> On exponentielle les deux membres :<br/> e^(ln(2x−1)) = e³<br/> 2x − 1 = e³<br/> x = (e³ + 1) / 2 ≈ (20,09 + 1)/2 ≈ <strong>10,54</strong>`
},

// PROBABILITÉS
{
categorie: “proba”,
titre: “Probabilité de base”,
niveau: “facile”,
enonce: “On tire une carte dans un jeu de 52 cartes. Quelle est la probabilité de tirer un as ?”,
correction: `<strong>Solution :</strong><br/> Il y a 4 as dans un jeu de 52 cartes.<br/> P(As) = 4/52 = 1/13 ≈ <strong>0,077 = 7,7%</strong>`
},
{
categorie: “proba”,
titre: “Probabilité conditionnelle”,
niveau: “moyen”,
enonce: “Dans une usine, 70% des pièces viennent de la machine A. La machine A produit 2% de défauts, la machine B en produit 5%. On prend une pièce défectueuse. Quelle est la probabilité qu’elle vienne de A ?”,
correction: `<strong>Solution :</strong><br/> P(A) = 0,7, P(B) = 0,3<br/> P(D|A) = 0,02, P(D|B) = 0,05<br/> P(D) = 0,7×0,02 + 0,3×0,05 = 0,014 + 0,015 = 0,029<br/> P(A|D) = P(D|A)×P(A)/P(D) = 0,014/0,029 ≈ <strong>0,483 = 48,3%</strong>`
},
{
categorie: “proba”,
titre: “Loi binomiale”,
niveau: “difficile”,
enonce: “Un vendeur conclut 30% de ses visites par une vente. S’il fait 8 visites par jour, calculer P(X=3).”,
correction: `<strong>Solution :</strong><br/> X ~ B(8, 0,3) — n=8, p=0,3<br/> P(X=3) = C(8,3) × 0,3³ × 0,7⁵<br/> C(8,3) = 56<br/> 0,3³ = 0,027 &nbsp; 0,7⁵ ≈ 0,16807<br/> P(X=3) = 56 × 0,027 × 0,16807 ≈ <strong>0,254 = 25,4%</strong>`
},
{
categorie: “proba”,
titre: “Espérance et variance”,
niveau: “moyen”,
enonce: “X suit une loi B(20, 0,4). Calculer E(X) et σ.”,
correction: `<strong>Solution :</strong><br/> E(X) = np = 20 × 0,4 = <strong>8</strong><br/> V(X) = np(1−p) = 20 × 0,4 × 0,6 = 4,8<br/> σ = √4,8 ≈ <strong>2,19</strong>`
},

// STATISTIQUES
{
categorie: “stats”,
titre: “Moyenne et écart-type”,
niveau: “facile”,
enonce: “Notes d’un groupe : 8, 10, 12, 14, 16, 18. Calculer la moyenne et l’écart-type.”,
correction: `<strong>Solution :</strong><br/> x̄ = (8+10+12+14+16+18)/6 = 78/6 = <strong>13</strong><br/> σ² = [(8−13)²+(10−13)²+(12−13)²+(14−13)²+(16−13)²+(18−13)²]/6<br/> = [25+9+1+1+9+25]/6 = 70/6 ≈ 11,67<br/> σ = √11,67 ≈ <strong>3,42</strong>`
},
{
categorie: “stats”,
titre: “Régression linéaire”,
niveau: “difficile”,
enonce: “Données : x=(1,2,3,4,5), y=(2,4,5,4,5). Trouver la droite de régression y=ax+b.”,
correction: `<strong>Solution :</strong><br/> x̄ = 3, ȳ = 4<br/> Σxᵢyᵢ = 2+8+15+16+25 = 66<br/> Σxᵢ² = 1+4+9+16+25 = 55<br/> a = (66 − 5×3×4)/(55 − 5×9) = (66−60)/(55−45) = 6/10 = <strong>0,6</strong><br/> b = 4 − 0,6×3 = 4 − 1,8 = <strong>2,2</strong><br/> Droite : <strong>y = 0,6x + 2,2</strong>`
},

// ALGÈBRE
{
categorie: “algebre”,
titre: “Résolution de système”,
niveau: “facile”,
enonce: “Résoudre le système : 3x + 2y = 12 et x − y = 1”,
correction: `<strong>Solution :</strong><br/> De (2) : x = y + 1<br/> On substitue dans (1) : 3(y+1) + 2y = 12<br/> 3y + 3 + 2y = 12 → 5y = 9 → y = 9/5 = 1,8<br/> x = 1,8 + 1 = 2,8<br/> <strong>Solution : (2,8 ; 1,8)</strong>`
},
{
categorie: “algebre”,
titre: “Produit de matrices”,
niveau: “moyen”,
enonce: “Calculer le produit AB avec A = [[1,2],[3,4]] et B = [[2,0],[1,3]]”,
correction: `<strong>Solution :</strong><br/> (AB)₁₁ = 1×2 + 2×1 = 4<br/> (AB)₁₂ = 1×0 + 2×3 = 6<br/> (AB)₂₁ = 3×2 + 4×1 = 10<br/> (AB)₂₂ = 3×0 + 4×3 = 12<br/> <strong>AB = [[4,6],[10,12]]</strong>`
},
{
categorie: “algebre”,
titre: “Suite arithmétique — application”,
niveau: “facile”,
enonce: “Un salarié gagne 1800€ en janvier. Il reçoit 50€ d’augmentation par mois. Quel sera son salaire en décembre (mois 12) ?”,
correction: `<strong>Solution :</strong><br/> Suite arithmétique : u₁ = 1800, r = 50<br/> u₁₂ = u₁ + (12−1)×50 = 1800 + 11×50 = 1800 + 550<br/> <strong>Salaire en décembre : 2350€</strong>`
},
{
categorie: “algebre”,
titre: “Suite géométrique — capital”,
niveau: “moyen”,
enonce: “On place 5000€ à un taux annuel de 3,5%. Quel capital obtient-on après 8 ans ?”,
correction: `<strong>Solution :</strong><br/> Suite géométrique : C₀ = 5000, q = 1,035<br/> C₈ = 5000 × 1,035⁸<br/> 1,035⁸ ≈ 1,3168<br/> <strong>C₈ ≈ 5000 × 1,3168 ≈ 6584€</strong>`
}
];