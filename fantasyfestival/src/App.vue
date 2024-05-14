<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Quest</RouterLink>
        <RouterLink to="/familie">Familie Quest</RouterLink>
        <RouterLink to="/aften">Aften Quest</RouterLink>
      </nav>
    </div>
  </header>
  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>
</template>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 1.5s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  position: absolute;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a {
  margin-right: 1rem;
}

#app {
  overflow: hidden;
}
</style>
