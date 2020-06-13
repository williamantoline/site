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
