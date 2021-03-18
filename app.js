const play = document.querySelector(".play");
const trailer = document.querySelector(".video-container");
const close = document.querySelector(".close");

play.addEventListener("click", () => {
  trailer.style.display = "flex";
});

close.addEventListener("click", () => {
  trailer.style.display = "none";
});

const container = document.querySelector(".container");
const video = document.querySelector(".video");

setTimeout(() => {
  video.style.display = "none";
}, 18000);

setTimeout(() => {
  container.style.display = "flex";
}, 22000);
