function toggleAudio() {
  const audio = document.getElementById('ambience');
  const icon = document.getElementById('audio-toggle');
  if (audio.paused) {
    audio.play();
    icon.textContent = '🔈';
  } else {
    audio.pause();
    icon.textContent = '🔇';
  }
}