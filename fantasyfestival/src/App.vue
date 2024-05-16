<template>
  <header>
    <div class="wrapper" :class="{ 'fade-out': fading }">
      <nav>
        <RouterLink to="/">Quest</RouterLink>
        <RouterLink to="/familie">Familie Quest</RouterLink>
        <RouterLink to="/aften">Aften Quest</RouterLink>
      </nav>
    </div>
  </header>
  <Transition name="fade" mode="out-in" @before-enter="beforeEnter" @after-enter="afterEnter">
    <RouterView />
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const fading = ref(false)

const beforeEnter = () => {
  fading.value = true
}

const afterEnter = () => {
  fading.value = false
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s ease;
}
.fade-enter-from, .fade-leave-to {
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

.wrapper {
  opacity: 1;
  transition: opacity 0.75s ease;
}

.wrapper.fade-out {
  opacity: 0;
}
</style>
