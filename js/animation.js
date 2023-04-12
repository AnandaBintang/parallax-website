$(document).ready(function () {
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
});
