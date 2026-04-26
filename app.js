// ============================================================
// APP.JS — Compatible Safari (addEventListener uniquement)
// ============================================================

document.addEventListener(‘DOMContentLoaded’, function() {

// –– NAVIGATION ––
document.querySelectorAll(’.nav-btn’).forEach(function(btn) {
btn.addEventListener(‘click’, function() {
var page = this.getAttribute(‘data-page’);
showPage(page);
var menu = document.getElementById(‘mobileMenu’);
if (menu.classList.contains(‘open’)) menu.classList.remove(‘open’);
});
});

// –– BURGER MENU ––
document.getElementById(‘burgerBtn’).addEventListener(‘click’, function() {
document.getElementById(‘mobileMenu’).classList.toggle(‘open’);
});

// –– CHAPITRES ––
document.querySelectorAll(’.chap-btn’).forEach(function(btn) {
btn.addEventListener(‘click’, function() {
var index = parseInt(this.getAttribute(‘data-index’));
document.querySelectorAll(’.chap-btn’).forEach(function(b) { b.classList.remove(‘active’); });
btn.classList.add(‘active’);
renderChapitre(index);
document.getElementById(‘coursContent’).scrollIntoView({ behavior: ‘smooth’, block: ‘start’ });
});
});

// –– FILTRES EXERCICES ––
document.querySelectorAll(’.filter-btn’).forEach(function(btn) {
btn.addEventListener(‘click’, function() {
document.querySelectorAll(’.filter-btn’).forEach(function(b) { b.classList.remove(‘active’); });
btn.classList.add(‘active’);
renderExercices(btn.getAttribute(‘data-cat’));
});
});

// –– IA ––
document.getElementById(‘iaSendBtn’).addEventListener(‘click’, sendIAMessage);
document.getElementById(‘iaInput’).addEventListener(‘keydown’, function(e) {
if (e.key === ‘Enter’) sendIAMessage();
});

document.querySelectorAll(’.suggestion-btn’).forEach(function(btn) {
btn.addEventListener(‘click’, function() {
document.getElementById(‘iaInput’).value = this.getAttribute(‘data-question’);
sendIAMessage();
});
});

// –– TARIFS / TRIAL ––
document.querySelectorAll(’.trial-btn’).forEach(function(btn) {
btn.addEventListener(‘click’, function() {
document.getElementById(‘modal’).classList.add(‘open’);
});
});

// –– MODAL ––
document.getElementById(‘modalCloseBtn’).addEventListener(‘click’, function() {
document.getElementById(‘modal’).classList.remove(‘open’);
showPage(‘cours’);
});
document.getElementById(‘modal’).addEventListener(‘click’, function(e) {
if (e.target === this) this.classList.remove(‘open’);
});

// –– SCROLL NAV ––
window.addEventListener(‘scroll’, function() {
var nav = document.getElementById(‘navbar’);
nav.style.background = window.scrollY > 50
? ‘rgba(10,10,15,0.98)’
: ‘rgba(10,10,15,0.85)’;
});

// –– INIT ––
renderChapitre(0);
renderExercices(‘tous’);

// Animations d’entrée
var observer = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
entry.target.style.opacity = ‘1’;
entry.target.style.transform = ‘translateY(0)’;
}
});
}, { threshold: 0.1 });

document.querySelectorAll(’.feature-card, .testi-card, .tarif-card’).forEach(function(el) {
el.style.opacity = ‘0’;
el.style.transform = ‘translateY(20px)’;
el.style.transition = ‘opacity 0.5s ease, transform 0.5s ease’;
observer.observe(el);
});

});

// –– SHOW PAGE ––
function showPage(pageId) {
document.querySelectorAll(’.page’).forEach(function(p) { p.classList.remove(‘active’); });
var page = document.getElementById(‘page-’ + pageId);
if (page) {
page.classList.add(‘active’);
window.scrollTo({ top: 0, behavior: ‘smooth’ });
}
if (pageId === ‘cours’) renderChapitre(0);
if (pageId === ‘exercices’) renderExercices(‘tous’);
}

// –– COURS ––
function renderChapitre(index) {
var ch = CHAPITRES[index];
if (!ch) return;

var html = ‘<h2 class="cours-titre">’ + ch.titre + ‘</h2>’;
html += ‘<div class="cours-meta">’;
ch.meta.forEach(function(m) { html += ‘<span>’ + m + ‘</span>’; });
html += ‘</div>’;

ch.sections.forEach(function(sec) {
html += ‘<div class="cours-section">’;
html += ‘<h3>’ + sec.titre + ‘</h3>’;
html += sec.contenu;
html += ‘</div>’;
});

html += ‘<div style="display:flex;gap:12px;margin-top:40px;flex-wrap:wrap;">’;
if (index > 0) {
html += ‘<button class="btn-ghost" onclick="navChapitre(' + (index-1) + ')">← Chapitre précédent</button>’;
}
if (index < CHAPITRES.length - 1) {
html += ‘<button class="btn-primary" onclick="navChapitre(' + (index+1) + ')">Chapitre suivant →</button>’;
}
html += ‘</div>’;

document.getElementById(‘coursContent’).innerHTML = html;
}

function navChapitre(index) {
var btns = document.querySelectorAll(’.chap-btn’);
if (btns[index]) {
document.querySelectorAll(’.chap-btn’).forEach(function(b) { b.classList.remove(‘active’); });
btns[index].classList.add(‘active’);
renderChapitre(index);
document.getElementById(‘coursContent’).scrollIntoView({ behavior: ‘smooth’, block: ‘start’ });
}
}

// –– EXERCICES ––
function renderExercices(cat) {
var grid = document.getElementById(‘exoGrid’);
var filtered = cat === ‘tous’ ? EXERCICES : EXERCICES.filter(function(e) { return e.categorie === cat; });

grid.innerHTML = filtered.map(function(ex, i) {
return ‘<div class="exo-card">’ +
‘<div class="exo-header">’ +
‘<div class="exo-title">’ + ex.titre + ‘</div>’ +
‘<span class="exo-level level-' + ex.niveau + '">’ + ex.niveau.charAt(0).toUpperCase() + ex.niveau.slice(1) + ‘</span>’ +
‘</div>’ +
‘<div class="exo-enonce">’ + ex.enonce + ‘</div>’ +
‘<button class="exo-toggle">📋 Voir la correction</button>’ +
‘<div class="exo-correction">’ + ex.correction + ‘</div>’ +
‘</div>’;
}).join(’’);

// Attacher les événements après rendu
document.querySelectorAll(’.exo-toggle’).forEach(function(btn) {
btn.addEventListener(‘click’, function() {
var correction = this.nextElementSibling;
var isOpen = correction.classList.contains(‘open’);
correction.classList.toggle(‘open’);
this.textContent = isOpen ? ‘📋 Voir la correction’ : ‘🔺 Masquer la correction’;
});
});
}

// –– IA TUTOR ––
var conversation = [];

var IA_SYSTEME = “Tu es MathBot, un assistant pédagogique expert en mathématiques pour les étudiants BTS français. Réponds TOUJOURS en français. Sois clair, pédagogue et encourageant. Utilise des étapes numérotées pour les calculs. Donne des exemples concrets. Utilise des emojis. Maximum 300 mots par réponse.”;

function sendIAMessage() {
var input = document.getElementById(‘iaInput’);
var msg = input.value.trim();
if (!msg) return;

addMessage(msg, ‘user’);
input.value = ‘’;
conversation.push({ role: ‘user’, content: msg });
if (conversation.length > 10) conversation = conversation.slice(-10);

var typingId = addTyping();

fetch(‘https://api.anthropic.com/v1/messages’, {
method: ‘POST’,
headers: { ‘Content-Type’: ‘application/json’ },
body: JSON.stringify({
model: ‘claude-sonnet-4-20250514’,
max_tokens: 1000,
system: IA_SYSTEME,
messages: conversation
})
})
.then(function(response) { return response.json(); })
.then(function(data) {
removeTyping(typingId);
if (data.content && data.content[0]) {
var reply = data.content[0].text;
conversation.push({ role: ‘assistant’, content: reply });
addMessage(reply, ‘bot’);
} else {
addMessage(‘Désolé, une erreur s'est produite. Réessaie ! 😊’, ‘bot’);
}
})
.catch(function() {
removeTyping(typingId);
addMessage(‘Connexion impossible à l'IA pour l'instant. Consulte les cours en attendant ! 📚’, ‘bot’);
});
}

function addMessage(text, role) {
var chat = document.getElementById(‘iaChat’);
var div = document.createElement(‘div’);
div.className = ’ia-msg ’ + role;
var emoji = role === ‘bot’ ? ‘🤖’ : ‘👤’;
div.innerHTML = ‘<div class="ia-avatar">’ + emoji + ‘</div>’ +
‘<div class="ia-bubble">’ + formatIAResponse(text) + ‘</div>’;
chat.appendChild(div);
chat.scrollTop = chat.scrollHeight;
}

function formatIAResponse(text) {
return text
.replace(/**(.*?)**/g, ‘<strong>$1</strong>’)
.replace(/\n/g, ‘<br/>’);
}

function addTyping() {
var chat = document.getElementById(‘iaChat’);
var id = ‘typing-’ + Date.now();
var div = document.createElement(‘div’);
div.className = ‘ia-msg bot’;
div.id = id;
div.innerHTML = ‘<div class="ia-avatar">🤖</div>’ +
‘<div class="ia-bubble"><div class="typing-indicator">’ +
‘<div class="dot"></div><div class="dot"></div><div class="dot"></div>’ +
‘</div></div>’;
chat.appendChild(div);
chat.scrollTop = chat.scrollHeight;
return id;
}

function removeTyping(id) {
var el = document.getElementById(id);
if (el) el.remove();
}