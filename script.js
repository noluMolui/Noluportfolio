 document.addEventListener("DOMContentLoaded", () => {
  // Nav link hover effect
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.classList.add("drop-shadow-glow");
    });
    link.addEventListener("mouseleave", () => {
      link.classList.remove("drop-shadow-glow");
    });
  });

  
  function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) return "🌞 Rise and shine! Let's make today amazing.";
    if (hour < 18) return "🌤️ Hope your day’s going great! Keep pushing!";
    if (hour < 22) return "🌙 Evening vibes in full swing. You've earned some rest.";
    return "🌌 Burning the midnight oil? You're unstoppable!";
  }

  function updateGreeting() {
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) greetingEl.textContent = getGreeting();
  }
 updateGreeting();
  setInterval(updateGreeting, 60000);

  
  const form = document.getElementById("contact-form");
  const msgBox = document.getElementById("success-msg") || document.getElementById("error-msg");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formspree.io/f/xnnvvzwo", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          form.reset();
          msgBox.classList.remove("hidden", "text-red-600");
          msgBox.classList.add("text-green-500");
          msgBox.textContent = "Message sent successfully!";
        } else {
          throw new Error();
        }
      } catch {
        msgBox.classList.remove("hidden", "text-green-500");
        msgBox.classList.add("text-red-600");
        msgBox.textContent = "There was an error. Please try again.";
      }
    });
  }
});



  