let items = document.querySelectorAll(".item");
let dots = document.querySelectorAll(".dot");

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let number = document.querySelector(".number");

let active = 0;

function updateSlider() {
  items.forEach((item) => item.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  items[active].classList.add("active");
  dots[active].classList.add("active");

  number.innerHTML = "0" + (active + 1);
}

next.onclick = () => {
  active++;

  if (active >= items.length) {
    active = 0;
  }

  updateSlider();
};

prev.onclick = () => {
  active--;

  if (active < 0) {
    active = items.length - 1;
  }

  updateSlider();
};

function scrollPara(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}