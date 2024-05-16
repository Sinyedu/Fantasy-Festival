
<template>
  <div class="herocontainer">
    <div class="hero">
      <img class="" src="../assets/img/dragonnight.png" alt="Dragen Gnist">      
    </div>
    <div class="hands">
      <img src="../assets/img/dragonhands.png" alt="Gnist's hænder">
    </div>
  </div>

  <div class="titlecontainer">
    <div class="centertext">
      <h1 class="font-bold text-3xl text-center"> Familie Quest!</h1>
    </div>
  </div>

  <div class="questcontainer">
    <div class="infotext">
      <h1 class="font-bold text-3xl pb-9">Er du til uhygge og svære gåder?</h1>
      <p class="text-2xl">
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
        <button class="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          BOOK NU
        </button>
      </a>

      <div v-for="dayDetail in dayDetails" :key="dayDetail.id" class="card">
        <div class="info-data">
          <div class="info">
            <h1 class="titletext">{{ dayDetail.title }}</h1>
            <h2 class="date">{{ dayDetail.date }}</h2>
            <h2 class="time">{{ dayDetail.time }}</h2>
            <h2 class="location">{{ dayDetail.location }}</h2>
            <h2 class="duration">{{ dayDetail.duration }}</h2>
            <h2 class="ages">{{ dayDetail.ages }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="video-holder">
    <img class="holder" src="../assets/img/dragonholder.png" alt="Dragon Tail">
    <iframe class="video" width="1280" height="600" src="https://www.youtube.com/embed/AFBSUQvmt1o" title="Commercial - Red Merrild (For your perfect morning)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>


  <div class="footer-placeholder bg-blue-900">

  </div>
</template>

<script setup>
  import { ref } from "vue";
  import getDayDetails from '@/modules/getDayInfo.js';
  const { dayDetails } = getDayDetails();
</script>

<style lang="scss" scoped>
.herocontainer{
  display: flex;
  width: 100%;
  justify-content: center;
}

.hero{
  display: flex;
  justify-content: center;
  height: 101vh;
}

.hands{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  // height: 100vh;
  margin-top: 33%;
  z-index: 2;
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
  height: 60%;
  margin-bottom: 10%;
  margin-top: 5%;
  padding-top: 3%;
  align-items: center; 
  justify-content: center;
  box-shadow: 0 0 25px rgba(12, 0, 80, 0.3);
  border-radius: 7%;
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
  margin-left: 42%;
  scale: 1.24;
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