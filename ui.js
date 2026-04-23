const UI = {

show(page){

let app = document.getElementById("app");

if(page==="home"){
app.innerHTML = `
<div class="card">
<h2>Bienvenue</h2>
<p>XP: ${STATE.xp}</p>
<p>Difficulté: ${STATE.difficulty.toFixed(1)}</p>
<button onclick="UI.show('lesson')">Commencer</button>
</div>`;
}

if(page==="lesson"){
let html = "";
for(let key in COURSES){
html += `<button onclick="UI.openLesson('${key}')">${COURSES[key].title}</button>`;
}
app.innerHTML = `<div class="card">${html}</div>`;
}

if(page==="quiz"){
let q = QUIZ.generate(STATE, STATE.lesson);
app.innerHTML = `
<div class="card">
<h2>${q.q}</h2>
<input id="rep">
<button onclick="UI.check()">Valider</button>
<p id="fb"></p>
</div>`;
}

if(page==="profile"){
app.innerHTML = `
<div class="card">
<h2>Profil</h2>
<p>XP: ${STATE.xp}</p>
</div>`;
}

},

openLesson(id){
STATE.lesson=id;
document.getElementById("app").innerHTML = `
<div class="card">
${COURSES[id].content}
<button onclick="UI.show('quiz')">S'entraîner</button>
</div>`;
},

check(){
let val = document.getElementById("rep").value;
let res = QUIZ.check(STATE, val);

document.getElementById("fb").innerText =
res.success ? "✅" : "❌ "+res.correct;

save();
}

};