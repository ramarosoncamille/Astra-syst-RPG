//=========================================
// ASTRA RPG
//=========================================

let avatarBase64 = "";

//=========================================
// PREVISUALISATION AVATAR
//=========================================

const avatarInput = document.getElementById("avatarInput");

if (avatarInput) {

    avatarInput.addEventListener("change", function (event) {

        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            avatarBase64 = e.target.result;

            document.getElementById("avatarPreview").src = avatarBase64;

        };

        reader.readAsDataURL(file);

    });

}

//=========================================
// CREATION DU PROFIL
//=========================================

function startGame() {

    const name = document.getElementById("name").value.trim();

    const goal = document.getElementById("goal").value.trim();

    if (name === "") {

        alert("Entre ton nom !");

        return;

    }

    const player = {

        name: name,

        goal: goal,

        avatar: avatarBase64,

        xp: 0,

        rank: "F",

        intelligence: 1,

        health: 1,

        discipline: 1,

        finance: 1,

        social: 1,

        creativity: 1,

        productivity: 1,

        life: 1

    };

    localStorage.setItem("player", JSON.stringify(player));

    window.location.href = "dashboard.html";

}

//=========================================
// CHARGEMENT DU DASHBOARD
//=========================================

function loadDashboard() {

    const player = JSON.parse(localStorage.getItem("player"));

    if (!player) return;

    if(document.getElementById("playerName"))
        document.getElementById("playerName").textContent = player.name;

    if(document.getElementById("playerGoal"))
        document.getElementById("playerGoal").textContent = player.goal;

    if(document.getElementById("playerXP"))
        document.getElementById("playerXP").textContent = player.xp;

    if(document.getElementById("playerRank"))
        document.getElementById("playerRank").textContent = player.rank;

    if(player.avatar != "" && document.getElementById("playerAvatar"))
        document.getElementById("playerAvatar").src = player.avatar;

    if(document.getElementById("intelLv"))
        document.getElementById("intelLv").textContent = "Lv." + player.intelligence;

    if(document.getElementById("healthLv"))
        document.getElementById("healthLv").textContent = "Lv." + player.health;

    if(document.getElementById("disciplineLv"))
        document.getElementById("disciplineLv").textContent = "Lv." + player.discipline;

    if(document.getElementById("financeLv"))
        document.getElementById("financeLv").textContent = "Lv." + player.finance;

    if(document.getElementById("socialLv"))
        document.getElementById("socialLv").textContent = "Lv." + player.social;

    if(document.getElementById("creativityLv"))
        document.getElementById("creativityLv").textContent = "Lv." + player.creativity;

    if(document.getElementById("productivityLv"))
        document.getElementById("productivityLv").textContent = "Lv." + player.productivity;

    if(document.getElementById("lifeLv"))
        document.getElementById("lifeLv").textContent = "Lv." + player.life;

}

//=========================================
// EXECUTION AUTOMATIQUE
//=========================================

document.addEventListener("DOMContentLoaded", function () {

    loadDashboard();

});
