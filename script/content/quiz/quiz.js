// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const choiceD = document.getElementById("d");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
// const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const scoreDiv1 = document.getElementById("scoreContainer1");
const container = document.getElementById("container");
const pass = document.getElementById("pass");
const tryagain = document.getElementById("tryagain");
const nextBtn = document.getElementById("next");
// const header = document.getElementById("header");

// create some variables

// const lastQuestion = questions.length - 1;
const lastQuestion = 9;
let runningQuestion = 0;
arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let kk = arr1.sort(() => Math.random() - 0.5);
// let runningQuestion = shuffle(arr1);
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 236; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[kk[runningQuestion]];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";

  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
  document.getElementById("a").style.background = "none";
  document.getElementById("b").style.background = "none";
  document.getElementById("c").style.background = "none";
  document.getElementById("d").style.background = "none";
  document.getElementById("a").style.color = "black";
  document.getElementById("b").style.color = "black";
  document.getElementById("c").style.color = "black";
  document.getElementById("d").style.color = "black";
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  // header.style.display = "none";
  scoreDiv.innerHTML = "";
  runningQuestion = 0;
  count = 0;
  score = 0;
  scoreDiv1.style.display = "none";
  container.style.display = "flex";
  container.classList.remove("hide");
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  //   for (let qIndex = 0; qIndex <= 9; qIndex++) {
  //     progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  //   }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    // change progress color to red
    // answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

//Persen
function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    // change progress color to red
    // answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[kk[runningQuestion]].correct) {
    document.getElementById(answer).style.background = "green";
    document.getElementById(answer).style.color = "white";
    // document.getElementById("a").style.background = "green";
    // document.getElementById("b").style.background = "green";
    // document.getElementById("c").style.background = "green";
    // document.getElementById("d").style.background = "green";
    // m = "b";
    // answer is correct
    // document.getElementById(answer).style.background = "green";
    // document.getElementById(m).classList.add("ansTrue");
    // console.log(answer);
    score++;
    // change progress color to green
    // answerIsCorrect();
  } else {
    // document.getElementById(answer).style.background = "red";
    // document.getElementById(answer).classList.add("ansFalse");
    document.getElementById(answer).style.background = "red";
    document.getElementById(answer).style.color = "white";
    document.getElementById(
      questions[kk[runningQuestion]].correct
    ).style.background = "green";
    document.getElementById(
      questions[kk[runningQuestion]].correct
    ).style.color = "white";
    // answer is wrong
    // change progress color to red
    // answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    setTimeout(renderQuestion, 1000);
    // renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
// function answerIsCorrect() {
//   document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
// }

// answer is Wrong
// function answerIsWrong() {
//   document.getElementById(runningQuestion).style.backgroundColor = "#f00";
// }

// score render
function scoreRender() {
  scoreDiv1.style.display = "flex";
  scoreDiv.style.display = "flex";

  // calculate the amount of question percent answered by the user
  //   const scorePerCent = Math.round((100 * score) / questions.length);
  scorePerCent = Math.round((100 * score) / 10);
  container.style.display = "none";
  // choose the image based on the scorePerCent
  let img =
    scorePerCent == 100
      ? "menang.jpg"
      : //   : scorePerCent >= 80
        //   ? "img/5.png"
        //   : scorePerCent >= 60
        //   ? "img/4.png"
        //   : scorePerCent >= 40
        //   ? "img/3.png"
        //   : scorePerCent >= 20
        //   ? "img/2.png"
        //   : "img/1.png";

        //   scoreDiv.innerHTML = "<img src=" + img + ">";

        // (scoreDiv.innerHTML += "<p>" + scorePerCent + "</p>");
        (scoreDiv.innerHTML = scorePerCent);
  if (score == 10) {
    // pass.style.display = "flex";
    scoreDiv.innerHTML = 100;
    tryagain.style.display = "none";
    nextBtn.style.display = "flex";
  } else {
    tryagain.style.display = "flex";
  }
}
tryagain.addEventListener("click", tryagaianbtn);
function tryagainbtn() {
  score = 0;
  startQuiz();
}
