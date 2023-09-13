// Créer la logique de compte à rebours
let totalSeconds;
let interval;

let countDown = () => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  let sec;
  if (seconds < 10) {
        sec = "0" + seconds;

  } else {
        sec = seconds;
  }

  countdownDisplay.textContent = minutes + " : " + sec;
  totalSeconds--;
  clearInterval(interval);
};

// Créer un événement à la validation du form pour lancer le compte à rebours
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Veuillez entrer un chiffre");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    interval = setInterval(countDown, 100);
  }
});
