<template>
  <!-- <div class="container">
    <img class="absolute -left-[72px] top-0 z-10 dragonhand-left hand h-64"
      src="../assets/img/dragon_hand_left_darkcolour_mfinal.png" alt="Dragon Left">
    <div id="player" class="responsive-iframe mx-auto flex justify-center"></div>
    <img class="absolute -right-[72px] top-0 z-10 dragonhand-right hand h-64"
      src="../assets/img/dragon_hand_right_darkcolour_mfinal.png" alt="Dragon Right">
  </div> -->


  <div class="video-holder">
      <img class="top-half" src="../assets/img/toptail.png" alt="Toppen af Gnist's hale">
      <div id="player" class="responsive-iframe mx-auto flex justify-center video "></div>
      <img class="bottom-half" src="../assets/img/bottomtail.png" alt="Bunden af Gnist's hale">
    </div>
</template>

<script>
export default {
  name: 'YouTubeComponent',
  mounted() {
    if (window.YT) {
      this.loadPlayer();
    } else {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = this.loadPlayer;
    }
  },
  methods: {
    loadPlayer() {
      this.player = new YT.Player('player', {
        height: '760px', 
        width: '1280px',  
        videoId: 'tAbEIZI9dZ8',
        events: {
          'onStateChange': this.onPlayerStateChange
        }
      });
    },
    onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PLAYING) {
        this.hideHands();
      } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
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
/* 
.tail-container {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
} */

.top-half {
  position: relative;
  width: 50%;
  height: auto;
  top: -2.25%;
  left: 23%;
  pointer-events: none;
  z-index: 1;
  scale: 1.2;
}
.bottom-half {
  position: relative;
  width: 50%;
  height: auto;
  pointer-events: none;
  z-index: 1;
  top: -22%;
  scale: 1.2;
  left: 15%;
}

@media (max-width: 1600px) {
  .bottom-half,
  .top-half {
    display: none;
  }
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
    margin-top: 5%;
    margin-bottom: 0;
  }
  .bottom-half,
  .top-half {
    display: none;
  }
}
</style>
