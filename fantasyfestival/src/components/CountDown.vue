<template>
    <div id="countdown">
      <div class="countdown-box">
        <span>{{ days }}</span>
        <div class="label">DAGE</div>
      </div>
      <div class="countdown-box">
        <span>{{ hours.toString().padStart(2, "0") }}</span>
        <div class="label">Hours</div>
      </div>
      <div class="countdown-box">
        <span>{{ minutes.toString().padStart(2, "0") }}</span>
        <div class="label">Minutes</div>
      </div>
      <div class="countdown-box">
        <span>{{ seconds.toString().padStart(2, "0") }}</span>
        <div class="label">Seconds</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        countDownDate: new Date("2024-09-14T00:00:00Z").getTime(),
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        timerInterval: null,
      };
    },
    methods: {
      timer() {
        const now = new Date().getTime();
        const timeleft = this.countDownDate - now;
  
        if (timeleft < 0) {
          clearInterval(this.timerInterval);
          this.days = this.hours = this.minutes = this.seconds = 0;
          return;
        }
  
        this.days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      }
    },
    mounted() {
      this.timer();
      this.timerInterval = setInterval(this.timer, 1000);
    },
    beforeUnmount() {
      clearInterval(this.timerInterval);
    }
  };
  </script>
  
  <style scoped>
  #countdown {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    margin-top: 1%;
    position: relative;
    z-index: 9999;
    gap: 2%;
  }
  
  .countdown-box {
    background-color: #083a35;
    color: #ffffff;
    font-size: 2em;
    text-align: center;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .label {
    font-size: 0.5em;
    margin-top: 5px;
  }
  </style>
  