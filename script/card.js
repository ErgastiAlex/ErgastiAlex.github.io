const cards = document.querySelectorAll(".experience__card-container");
let pxDim = parseInt(getComputedStyle(document.body).fontSize);

//Create the element for the card effect
let stackCard = function(element) {
  this.element = element;
  this.items = element.getElementsByClassName("experience__card"); //All Child
  this.scrollingListener = false; //Contain the scroll listener
  this.scrolling = false;
  new initStackCardEffect(this);
};

//For each card section create stackCard animation
for (let i = 0; i < cards.length; i++) {
  new stackCard(cards[i]);
}

function initStackCardEffect(element) {
  element.element.style.paddingBottom = element.items.length * 3 + "rem";
  let observer = new IntersectionObserver(stackCardCallback.bind(element));
  observer.observe(element.element);
}
function stackCardCallback(entries) {
  let entry = entries[0];
  if (entry.isIntersecting) {
    if (this.scrollingListener) return;
    AddScrollEvent(this);
  } else {
    if (this.scrollingListener == false) return;
    window.removeEventListener("scroll", this.scrollingListener);
    this.scrollingListener = false;
  }
}

function AddScrollEvent(element) {
  element.scrollingListener = callCardAnimation.bind(element);
  window.addEventListener("scroll", element.scrollingListener);
}
function callCardAnimation() {
  if (this.scrolling) return;
  this.scrolling = true;
  //request an animation Frame to do the Animate
  window.requestAnimationFrame(Animate.bind(this));
}

function Animate() {
  //Where is the top of the cards section
  let top = this.element.getBoundingClientRect().top;

  for (let i = 0; i < this.items.length; i++) {
    let scrolling =
      3 * pxDim - top - i * (this.items[i].clientHeight + 3 * pxDim);

    //Totally random
    let scale =
      (this.items[i].clientHeight - scrolling * 0.05) /
      this.items[i].clientHeight;

    //if top is 0->No scrolling
    if (scrolling > 0 && top != 0) {
      this.items[i].style.transform =
        "scale(" + scale + ") translateY(" + 3 * i + "rem)";
    } else {
      this.items[i].style.transform = "translateY(" + 3 * i + "rem)";
    }
    this.scrolling = false;
  }
}
