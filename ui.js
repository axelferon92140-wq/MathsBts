export function updateUI(state){
  document.getElementById("xp").innerText = "XP: " + state.xp;
  document.getElementById("hearts").innerText = "❤️".repeat(state.hearts);

  let avatar = "🙂";
  if(state.xp > 20) avatar="😎";
  if(state.xp > 50) avatar="🤖";

  document.getElementById("avatar").innerText = avatar;
}