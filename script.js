var tema = document.getElementById("tema");

tema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

var cotemig = document.getElementById("card2");
var dialog = document.querySelector("dialog");
var fechar = document.getElementById("fechar");

cotemig.addEventListener("click", () => {
  dialog.showModal();
});

fechar.addEventListener("click", () => {
  dialog.close();
});

const text = [
  "Desenvolvedor Front-End",
  "Implantador de Sistema",
  "Editor de video",
];
let index = 0;
let charIndex = 0;
const typeSpan = document.getElementById("type");
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetweenWords = 1000;

function type() {
  if (charIndex < text[index].length) {
    typeSpan.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    typeSpan.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 800);
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // remove para repetir ao subir/ descer
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((element) => observer.observe(element));
