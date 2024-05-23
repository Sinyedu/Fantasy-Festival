<template>
    <footer class="footer raleway-font">
      <div class="footer-content">
        <div class="footer-column">
          <ul class="footer-list">
            <li class="footer-item">Word 1</li>
            <li class="footer-item">Word 2</li>
            <li class="footer-item">Word 3</li>
          </ul>
        </div>
        <div class="footer-column">
          <ul class="footer-list">
            <li class="footer-item">Word 4</li>
            <li class="footer-item">Word 5</li>
            <li class="footer-item">Word 6</li>
          </ul>
        </div>
        <div class="footer-column footer-logo">
          <img src="../assets/img/logo.png" alt="Logo">
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    height: 35vh;
    width: 100%;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-column {
    flex: 1;
    padding: 10px;
  }
  
  .footer-list {
    list-style: none;
    padding: 0;
  }
  
  .footer-item {
    margin-bottom: 10px;
  }
  
  .footer-logo img {
    max-width: 100px;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .footer-column {
      width: 100%;
      margin-bottom: 20px;
    }
  
    .footer-logo {
      align-self: center;
    }
  }
  </style>
  