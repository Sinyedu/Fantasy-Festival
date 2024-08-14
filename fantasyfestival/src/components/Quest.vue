<template>
    <div class="herocontainer">
      <div class="hero">
        <img class="gnist" />
      </div>
      <div class="hands">
        <img src="../assets/img/lefthand.png" alt="Gnist's venstre hånd" />
        <img src="../assets/img/righthand.png" alt="Gnist's venstre hånd" />
      </div>
    </div>

    <div class="titlecontainer">
      <div class="centertext">
        <h1 class="headliner font-bold text-7xl text-center">{{ title }}</h1>
      </div>
    </div>

    <div class="questcontainer">
      <div class="infotext">
        <h1 class="headliner2 font-bold text-3xl">
          Deltag i en eventyrlig oplevelse
        </h1>
        <p class="maintext raleway-font">
          Familieudgaven af Fantasy Quest Esbjerg er et oplevelsesløb for hele
          familien, med tryk på oplevelse. For det er ikke et klassisk løb. Det
          handler om at leve sig ind i en anden verden, en magisk historie, hvor
          I sammen er på en ”quest” – en mission, en opgave, en jagt.
          <br /><br />
          Her møder I magiske væsner, der stiller jer nogle opgaver og
          udfordringer undervejs mod målet, som I skal løse sammen for at
          gennemføre Questen.
          <br /><br />
          Sværhedsgraden er sænket, så børnene kan være med til at løse
          opgaverne. Men tag ikke fejl, der er brug for alle gode kræfter og
          samarbejdsevner, hvis I skal være med til at redde Esbjerg.
          <br /><br />
          Som en ekstra bonus kan I møde YouTuberen Lakserytteren undervejs i
          Questen rundt i Esbjergs gader.
        </p>
      </div>

      <!-- Dynamically retrieves the general information about the evening quest -->
      <div class="container-card">
        <a href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3?ref=universe-discover"
          target="_blank">
          <div class="book">
            <img class="ylwbutton" src="../assets/img/yellow buttentext.png" alt="Book Nu Knap" />
          </div>
        </a>
        <!-- Dynamically retrieved content from getInfo.js -->
        <div v-for="dayDetail in dayDetails" :key="dayDetail.id" class="card raleway-font">
          <div class="info-data">
            <div class="info">
              <h1 class="titletext">{{ dayDetail.title }}</h1>
              <h2 class="date">{{ dayDetail.date }}</h2>
              <h2 class="time">{{ dayDetail.time }}</h2>
              <h2 class="location">{{ dayDetail.location }}</h2>
              <h2 class="duration">{{ dayDetail.duration }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video trailer for the evening quest -->
    <AftenFamilieVideo />
    <!-- Lore for the quest-->
    <div class="lorecontainer">
      <div class="infotext2">
        <h1 class="headliner2 font-bold text-3xl pb-9">
          I gamle dage sagde man...
        </h1>
        <p class="maintext raleway-font text-2xl">
          ...at det onde ville komme fra havet. Gennem generationer blev den
          fortælling givet videre. Man hørte den, da Esbjerg blev grundlagt i
          1868. Man holdt altid øje med havet. Mod vest.
          <br /><br />
          Så i Esbjerg byggede man et værn mod ondskaben. Noget der skulle holde
          øje med havet, noget der skulle træde i karakter, hvis det gik galt. I
          1995 blev det værn forstærket, da skulpturerne ”Mennesket ved havet”
          blev skabt. Mens kunstneren byggede om dagen, arbejdede troldmanden
          Gygaz den Vise om natten.
          <br /><br />
          Gygaz åbnede en portal til kæmpernes verden. Her fandt han frem til
          fire gode kæmper, der meldte sig frivilligt. De sagde farvel til deres
          familier og travede gennem portalen mod Esbjerg. Her mødtes de med
          Gygaz. Luften sitrede af magi, og da de sidste ord i en magtfuld
          formular forlod Gygaz’ læber, var de fire kæmper blevet ét med
          statuerne af de fire hvide mænd. På den måde kunne de til evig tid
          holde øje med havet…
        </p>
      </div>
      <img class="dragonkin" src="../assets/img/dragonkin.png" alt="Gnist Humanoid" />
    </div>
</template>

<script setup>
    defineProps(["title"]);
</script>

<style lang="scss" scoped>

</style>