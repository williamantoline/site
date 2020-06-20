const theme = document.getElementById("titlename");
const quotes = document.getElementById("quotescont");
const author = document.getElementById("author");
// const sender = document.getElementById("sender");
// const senderName = document.getElementById("sendername");
var i = 0;
var j = 0;

const title = [
  "Relationship",
  "Friendship",
  "Motivational",
  "Happiness",
  "Faith",
  "Positive",
];
arr1 = [];
for (k = 0; k < datafull[j].length - 1; k++) {
  arr1.push(k);
}
arr2 = arr1.sort(() => Math.random() - 0.5);
var iMax = datafull[0].length - 1;
quotes.innerText = datafull[j][i].quotes;
author.innerText = datafull[j][i].author;
// sender.innerText = datafull[j][i].sender;

var jMax = datafull.length - 1;
function next1() {
  if (j < jMax) {
    j++;
  } else if (j == jMax) {
    j = 0;
  }
  iMax = datafull[j].length - 1;
  console.log(j);
  console.log(iMax);
  theme.innerText = title[j];
  resetState(j);
  arr1 = [];
  for (k = 0; k < datafull[j].length - 1; k++) {
    arr1.push(k);
  }
  arr2 = arr1.sort(() => Math.random() - 0.5);
  console.log("length" + arr2.length);
}
function prev1() {
  if (j == 0) {
    j = jMax;
  } else if (j > 0) {
    j--;
  }
  iMax = datafull[j].length;
  console.log(j);
  console.log(iMax);
  theme.innerText = title[j];
  resetState(j);
}
function resetState() {
  quotes.innerText = datafull[j][i].quotes;
  author.innerText = datafull[j][i].author;
  //   sender.innerText = datafull[j][i].sender;
  arr1 = [];
  for (k = 0; k < datafull[j].length - 2; k++) {
    arr1.push(k);
  }
  arr2 = arr1.sort(() => Math.random() - 0.5);
}

function next() {
  if (i < iMax) {
    i++;
  } else if (i == iMax) {
    i = 0;
  }

  showNextQuotes(arr2[i]);
  console.log(arr2[i]);
}
function prev() {
  if (i > 0) {
    i--;
  } else if (i == 0) {
    i = iMax;
  }
  console.log(i);
  showNextQuotes(arr2[i]);
}

function showNextQuotes(i) {
  quotes.innerText = datafull[j][i].quotes;
  author.innerText = datafull[j][i].author;
  //   if (datafull[j][i].sender != "") {
  //     sender.classList.remove("hide");
  //     senderName.innerText = datafull[j][i].sender;
  //   } else {
  //     sender.classList.add("hide");
  //     senderName.innerText = "";
  //   }
}
