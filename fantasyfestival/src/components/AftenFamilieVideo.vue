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
#player {
  position: relative;
  z-index: 2;
  width: 2000px;
}


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

.video-holder{
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  position: relative;
  margin-top: 25%;
  margin-bottom: 20%;
  z-index: 0;
}

.top-half{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  left: 27%;
  top: -75%;
  scale: 0.50;
  z-index: 2;
}

.video{
  display: flex;
  margin-top: 17.9%;
  z-index: 3;
}

.bottom-half{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  left: 15%;
  top: 27.8%;
  scale: 0.35;
  z-index: 4;
  pointer-events: none;
}

@media (max-width: 1600px) {
  .bottom-half {
    display: none;
  }
  .top-half {
    display: none;
  }
}
@media (max-width: 1440px) {
  .top-half {
    display: none;
  }
  .bottom-half {
    display: none;
  }
}



@media (max-width: 1028px) {
  .top-half {
    display: none;
  }
  .bottom-half {
    display: none;
  }
}


@media (max-width: 768px) {
  .video-holder{
    margin-top: 5%;
    margin-bottom: 0;
  }
  .top-half{
    display: none;
  }
  .bottom-half{
    display: none;
  }
}
</style>