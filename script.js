const typingText = "Heyy Honey(Gia) I built something just for you 💖😉";
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const question = document.getElementById("question");
const success = document.getElementById("success");

openBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  question.classList.remove("hidden");
});

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById("yesBtn").addEventListener("click", () => {
  question.classList.add("hidden");
  success.classList.remove("hidden");
});
