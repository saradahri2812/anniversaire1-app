/* =========================================
   PAGE 1 : VÉRIFIER LE NOM
========================================= */
function verifier() {
  const input = document.getElementById("nom");
  const error = document.getElementById("error");

  if (!input) return;

  const nom = input.value.trim().toLowerCase();

  if (nom === "rawan" || nom === "روان") {
    window.location.href = "page2.html";
  } else {
    error.textContent = "❌ المرجو إدخال الاسم الصحيح";
  }
}

/* =========================================
   PAGE 2 : MUSIQUE YOUTUBE AUTO
========================================= */

const music = document.getElementById("music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}


