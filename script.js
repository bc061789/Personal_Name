function pad2(n) {
  return String(n).padStart(2, "0");
}

function updateTime() {
  const now = new Date();

  const hh = pad2(now.getHours());
  const mm = pad2(now.getMinutes());
  const ss = pad2(now.getSeconds());

  const clockEl = document.getElementById("clock");
  const dateEl = document.getElementById("date");

  if (clockEl) clockEl.textContent = `${hh}:${mm}:${ss}`;
  if (dateEl) {
    // Example: Wednesday, February 25, 2026
    const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
    const month = now.toLocaleDateString("en-US", { month: "long" });
    const day = now.toLocaleDateString("en-US", { day: "2-digit" });
    const year = now.toLocaleDateString("en-US", { year: "numeric" });
    dateEl.textContent = `${weekday}, ${month} ${day}, ${year}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Fade-in card
  const card = document.getElementById("card");
  if (card) requestAnimationFrame(() => card.classList.add("visible"));

  updateTime();
  setInterval(updateTime, 1000);
});
