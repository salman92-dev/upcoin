$(window).on("load",function(){
    $(".loader").fadeOut("slow");
});


const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");
const hd = document.querySelector(".hd");

navbarToggle.addEventListener("click", () => {
  hd.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});