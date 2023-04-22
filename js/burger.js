let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
const link = document.querySelectorAll(".burger-link");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
document.onclick = function (ClickEvent) {
  if (ClickEvent.target.id !== "menu" && ClickEvent.target.id !== "icon") {
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
  }
};
