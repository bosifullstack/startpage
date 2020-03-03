function clearMenu() {
  menu = document.querySelectorAll(".menu");
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = "none";
  }
}

function showClearCelBtn() {
  document.querySelector(".clearCel").style.display = "block";
}

function clearScreen() {
  document.querySelector("#tea").style.display = "none";
  document.querySelector("#study").style.display = "none";
  document.querySelector("#programming").style.display = "none";
  document.querySelector("#utilities").style.display = "none";
  document.querySelector("#frameworks").style.display = "none";
}
