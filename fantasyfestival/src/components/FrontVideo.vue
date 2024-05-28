<template>
  <div class="container">
    <img class="absolute -left-[85px] top-0 z-10 dragonhand-left hand h-72"
      src="../assets/img/dragon_hand_left_darkcolour_mfinal.png" alt="Dragon Left">
    <div class="player-wrapper">
      <div id="player" class="responsive-iframe"></div>
    </div>
    <img class="absolute -right-[85px] top-0 z-10 dragonhand-right hand h-72"
      src="../assets/img/dragon_hand_right_darkcolour_mfinal.png" alt="Dragon Right">
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
        height: '720',
        width: '1250',
        videoId: 'nWYL6oaLhKE',
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
      const leftHand = document.querySelector('.dragonhand-left');
      if (leftHand) {
        leftHand.classList.add('hide-left');
        leftHand.classList.remove('show-left');
      }
      const rightHand = document.querySelector('.dragonhand-right');
      if (rightHand) {
        rightHand.classList.add('hide-right');
        rightHand.classList.remove('show-right');
      }
    },
    showHands() {
      const leftHand = document.querySelector('.dragonhand-left');
      if (leftHand) {
        leftHand.classList.add('show-left');
        leftHand.classList.remove('hide-left');
      }
      const rightHand = document.querySelector('.dragonhand-right');
      if (rightHand) {
        rightHand.classList.add('show-right');
        rightHand.classList.remove('hide-right');
      }
    }
  }
};
</script>



<style scoped>

.container {
  position: relative;
  width: fit-content;
  margin: auto;
}

.player-wrapper {
  position: relative;
  /* width: 1050px; */
  /* height: 720px; */
  /* scale: 0.7; */
}

 .responsive-iframe {
  width: 1050px; 
}
  /* height: 720px; */


#player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

@keyframes move1 {
  from {
    left: -85px;
  }

  to {
    left: -230px;
  }
}

@keyframes move2 {
  from {
    right: -85px;
  }

  to {
    right: -230px;
  }
}

@keyframes move3 {
  from {
    left: -230px;
  }

  to {
    left: -85px;
  }
}

@keyframes move4 {
  from {
    right: -230px;
  }

  to {
    right: -85px;
  }
}

.hide-left {
  animation: move1 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.hide-right {
  animation: move2 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.show-left {
  animation: move3 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.show-right {
  animation: move4 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;

}
.hand {
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

@media (max-width: 1440px) {
  .hand {
    display: none;
  }
}


 @media (max-width: 1028px) {
  #player {
    width: 100%;
    height: 100%;
  }

  .container {
    width: 100%;
  }
  .player-wrapper {
    width: 100%;
    scale: 1.2;
    justify-content: center;
    display: flex;
  }
  .hand {
    display: none;
  }
  
}
  

@media (max-width: 768px) {
  .container {
    width: 100%;
  }

  .player-wrapper {
    width: 100%;
    scale: 0.9;
    justify-content: center;
    display: flex;
    height: 520px;
  }

  #player {
    width: 100%;
    height: 100%;
  }
}
</style>
