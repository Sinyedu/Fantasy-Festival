<template>
  <body>
    <div class="herocontainer">
      <div class="hero">
        <img class="gnist" src="../assets/img/dragonnight.svg" alt="Dragen Gnist">      
      </div>
      <div class="hands">
        <img src="../assets/img/dragonhands.svg" alt="Gnist's hænder">
      </div>
    </div>
  
    <div class="titlecontainer">
      <div class="centertext">
        <h1 class="headliner font-bold text-3xl text-center"> Aften Questen!</h1>
      </div>
    </div>
  
    <div class="questcontainer">
      <div class="infotext">
        <h1 class="headliner font-bold text-3xl pb-9">Er du til uhygge og svære gåder?</h1>
        <p class="maintext text-2xl">
          Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i AftenQuesten op. 
          <br><br>
          Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg.
          <br><br>
          Er du vild med at løse gåder og knække koder, så må du ikke snyde dig selv for denne ultimative oplevelse.
          <br><br>
          Vi sender dig og vennerne ud på jeres ultimative eventyr i Esbjergs gader og stræder. Her vil I blive nødt til at samarbejde og udtænke nye løsninger for at gennemføre AftenQuesten.
        </p>
      </div>
  
      <div class="book-button">
      </div>
      
      <!-- Dynamically retrieves the general information about the night quest -->
      <div class="container-card">
        <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank">
          <div class="book">
            <img class="ylwbutton" src="../assets/img/yellow butten.svg" alt="Yellow Button">
          </div>
        </a>
  
        <div v-for="infoDetail in infoDetails" :key="infoDetail.id" class="card">
          <div class="info-data">
            <div class="info">
              <h1 class="titletext">{{ infoDetail.title }}</h1>
              <h2 class="date">{{ infoDetail.date }}</h2>
              <h2 class="time">{{ infoDetail.time }}</h2>
              <h2 class="location">{{ infoDetail.location }}</h2>
              <h2 class="duration">{{ infoDetail.duration }}</h2>
              <h2 class="ages">{{ infoDetail.ages }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="video-holder"> -->
      <!-- <img class="holder" src="../assets/img/dragonholder.png" alt="Dragon Tail"> -->
      <!-- <img class="holder" src="../assets/img/dragonvideo.svg" alt="Dragon Tail">
      <iframe class="video" width="1280" height="600" src="https://www.youtube.com/embed/AFBSUQvmt1o" title="Commercial - Red Merrild (For your perfect morning)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div> -->
    <div class="video-holder">
    <!-- <img class="holder" src="../assets/img/dragonholder.png" alt="Dragon Tail"> -->
    <svg class="holder" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 938.86 623.61">
  <defs>
    <linearGradient id="linear-gradient" x1="464.65" y1="651.83" x2="528.6" y2="244.8" gradientUnits="userSpaceOnUse">
      <stop offset=".17" stop-color="#486c84"/>
      <stop offset=".56" stop-color="#231f20" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="680.66" y1="406.3" x2="628.93" y2="103.64" xlink:href="#linear-gradient"/>
  </defs>
  <g id="Layer_5" data-name="Layer 5">
    <path class="cls-5" d="m762.72,211.79c-.86,22.85-1.71,45.7-2.57,68.54-14.53-.9-26.62-1.44-35.26-1.78-45.21-1.74-58.38-.19-71.41,3.85-9.8,3.04-17.08,6.27-21.43,8.66-19.51-.24-108.69.25-114.47-.2,3.1-5.71,7.82-13.42,15.6-22.39,13.11-15.11,32.57-30.31,112.89-52.44,84.43-23.27,104.58-17.95,114.37-7.11,1.04,1.16,1.8,2.19,2.27,2.86Z"/>
    <path class="cls-5" d="m415.1,450.7c1.11,3.97,2.64,7.94,4.7,11.95,12.79,24.78,37.77,33.96,44.25,36.35,40.91,15.07,75.78-.3,99.95-31.21,5.2-6.65,14.12-17.68,19.95-40.69,3.4-13.42,2.77-39.6-6.02-49.58,1.09,2.5,2.41,6.26,2.96,10.96.23,1.96.75,7.75-1.48,16-4.4,16.27-19.42,27.85-22.74,31.19-4.15,4.16-14.03,14.58-27.78,19.87-16.23,6.25-25.24,2.49-37.78,1.09-11.4-1.28-20.57-3.87-26.67-5.93h-49.35Z"/>
  </g>
  <g id="Layer_4" data-name="Layer 4">
    <path class="cls-3" d="m456.08,291.06c6.6-9.69,20.84-27.72,52.22-51.22,46.82-35.07,91.54-49.77,104.3-53.73,32.52-10.08,58.71-12.78,73.48-14.22,30.85-3.01,57.44-1.99,77.83,0-.4,13.3-.79,26.6-1.19,39.9-11.33.17-26.95.8-45.43,2.77-28.03,2.98-67.65,7.2-112.2,25.68-21.36,8.86-51.37,23.73-83.4,50.83h-65.61Z"/>
    <path class="cls-3" d="m534.3,455.08c-5.23,3.76-13.07,8.21-23.31,10.27,0,0-21.2,4.27-41.63-6.31-.98-.51-1.73-.93-2.22-1.2,0,0-1.62-.92-3.07-1.84-3.12-1.99-6.39-4.74-7.05-5.3,12.88,0,25.76,0,38.63,0,2.02,1.27,5.09,2.92,9.09,4.05,9.18,2.59,16.91.63,22.52-.79,8.2-2.08,14.8-5.63,19.75-9.09-4.24,3.4-8.47,6.8-12.71,10.2Z"/>
  </g>
  <g id="Layer_3" data-name="Layer 3">
    <path class="cls-4" d="m460.56,291.06c14.33-18.62,29.37-31.38,40.63-41.32,83.5-73.72,187.35-77.35,222.22-77.04,13.43.79,26.86,1.58,40.3,2.37.4-4.94.79-9.88,1.19-14.81-5.72-1.12-14.81-2.66-26.07-3.56-21.91-1.74-32.54.56-49.19,0-10.75-.36-26.66-1.99-46.22-8.3,5.31,3.36,11.83,6.93,19.56,10.07,5.41,2.2,10.5,3.83,15.11,5.04-4.47.71-11.02,1.69-18.96,2.67-16.91,2.08-28.93,3.55-41.19,3.26-10.1-.24-25.08-1.8-43.26-8.3,2.14,2.18,5.06,4.75,8.89,7.11,5.68,3.5,11.06,5.12,14.81,5.93-2.24-.21-12.88-1.22-15.7-1.48-21.01-1.98-26.39-2.47-33.78-4.74-3.66-1.12-9.08-3.07-15.41-6.52,3.94,4.24,10.81,10.59,21.04,15.41,12.03,5.67,22.93,6.5,29.04,6.52-4.14.8-10.41,1.97-18.07,3.26-21.37,3.59-27.29,3.68-37.04,6.22-7.06,1.84-16.99,5.2-28.44,11.85,5.33-1.55,11.17-2.98,17.48-4.15,11.75-2.17,22.47-2.92,31.7-2.96-1.39,1.32-3.29,3.07-5.63,5.04-2.49,2.1-8.47,6.98-16.59,11.85-7.58,4.55-18,10.81-32.89,13.93-5.06,1.06-12.58,2.16-21.93,1.78,3.84,1.39,8.74,2.72,14.52,3.26,12.3,1.15,22.22-1.89,27.85-4.15-13.87,4.29-32.69,12.41-50.07,28.44-4.28,3.95-8.01,7.95-11.26,11.85,4.08-2.81,8.91-5.78,14.52-8.59,6.35-3.18,12.29-5.46,17.48-7.11-7.69,4.57-13.34,9.35-17.19,13.04-3.87,3.71-7.62,7.37-10.96,13.33-2.38,4.26-3.53,8-4.28,10.81h7.8Z"/>
  </g>
  <g id="Layer_8" data-name="Layer 8">
    <path class="cls-1" d="m495.66,450.7c-8.23,0-28.54-.97-33.04,4.84-4.83,6.24-2.61,13.89-2.02,15.85,2.32,7.79,12.15,16.44,16.59,19.01,4.94,2.86,9.13,3.9,15.11,4.74,9.78,1.37,17.83.43,22.22-.3,4.26-.7,25.38-5.73,49.33-30.27,4.09-4.19,11.19-14.47,14.64-20.84-2.61,5.28-6.27,15.04-18.44,28.98-2.62,3.01-5.13,5.52-7.34,7.6-3.16,2.98-7.88,7.39-15.07,11.9-9.63,6.04-17.88,8.65-19.9,9.26-7.01,2.13-13.23,2.95-17.96,3.24-1.68.1-8.74.48-18.1-.99-12.96-2.04-22.72-6.43-27.78-9.01-6.34-3.24-15.36-7.95-23.96-17.6-8.59-9.64-12.76-19.7-14.84-26.41,26.85,0,53.7,0,80.56,0Z"/>
    <path class="cls-2" d="m760.15,280.33c-13.81-.78-25.74-1.36-35.26-1.78-20.78-.92-29.41-1.07-40.01-.59-9.85.45-15.37.73-22.82,2.22-13.11,2.63-23.31,7.26-30.02,10.88-26.63,0-53.27,0-79.9,0,7.36-5.17,17.88-11.92,31.21-18.43,15.53-7.59,34.69-14.76,67.16-20.94,25.42-4.84,63.16-9.86,111.03-8.72-.47,12.45-.93,24.91-1.4,37.36Z"/>
  </g>
  <g id="Layer_6" data-name="Layer 6">
    <path class="cls-6" d="m499.51,471.95c2.21.32,4.18-1.14,4.5-2.97.36-2.05-1.39-4.33-3.93-4.4"/>
    <path class="cls-6" d="m494.54,474.18c2.21.32,4.18-1.14,4.5-2.97.36-2.05-1.39-4.33-3.93-4.4"/>
    <path class="cls-6" d="m484.64,478.81c1.75,1.39,4.19,1.1,5.38-.31,1.34-1.59.97-4.45-1.2-5.78"/>
    <path class="cls-6" d="m496.81,478.81c1.75,1.39,4.19,1.1,5.38-.31,1.34-1.59.97-4.45-1.2-5.78"/>
    <path class="cls-6" d="m436,464.53c1.03,1.98,3.37,2.72,5.04,1.91,1.88-.91,2.7-3.66,1.27-5.76"/>
    <path class="cls-6" d="m585.64,259.32c-2.19,1.67-2.59,4.66-1.27,6.51,1.49,2.09,5.01,2.51,7.26.33"/>
    <path class="cls-6" d="m587.96,253.02c-2.19,1.67-2.59,4.66-1.27,6.51,1.49,2.09,5.01,2.51,7.26.33"/>
    <path class="cls-6" d="m592.42,240.33c-2.73.35-4.58,2.73-4.36,5,.25,2.55,3.08,4.68,6.12,3.92"/>
    <path class="cls-6" d="m581.93,251.04c-2.73.35-4.58,2.73-4.36,5,.25,2.55,3.08,4.68,6.12,3.92"/>
    <path class="cls-6" d="m585.64,259.32c-2.19,1.67-2.59,4.66-1.27,6.51,1.49,2.09,5.01,2.51,7.26.33"/>
    <path class="cls-6" d="m587.96,253.02c-2.19,1.67-2.59,4.66-1.27,6.51,1.49,2.09,5.01,2.51,7.26.33"/>
    <path class="cls-6" d="m592.42,240.33c-2.73.35-4.58,2.73-4.36,5,.25,2.55,3.08,4.68,6.12,3.92"/>
    <path class="cls-6" d="m581.93,251.04c-2.73.35-4.58,2.73-4.36,5,.25,2.55,3.08,4.68,6.12,3.92"/>
    <path class="cls-6" d="m731.06,260.93c-2.19,1.67-2.59,4.66-1.27,6.51,1.49,2.09,5.01,2.51,7.26.33"/>
    <path class="cls-6" d="m733.38,254.63c-2.19,1.67-2.59,4.66-1.27,6.51,1.49,2.09,5.01,2.51,7.26.33"/>
    <path class="cls-6" d="m737.85,241.93c-2.73.35-4.58,2.73-4.36,5,.25,2.55,3.08,4.68,6.12,3.92"/>
    <path class="cls-6" d="m727.35,252.64c-2.73.35-4.58,2.73-4.36,5,.25,2.55,3.08,4.68,6.12,3.92"/>
    <path class="cls-6" d="m692.29,199.73c-2.19,1.67-2.59,4.66-1.27,6.51,1.49,2.09,5.01,2.51,7.26.33"/>
    <path class="cls-6" d="m696.76,187.03c-2.73.35-4.58,2.73-4.36,5,.25,2.55,3.08,4.68,6.12,3.92"/>
    <path class="cls-6" d="m494.49,275.79c-2.19,1.67-2.59,4.66-1.27,6.51,1.49,2.09,5.01,2.51,7.26.33"/>
  </g>
</svg>  
    </svg>
    <iframe class="video" width="1280" height="600" src="https://www.youtube.com/embed/AFBSUQvmt1o" title="Commercial - Red Merrild (For your perfect morning)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

  
  
    <div class="footer-placeholder bg-blue-900">
  
    </div>
  </body>

</template>

<script setup>
  import { ref } from "vue";
  import getInfoDetails from '@/modules/getInfo.js';
  const { infoDetails } = getInfoDetails();
</script>

<style lang="scss" scoped>
      .cls-1 {
        fill: url(#linear-gradient);
      }

      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: url(#linear-gradient-2);
      }

      .cls-3 {
        fill: #0a3a35;
      }

      .cls-4 {
        fill: #002a26;
      }

      .cls-5 {
        fill: #77a145;
      }

      .cls-6 {
        fill: none;
        stroke: #506e32;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 2px;
      }
body{
  margin: 0;
  padding: 0;
  // font-family: 'Poppins', sans-serif;
  background-color: #355C55;
}
.info {
  color: #EDE6D6;
}


.maintext {
color: #D0D3C9;
}
.headliner {
  color: #FECD08;
}

.herocontainer{
  // overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  // left: -5%;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center; /* Add this line to vertically center the content */
  text-align: center;
  position: relative;
  width: 100%; /* Adjusted width to fit within the container */
  height: 100%; /* Adjusted height to fit within the container */
}

.gnist {
  overflow: hidden;
  position: relative;
  display: flex;
  max-width: 100%; /* Ensure the image doesn't exceed the container width */
  max-height: 100%; /* Ensure the image doesn't exceed the container height */
  scale: 2.40;
}

.hands{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  margin-top: 10%;
  z-index: 100;
}

.questcontainer{
  display: flex;
  width: 100%;
  height: 60vh;
  padding: 0 5% 0 5%;
  margin-top: 12%;
  margin-left: 8%;
}

.infotext{
  margin-top: 3%;
  width: 50%;
}

.container-card {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.card {
  max-width: 100%;
  width: 35%;
  height: 65%;
  margin-bottom: 7%;
  margin-top: 5%;
  padding-top: 3%;
  align-items: center; 
  justify-content: center;
  // box-shadow: 0 0 25px rgba(12, 0, 80, 0.3);
  border-radius: 7%;
  // background-color: white;
}

.card h1 {
  font-size: 2rem;
  text-align: center;
}

.card h2 {
  margin-left: 5%;
  margin-top: 1rem;
  max-width: 95%;
  text-align: left;
  font-size: 1.35rem;
}

.button{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 10%;
  z-index: 3;
  font-size: 2rem;
}

a{
  text-decoration: none;
  width: 33%;
}

.video-holder{
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  position: relative;
  margin-top: 10%;
  margin-bottom: 10%;
  z-index: 0;
}

.holder{
  position: absolute;
  display: flex;
  width: auto;
  height: 100%;
  top: -4%;
  margin-left: -5%;
  // scale: 2.5;
  z-index: 2;
}

.video{
  display: flex;
  margin-top: 17.9%;
  z-index: 1;
}

.footer-placeholder{
  display: flex;
  width: 100%;
  height: 50vh;
  justify-content: center;
  align-items: center;
  z-index: 0;
}
</style>