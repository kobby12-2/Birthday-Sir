window.addEventListener("load", () => {
    const welcomeAudio = document.getElementById("welcome-audio");
  
    // Reset audio to the start on each load
    welcomeAudio.currentTime = 0;
  
    // Try to play the audio and unmute it if autoplay is allowed
    welcomeAudio.play().then(() => {
      welcomeAudio.muted = false; // Unmute the audio after it starts
    }).catch(error => {
      console.log("Autoplay failed; user interaction may be required:", error);
    });
  });
  
  function showMessage() {
    const messageElement = document.getElementById("message");
    const welcomeAudio = document.getElementById("welcome-audio");
    const birthdayAudio = document.getElementById("birthday-audio");
  
    if (messageElement.style.display === "block") {
      messageElement.style.display = "none";
      messageElement.classList.remove("animate-message");
      birthdayAudio.pause();
      birthdayAudio.currentTime = 0;
    } else {
      messageElement.style.display = "block";
      messageElement.classList.add("animate-message");
      welcomeAudio.pause(); // Stop the welcome audio
      birthdayAudio.play();
    }
  }
  