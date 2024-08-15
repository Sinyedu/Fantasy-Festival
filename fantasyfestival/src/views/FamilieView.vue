<template>
  <div class="familie">
    <Quest
      :content="dayDetails"
    />
  </div>
</template>

<script setup>
  import getDayDetails from "@/modules/getDayInfo.js";
  const { dayDetails } = getDayDetails();

  import Quest from "../components/Quest.vue";
</script>

<style lang="scss" scoped>
  .familie :deep(.herocontainer) {
    background-image: url("../assets/img/familiegnist.png");
  }
</style>