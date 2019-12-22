// Functions used on desktop

menuHowTeaDesktop = function() {
  clearScreen();

  document.querySelector("#teaRecipes").style.display = "block";
  document.querySelector("#clearDesktop").style.display = "block";
  document.querySelector("#howToTea").style.display = "none";
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
