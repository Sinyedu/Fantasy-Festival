<template>
  <header>
    <div id="app" class="wrapper" :class="{ 'fade-out': fading }"></div>
    <NavBar />
  </header>

  <Transition mode="out-in" name="fade">
    <RouterView />
  </Transition>
  <ScrollToTop />
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/FooterComponent.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
  
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
  opacity: 0;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body {
  font-family: RomanSD, sans-serif;
  background-color: #ede6d6;
}

header {
  max-height: 100vh;
  width: 100%;
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

.wrapper {
  opacity: 1;
  transition: opacity 0.75s ease;
}

.wrapper.fade-out {
  opacity: 0;
}
</style>
