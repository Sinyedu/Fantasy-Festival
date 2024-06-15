<template>
  <div class="aften">
    <Quest
      :content="infoDetails"
    />
  </div>
</template>


<script setup>
//Importing the general information about the evening quest
  import getInfoDetails from '@/modules/getNightInfo.js';
  const { infoDetails } = getInfoDetails();

  import Quest from "../components/Quest.vue";

</script>


<style lang="scss" scoped>
  .aften {
    background-color: var(--body-colour-dark);
  }

  :deep(.headliner), :deep(.headliner2) {
    color: var(--titletext-colour-dark);
  }

  :deep(.maintext) {
    color: var(--body-colour-light);
  }

  :deep(.info) {
    color: var(--body-colour-light);
  }

  :deep(.herocontainer) {
    background-image: url("../assets/img/aftengnist.png");
  }
  :deep(.card) {
    background-image: url("../assets/img/aftenramme.png");
  }
</style>