const dicenumber1 = document.getElementById("dicenumber1");
const dicenumber2 = document.getElementById("dicenumber2");

function dice1() {
  document.getElementById("span").classList.add("hide");
  document.getElementById("dicenumber2").classList.add("hide");
}
function dice2() {
  document.getElementById("span").classList.remove("hide");
  document.getElementById("dicenumber2").classList.remove("hide");
}
il = "";
function roll() {
  res1 = Math.floor(Math.random() * 6) + 1;
  res2 = Math.floor(Math.random() * 6) + 1;
  dicenumber1.innerText = res1;
  dicenumber2.innerText = res2;
}
