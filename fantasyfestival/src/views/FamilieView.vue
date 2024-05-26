<template>
  <body>
    <div class="herocontainer">
      <div class="hero">
        <img class="gnist">      
      </div>
      <div class="hands">
        <img src="../assets/img/lefthand.png" alt="Gnist's venstre hånd">
        <img src="../assets/img/righthand.png" alt="Gnist's venstre hånd">
      </div>
    </div>
  
    <div class="titlecontainer">
      <div class="centertext">
        <h1 class="headliner font-bold text-7xl text-center">Familie Quest!</h1>
      </div>
    </div>
  
    <div class="questcontainer">
      <div class="infotext">
        <h1 class="headliner2 font-bold text-3xl pb-9">Deltag i en eventyrlig oplevelse</h1>
        <p class="maintext raleway-font">
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
            <img class="ylwbutton" src="../assets/img/yellow buttentext.png" alt="Book Nu Knap">
          </div>
        </a>
  
        <div v-for="dayDetail in dayDetails" :key="dayDetail.id" class="card raleway-font">
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
    <AftenFamilieVideo/>
    

    <div class="lorecontainer">
      <div class="infotext2">
        <h1 class="headliner font-bold text-3xl pb-9">I gamle dage sagde man...</h1>
        <p class="maintext raleway-font text-2xl">
          ...at det onde ville komme fra havet. Gennem generationer blev den fortælling givet videre. Man hørte den, da Esbjerg blev grundlagt i 1868. Man holdt altid øje med havet. Mod vest. 
          <br><br>
          Så i Esbjerg byggede man et værn mod ondskaben. Noget der skulle holde øje med havet, noget der skulle træde i karakter, hvis det gik galt. I 1995 blev det værn forstærket, da skulpturerne ”Mennesket ved havet” blev skabt. Mens kunstneren byggede om dagen, arbejdede troldmanden Gygaz den Vise om natten. 
          <br><br>
          Gygaz åbnede en portal til kæmpernes verden. Her fandt han frem til fire gode kæmper, der meldte sig frivilligt. De sagde farvel til deres familier og travede gennem portalen mod Esbjerg. Her mødtes de med Gygaz. Luften sitrede af magi, og da de sidste ord i en magtfuld formular forlod Gygaz’ læber, var de fire kæmper blevet ét med statuerne af de fire hvide mænd. På den måde kunne de til evig tid holde øje med havet…
        </p>
      </div>
      <img class="goblin" src="../assets/img/eventyrgoblin.png" alt="Eventyr Goblin">
    </div>
  </body>

</template>

<script setup>
  import getDayDetails from '@/modules/getDayInfo.js';
  const { dayDetails } = getDayDetails();

  import AftenFamilieVideo from '../components/AftenFamilieVideo.vue';
</script>

<style lang="scss" scoped>

body{
  margin: 0;
  padding: 0;
  background-color: var(--body-colour-light);
}

.info {
  color: var(--text-colour-light);
  // padding-top: 7.5%;
}

.maintext {
  color: var(--text-colour-light);
  font-size: 25px;
}

.headliner {
  color: var(--text-colour-light);
  margin-top: 2%;
}

.herocontainer{
  position: relative;
  display: flex;
  width: 100%;
  height: 85vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("../assets/img/familiegnist.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 90%;
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
  // height: 60vh;
  padding: 0 5% 0 5%;
  margin-top: 15%;
  margin-left: 8%;
}

.infotext{
  margin-top: 3%;
  width: 100%;
}

.infotext2 {
  margin-top: 3%;
  width: 50%;
}

.container-card {
  display: flex;
  flex-direction: column;
  width: 50%;
  // height: 60vh;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  z-index: 3;
}

.card {
  max-width: 100%;
  width: 55%;
  height: 100%;
  // margin-bottom: 7%;
  margin-top: 5%;
  padding-top: 3%;
  align-items: center; 
  justify-content: center;
  background-image: url("../assets/img/familieramme.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.card h1 {
  font-size: 33px;
  text-align: left;
  padding-left: 15%;
}

.card h2 {
  padding-left: 15%;
  margin-top: 1rem;
  max-width: 100%;
  font-size: 25px;
}

.ylwbutton {
  width: 100%;
  height: 100%;
  scale: 1.4;
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
  top: 62.5%;
  scale: 0.4;
  z-index: 4;
  pointer-events: none;
}

.lorecontainer{
  display: flex;
  width: 100%;
  // height: 100vh;
  justify-content: center;
  margin-top: 12%;

}

.goblin{
  position: relative;
  scale: 0.65;
  margin-bottom: 5%;
  bottom: 10%;
}

@media (max-width: 1440px) {
  .herocontainer {
    height: 60vh;
    background-position: center;
  }
}


@media (max-width: 1024px) {
  .herocontainer {
    height: 50vh;
    background-position: center;
  }

  .hands img {
    scale: 0.5;
  }
  .hands {
   gap: 60%;
  }
.infotext {
    margin-top: 3%;
    width: 80%;
  }


  .infotext2 {
    margin-top: 3%;
    width: 80%;
  }
  .herocontainer {
    height: 40vh;
    background-position: center;
  }
.infotext2 {
    margin-top: 3%;
    width: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .lorecontainer {
    margin-top: 5%;
    // display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .lorecontainer img {
    scale: 0.7;
  }
  .lorecontainer p {
    font-size: 25px;
  }
  .questcontainer {
    // margin-top: 35%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .questcontainer h1 {
    font-size: 35px;
    max-width: 100%;
  }

  .card {
    width: 100%;
    height: 100%;
    margin-top: 5%;
    padding-top: 3%;
    align-items: center; 
    justify-content: center;
    background-image: url("../assets/img/familieramme.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .card h1 {
    font-size: 33px;
    text-align: left;
    padding-left: 15%;
  }

  .card h2 {
    padding-left: 15%;
    margin-top: 1rem;
    max-width: 100%;
    font-size: 25px;
  }

  .maintext {
    font-size: 20px;
    max-width: 80%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .infotext {
    // margin-top: 250%;
    // width: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  
  }

  .ylwbutton {
    width: 100%;
    height: 100%;
    scale: 1.4;
  }
  .headliner2 {
  //  padding-top: 25%;
   justify-content: center;
    align-items: center;
    display: flex;
  }
}

@media (max-width: 864px) {
  .herocontainer {
    height: 40vh;
    background-position: center;
  }

  .ylwbutton {
    width: 100%;
    height: 100%;
    scale: 2;
    padding-bottom: 5%;
  }
.infotext2 {
    margin-top: 3%;
    width: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .lorecontainer {
    margin-top: 5%;
    // display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .lorecontainer img {
    scale: 0.7;
  }
  .lorecontainer p {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .herocontainer {
    height: 40vh;
    background-position: center;
  }
}

@media (max-width: 480px) {
  .herocontainer {
    height: 30vh;
    background-position: center;
  }
  .ylwbutton {
    width: 100%;
    height: 100%;
    scale: 3;
    padding-bottom: 10%;
  }
}



</style>