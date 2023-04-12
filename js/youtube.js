const yt = {
  0: {
    alt: "Image-1",
    img: "./img/1.png",
    link: "https://www.youtube.com/watch?v=7BOwur-4Ows",
  },
  1: {
    alt: "Image-2",
    img: "./img/2.png",
    link: "https://www.youtube.com/watch?v=eNYm0Y-0Fjs",
  },
  2: {
    alt: "Image-3",
    img: "./img/3.png",
    link: "https://www.youtube.com/watch?v=llhQ9C3za-k",
  },
  3: {
    alt: "Image-4",
    img: "./img/4.png",
    link: "https://www.youtube.com/watch?v=cnw6vMSZKHU",
  },
  4: {
    alt: "Image-5",
    img: "./img/5.png",
    link: "https://www.youtube.com/watch?v=mjSBi563gdA",
  },
};

for (i = 0; i <= 4; i++) {
  $(".stage").append(
    `<a data-fslightbox="gallery" href="${yt[i].link}" class="element ${yt[i].alt}"></a>`
  );
  $(`.${yt[i].alt}`).css("background-image", `url(${yt[i].img})`);
}
