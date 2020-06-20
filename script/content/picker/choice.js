const addButton = document.getElementById("plusbtn");
const resElement = document.getElementById("result");
x = document.getElementsByClassName("inp");
i = 2;
function addInput() {
  if (i < 7) {
    i++;
  } else {
    i;
  }

  x[i - 1].classList.remove("hide");
}
function remInput() {
  if (i > 2) {
    i--;
  } else {
    i;
  }

  x[i].classList.add("hide");
}
function take() {
  c = Math.floor(Math.random() * i) + 1;
  console.log(c);
  resElement.innerText = x[c - 1].value;
}
