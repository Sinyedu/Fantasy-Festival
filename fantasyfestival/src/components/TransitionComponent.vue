<template>
  <transition name="fade">
    <RouterView />
  </transition>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>