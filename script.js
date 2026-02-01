/* ===============================
   Typing Effect (Intro)
================================ */
const typingText = "Hey… I built something just for you 💖";
const typingElement = document.getElementById("typing");
let typingIndex = 0;

function typeEffect() {
  if (typingIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();

/* ===============================
   Element References
================================ */
const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const question = document.getElementById("question");
const success = document.getElementById("success");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hearts = document.querySelector(".hearts");

/* ===============================
   Open Envelope → Show Question
================================ */
openBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  question.classList.remove("hidden");
  hearts.classList.remove("hidden"); // 💖 show hearts
});

/* ===============================
   NO Button Runs Away 😅
================================ */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* ===============================
   YES Button → Success + Confetti
================================ */
yesBtn.addEventListener("click", () => {
  hearts.classList.add("hidden"); // hide hearts
  question.classList.add("hidden");
  success.classList.remove("hidden");
  launchConfetti();
});

/* ===============================
   Confetti Function 🎉
================================ */
function launchConfetti() {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
