document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("click.mp3");
  
    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        audio.play();
      });
    });
  });
  