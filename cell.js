// Functions used on smaller screen

menuTea = function() {
  document.querySelector("#tea").style.display = "block";
  clearCel();
  clearMenu();
  document.querySelector("#teaRecipes").style.display = "none";
};

menuStudy = function() {
  document.querySelector("#study").style.display = "block";
  clearCel();
  clearMenu();
  document.querySelector("#teaRecipes").style.display = "none";
};

menuProgramming = function() {
  document.querySelector("#programming").style.display = "block";
  clearCel();
  clearMenu();
  document.querySelector("#teaRecipes").style.display = "none";
};

menuUtilities = function() {
  document.querySelector("#utilities").style.display = "block";
  clearCel();
  clearMenu();
  document.querySelector("#teaRecipes").style.display = "none";
};

menuBooks = function() {
  document.querySelector("#books").style.display = "block";
  clearCel();
  clearMenu();
  document.querySelector("#teaRecipes").style.display = "none";
};

menuHowTea = function() {
  document.querySelector("#teaRecipes").style.display = "block";
  clearCel();
  clearMenu();
};

menuClearCel = function() {
  clearScreen();

  document.querySelector(".clearCel").style.display = "none";

  menu = document.querySelectorAll(".menu");
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = "block";
  }
};
