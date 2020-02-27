const bornDate = new Date(1999, 12, 25);
const targetDate = new Date();

document.addEventListener("DOMContentLoaded", () => {
  let p = document.querySelector("#eta");
  p.innerHTML = parseInt(
    Math.abs(bornDate - targetDate) / (1000 * 60 * 60 * 24 * 365)
  );
});
