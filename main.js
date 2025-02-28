document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("backsound");
  audio.volume = 0.5;
  
  const playAudio = () => {
    audio.play().catch(error => {
      console.log("Autoplay dicegah oleh browser. Menunggu interaksi pengguna.");
    });
  };
  
  playAudio();
  
  document.addEventListener("click", playAudio, { once: true });
  document.addEventListener("touchstart", playAudio, { once: true });
});