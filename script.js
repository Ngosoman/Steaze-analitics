// Wait for typing (2s) + 1s pause = 3s total
setTimeout(() => {
  const splash = document.getElementById('splash-screen');
  splash.classList.add('fade-out');

  // Optional: remove from DOM after fade
  setTimeout(() => splash.remove(), 1000);
}, 3000); // 3 seconds

  document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const phoneNumber = "254706867627";
      const whatsappMessage = `Hello Steaze Analytics,%0A*My name:* ${name}%0A*My email:* ${email}%0A*Message:* ${message}`;

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
      window.open(whatsappURL, "_blank");
    });