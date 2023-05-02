$(document).ready(function () {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  // Preloader
  $("body").css("overflowY", "hidden");
  $("#preloader").css({
    visibility: "visible",
    opacity: "1",
    transition: "opacity 2s linear",
  });

  window.addEventListener("load", () => {
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
    }, 3000);
  });

  if (mediaQuery.matches) {
    $("#nav-mobile").hide();
    // Parallax Animation
    $(document).on("scroll", () => {
      let value = window.scrollY;

      $("#background").css("top", `${value * 0.3}px`);
      $("#midground1").css("left", `${value * -0.2}px`);
      $("#midground2").css("top", `${value * 0.3}px`);
      $("#midground3").css("left", `${value * 0.2}px`);
    });
  } else {
    $("body").css("overflowY", "auto");
  }

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

  $(window).resize(function () {
    window.location.reload();
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
