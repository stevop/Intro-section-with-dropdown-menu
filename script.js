const hamburger = document.querySelector(".icon-hamburger");
const sideBar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
    if(sideBar.style.display === ("none")){
        sideBar.style.display = "block";
        hamburger.setAttribute("src", "./images/icon-close-menu.svg");
    }
    else{
        sideBar.style.display = "none";
        hamburger.setAttribute("src", "./images/icon-menu.svg");
    }
})