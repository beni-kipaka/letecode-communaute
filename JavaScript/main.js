$(document).ready(function(){
    $('.bxslider').bxSlider({
      mode: 'horizontal',
      auto: true
    });
})


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))











const cookieContainer = document.querySelector(".cookie-container")
const cookieButton = document.querySelector(".cookie-btn ")

cookieButton.addEventListener("click", () => {
cookieContainer.classList.remove("active");
localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
if (!localStorage.getItem("cookieBannerDisplayed"))
cookieContainer.classList.add("active");
}, 2000);















