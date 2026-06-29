// Avatar preview
document.getElementById("avatarInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    document.getElementById("avatarPreview").src = e.target.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  }
});

// Start game
function startGame() {
  const name = document.getElementById("name").value;
  const goal = document.getElementById("goal").value;

  if (name === "") {
    alert("Entre ton nom !");
    return;
  }

  // Sauvegarde simple (localStorage)
  const player = {
    name: name,
    goal: goal,
    xp: 0,
    level: 1,
    rank: "F"
  };

  localStorage.setItem("player", JSON.stringify(player));

  alert("Profil créé ! Ton aventure commence 🔥");

  // redirection (tu pourras créer dashboard.html après)
  window.location.href = "dashboard.html";
}
