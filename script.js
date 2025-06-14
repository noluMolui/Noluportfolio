 

    document.addEventListener('DOMContentLoaded', () => {
    
      document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('mouseenter', () => {
          link.classList.add('drop-shadow-glow');
        });
        link.addEventListener('mouseleave', () => {
          link.classList.remove('drop-shadow-glow');
        });
      });

      // Animation on project image click
      document.querySelectorAll('.project-card img').forEach(img => {
        img.addEventListener('click', () => {
          img.classList.add('animate-pop');
          setTimeout(() => img.classList.remove('animate-pop'), 300);
        });
      });
    });

    function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning ☀️";
    if (hour < 18) return "Good afternoon 🌤️";
    if (hour < 22) return "Good evening 🌙";
    return "Up late? 🌌";
  }

  function updateGreeting() {
    document.getElementById("greeting").textContent = getGreeting();
  }

  updateGreeting();
  setInterval(updateGreeting, 60000); // refresh every minute

  const audio = document.getElementById("lofiAudio");
  const toggleBtn = document.getElementById("vibeToggle");

  toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      toggleBtn.textContent = "Pause the vibe 🎧";
    } else {
      audio.pause();
      toggleBtn.textContent = "Play some chill 🎧";
    }
  });
 
 
 
 const form = document.getElementById("contact-form");
    const successMsg = document.getElementById("success-msg");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formspree.io/f/yourFormID", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          form.reset();
          successMsg.classList.remove("hidden");
        } else {
          alert("There was an error. Please try again.");
        }
      } catch (error) {
        alert("Error sending message.");
      }
    });