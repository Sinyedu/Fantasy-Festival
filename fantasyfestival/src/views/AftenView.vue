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
        <h1 class="headliner font-bold text-7xl text-center">Aften Quest!</h1>
      </div>
    </div>
  
    <div class="questcontainer">  
      <div class="infotext">
        <h1 class="headliner font-bold text-3xl pb-9">Er du til uhygge og svære gåder?</h1>
        <p class="maintext raleway-font">
          Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i AftenQuesten op. 
          <br><br>
          Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg.
          <br><br>
          Er du vild med at løse gåder og knække koder, så må du ikke snyde dig selv for denne ultimative oplevelse.
          <br><br>
          Vi sender dig og vennerne ud på jeres ultimative eventyr i Esbjergs gader og stræder. Her vil I blive nødt til at samarbejde og udtænke nye løsninger for at gennemføre AftenQuesten.
        </p>
      </div>
  
      
      <!-- Dynamically retrieves the general information about the evening quest -->
      <div class="container-card">
        <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank">
          <div class="book">
            <img class="ylwbutton" src="../assets/img/yellow buttentext.png" alt="Yellow Button">
          </div>
        </a>
  
        <div v-for="infoDetail in infoDetails" :key="infoDetail.id" class="card raleway-font">
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

    <!-- Video trailer for the evening quest -->
    <div class="video-holder">
      <img class="top-half" src="../assets/img/toptail.png" alt="Toppen af Gnist's hale">
      <iframe class="video" width="1280" height="760" src="https://www.youtube.com/embed/tAbEIZI9dZ8" title="Animeret trailer - Fantasy Festival Quest 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <img class="bottom-half" src="../assets/img/bottomtail.png" alt="Bunden af Gnist's hale">
    </div>

    <div class="lorecontainer">
      <div class="infotext">
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
  import getInfoDetails from '@/modules/getInfo.js';
  const { infoDetails } = getInfoDetails();
</script>

<style lang="scss" scoped>

body{
  margin: 0;
  padding: 0;
  background-color: var(--body-colour-dark);
}

.info {
  color: #EDE6D6;
  padding-top: 7.5%;
}

.maintext {
color: var(--text-colour-dark);
font-size: 25px;
}

.headliner {
  color: #FECD08;
  text-align: center;
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
  background-image: url("../assets/img/aftengnist.png");
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
  // max-width: 100%; 
  // max-height: 100%;
  top: -10%; 
  scale: 1.65;
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
  height: 80vh;
  padding: 0 5% 0 5%;
  margin-top: 12%;
  margin-left: 8%;
}

.infotext{
  margin-top: 3%;
  width: 50%;
  // font-size: 35px;
}

.container-card {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 60vh;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
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
  background-image: url("../assets/img/aftenramme.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.card h1 {
  font-size: 33px;
  text-align: left;
  padding-left: 15%;
  color: var(--text-colour-dark);
}

.card h2 {
  padding-left: 15%;
  margin-top: 1rem;
  max-width: 100%;
  font-size: 25px;
  color: var(--text-colour-dark);
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
  height: 100vh;
  justify-content: center;
  margin-top: 12%;
}

.goblin{
  position: relative;
  scale: 0.65;
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