<template>
  <div class="container">
    <img class="absolute -left-[85px] top-0 z-10 dragonhand-left hand h-72"
      src="../assets/img/dragon_hand_left_darkcolour_mfinal.png" alt="Dragon Left">
    <div id="player" class="responsive-iframe mx-auto flex justify-center"></div>
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
        height: '760px',
        width: '1420px',
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
      const element = document.querySelector('.dragonhand-left');
      if (element) {
        element.classList.add('hide-left');
      }
      const element2 = document.querySelector('.dragonhand-right');
      if (element2) {
        element2.classList.add('hide-right');
      }
    },
    showHands() {
      const element = document.querySelector('.dragonhand-left');
      if (element) {
        element.classList.remove('hide-left');
      }
      const element2 = document.querySelector('.dragonhand-right');
      if (element2) {
        element2.classList.remove('hide-right');
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

#player {
  position: relative;
  z-index: 2;
  width: 1000px;
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

.hand {
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}


</style>