document.addEventListener("DOMContentLoaded", () => {
  preloader.style.visibility = "visible";
  preloader.style.opacity = 1;
  preloader.style.transition = "opacity 2s linear";

  document.body.style.overflowY = "hidden";

  setTimeout(() => {
    preloader.style.visibility = "hidden";
    preloader.style.opacity = 0;
    preloader.style.transition = "visibility 0s 0.3s, opacity 0.3s linear";
    document.body.style.overflowY = "auto";

    setTimeout(() => {
      preloader.remove();
    }, 300);
  }, 5000);
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function scrollToAbout() {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToWork() {
  document.querySelector("#work").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToContact() {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
}
