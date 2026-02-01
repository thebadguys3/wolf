document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     Human-like Typing Effect Function
  ================================== */
  function typeEffect(element, text, nextButton = null, cardElement = null, animationClass = null) {
    element.textContent = ""; // clear previous text
    let index = 0;

    // Disable next button while typing
    if (nextButton) nextButton.disabled = true;

    // Add animation class if provided
    if (cardElement && animationClass) {
      cardElement.classList.add(animationClass);
    }

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;

        // Human-like pauses
        let delay = 40;
        const char = text.charAt(index - 1);

        if (char === "." || char === "!" || char === "?") delay = 400;
        else if (char === "," || char === "—") delay = 200;
        else if (char === "\n") delay = 300;
        else if (/[\u{1F600}-\u{1F64F}]/u.test(char)) delay = 500; // emoji pause

        setTimeout(type, delay);
      } else {
        // Enable next button when typing is done
        if (nextButton) nextButton.disabled = false;

        // Remove animation class when typing finishes
        if (cardElement && animationClass) {
          cardElement.classList.remove(animationClass);
        }
      }
    }

    type();
  }

  /* ===============================
     Typing Effect for Intro
  ================================== */
  const typingText = "Hey Gia... Welcome i have been waiting for you🤫 I have alot to tell you about yourself, click next and see what i have for you!!";
  const typingElement = document.getElementById("typing");
  let typingIndex = 0;

  function typeIntro() {
    if (typingIndex < typingText.length) {
      typingElement.textContent += typingText.charAt(typingIndex);
      typingIndex++;

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
        "I know you’re probably freaking out right now.\n\n" +
        "Seeing your name pop up like that wasn’t an accident. I know who you are.\n" +
        "I know the little things, the way you smile when you’re excited, " +
        "the way you pretend you’re not paying attention when you are,\n" +
        "And times when you can't say no to people.\n\n" +
        "And before you start panicking…\n" +
        "no, this isn’t creepy.\n\n" +
        "It’s intentional Gianttha!!\n\n" +
        "Just keep going.",
      nextBtn,
      middle,
      "animate-middle"
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
        "You’re still here Gia.\n\n" +
        "That means curiosity won.\n\n" +
        "Good!!.\n\n" +
        "Because this didn’t come together randomly.\n" +
        "Every word, every click, every second you’ve spent here on your phone\n" +
        "is planned.\n\n" +
        "I knew you’d keep going.\n" +
        "I knew you wouldn’t close it.\n\n" +
        "You might be wondering how far this goes…\n" +
        "what I know,\n" +
        "what I noticed,\n" +
        "and why you specifically ended up here.\n\n" +
        "Don’t worry\n" +
        "you’re safe.\n\n" +
        "But you are exactly where you’re supposed to be.",
      suspenseNextBtn,
      suspense,
      "animate-suspense"
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
        "At this point you’re probably asking yourself a lot of questions.\n\n" +
        "Who made this?\n" +
        "Why me?\n" +
        "Should I be concerned?\n\n" +
        "Relax. Breathe Gia.\n\n" +
        "Nothing bad is about to happen if you trust the process.\n\n" +
        "In fact…\n" +
        "something really nice might happen.\n\n" +
        "This whole thing exists for one simple reason\n" +
        "and you’re about to find out what it is.",
      reassureNextBtn,
      reassure,
      "animate-reassure"
    );
  });

 /* ===============================
   Reassurance → Question Card
================================== */
reassureNextBtn.addEventListener("click", () => {
  reassure.classList.add("hidden");
  question.classList.remove("hidden");
  hearts.classList.remove("hidden");

  const valentineHeading = document.getElementById("valentineQuestion");
  valentineHeading.textContent = ""; // clear it first

  // First: type paragraph
  typeEffect(
    questionText,
    "All of this was never meant to scare you.\n\n" +
    "It was just my way of getting your attention—\n" +
    "of slowing you down for a moment\n" +
    "and letting you know that you matter more than you probably realize.\n\n" +
    "I made this because I wanted to tell you something very important!!\n\n" +
    "And because I was hoping you’d say yes to one simple thing....",
    null,
    question,
    null,
    () => { // callback after paragraph typing finishes
      // Now type the h2 heading
      typeEffect(
        valentineHeading,
        "Will you be my Valentine? 💖",
        null,
        question,
        null
      );
    }
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
