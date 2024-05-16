<template>
  <div class="hamburger-dropdown">
    <!-- Hamburger icon -->
    <div class="hamburger-icon" @click="toggleDropdown">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- Dropdown menu -->
    <div v-if="isOpen" class="dropdown-menu">
      <!-- Menu items -->
      <router-link to="/">Home</router-link>
      <router-link to="/familie">Familie Quest</router-link>
      <router-link to="/aften">Aften Quest</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
}
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
  width: 10%;
  height: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
}

.hamburger-icon div {
  width: 25%;
  height: 7px;
  background-color: #182;
  transition: transform 0.3s, opacity 0.3s;
  border-radius: 15%;
}

.dropdown-menu {
  position: absolute;
  /* top: 100%; */
  /* left: 0; */
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 4px;
  z-index: 999;
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

.dropdown-menu.active {
  display: block;
}
</style>
