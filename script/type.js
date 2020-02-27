const TypeWrite = function(words, element, wait = 3000) {
  this.txt = ""; //Parola
  this.words = words;
  this.isDeleting = false;
  this.element = element;
  this.wordIndex = 0;
  this.wait = wait;
  this.type();
};

TypeWrite.prototype.type = function() {
  const current = this.wordIndex % this.words.length;

  const fullTxt = this.words[current];

  if (this.isDeleting) {
    //Metto in txt un carattere in meno
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //Add new char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  typeSpeed = this.isDeleting ? 150 : 300;

  if (this.txt.length == fullTxt.length && this.isDeleting == false) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.txt.length == 0 && this.isDeleting) {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }

  if (this.txt.length == 0) {
    //To not make pop everything
    this.element.style.visibility = "hidden";
  } else {
    this.element.style.visibility = "visible";
    this.element.innerHTML = this.txt;
  }

  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", () => {
  let p = document.querySelectorAll(".type-writer");
  for (let i = 0; i < p.length; i++) {
    let words = JSON.parse(p[i].getAttribute("data-words"));
    let wait = p[i].getAttribute("data-wait");
    new TypeWrite(words, p[i], wait); //When you make new it do this.type() automatically
  }
});
