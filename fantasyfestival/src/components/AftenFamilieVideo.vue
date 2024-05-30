<template>
  <div class="video-holder">
    <img class="top-half" src="../assets/img/toptail.png" alt="Toppen af Gnist's hale">
    <div id="player" class="video-wrapper">
      <div class="responsive-iframe"></div>
    </div>
    <img class="bottom-half" src="../assets/img/bottomtail.png" alt="Bunden af Gnist's hale">
  </div>
</template>

<script>
export default {
  name: 'YouTubeComponent',
  mounted() {
    if (window.YT && window.YT.Player) {
      this.loadPlayer();
    } else {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = this.loadPlayer.bind(this);
    }
  },
  methods: {
    loadPlayer() {
      if (window.YT && window.YT.Player) {
        this.player = new window.YT.Player('player', {
          height: '760px',
          width: '1280px',
          videoId: 'tAbEIZI9dZ8',
          events: {
            'onStateChange': this.onPlayerStateChange
          }
        });
      } else {
        console.error('YouTube API not loaded');
      }
    },
    onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.PLAYING) {
        this.hideHands();
      } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
        this.showHands();
      }
    },
    hideHands() {
      const element = document.querySelector('.bottom-half');
      if (element) {
        element.classList.add('hide');
      }
    },
    showHands() {
      const element = document.querySelector('.bottom-half');
      if (element) {
        element.classList.remove('hide');
      }
    }
  }
};
</script>

<style scoped>
@keyframes hide-animation {
  from {
    opacity: 100%;
  }
  to {
    opacity: 0%;
  }
}

.hide {
  animation: hide-animation 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.video-holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200vh;
  position: relative;
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.top-half {
  position: absolute;
  width: 50%;
  height: auto;
  top: 6.9%;
  left: 52%;
  pointer-events: none;
  z-index: 1;
  scale: 1;
}

.bottom-half {
  position: absolute;
  width: 50%;
  height: auto;
  pointer-events: none;
  z-index: 1;
  top: 48.5%;
  scale: 1;
  left: 40%;
}

@media (max-width: 1440px) {
  .bottom-half,
  .top-half {
    display: none;
  }
}

@media (max-width: 1028px) {
  .bottom-half,
  .top-half {
    display: none;
  }
}

@media (max-width: 768px) {
  .video-holder {
    height: auto;
    padding-top: 56.25%;
    position: relative;
    max-width: 100%;
    flex-direction: row;
  }

  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bottom-half,
  .top-half {
    display: none;
  }
}
</style>
