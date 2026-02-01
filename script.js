document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     Typing Effect Function
  ================================== */
  function typeEffect(element, text, nextBtn = null, card = null, animateClass = null, callback = null) {
    element.textContent = "";
    if (card && animateClass) card.classList.add(animateClass);

    let i = 0;

    function type() {
      if (i < text.length) {
        const char = text.charAt(i);
        element.textContent += char;
        i++;

        // natural pauses
        let delay = 80; // default
        if (char === "." || char === "!" || char === "?") delay = 400;
        if (char === "," || char === ";") delay = 200;
        if (char === "\n") delay = 400;
        if (/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}]/u.test(char)) delay = 500; // emoji pause

        setTimeout(type, delay);
      } else {
        if (nextBtn) nextBtn.disabled = false;
        if (callback) callback();
      }
    }

    if (nextBtn) nextBtn.disabled = true;
    type();
  }

  /* ===============================
     Element References
  ================================== */
  const intro = document.getElementById("intro");
  const middle = document.getElementById("middle");
  const suspense = document.getElementById("suspense");
  const reassure = document.getElementById("reassure");
  const question = document.getElementById("question");
  const success = document.getElementById("success");

  const typingElement = document.getElementById("typing");
  const middleText = document.getElementById("middleText");
  const suspenseText = document.getElementById("suspenseText");
  const reassureText = document.getElementById("reassureText");
  const questionText = document.getElementById("questionText");
  const valentineHeading = document.getElementById("valentineQuestion");
  const step3Text = document.getElementById("step3Text");

  const openBtn = document.getElementById("openBtn");
  const nextBtn = document.getElementById("nextBtn");
  const suspenseNextBtn = document.getElementById("suspenseNextBtn");
  const reassureNextBtn = document.getElementById("reassureNextBtn");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const hearts = document.querySelector(".hearts");

  // Hide Yes/No buttons initially
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  /* ===============================
     Intro Card Typing
  ================================== */
  const introText = "Hey Gia... Welcome i have been waiting for you🤫 I have a lot to tell you about yourself, click next and see what I have for you!!";
  typeEffect(typingElement, introText, openBtn, intro);

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
     Middle Next → Show Suspense Card
  ================================== */
  nextBtn.addEventListener("click", () => {
    middle.classList.add("hidden");
    suspense.classList.remove("hidden");

    typeEffect(
      suspenseText,
      "You’re still here Gia.\n\n" +
      "That means curiosity won.\n\n" +
      "Good!!\n\n" +
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
     Suspense Next → Show Reassurance Card
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

    valentineHeading.textContent = "";
    step3Text.textContent = "";
    step3Text.classList.add("hidden"); // hide initially
    hearts.classList.add("hidden"); // hide hearts initially
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Step 1: type main paragraph
    typeEffect(
      questionText,
      "All of this was never meant to scare you.\n\n" +
      "It was just my way of getting your attention\n" +
      "of slowing you down for a moment\n" +
      "and letting you know that you matter more than you probably realize.\n\n" +
      "I made this because I wanted to tell you something very important!!\n\n" +
      "And because I was hoping you’d say yes to one simple thing....",
      null,
      question,
      null,
      () => {
        // Step 2: type H2 heading
        typeEffect(
          valentineHeading,
          "Will you be my Valentine? 🌹💕♥💘❤",
          null,
          null,
          null,
          () => {
            // Step 3: type small paragraph
            step3Text.classList.remove("hidden");
            typeEffect(
              step3Text,
              "I know it’s your sister’s wedding on that day, so if you do say yes we will celebrate it after her wedding",
              null,
              null,
              null,
              () => {
                // Show Yes/No buttons only after Step 3 finishes typing
                yesBtn.style.display = "inline-block";
                noBtn.style.display = "inline-block";
                hearts.classList.remove("hidden"); // show hearts now
              }
            );
          }
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
     YES Button → Success + Confetti
  ================================== */
  yesBtn.addEventListener("click", () => {
    hearts.classList.add("hidden");
    question.classList.add("hidden");
    success.classList.remove("hidden");
    launchConfetti();
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
