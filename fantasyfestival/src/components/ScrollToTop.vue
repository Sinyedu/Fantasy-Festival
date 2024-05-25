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
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 0.7;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.scrollbtn:hover {
  opacity: 1;
}

.arrow {
  transform: rotate(-90deg);
  size: 5%;
}
</style>
