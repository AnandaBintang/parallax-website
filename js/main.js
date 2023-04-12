$(document).ready(function () {
  // Preloader
  $("body").css("overflowY", "hidden");
  $("#preloader").css({
    visibility: "visible",
    opacity: "1",
    transition: "opacity 2s linear",
  });

  setTimeout(() => {
    $("body").css("overflowY", "auto");
    $("#preloader").css({
      visibility: "hidden",
      opacity: "0",
      transition: "visibility 0s 0.3s, opacity 0.3s linear",
    });

    setTimeout(() => {
      $("#preloader").remove();
    }, 300);
  }, 5000);

  // Parallax Animation
  $("#leaf").css({ top: "-250px", left: "400px" });
  $("#text").css({ scale: "1.5" });

  setTimeout(() => {
    // Leaf Animation
    $("#leaf").css({
      top: "0px",
      left: "0px",
      transition: "top 1.5s, left 1.5s",
    });

    // Text Animation
    $("#text").css({
      scale: "1",
      transition: "scale 1s, top 1s",
    });
  }, 5000);

  $(document).on("scroll", () => {
    let value = window.scrollY;

    $("#text").css({
      transform: `scale(${1 - (value * 1.5) / 1000})`,
    });

    $("#leaf").css({
      top: `${value * -1.5}px`,
      left: `${value * 1.5}px`,
      transition: "",
    });

    $("#hill5").css("left", `${value * 1.5}px`);
    $("#hill4").css("left", `${value * -1.5}px`);
    $("#hill1").css("top", `${value * 1}px`);
  });

  // Sticky Navbar
  window.onscroll = function () {
    stickyNavbar();
  };

  // Image Slider
  $(".element").each(function () {
    $(this).mouseover(function () {
      $(this).addClass("active");
      $(".stage").children(".element").not(".active").addClass("inactive");
    });
    $(this).mouseleave(function () {
      $(this).removeClass("active");
      $(".stage").children(".element").not(".active").removeClass("inactive");
    });
  });
});

// Navigation Bar
var sticky = $("#navbar").offset().top;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    $("#navbar").addClass("sticky");
  } else {
    $("#navbar").removeClass("sticky");
  }
}

function scrollToAbout() {
  $("#about")[0].scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToWork() {
  $("#work")[0].scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToContact() {
  $("#contact")[0].scrollIntoView({
    behavior: "smooth",
  });
}
