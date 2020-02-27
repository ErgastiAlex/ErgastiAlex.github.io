document.addEventListener("DOMContentLoaded", () => {
  let items = document.querySelectorAll(".fadeIn");
  for (let i = 0; i < items.length; i++) {
    let threshold = items[i].getAttribute("data-threshold");
    let observer = new IntersectionObserver(FadeIn, {
      threshold: parseFloat(threshold)
    });
    observer.observe(items[i]);
  }
});

function FadeIn(entities) {
  entities.forEach(entity => {
    if (entity.isIntersecting) {
      entity.target.classList.add("fadeIn__show");
    } else {
      entity.target.classList.remove("fadeIn__show");
    }
  });
}
