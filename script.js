// Wait for typing (2s) + 1s pause = 3s total
setTimeout(() => {
  const splash = document.getElementById('splash-screen');
  splash.classList.add('fade-out');

  // Optional: remove from DOM after fade
  setTimeout(() => splash.remove(), 1000);
}, 3000); // 3 seconds

  document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = encodeURIComponent(`*${document.getElementById("name").value}*`);
      const email = encodeURIComponent(`*${document.getElementById("email").value}*`);
      const message = encodeURIComponent(`*${document.getElementById("message").value}*`);

const whatsappMessage = `Hello Steaze Analytics,%0AMy name: ${name}%0AMy email: ${email}%0AMessage: ${message}`;
const whatsappURL = `https://wa.me/254706867627?text=${whatsappMessage}`;

window.open(whatsappURL, "_blank");

    });