menuTea = function(){
    document.querySelector("#tea").style.display = "block";
    document.querySelector(".clear").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
}
menuStudy = function(){
    document.querySelector("#study").style.display = "block";
    document.querySelector(".clear").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
}
menuProgramming = function(){
    document.querySelector("#programming").style.display = "block";
    document.querySelector(".clear").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
}
menuUtilities = function(){
    document.querySelector("#utilities").style.display = "block";
    document.querySelector(".clear").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
}
menuBooks = function(){
    document.querySelector("#books").style.display = "block";
    document.querySelector(".clear").style.display = "block";
    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "none";
    }
}
menuClear = function(){
    document.querySelector("#tea").style.display = "none";
    document.querySelector("#study").style.display = "none";
    document.querySelector("#programming").style.display = "none";
    document.querySelector("#utilities").style.display = "none";
    document.querySelector("#books").style.display = "none";
    document.querySelector(".clear").style.display = "none";

    menu = document.querySelectorAll(".menu");
    for (i = 0; i<menu.length; i++){
        menu[i].style.display = "block";
    }
}