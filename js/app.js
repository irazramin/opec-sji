window.onload = function () {
  const menuBarBtn = document.getElementById("menu-bar");
  const closeBtn = document.querySelector(".nav-toggler");
  const nav = document.querySelector(".navbar");
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const portfolioNextBtn = document.querySelector(".portfolio-next-btn");
  const portfolioPrevBtn = document.querySelector(".portfolio-prev-btn");

  const nameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const numberInput = document.getElementById("number");
  const messageInput = document.getElementById("message");
  const form = document.getElementById("form");
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

  form.onsubmit = (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const number = numberInput.value;
    const message = messageInput.value;

    if (name === "") {
      nameInput.classList.add("error");
    }
    if (email === "") {
      emailInput.classList.add("error");
    }
    if (number === "") {
      numberInput.classList.add("error");
    }
    if (message === "") {
      messageInput.classList.add("error");
    } else {
      nameInput.classList.remove("error");
      emailInput.classList.remove("error");
      numberInput.classList.remove("error");
      messageInput.classList.remove("error");
    }

    console.log("Form Submitted");
    e.target.reset();
  };

  window.addEventListener("load", () => {
    moveSlider();
  });
};
