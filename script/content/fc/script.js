var id = 0;

var a = document.getElementById("nama1").value;
var b = document.getElementById("nama2").value;

function calc() {
  var a = document.getElementById("nama1").value;
  var b = document.getElementById("nama2").value;
  if (a == "" || b == "") {
    console.log("not");
    alert("Please Enter the form");
    console.log("---------------------");
  } else {
    id++;
    percen = Math.floor(Math.random() * 100);
    if (percen < 70) {
      percen += 30;
      if (percen < 70) {
        percen += 30;
      }
    } else if (percen < 50) {
      percen += 50;
    }

    document.getElementById("resultTag").innerHTML = "Result : ";
    document.getElementById("resultVal").innerHTML = percen + " %";

    console.log(id);
    console.log("Name : " + a);
    console.log("Friend : " + b);
    console.log("Percent : " + percen);

    document.getElementById("btn").value = "Back";
    document.getElementById("btn").setAttribute("onclick", "back()");
    document.getElementById("nama1").disabled = true;
    document.getElementById("nama2").disabled = true;
  }
}
function back() {
  document.getElementById("nama1").value = "";
  document.getElementById("nama2").value = "";
  console.log("---------------------");
  document.getElementById("btn").value = "Calculate";
  document.getElementById("btn").setAttribute("onclick", "calc()");
  document.getElementById("resultTag").innerHTML = "";
  document.getElementById("resultVal").innerHTML = "";
  document.getElementById("nama1").disabled = false;
  document.getElementById("nama2").disabled = false;
}
