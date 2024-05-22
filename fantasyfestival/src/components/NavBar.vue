<template>
  <div class="navbarcomp">
    <div class="brand">
      <div class="logo">
        <h1>Logo</h1>
        <!-- <img src="#" alt="Logo"> -->
      </div>

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
.navbarcomp{
  z-index: 99999;
  /* position: absolute; */
}

.brand{
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding-left: 1rem;
}

.logo{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 2%; */
  width: 5%;
  height: 7.5vh;
  background-color: #ede6ed;
}

.logo h1{
  font-size: 1.5rem;
  color: #efba12;
  margin-top: 1rem;
}

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
  top: 18%; 
  right: 4.1%; 
  background-color: #ede6d6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 4px;
  z-index: 999;
  width: 200px; 
  font-weight: bold;
}

.dropdown-menu a {
  display: block;
  padding: 8px 10px;
  color: #333;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background-color: #d8d2c4;
}


</style>
