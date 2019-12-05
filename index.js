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

menuHowTeaDesktop = function() {
  clearScreen();

  document.querySelector("#teaRecipes").style.display = "block";
  document.querySelector("#clearDesktop").style.display = "block";
  document.querySelector("#howToTea").style.display = "none";
};

menuClearCel = function() {
  clearScreen();

  document.querySelector(".clearCel").style.display = "none";

  menu = document.querySelectorAll(".menu");
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = "block";
  }
};

menuClearDesktop = function() {
  document.querySelector("#tea").style.display = "block";
  document.querySelector("#study").style.display = "block";
  document.querySelector("#programming").style.display = "block";
  document.querySelector("#utilities").style.display = "block";
  document.querySelector("#books").style.display = "block";
  document.querySelector("#teaRecipes").style.display = "none";
  document.querySelector("#clearDesktop").style.display = "none";
  document.querySelector("#howToTea").style.display = "inline";
};

function clearMenu() {
  menu = document.querySelectorAll(".menu");
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = "none";
  }
}

function clearCel() {
  document.querySelector(".clearCel").style.display = "block";
}

function clearScreen() {
  document.querySelector("#tea").style.display = "none";
  document.querySelector("#study").style.display = "none";
  document.querySelector("#programming").style.display = "none";
  document.querySelector("#utilities").style.display = "none";
  document.querySelector("#books").style.display = "none";
  document.querySelector("#teaRecipes").style.display = "none";
}
