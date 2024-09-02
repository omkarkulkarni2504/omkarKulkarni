var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
var pic = document.getElementById("mainpic");


icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./assets/sun.png";
        logo.src = "./assets/bluelogo.png";
        pic.src = "./assets/omkrDark.png";
        
        
    }
    else{
        icon.src = "./assets/moon.png";
        logo.src = "./assets/logo1.png";
        pic.src = "./assets/omkarlight.png";

    }
}


