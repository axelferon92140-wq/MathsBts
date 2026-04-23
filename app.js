// NAV
function show(id){
document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

// DATA
let xp = parseInt(localStorage.getItem("xp")) || 0;
let best = parseInt(localStorage.getItem("best")) || 0;
let premium = localStorage.getItem("premium");

// PROFILE
function updateProfile(){
document.getElementById("xp").innerText = "XP : " + xp;
document.getElementById("best").innerText = "Record : " + best;

let level = Math.floor(xp / 10) + 1;
document.getElementById("level").innerText = "Niveau : " + level;
}

// QUIZ
let correct;

function newQ(){
let a=Math.floor(Math.random()*10);
let b=Math.floor(Math.random()*10);
correct = a + b;
document.getElementById("question").innerText = `${a} + ${b}`;
}

function check(){
let user = parseInt(document.getElementById("answer").value);

if(user === correct){
xp++;
document.getElementById("feedback").innerText = "✅";
}else{
document.getElementById("feedback").innerText = "❌ ("+correct+")";
}

if(xp > best){
best = xp;
localStorage.setItem("best", best);
}

localStorage.setItem("xp", xp);

updateProfile();
newQ();
}

// PREMIUM
function goStripe(){
window.location.href="https://YOUR-STRIPE-LINK";
}

// INIT
if(premium){
document.getElementById("premiumCours").style.display="none";
}

updateProfile();
newQ();