/* ================= COUNTDOWN ================= */

// PLACEHOLDER DATE (update easily)
const weddingDate = new Date("2026-09-14T16:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    clearInterval(timer);
    return;
  }

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerText =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("minutes").innerText =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("seconds").innerText =
    Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

/* ================= MUSIC CONTROL ================= */

const music = document.getElementById("music-player");
const toggle = document.getElementById("music-toggle");

toggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggle.innerText = "⏸";
  } else {
    music.pause();
    toggle.innerText = "▶";
  }
});

/* ================= SHARE PLACEHOLDER ================= */

document.getElementById("share-btn").addEventListener("click", () => {
  alert("share functionality placeholder");
});
