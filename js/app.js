window.onload = function () {
  const menuBarBtn = document.getElementById("menu-bar");
  const closeBtn = document.querySelector(".nav-toggler");
  const nav = document.querySelector(".navbar");
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const portfolioNextBtn = document.querySelector(".portfolio-next-btn");
  const portfolioPrevBtn = document.querySelector(".portfolio-prev-btn");
  let count = 0;

  menuBarBtn.addEventListener("click", () => {
    nav.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
  });

  portfolioNextBtn.addEventListener("click", () => {
    count++;

    moveSlider(sliderWrapper);

    if (count === 2) {
      count = -1;
    }
  });

  portfolioPrevBtn.addEventListener("click", () => {
    if (count === -1) {
      count = 2;
    }

    count--;

    moveSlider(sliderWrapper);
  });

  function moveSlider(slider) {
    slider.style.transform = `translateX(-${count * 100}%)`;
  }

  window.addEventListener("load", () => {
    moveSlider();
  });
};
