const yt = [
  "https://www.youtube.com/watch?v=7BOwur-4Ows",
  "https://www.youtube.com/watch?v=eNYm0Y-0Fjs",
  "https://www.youtube.com/watch?v=llhQ9C3za-k",
  "https://www.youtube.com/watch?v=cnw6vMSZKHU",
  "https://www.youtube.com/watch?v=cnw6vMSZKHU",
];

for (i = 0; i <= 4; i++) {
  var thumbnail = get_youtube_thumbnail(yt[i], "max");
  $(".stage").append(`<a href="${yt[i]}" class="element ${thumbnail[1]}"></a>`);
  $(`.${thumbnail[1]}`).css("background-image", `url(${thumbnail[0]})`);
}

function get_youtube_thumbnail(url, quality) {
  if (url) {
    var video_id, thumbnail, result;
    if ((result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/))) {
      video_id = result.pop();
    } else if ((result = url.match(/youtu.be\/(.{11})/))) {
      video_id = result.pop();
    }

    if (video_id) {
      if (typeof quality == "undefined") {
        quality = "high";
      }

      var quality_key = "maxresdefault"; // Max quality
      if (quality == "low") {
        quality_key = "sddefault";
      } else if (quality == "medium") {
        quality_key = "mqdefault";
      } else if (quality == "high") {
        quality_key = "hqdefault";
      }

      var thumbnail =
        "http://img.youtube.com/vi/" + video_id + "/" + quality_key + ".jpg";
      return [thumbnail, video_id];
    }
  }
  return false;
}
