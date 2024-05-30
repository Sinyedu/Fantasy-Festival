<template>
  <div class="navbarcomp">
    <div class="brand">
      <div class="logo">
        <a href="/"><img :src="logoSrc" alt="Logo"></a>
      </div>

      <div class="hamburger-dropdown">
        <div class="hamburger-icon" :class="dropdownIconClass" @click="toggleDropdown">
          <span class="line1"></span>
          <span class="line2"></span>
          <span class="line3"></span>
        </div>
    
        <div ref="dropdownMenu" v-show="isOpen" class="dropdown-menu">
          <router-link @click = "hideDropdown" to="/">Home</router-link>
          <router-link @click = "hideDropdown" to="/familie">Familie Quest</router-link>
          <router-link @click = "hideDropdown" to="/aften">Aften Quest</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import anime from 'animejs/lib/anime.es.js';
import logogreen from '../assets/img/logogreen.png';
import logogul from '../assets/img/logogul.png';

// Function that changes the colour of the dropdown menu based on the page you are on.
export default {
  setup() {
    const route = useRoute();
    const isOpen = ref(false);
    const logoSrc = computed(() => {
      switch (route.path) {
        case '/':
          return logogreen;
        case '/familie':
          return logogul;
        case '/aften':
          return logogul;
        default:
          return logogreen;
      }
    });

    // Animation for the dropdown menu.
    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
      const dropdown = document.querySelector('.dropdown-menu');

      if (isOpen.value) {
        anime({
          targets: dropdown,
          height: ['0%', '150px'],
          width: ['0%', '200px'],
          duration: 150,
          easing: 'easeInOutQuad'
        });
      } else {
        anime({
          targets: dropdown,
          height: ['150px', '0%'],
          width: ['200px', '0%'],
          duration: 150,
          easing: 'easeInOutQuad',
          complete: () => {
            dropdown.style.display = 'none';
            isOpen.value = false;
          }
        });
      }
    };

    const hideDropdown = () => {
      isOpen.value = false;
      const dropdown = document.querySelector('.dropdown-menu');

      anime({
        targets: dropdown,
        height: ['150px', '0%'],
        width: ['200px', '0%'],
        duration: 150,
        easing: 'easeInOutQuad',
        complete: () => {
          dropdown.style.display = 'none';
        }
      });
    };
    
    watch(route, () => {
      isOpen.value = false; // Close the dropdown when the route changes
    });

    const dropdownIconClass = computed(() => {
      switch (route.path) {
        case '/familie':
          return 'hamburger-icon familie-dropdown-icon';
        case '/aften':
          return 'hamburger-icon aften-dropdown-icon';
        default:
          return 'hamburger-icon default-dropdown-icon';
      }
    });


    return {
      logoSrc,
      isOpen,
      toggleDropdown,
      hideDropdown,
      dropdownIconClass

    };
  }
};
</script>


<style scoped>
.navbarcomp {
  z-index: 99999;
}

.brand {
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
}

.logo {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5%;
  height: 7.5vh;
  padding-top: 1%;
  scale: 1.3;
  left: 1.7%;
  z-index: 9999;
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
}

.hamburger-icon span {
  height: 7px;
  background-color: #efba12;
  border-radius: 5px;
}

.famille-dropdown-icon span {
  background-color: var(--dropdown-colour-dark);
}

.aften-dropdown-icon span {
  background-color: var(--dropdown-colour-dark);
}

.default-dropdown-icon span {
  background-color: var(--dropdown-colour-light);
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

@media (max-width: 1024px) {
  .hamburger-icon {
    width: 5%;
    margin-right: 1%;
    margin-top: 2%;
    height: 4vh;
  }

  .dropdown-menu {
    top: 7%; 
    right: 6%; 
    background-color: #ede6d6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 4px;
    z-index: 999;
    width: 200px; 
    font-weight: bold;
  }

  .logo {
    width: 12%;
    height: 20vh;
    padding-top: 3%;
    scale: 1.3;
    left: 1.7%;
  }
}

@media (max-width: 768px) {
  .hamburger-icon {
    width: 7%;
    margin-right: 1%;
    margin-top: 2%;
    height: 4vh;
  }

  .dropdown-menu {
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

  .logo {
    width: 12%;
    height: 20vh;
    padding-top: 5%;
    scale: 1.3;
    left: 1.7%;
  }
}

@media (max-width: 480px) {
  .hamburger-icon {
    width: 10%;
    margin-right: 1%;
    margin-top: 4%;
    height: 4vh;
  }

  .dropdown-menu {
    top: 6%; 
    right: 11%; 
    background-color: #ede6d6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 4px;
    z-index: 999;
    width: 200px; 
    font-weight: bold;
  }

  .logo {
    width: 12%;
    height: 20vh;
    padding-top: 8%;
    scale: 1.3;
    left: 1.7%;
  }
}


@media (max-width: 360px) {
  .hamburger-icon {
    width: 20%;
    margin-right: 1%;
    margin-top: 4%;
    height: 4vh;
  }

  .dropdown-menu {
    top: 6%; 
    right: 11%; 
    background-color: #ede6d6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 4px;
    z-index: 999;
    width: 200px; 
    font-weight: bold;
  }

  .logo {
    width: 12%;
    height: 20vh;
    padding-top: 8%;
    scale: 1.3;
    left: 1.7%;
  }
}
</style>