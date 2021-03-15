const sub = document.querySelector(".sub");
const modal = document.querySelector(".modal");
const cancel = document.querySelector(".cancel");

sub.addEventListener("click", () => {
  modal.style.display = "flex";
});

cancel.addEventListener("click", () => {
    modal.style.display = "none";
  });