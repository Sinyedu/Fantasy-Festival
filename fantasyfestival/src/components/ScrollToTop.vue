<template>
  <button class="scrollbtn" v-if="isVisible" @click="scrollToTop">
    <span class="text-2xl" aria-hidden="true">
      <svg
        class="arrow w-9 h-9"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    toggleVisibility() {
      this.isVisible = window.scrollY > 1000;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.toggleVisibility);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.toggleVisibility);
  },
};
</script>

<style lang="scss" scoped>
.scrollbtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #6f9131;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0.7;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 999;
}
.scrollbtn:hover {
  opacity: 1;
}

.arrow {
  transform: rotate(-90deg);
  width: 24px;
  height: 24px;
}

@media (max-width: 1024px) {
  .scrollbtn {
display: none;
  }
  .arrow {
    display: none;
  }

  .scrollbtn:hover {
    display: none;
  }
}


@media (max-width: 768px) {
  .scrollbtn {
    bottom: 15px;
    right: 15px;
    height: 50px;
    width: 50px;
  }
  .arrow {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .scrollbtn {
    bottom: 10px;
    right: 10px;
    height: 40px;
    width: 40px;
  }
  .arrow {
    width: 16px;
    height: 16px;
  }
}
</style>
