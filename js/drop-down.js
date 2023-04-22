window.addEventListener("click", function (event) {
  const card = event.target.closest("[data-action='card']");
  if (card) {
    const accordion = card.closest(".drop-down-block-wrapper");
    const hiden = accordion.querySelector(".faq-hidden");
    const arrow = accordion.querySelector(".arrow-faq");
    const plus = accordion.querySelector(".learn-plus");

    plus.classList.toggle("active");
    hiden.classList.toggle("active");
  }
});
