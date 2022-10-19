const hamburger = document.querySelector(".icon-hamburger");
const sideBar = document.querySelector(".sidebar");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
    if(sideBar.style.display === ("none")){
        sideBar.style.display = "block";
        hamburger.setAttribute("src", "./images/icon-close-menu.svg");
        body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    else{
        sideBar.style.display = "none";
        hamburger.setAttribute("src", "./images/icon-menu.svg");
        body.style.backgroundColor = "";
    }
})