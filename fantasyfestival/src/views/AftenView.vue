
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
      <h1 class="font-bold text-3xl text-center"> Aften Questen!</h1>
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

    <!-- Dynamically retrieves the general information about the night quest -->
    <div class="container-card">
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

</template>

<script setup>
  import { ref } from "vue";
  import getInfoDetails from '@/modules/getInfo.js';
  const { infoDetails } = getInfoDetails();
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
  height: 100vh;
}

.hands{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  margin-top: 22%;
  z-index: 2;
}

.questcontainer{
  display: flex;
  // justify-content: center;
  // align-items: start;
  width: 100%;
  height: 60vh;
  padding: 0 5% 0 5%;
  margin-top: 12%;
}

.infotext{
  margin-top: 3%;
  width: 50%;
}

.container-card {
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: end;
}

.card {
  max-width: 500px;
  height: 100px;
  align-items: center; 
  justify-content: center;
  box-shadow: 0 0 25px rgba(12, 0, 80, 0.3);
}

.card h1 {
  font-size: 2rem;
  text-align: center;
}

.card h2 {
  margin-left: 2%;
  margin-top: 1rem;
  max-width: 95%;
  text-align: left;
}
</style>