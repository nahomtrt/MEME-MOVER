let movementInterval;

function startMoving() {
  document.getElementById("startBtn").disabled = true;
  document.getElementById("stopBtn").disabled = false;

  movementInterval = setInterval(() => {
    const memeImage = document.getElementById("memeImage");
    
    const randomTop = Math.floor(Math.random() * (window.innerHeight - memeImage.height));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - memeImage.width));
    
    memeImage.style.top = `${randomTop}px`;
    memeImage.style.left = `${randomLeft}px`;
  }, 500);
}

function stopMoving() {
  clearInterval(movementInterval);

  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
}
