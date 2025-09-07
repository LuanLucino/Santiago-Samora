let currentAudio;

function playSound(nome) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(`assets/audio/${nome}.mp3`);
  currentAudio.play();
}
