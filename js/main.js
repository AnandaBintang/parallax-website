$(document).ready(function () {
  const mediaQuery = window.matchMedia("(min-width: 1025px)");

  // Preloader
  // $("body").css("overflowY", "hidden");
  $("#preloader").css({
    visibility: "visible",
    opacity: "1",
    transition: "opacity 2s linear",
  });

  window.addEventListener("load", () => {
    $("#midground1").css({
      left: "-100px",
    });
    $("#midground2").css("top", "100px");
    $("#midground3").css({
      left: "100px",
    });

    setTimeout(() => {
      $("body").css("overflowY", "auto");
      $("#preloader").css({
        visibility: "hidden",
        opacity: "0",
        transition: "visibility 0s 0.3s, opacity 0.3s linear",
      });

      $("#midground1").css({
        transition: "left 1s",
        left: "0px",
      });

      $("#midground3").css({
        transition: "left 1s",
        left: "0px",
      });

      $("#midground2").css({
        top: "0px",
        transition: "top 1.5s",
      });
      setTimeout(() => {
        $("#preloader").remove();
      }, 300);
    }, 1);
  });

  if (mediaQuery.matches) {
    $("#nav-mobile").hide();
    $(window).resize(function () {
      window.location.reload();
    });

    // Parallax Animation
    $(document).on("scroll", () => {
      let value = window.scrollY;

      $("#midground1").css({
        transition: "",
      });
      $("#midground3").css({
        transition: "",
      });
      $("#midground2").css({
        transition: "",
      });

      $("#background").css("top", `${value * 0.3}px`);
      $("#midground1").css("left", `${value * -0.2}px`);
      $("#midground2").css("top", `${value * 0.45}px`);
      $("#midground3").css("left", `${value * 0.2}px`);

      let newVal = value - 2500;
      $("#dummy").css("transform", `rotate(${newVal * 0.05}deg)`);
      if (newVal >= 0) {
        $("#cloud1").css({
          left: `${newVal * -0.05}px`,
          top: `${newVal * 0.3}px`,
        });

        $("#cloud2").css({
          left: `${newVal * 0.15}px`,
          top: `${newVal * 0.3}px`,
        });

        $("#mountain").css("top", `${newVal * 0.3}px`);
        $("#ground").css("top", `${newVal * 0.2}px`);
        $("#hill-tree").css({
          top: `${newVal * 0.1}px`,
          left: `${newVal * -0.05}px`,
        });
        $("#tree").css("top", `${newVal * 0.09}px`);
      }
    });
  } else {
    $("body").css("overflowY", "auto");
    $("#navbar").hide();
  }

  $("#active").on("click", () => {
    if ($("#active").is(":checked")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "");
    }
  });

  // Sticky Navbar
  window.onscroll = function () {
    stickyNavbar();
  };

  // Services
  (function ($) {
    $(function () {
      if (!("ontouchstart" in window)) {
        const videoPropCont = document.querySelectorAll(".js-create_video");

        videoPropCont.forEach(function (item) {
          item.addEventListener("mouseenter", function () {
            var video = this.querySelector("video");

            if (!item.classList.contains("js-active")) {
              item.classList.add("js-active");

              video.play();
              video.loop = false;

              video.addEventListener("ended", function () {
                item.classList.remove("js-active");
                item.classList.remove("js-video-end");
                item.classList.remove("js-video-pause");
              });

              video.addEventListener("timeupdate", function () {
                if (
                  video.currentTime >= 2 &&
                  !item.classList.contains("js-video-end")
                ) {
                  video.pause();
                  item.classList.add("js-video-pause");
                }
              });
            }
          });

          item.addEventListener("mouseleave", function () {
            var video = this.querySelector("video");

            if (item.classList.contains("js-active")) {
              if (item.classList.contains("js-video-pause")) {
                item.classList.add("js-video-end");
                video.play();
              } else {
                item.classList.add("js-video-end");
              }
            }
          });
        });
      }
    });
  })(jQuery);

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

function mobileMenu() {
  $("body").css("overflow", "");
  $("#active").prop("checked", false);
}

$("#about-mobile").on("click", () => {
  mobileMenu();

  $("#about")[0].scrollIntoView({
    behavior: "smooth",
  });
});

$("#work-mobile").on("click", () => {
  mobileMenu();

  $("#work")[0].scrollIntoView({
    behavior: "smooth",
  });
});

$("#contact-mobile").on("click", () => {
  mobileMenu();

  $("#contact")[0].scrollIntoView({
    behavior: "smooth",
  });
});

function scrollToAbout() {
  mobileMenu();

  $("#about")[0].scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToWork() {
  mobileMenu();

  $("#work")[0].scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToContact() {
  mobileMenu();

  $("#contact")[0].scrollIntoView({
    behavior: "smooth",
  });
}
