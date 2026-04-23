let STATE = JSON.parse(localStorage.getItem("state")) || {
xp:0,
difficulty:1,
lesson:"add"
};

function save(){
localStorage.setItem("state", JSON.stringify(STATE));
}

UI.show("home");