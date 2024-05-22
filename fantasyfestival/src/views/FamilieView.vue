<template>
  <body>
    <div class="herocontainer">
      <div class="hero">
        <img class="gnist" src="../assets/img/dragonnight.svg" alt="Dragen Gnist">      
      </div>
      <div class="hands">
        <img src="../assets/img/lefthand.png" alt="Gnist's venstre hånd">
        <img src="../assets/img/righthand.png" alt="Gnist's venstre hånd">
      </div>
    </div>
  
    <div class="titlecontainer">
      <div class="centertext">
        <h1 class="headliner font-bold text-3xl text-center">Familie Questen!</h1>
      </div>
    </div>
  
    <div class="questcontainer">
      <div class="infotext">
        <h1 class="headliner font-bold text-3xl pb-9">Deltag i en eventyrlig oplevelse</h1>
        <p class="maintext text-2xl">
          Familieudgaven af Fantasy Quest Esbjerg er et oplevelsesløb for hele familien, med tryk på oplevelse. For det er ikke et klassisk løb. Det handler om at leve sig ind i en anden verden, en magisk historie, hvor I sammen er på en ”quest” – en mission, en opgave, en jagt.
          <br><br>
          Her møder I magiske væsner, der stiller jer nogle opgaver og udfordringer undervejs mod målet, som I skal løse sammen for at gennemføre Questen.
          <br><br>
          Sværhedsgraden er sænket, så børnene kan være med til at løse opgaverne. Men tag ikke fejl, der er brug for alle gode kræfter og samarbejdsevner, hvis I skal være med til at redde Esbjerg.
          <br><br>
          Som en ekstra bonus kan I møde YouTuberen Lakserytteren undervejs i Questen rundt i Esbjergs gader.
        </p>
      </div>
  
      
      <!-- Dynamically retrieves the general information about the evening quest -->
      <div class="container-card">
        <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank">
          <div class="book">
            <img class="ylwbutton" src="../assets/img/yellow buttentext.png" alt="Yellow Button">
          </div>
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

    <!-- Video trailer for the evening quest -->
    <div class="video-holder">
      <img class="top-half" src="../assets/img/toptail.png" alt="Toppen af Gnist's hale">
      <iframe class="video" width="1280" height="700" src="https://www.youtube.com/embed/AFBSUQvmt1o" title="Commercial - Red Merrild (For your perfect morning)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <img class="bottom-half" src="../assets/img/bottomtail.png" alt="Bunden af Gnist's hale">
    </div>

    <div class="lorecontainer">
      <div class="infotext">
        <h1 class="headliner font-bold text-3xl pb-9">I gamle dage sagde man...</h1>
        <p class="maintext text-2xl">
          ...at det onde ville komme fra havet. Gennem generationer blev den fortælling givet videre. Man hørte den, da Esbjerg blev grundlagt i 1868. Man holdt altid øje med havet. Mod vest. 
        </p>
      </div>
      <img class="goblin" src="../assets/img/eventyrgoblin.png" alt="Eventyr Goblin">
    </div>
  
    <div class="footer-placeholder bg-blue-900">
  
    </div>
  </body>

</template>

<script setup>
  import { ref } from "vue";
  import getDayDetails from '@/modules/getDayInfo.js';
  const { dayDetails } = getDayDetails();
</script>

<style lang="scss" scoped>
body{
  margin: 0;
  padding: 0;
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
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: center;
  position: relative;
  width: 100%; 
  height: 100%; 


}

.gnist {
  overflow: hidden;
  position: relative;
  display: flex;
  max-width: 100%; 
  max-height: 100%; 
  scale: 2.40;
}

.hands{
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  margin-top: 45%;
  z-index: 100;
  scale: 0.6;
  gap: 77%;
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

.book-text{
  display: flex;
  color: #EDE6D6;
  font-size: 1.3rem;
  margin-left: 2%;
  margin-bottom: 10%;
  position: absolute;
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
  margin-top: 25%;
  margin-bottom: 25%;
  z-index: 0;
}

.top-half{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  left: 23%;
  bottom: 43.9%;
  scale: 0.6;
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
  left: 7%;
  top: 56.3%;
  scale: 0.4;
  z-index: 4;
  pointer-events: none;
}

.lorecontainer{
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  margin-top: 12%;
}

.goblin{
  position: relative;
  scale: 0.8;
  margin-bottom: 5%;
  bottom: 10%;
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