window.onload = function () {
  const nextBtn = document.getElementById("next");
  const nextBtn2 = document.getElementById("btn_next");
  const prevBtn2 = document.getElementById("btn_prev");

  nextBtn.addEventListener("click", function () {
    pagination();
    nextSlide();
  });

  nextBtn2.addEventListener("click", function () {
    pagination2();
    nextSlide2();
  });

  prevBtn2.addEventListener("click", function () {
    pagination2();
    prevSlide2();
  });

  let slideNumber = 0;
  let slideNumber2 = 0;

  const nextSlide = () => {
    const slider = document.getElementById("slider");
    const slides = slider.getElementsByClassName("slides");
    const currentSlide = slider.getElementsByClassName("current");

    currentSlide[0].classList.remove("current");
    if (slideNumber == slides.length - 1) {
      slideNumber = 0;
    } else {
      slideNumber += 1;
    }
    slides[slideNumber].classList.add("current");
  };

  const nextSlide2 = () => {
    const slider2 = document.getElementById("slider_main");
    const slides2 = slider2.getElementsByClassName("slide_block");
    const currentSlide2 = slider2.getElementsByClassName("current_slide");

    currentSlide2[0].classList.remove("current_slide");
    if (slideNumber2 == slides2.length - 1) {
      slideNumber2 = 0;
    } else {
      slideNumber2 += 1;
    }
    slides2[slideNumber2].classList.add("current_slide");
  };

  const prevSlide2 = () => {
    const slider2 = document.getElementById("slider_main");
    const slides2 = slider2.getElementsByClassName("slide_block");
    const currentSlide2 = slider2.getElementsByClassName("current_slide");

    currentSlide2[0].classList.remove("current_slide");
    if (slideNumber2 == 0) {
      slideNumber2 = slides2.length - 1;
    } else {
      slideNumber2 -= 1;
    }
    slides2[slideNumber2].classList.add("current_slide");
  };

  const pagination = () => {};
  const pagination2 = () => {};
};
