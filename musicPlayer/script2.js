
      let songs = [
        {
          title: "Aale Marathe",
          src: "Aale Marathe आले मराठे _ Video Song _ Digpal Lanjekar _ Devdutta Baji _ Subhedar सुभेदार.mp3",
          img: "aale marathe.jpg",
        },
        {
          title: "Mashup 1",
          src: "Marathi Love Mashup _ 2020 _ DJ Aakash (Mr.Daku)(MP3_160K).mp3",
          img: "mashup1.webp",
        },
        {
          title: "Mashup 2",
          src: "Marathi Love Mashup _ 2021 _ DJ ALEX NGP _ Latest Marathi Mashup _ DipesH M Visual _(MP3_160K).mp3",
          img: "mashup2.png",
        },
      ];

      let currentSongIndex = 0;
      let progress = document.getElementById("progress");
      let song = document.getElementById("song");
      let ctrlIcon = document.getElementById("ctrlIcon");
      let songTitle = document.getElementById("song-title");
      let songImg = document.getElementById("song-img");

      // Load song and reset play/pause icon
      function loadSong(index) {
        let selectedSong = songs[index];
        songTitle.innerText = selectedSong.title;
        song.src = selectedSong.src;
        songImg.src = selectedSong.img;
        song.load();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
      }

      // Play or pause the song
      function playPause() {
        if (ctrlIcon.classList.contains("fa-pause")) {
          song.pause();
          ctrlIcon.classList.remove("fa-pause");
          ctrlIcon.classList.add("fa-play");
        } else {
          song.play();
          ctrlIcon.classList.add("fa-pause");
          ctrlIcon.classList.remove("fa-play");
        }
      }

      // Play next song
      function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playPause(); // Start playing the new song
      }

      // Play previous song
      function prevSong() {
        currentSongIndex =
          (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playPause(); // Start playing the new song
      }

      // Update progress bar as the song plays
      if (song.play()) {
        setInterval(() => {
          progress.value = song.currentTime;
        }, 500);
      }

      // Seek through the song with the progress bar
      progress.onchange = function () {
        song.play();
        song.currentTime = progress.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
      };

      // Reload the first song and reset play/pause icon
      window.onload = function () {
        loadSong(currentSongIndex);
      };
