// Functions used on smaller screen

function menuCel(id) {
  clearMenu();
  document.querySelector(id).style.display = "block";
  showClearCelBtn();
};

menuClearCel = function() {
  clearScreen();

  document.querySelector(".clearCel").style.display = "none";

  menu = document.querySelectorAll(".menu");
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = "block";
  }
};
