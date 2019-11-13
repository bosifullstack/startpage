(() => {

    if ("serviceWorker" in navigator) {
        if (navigator.serviceWorker.controller) {
            console.log("[PWA Builder] active service worker found, no need to register");
    } else {
        // Register the service worker
        navigator.serviceWorker
            .register("pwabuilder-sw.js", {
                scope: "./"
            })
            .then(function (reg) {
                console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
            });
        }
    } 
})();
menuTea = function(){
    document.querySelector("#tea").style.display = "block";
    document.querySelector(".clearCel").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
    document.querySelector("#teaRecipes").style.display = "none";
}
menuStudy = function(){
    document.querySelector("#study").style.display = "block";
    document.querySelector(".clearCel").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
    document.querySelector("#teaRecipes").style.display = "none";
}
menuProgramming = function(){
    document.querySelector("#programming").style.display = "block";
    document.querySelector(".clearCel").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
    document.querySelector("#teaRecipes").style.display = "none";
}
menuUtilities = function(){
    document.querySelector("#utilities").style.display = "block";
    document.querySelector(".clearCel").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
    document.querySelector("#teaRecipes").style.display = "none";
}
menuBooks = function(){
    document.querySelector("#books").style.display = "block";
    document.querySelector(".clearCel").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
    document.querySelector("#teaRecipes").style.display = "none";
}
menuHowTea = function(){
    document.querySelector("#teaRecipes").style.display = "block";
    document.querySelector(".clearCel").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
}
menuHowTeaDesktop = function(){
    document.querySelector("#teaRecipes").style.display = "block";
    document.querySelector("#clearDesktop").style.display = "block";
    document.querySelector("#howToTea").style.display = "none";
    document.querySelector("#tea").style.display = "none";
    document.querySelector("#study").style.display = "none";
    document.querySelector("#programming").style.display = "none";
    document.querySelector("#utilities").style.display = "none";
    document.querySelector("#books").style.display = "none";
}
menuClearCel = function(){
    document.querySelector("#tea").style.display = "none";
    document.querySelector("#study").style.display = "none";
    document.querySelector("#programming").style.display = "none";
    document.querySelector("#utilities").style.display = "none";
    document.querySelector("#books").style.display = "none";
    document.querySelector(".clearCel").style.display = "none";
    document.querySelector("#teaRecipes").style.display = "none";

    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "block";
    }
}
menuClearDesktop = function(){
    document.querySelector("#tea").style.display = "block";
    document.querySelector("#study").style.display = "block";
    document.querySelector("#programming").style.display = "block";
    document.querySelector("#utilities").style.display = "block";
    document.querySelector("#books").style.display = "block";
    document.querySelector("#clearDesktop").style.display = "none";
    document.querySelector("#teaRecipes").style.display = "none";
    document.querySelector("#howToTea").style.display = "inline";
}