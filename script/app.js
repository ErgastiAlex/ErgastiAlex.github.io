const burger = document.querySelector(".burger");
const topS = burger.querySelector("#top");
const middleS = burger.querySelector("#middle");
const bottomS = burger.querySelector("#bottom");
const nav = document.querySelector(".main-nav__link");
const ul = nav.querySelectorAll("li");

burger.addEventListener("click", toggle);
ul.forEach(li => {
  li.addEventListener("click", toggle);
});

function toggle() {
  topS.classList.toggle("toggle-tb");
  bottomS.classList.toggle("toggle-tb");
  middleS.classList.toggle("toggle-m");
  nav.classList.toggle("main-nav__toggle");
}
