// window.onload = function () {
//   const nextBtn3 = document.getElementById("next_meen");
//   const prevBtn3 = document.getElementById("prev_meen");

//   nextBtn3.addEventListener("click", function () {
//     pagination3();
//     nextSlide3();
//   });
//   prevBtn3.addEventListener("click", function () {
//     pagination3();
//     prevSlide3();
//   });
// };
// let slideNumber3 = 0;
// const nextSlide3 = () => {
//   const slider3 = document.getElementById("slider_meen");
//   const slides3 = slider3.getElementsByClassName("slide_meen");
//   const currentSlide3 = slider3.getElementsByClassName("current_meen");
//   console.log(slider3);
//   currentSlide3[0].classList.remove("current_meen");
//   if (slideNumber3 == slides3.length - 1) {
//     slideNumber3 = 0;
//   } else {
//     slideNumber3 += 1;
//   }
//   slides3[slideNumber3].classList.add("current_meen");
// };
// const prevSlide3 = () => {
//   const slider3 = document.getElementById("slider_meen");
//   const slides3 = slider3.getElementsByClassName("slide_meen");
//   const currentSlide3 = slider3.getElementsByClassName("current_meen");

//   currentSlide3[0].classList.remove("current_meen");
//   if (slideNumber3 == 0) {
//     slideNumber3 = slides3.length - 1;
//   } else {
//     slideNumber3 -= 1;
//   }
//   slides3[slideNumber3].classList.add("current_meen");
// };

// const pagination3 = () => {};
window.onload = function () {
  const nextBtn = document.getElementById("next");
  const nextBtn2 = document.getElementById("btn_next");
  const prevBtn2 = document.getElementById("btn_prev");
  const nextBtn3 = document.getElementById("next_meen");
  const prevBtn3 = document.getElementById("prev_meen");

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

  nextBtn3.addEventListener("click", function () {
    pagination3();
    nextSlide3();
  });

  prevBtn3.addEventListener("click", function () {
    pagination3();
    prevSlide3();
  });

  let slideNumber = 0;
  let slideNumber2 = 0;
  let slideNumber3 = 0;

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

  const nextSlide3 = () => {
    const slider3 = document.getElementById("slider_meen");
    const slides3 = slider3.getElementsByClassName("slide_meen");
    const currentSlide3 = slider3.getElementsByClassName("current_meen");

    currentSlide3[0].classList.remove("current_meen");
    if (slideNumber3 == slides3.length - 1) {
      slideNumber3 = 0;
    } else {
      slideNumber3 += 1;
    }
    slides3[slideNumber3].classList.add("current_meen");
  };

  const prevSlide3 = () => {
    const slider3 = document.getElementById("slider_meen");
    const slides3 = slider3.getElementsByClassName("slide_meen");
    const currentSlide3 = slider3.getElementsByClassName("current_meen");

    currentSlide3[0].classList.remove("current_meen");
    if (slideNumber3 == 0) {
      slideNumber3 = slides3.length - 1;
    } else {
      slideNumber3 -= 1;
    }
    slides3[slideNumber3].classList.add("current_meen");
  };
  const pagination = () => {};
  const pagination2 = () => {};
  const pagination3 = () => {};
};
