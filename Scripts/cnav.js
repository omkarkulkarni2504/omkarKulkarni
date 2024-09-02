// getting HTML elements
const nav = document.getElementById("nav"),
      toggleBtn = nav.querySelector(".toggle-btn");

      miniIcon = nav.querySelector(".fa-moon");


  toggleBtn.addEventListener("click" , () =>{
    nav.classList.toggle("open");
    nav.classList.toggle('margin-top-30');
  });

  // cange color------------------------
  miniIcon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./assets/sun.png";
        logo.src = "./assets/bluelogo.png";
        miniIcon.setAttribute("class","fa-solid fa-sun");
        
        
    }
    else{
        icon.src = "./assets/moon.png";
        logo.src = "./assets/logo1.png";
        miniIcon.setAttribute("class","fa-solid fa-moon");
        
    }
}

// cange color------------------------

// js code to make draggable nav
function onDrag({movementY}) { //movementY gets mouse vertical value
  const navStyle = window.getComputedStyle(nav), //getting all css style of nav
        navTop = parseInt(navStyle.top), // getting nav top value & convert it into string
        navHeight = parseInt(navStyle.height), // getting nav height value & convert it into string
        windHeight = window.innerHeight; // getting window height

  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
  if(navTop > windHeight - navHeight){
    nav.style.top = `${windHeight - navHeight}px`;
  }
}

//this function will call when user click mouse's button and  move mouse on nav
nav.addEventListener("mousedown", () =>{
  nav.addEventListener("mousemove", onDrag);
});

//these function will call when user relase mouse button and leave mouse from nav
nav.addEventListener("mouseup", () =>{
  nav.removeEventListener("mousemove", onDrag);
});
nav.addEventListener("mouseleave", () =>{
  nav.removeEventListener("mousemove", onDrag);
});
