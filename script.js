// Wait for typing (2s) + 1s pause = 3s total
setTimeout(() => {
  const splash = document.getElementById('splash-screen');
  splash.classList.add('fade-out');

  // Optional: remove from DOM after fade
  setTimeout(() => splash.remove(), 1000);
}, 3000); // 3 seconds

 