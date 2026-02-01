document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     Human-like Typing Effect Function
  ================================== */
  function typeEffect(element, text) {
    element.textContent = ""; // clear previous text
    let index = 0;

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;

        // Add human-like pauses
        let delay = 40; // base typing speed

        const char = text.charAt(index - 1);
        if (char === "." || char === "!" || char === "?") delay = 400; // long pause after sentences
        else if (char === "," || char === "—") delay = 200; // medium pause for commas
        else if (char === "\n") delay = 300; // pause for line breaks
        else if (/[\u{1F600}-\u{1F64F}]/u.test(char)) delay = 500; // pause for emojis

        setTimeout(type, delay);
      }
    }

    type();
  }

  /* ===============================
     Typing Effect for Intro
  ================================== */
  const typingText = "Hey Gia😁... I built something just for you:👀😉";
  const typingElement = document.getElementById("typing");
  let typingIndex = 0;

  function typeIntro() {
    if (typingIndex < typingText.length) {
      typingElement.textContent += typingText.charAt(typingIndex);
      typingIndex++;

      // Simple pauses for intro
      let delay = 80;
      const char = typingText.charAt(typingIndex - 1);
      if (char === "." || char === "!") delay = 400;
      else if (char === ",") delay = 200;

      setTimeout(typeIntro, delay);
    }
  }

  typeIntro();

  /* ===============================
     Element References
  ================================== */
  const openBtn = document.getElementById("openBtn");
  const nextBtn = document.getElementById("nextBtn");
  const suspenseNextBtn = document.getElementById("suspenseNextBtn");
  const reassureNextBtn = document.getElementById("reassureNextBtn");

  const intro = document.getElementById("intro");
  const middle = document.getElementById("middle");
  const suspense = document.getElementById("suspense");
  const reassure = document.getElementById("reassure");
  const question = document.getElementById("question");
  const success = document.getElementById("success");

  const middleText = document.getElementById("middleText");
  const suspenseText = document.getElementById("suspenseText");
  const reassureText = document.getElementById("reassureText");
  const questionText = document.getElementById("questionText");
  const successText = document.getElementById("successText");

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const hearts = document.querySelector(".hearts");

  /* ===============================
     Open Button → Show Middle Card
  ================================== */
  openBtn.addEventListener("click", () => {
    intro.classList.add("hidden");
    middle.classList.remove("hidden");
    typeEffect(
      middleText,
      "I know this is wild 😅\n\nBut hear me out for just a second…"
    );
  });

  /* ===============================
     Middle → Suspense Card
  ================================== */
  nextBtn.addEventListener("click", () => {
    middle.classList.add("hidden");
    suspense.classList.remove("hidden");
    typeEffect(
      suspenseText,
      "You’re still here. That means curiosity won. 😏\n\nEvery word, every click, every second you’ve spent here—planned.\n\nYou might be wondering how far this goes, what I know, and why you’re here.\n\nDon’t worry—you’re exactly where you’re supposed to be."
    );
  });

  /* ===============================
     Suspense → Reassurance Card
  ================================== */
  suspenseNextBtn.addEventListener("click", () => {
    suspense.classList.add("hidden");
    reassure.classList.remove("hidden");
    typeEffect(
      reassureText,
      "Please don’t worry, you are safe with me 💖\n\nJust click next and you’ll see…"
    );
  });

  /* ===============================
     Reassurance → Question Card
  ================================== */
  reassureNextBtn.addEventListener("click", () => {
    reassure.classList.add("hidden");
    question.classList.remove("hidden");
    hearts.classList.remove("hidden");
    typeEffect(
      questionText,
      "I know this is a little silly 😅\n\nBut I wanted to ask you in a way that’s very *me*…"
    );
  });

  /* ===============================
     NO Button Runs Away
  ================================== */
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  /* ===============================
     YES Button → Success + Confetti + Typing
  ================================== */
  yesBtn.addEventListener("click", () => {
    hearts.classList.add("hidden");
    question.classList.add("hidden");
    success.classList.remove("hidden");

    // Launch confetti immediately
    launchConfetti();

    // Start human-like typing for success
    typeEffect(
      successText,
      "I was really hoping you’d say yes 💘\n\nHappy Valentine’s 💖"
    );
  });

  /* ===============================
     Confetti Function
  ================================== */
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

});
