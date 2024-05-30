window.onload = function () {
  const menuBarBtn = document.getElementById("menu-bar");
  const closeBtn = document.querySelector(".nav-toggler");
  const nav = document.querySelector(".navbar");
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const portfolioNextBtn = document.querySelector(".portfolio-next-btn");
  const portfolioPrevBtn = document.querySelector(".portfolio-prev-btn");
  const portfolioImage = document.querySelector(".portfolio img");
  let count = 0;

  menuBarBtn.addEventListener("click", () => {
    nav.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    console.log("clicked");
    nav.classList.remove("active");
  });

  portfolioNextBtn.addEventListener("click", () => {
    count++;

    console.log("count", count);
    moveSlider();
    if (count === 2) {
      count = -1;
    }

    console.log(portfolioImage.offsetWidth);
  });

  portfolioPrevBtn.addEventListener("click", () => {
    if (count === -1) {
      count = 2;
    }

    count--;
    console.log("count", count);

    moveSlider();
  });

  function moveSlider() {
    sliderWrapper.style.transform = `translateX(-${count * 100}%)`;
  }

  // Wait for images to load
  window.addEventListener("load", () => {
    moveSlider(); // Call moveSlider after images have loaded to get accurate width
  });
};
