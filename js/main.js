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

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

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
