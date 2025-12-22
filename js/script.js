/*Scrolling Fixed Header*/
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/*Slideshow*/
var carouselEl = document.querySelector('#mainCarousel');
var carousel = new bootstrap.Carousel(carouselEl, {
  interval: 5000, /* Slide every 5 seconds*/
  pause: 'hover', /* Pause on hover*/
  wrap: true      /* Loop slides*/
});

/*Show / Hide Button*/
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggleBtn");
  const text = document.getElementById("extraInfo");

  button.addEventListener("click", function () {
    if (text.style.display === "none") {
      text.style.display = "block";
      button.textContent = "Show Less";
    } else {
      text.style.display = "none";
      button.textContent = "Show More";
    }
  });
});
