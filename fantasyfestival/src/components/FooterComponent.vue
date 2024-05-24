<template>
  <div :class="footerClass" id="scrolltoFooter">
    <footer class="footer raleway-font">
      <div class="footer-content">
        <div class="footer-column">
          <ul class="footer-list">
            <li class="footer-item1"><a href="https://www.universe.com/explore?query=fantasy&loc=Esbjerg%252C%2520Danmark&ll=55.476466%252C8.459405">Køb billetter</a></li>
            <li class="footer-item1"><a href="/familie">Familie Questen</a></li>
            <li class="footer-item1"><a href="/aften">Aften Questen</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <ul class="footer-list">
            <li class="footer-item2"><a href="/#faq">FAQ</a></li>
            <li class="footer-item2"><a href="#">Kontakt os</a></li>
            <li class="footer-item2"><a href="#">Link til Fantasyfestivalen</a></li>
          </ul>
        </div>
        <div class="footer-column footer-logo">
          <img :src="logoSrc" alt="Logo" class="logo-img">
        </div>
      </div>
    </footer>
  </div>
</template>
  
<script>
  export default {
    name: 'FooterComponent',
  };
</script>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import logogreen from '../assets/img/logogreentekst.png';
import logocream from '../assets/img/logobeigetekst.png';

const route = useRoute();
const footerClass = ref('masterfooter default-footer');
const logoSrc = ref(logogreen);

const updateFooterClass = () => {
  switch (route.path) {

    case '/familie':
      footerClass.value = 'masterfooter familie-footer';
      logoSrc.value = logocream;
      break;

    case '/aften':
      footerClass.value = 'masterfooter aften-footer';
      logoSrc.value = logogreen;
      break;

    default:
      footerClass.value = 'masterfooter default-footer';
      logoSrc.value = logocream;
      break;
  }
};

watch(route, updateFooterClass);

updateFooterClass();
</script>
  
<style scoped lang="scss">
  .masterfooter {
    width: 100%;
    height: 250px;
  }
  
  .footer {
    background-color: #083A35;
    color: #ede6d6;
    padding-top: 3.5%;
    padding-left: 5%;
  }

  .default-footer .footer {
  background-color: #083A35;
}

.familie-footer .footer {
  background-color: #083a35; 
  height: 300px;
}

.aften-footer .footer {
  background-color: #ede6d6;
  color: #083a35;
}
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .footer-column {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  
  .footer-list {
    list-style: none;
    padding: 0;
  }

  .footer-list a{
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-list a:hover{
    text-decoration: underline;
  }
  
  .footer-item1 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .footer-item2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    position: relative;
    left: -80%;
  }
  
  .footer-logo {
    display: flex;
    justify-content: end;
    padding-right: 2.5%;
  }
  
  .logo-img {
    max-width: 350px;
  }
  </style>
  