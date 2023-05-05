// const queryString = window.location.search;
// console.log(queryString);
// $.ajax({
//   url: "http://localhost:3000/work",
//   type: "GET",
//   dataType: "json",
//   success: function (res) {
//     $.each(res.data, (key, value) => {
//       let el = `<div class="col">
//                             <a href="./../img/${value.thumbnail}" data-fslightbox="gallery">
//                                 <div class="hover">
//                                     <div class="pad align-bottom">
//                                         <h2>${value.title}</h2>
//                                     </div>
//                                 </div>
//                                 <div class="bg-img" style="background-image:url(./../img/${value.thumbnail});">
//                                 </div>
//                             </a>
//                         </div>`;
//       $("#portfolio").append(el);
//       refreshFsLightbox();
//     });
//   },
// });

var makeWinHeight = function () {
  var vh = $(window).height();
  var projects = vh / 2;
  $("#scene, .layer.main").height(vh);
  $("#scene .col a, #scene .col").height(projects);
};
$(document).ready(function () {
  makeWinHeight();
});
$(window).resize(function () {
  makeWinHeight();
});

var scene = document.getElementById("scene");
var parallax = new Parallax(scene);
