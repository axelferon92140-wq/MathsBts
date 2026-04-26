// ============================================================
// APP.JS — Logique principale MathsBTS
// ============================================================

// –– NAVIGATION ––
function showPage(pageId) {
document.querySelectorAll(’.page’).forEach(p => p.classList.remove(‘active’));
const page = document.getElementById(‘page-’ + pageId);
if (page) {
page.classList.add(‘active’);
window.scrollTo({ top: 0, behavior: ‘smooth’ });
}
if (pageId === ‘cours’) renderCoursDefault();
if (pageId === ‘exercices’) renderExercices(‘tous’);
}

function toggleMenu() {
const m = document.getElementById(‘mobileMenu’);
m.classList.toggle(‘open’);
}

// Scroll effect sur navbar
window.addEventListener(‘scroll’, () => {
const nav = document.getElementById(‘navbar’);
nav.style.background = window.scrollY > 50
? ‘rgba(10,10,15,0.98)’
: ‘rgba(10,10,15,0.85)’;
});

// –– COURS ––
let currentChapitre = 0;

function renderCoursDefault() {
renderChapitre(0);
}

function showChapitre(index, el) {
currentChapitre = index;
document.querySelectorAll(’#chapitresList li’).forEach(li => li.classList.remove(‘active’));
el.classList.add(‘active’);
renderChapitre(index);
// Scroll to top of content on mobile
const content = document.getElementById(‘coursContent’);
if (content) content.scrollIntoView({ behavior: ‘smooth’, block: ‘start’ });
}

function renderChapitre(index) {
const ch = CHAPITRES[index];
if (!ch) return;

let html = `<h2 class="cours-titre">${ch.titre}</h2>`;
html += `<div class="cours-meta">`;
ch.meta.forEach(m => { html += `<span>${m}</span>`; });
html += `</div>`;

ch.sections.forEach(sec => {
html += `<div class="cours-section">`;
html += `<h3>${sec.titre}</h3>`;
html += sec.contenu;
html += `</div>`;
});

// Navigation entre chapitres
html += `<div style="display:flex;gap:12px;margin-top:40px;flex-wrap:wrap;">`;
if (index > 0) {
html += `<button class="btn-ghost" onclick="navChapitre(${index-1})">← Chapitre précédent</button>`;
}
if (index < CHAPITRES.length - 1) {
html += `<button class="btn-primary" onclick="navChapitre(${index+1})">Chapitre suivant →</button>`;
}
html += `</div>`;

document.getElementById(‘coursContent’).innerHTML = html;
}

function navChapitre(index) {
const items = document.querySelectorAll(’#chapitresList li’);
if (items[index]) {
showChapitre(index, items[index]);
}
}

// –– EXERCICES ––
function renderExercices(cat) {
const grid = document.getElementById(‘exoGrid’);
const filtered = cat === ‘tous’ ? EXERCICES : EXERCICES.filter(e => e.categorie === cat);

grid.innerHTML = filtered.map((ex, i) => `<div class="exo-card"> <div class="exo-header"> <div class="exo-title">${ex.titre}</div> <span class="exo-level level-${ex.niveau}">${ex.niveau.charAt(0).toUpperCase() + ex.niveau.slice(1)}</span> </div> <div class="exo-enonce">${ex.enonce}</div> <div class="exo-toggle" onclick="toggleCorrection(this)">📋 Voir la correction</div> <div class="exo-correction">${ex.correction}</div> </div>`).join(’’);
}

function filterExo(cat, btn) {
document.querySelectorAll(’.filter-btn’).forEach(b => b.classList.remove(‘active’));
btn.classList.add(‘active’);
renderExercices(cat);
}

function toggleCorrection(el) {
const correction = el.nextElementSibling;
const isOpen = correction.classList.contains(‘open’);
correction.classList.toggle(‘open’);
el.textContent = isOpen ? ‘📋 Voir la correction’ : ‘🔺 Masquer la correction’;
}

// –– IA TUTOR ––
const IA_SYSTEME = `Tu es MathBot, un assistant pédagogique expert en mathématiques pour les étudiants BTS français.

Tes spécialités : suites numériques, fonctions, dérivation, intégration, logarithme, exponentielle, probabilités (loi binomiale, probabilités conditionnelles), statistiques (moyenne, écart-type, régression linéaire), matrices, algèbre linéaire, optimisation.

Règles :

- Réponds TOUJOURS en français
- Sois clair, pédagogue, encourageant
- Utilise des étapes numérotées pour les calculs
- Donne des exemples concrets liés au BTS
- Si quelqu’un est perdu, rassure-le et simplifie
- Utilise des emojis pour rendre la réponse vivante (📐✏️💡)
- Adapte le niveau à la question : ne sur-explique pas si la question est simple
- Maximum 300 mots par réponse pour rester lisible sur mobile
- Termine toujours par une phrase d’encouragement ou une astuce`;

async function sendIAMessage() {
const input = document.getElementById(‘iaInput’);
const msg = input.value.trim();
if (!msg) return;

addMessage(msg, ‘user’);
input.value = ‘’;

const typingId = addTyping();

try {
const response = await fetch(“https://api.anthropic.com/v1/messages”, {
method: “POST”,
headers: { “Content-Type”: “application/json” },
body: JSON.stringify({
model: “claude-sonnet-4-20250514”,
max_tokens: 1000,
system: IA_SYSTEME,
messages: getConversationHistory(msg)
})
});

```
const data = await response.json();
removeTyping(typingId);

if (data.content && data.content[0]) {
  addMessage(data.content[0].text, 'bot');
} else {
  addMessage("Désolé, une erreur s'est produite. Réessaie dans quelques instants ! 😊", 'bot');
}
```

} catch (err) {
removeTyping(typingId);
addMessage(“Connexion impossible à l’IA pour l’instant. Consulte les cours en attendant ! 📚”, ‘bot’);
}
}

let conversation = [];

function getConversationHistory(newMsg) {
conversation.push({ role: “user”, content: newMsg });
if (conversation.length > 10) conversation = conversation.slice(-10);
return conversation;
}

function addMessage(text, role) {
const chat = document.getElementById(‘iaChat’);
const div = document.createElement(‘div’);
div.className = `ia-msg ${role}`;

const avatarEmoji = role === ‘bot’ ? ‘🤖’ : ‘👤’;
div.innerHTML = `<div class="ia-avatar">${avatarEmoji}</div> <div class="ia-bubble">${formatIAResponse(text)}</div>`;

chat.appendChild(div);
chat.scrollTop = chat.scrollHeight;

if (role === ‘assistant’) {
conversation.push({ role: “assistant”, content: text });
}
}

function formatIAResponse(text) {
// Convertir **bold** et sauts de ligne
return text
.replace(/**(.*?)**/g, ‘<strong>$1</strong>’)
.replace(/\n/g, ‘<br/>’);
}

function addTyping() {
const chat = document.getElementById(‘iaChat’);
const id = ‘typing-’ + Date.now();
const div = document.createElement(‘div’);
div.className = ‘ia-msg bot’;
div.id = id;
div.innerHTML = `<div class="ia-avatar">🤖</div> <div class="ia-bubble"> <div class="typing-indicator"> <div class="dot"></div><div class="dot"></div><div class="dot"></div> </div> </div>`;
chat.appendChild(div);
chat.scrollTop = chat.scrollHeight;
return id;
}

function removeTyping(id) {
const el = document.getElementById(id);
if (el) el.remove();
}

function askSuggestion(question) {
document.getElementById(‘iaInput’).value = question;
sendIAMessage();
}

// –– TARIFS ––
function startFreeTrial() {
document.getElementById(‘modal’).classList.add(‘open’);
}

function closeModal() {
document.getElementById(‘modal’).classList.remove(‘open’);
}

// –– INIT ––
document.addEventListener(‘DOMContentLoaded’, () => {
// Initialiser les cours
renderChapitre(0);

// Animation d’entrée pour les éléments
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = ‘1’;
entry.target.style.transform = ‘translateY(0)’;
}
});
}, { threshold: 0.1 });

document.querySelectorAll(’.feature-card, .testi-card, .tarif-card’).forEach(el => {
el.style.opacity = ‘0’;
el.style.transform = ‘translateY(20px)’;
el.style.transition = ‘opacity 0.5s ease, transform 0.5s ease’;
observer.observe(el);
});
});