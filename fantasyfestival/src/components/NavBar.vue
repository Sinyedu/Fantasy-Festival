<template>
  <div class="hamburger-dropdown">
    <div class="hamburger-icon" @click="toggleDropdown">
      <div class=""></div>
      <div class=""></div>
      <div class=""></div>
    </div>


    <div v-if="isOpen" class="dropdown-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/familie">Familie Quest</router-link>
      <router-link to="/aften">Aften Quest</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import anime from 'animejs/lib/anime.es.js';

const isOpen = ref(false);

const closeDropdown = (event) => {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (dropdownMenu && !dropdownMenu.contains(event.target) && !event.target.closest('.hamburger-icon')) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
}

anime({
  targets: '.dropdown-menu a',
  translateX: 250,
  easing: 'easeInOutExpo'
});


</script>

<style scoped>
.hamburger-dropdown {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
}

.hamburger-icon {
  cursor: pointer;
  position: relative;
  width: 3%;
  margin-right: 1%;
  margin-top: 1%;
  height: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
  overflow: hidden;
}

.hamburger-icon div {
  height: 7px;
  background-color: #efba12;
  border-radius: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 30%; 
  right: 4.1%; 
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 4px;
  z-index: 999;
  width: 200px; 
}

.dropdown-menu a {
  display: block;
  padding: 8px 10px;
  color: #333;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background-color: #f0f0f0;
}


</style>
