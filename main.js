let currentAudio = null;

    document.querySelectorAll('.audio').forEach(audioDiv => {
        const playButton = audioDiv.querySelector('.play');
        const pauseButton = audioDiv.querySelector('.pause');
        const audio = audioDiv.querySelector('audio');

        audioDiv.addEventListener('click', () => {
            // Check if this audio is currently playing
            if (audio === currentAudio) {
                // If it is playing, pause it and reset button visibility
                audio.pause();
                playButton.style.display = 'block';
                pauseButton.style.display = 'none';
                currentAudio = null;
            } else {
                // If another audio is playing, pause it and reset buttons
                if (currentAudio) {
                    currentAudio.pause();
                    const previousDiv = currentAudio.closest('.audio');
                    previousDiv.querySelector('.play').style.display = 'block';
                    previousDiv.querySelector('.pause').style.display = 'none';
                }

                // Play the selected audio and toggle button visibility
                audio.play();
                playButton.style.display = 'none';
                pauseButton.style.display = 'block';
                currentAudio = audio;
            }
        });

        // Handle the end of the audio to reset the buttons
        audio.addEventListener('ended', () => {
            playButton.style.display = 'block';
            pauseButton.style.display = 'none';
            currentAudio = null;
        });
    });



    document.querySelector('.about').addEventListener('click', () => {
      const aboutContent = document.querySelector('.about-content');
      // Toggle the 'show' class
      aboutContent.classList.toggle('show');
  });