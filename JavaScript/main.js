$(document).ready(function(){
    $('.bxslider').bxSlider({
      mode: 'horizontal',
      auto: true
    });
})


const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show_menu')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
})




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















