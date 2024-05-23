<template>
    <div class="masterfooter">
      <footer class="footer raleway-font">
        <div class="footer-content">
          <div class="footer-column">
            <ul class="footer-list">
              <li class="footer-item1">Køb billetter</li>
              <li class="footer-item1">Familie Quest</li>
              <li class="footer-item1">Aften Quest</li>
            </ul>
          </div>
          <div class="footer-column">
            <ul class="footer-list">
              <li class="footer-item2">FAQ</li>
              <li class="footer-item2">Kontakt os</li>
              <li class="footer-item2">Link til Fantasyfestivalen</li>
            </ul>
          </div>
          <div class="footer-column footer-logo">
            <img src="../assets/img/logogultekst.png" alt="Logo" class="logo-img">
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
  
  <style scoped lang="scss">
  .masterfooter {
    width: 100%;
  }
  
  .footer {
    background-color: #083A35;
    color: #ede6d6;
    padding-top: 2%;
    padding-left: 50px;
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
  