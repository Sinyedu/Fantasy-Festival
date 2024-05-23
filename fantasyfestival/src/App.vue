<template>
<!-- <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"> -->

  <header>
    <div class="wrapper" :class="{ 'fade-out': fading }">

    </div>
    <NavBar/>
  </header>

  <Transition mode="out-in" name="fade">
    <RouterView/>
  </Transition>
  <Footer/>
</template>



<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/FooterComponent.vue'



</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: 0.3s ease;
  opacity: 0;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
// .slide-fade-enter-active, .slide-fade-leave-active {
//   transition: all 1s ease;
// }
// .slide-fade-enter-from, .slide-fade-leave-to {
//   opacity: 0;
// }

body{
  font-family: RomanSD, sans-serif;
  background-color: #ede6d6;
}

header {
  // line-height: 1.5;
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
