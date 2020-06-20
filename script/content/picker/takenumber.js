function take() {
  from = document.getElementById("from").value;
  till = document.getElementById("till").value;
  res = Math.ceil(Math.random() * (till - from + 1));
  document.getElementById("dicenumber1").innerText = res;
}
