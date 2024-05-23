<template>
    <div class="masterfooter">
      <footer class="footer raleway-font bg-teal-900 text-cream p-5 h-92">
        <div class="footer-content flex justify-between items-center max-w-6xl mx-auto">
          <div class="footer-column flex-1 p-2">
            <ul class="footer-list list-none p-0">
              <li class="footer-item py-1">Køb billetter</li>
              <li class="footer-item py-1">Familie Quest</li>
              <li class="footer-item py-1">Aften Quest</li>
            </ul>
          </div>
          <div class="footer-column flex-1 p-2">
            <ul class="footer-list list-none p-0">
              <li class="footer-item py-1">FAQ</li>
              <li class="footer-item py-1">Kontakt os</li>
              <li class="footer-item py-1">Link til Fantasyfestivalen</li>
            </ul>
          </div>
          <div class="footer-column footer-logo flex-1 p-2 flex justify-end">
            <img src="../assets/img/logogultekst.png" alt="Logo" class="max-w-24">
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

.footer-item {
    display: flex;
    justify-content: start;
}


.footer-column {
    display: flex;
    flex-direction: row;
    /* justify-content: start; */
}


.footer-column img {
    scale: 3.3;
}

  li {
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
  }
  
  .bg-teal-900 {
    background-color: #083A35;
  }
  
  .text-cream {
    color: #ede6d6;
  }
  
  .max-w-24 {
    max-width: 100px;
  }
  </style>
  