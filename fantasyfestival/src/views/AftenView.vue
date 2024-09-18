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
        <h1 class="mainheadliner font-bold text-7xl text-center">Aften Quest</h1>
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
        <!-- Dynamically retrieved content from getInfo.js-->
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
      <img class="dragonkin" src="../assets/img/dragonkin.png" alt="Gnist Humanoid">
    </div>
  </body>
</template>


<script setup>
//Importing the general information about the evening quest
  import getInfoDetails from '@/modules/getInfo.js';
  const { infoDetails } = getInfoDetails();

  import AftenFamilieVideo from '../components/AftenFamilieVideo.vue';

</script>




<style lang="scss" scoped>

body{
  margin: 0;
  padding: 0;
  background-color: var(--body-colour-dark-2);
}

.info {
  color: #EDE6D6;
  padding-top: 7.5%;
}

.maintext {
color: var(--text-colour-dark);
font-size: 25px;
}

.mainheadliner {
  color: #FECD08;
  margin-top: 2%;
}

.headliner {
  color: #FECD08;
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
  gap: 110%;
  pointer-events: none;
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

.infotext2{
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
  width: 50%;
  margin-top: 5%;
  padding-bottom: 5%;
  align-items: center; 
  justify-content: center;
  background-image: url("../assets/img/aftenramme.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.card h1 {
  font-size: 2.5rem;
  padding-left: 15%;
  color: var(--text-colour-dark);
}

.card h2 {
  padding-left: 15%;
  margin-top: 1rem;
  max-width: 100%;
  font-size: 1.4rem;
  color: var(--text-colour-dark);
}

.ylwbutton {
  width: 100%;
  height: 100%;
  scale: 1.4;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

a:hover .ylwbutton{
transform: scale(1.05);
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

a{
  text-decoration: none;
  width: 33%;
}

.lorecontainer{
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 7%;

}

.dragonkin{
  position: relative;
  scale: 0.65;
  margin-bottom: 5%;
  bottom: 10%;
}

@media (max-width: 1520px){
  .headliner{
    font-size: 1.8rem;
  }

  .maintext{
    font-size: 24px;
  }

  .container-card{
    margin-top: 5%;
  }

  .card{
    text-align: start;
    width: 75%;
  }

  .info h1{
    font-size: 1.9rem;
    text-align: start;
    padding-left: 15%;
  }

  .info h2{
    font-size: 1.1rem;
    padding-bottom: 2%;
  }

  .ylwbutton {
    scale: 2;
    margin-bottom: 15%;
  }
  .mainheadliner {
    font-size: 4rem;
  }
}

@media (max-width: 1440px) {
  .herocontainer {
    height: 60vh;
    background-position: center;
  }
}


@media (max-width: 1366px) {
.lorecontainer{
  display: flex;
  padding-bottom: 15%;
  margin-top: -20%;
  }
}
@media (max-width: 1090px) {
.card h1 {
  font-size: 2rem;
  text-align: center;
  padding-left: 0%;
  max-width: 100%;
}

.card h2 {
  padding-left: 0%;
  margin-top: 1.6rem;
  max-width: 100%;
  font-size: 1.3rem;
  text-align: center;
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
    margin-top: 15%;
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
    margin-top: -45%;
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
    height: 0%;
    padding: 0;
    margin: 0%;
    
  }

  .questcontainer h1 {
    font-size: 25px;
    max-width: 100%;
  }

  .container-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    z-index: 3;
  }

  .card {
    width: 80%;
    height: 80%;
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
    font-size: 2.5rem;
    text-align: center;
    padding-left: 0%;
    max-width: 100%;
  }

  .card h2 {
    padding-left: 0%;
    margin-top: 1.6rem;
    max-width: 100%;
    font-size: 1.4rem;
    text-align: center;
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
    scale: 2;
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
    padding-bottom: 25%;
    padding-top: 25%;
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
  .card {
    // scale: 0.9;
    width: 100%;
    height: 100%;
    margin-top: 5%;
    padding-top: 3%;
    align-items: center; 
    justify-content: center;
    background-image: url("../assets/img/aftenramme.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
.info h1 {
    font-size: 25px;
}

  .info h2 {
    font-size: 20px;
  
  }
  .card h1 {
    font-size: 2.5rem;
    text-align: center;
    padding-left: 0%;
    max-width: 100%;
  }

  .card h2 {
    padding-left: 0%;
    margin-top: 1.2rem;
    max-width: 100%;
    font-size: 1.4rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .herocontainer {
    height: 40vh;
    background-position: center;
  }
  .container-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    z-index: 3;
  }

  .card {
    width: 115%;
    height: 100%;
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
    text-align: center;
    padding-left: 0%;
    max-width: 100%;
  }

  .card h2 {
    padding-left: 0%;
    margin-top: 1.3rem;
    max-width: 100%;
    font-size: 1.3rem;
    text-align: center;
  }


  .headliner {
    margin-top: 15%;
  }
  
  .infotext {
    margin-top: 0%;
    width: 80%;
  }
}

@media (max-width: 576px) {
  .container-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    z-index: 3;
  }

  .card {
    width: 115%;
    height: 80%;
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
    font-size: 1.5rem;
    text-align: center;
    padding-left: 0%;
    max-width: 100%;
  }

  .card h2 {
    padding-left: 0%;
    margin-top: 1.6rem;
    max-width: 100%;
    font-size: 1.1rem;
    text-align: center;
  }

  .ylwbutton {
    width: 100%;
    height: 100%;
    scale: 3;
    padding-bottom: 25%;
  }
}

@media (max-width: 480px) {
  .herocontainer {
    height: 30vh;
    background-position: center;
  }

  .hands {
    scale: 0.5;
    gap: 50%;
  }

  .centertext {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
  .headliner {
    font-size: 2.5rem;
    margin-top: 18%;
    max-width: 100%;
    padding: 0;
  }

  .questcontainer h1 {
    max-width: 90%;
    font-size: 1.5rem;
  }
  .maintext {
    max-width: 90%;
  }

  .ylwbutton {
    width: 100%;
    height: 100%;
    scale: 3;
    padding-bottom: 25%;
  }

  .questcontainer {
    // margin-top: 35%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 0%;
    padding: 0;
    margin: 0%;
  }

  .container-card {
    width: 80%;
    // height: 100%;
    margin-top: 5%;
    padding-top: 3%;
    align-items: center;
    justify-content: center;
  }
  .card {
    // scale: 0.9;
    width: 100%;
    height: 100%;
    margin-top: 5%;
    padding-top: 3%;
    align-items: center;
    justify-content: center;
    background-image: url("../assets/img/aftenramme.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .card h2 {
    max-width: 100%;
  }
  .info h1 {
    font-size: 1.5rem;
    max-width: 100%;
  }

  .info h2 {
    font-size: 1.2rem;
    text-align: center;
    padding: 0;
    margin-bottom: 5%;
  }

  .headliner2 {
    font-size: 1.8rem;
    max-width: 90%;
    text-align: center;
    padding-top: 60%;
  }

  .lorecontainer p {
    max-width: 90%;
  }
}

@media (max-width: 360px) {
  .hands {
    display: none;
  }
  .container-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    z-index: 3;
  }

  .card {
    width: 115%;
    height: 80%;
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
    font-size: 1.3rem;
    text-align: center;
    padding-left: 0%;
    max-width: 100%;
  }

  .card h2 {
    padding-left: 0%;
    margin-top: 1.6rem;
    max-width: 100%;
    font-size: 1.1rem;
    text-align: center;
  }

  .ylwbutton {
    width: 100%;
    height: 100%;
    scale: 3;
    padding-bottom: 25%;
  }
}

</style>