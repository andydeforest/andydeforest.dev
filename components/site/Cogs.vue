<template>
  <div class="site-cogs">
    <Cogs />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import Cogs from '~/public/images/cogs.svg';

  function handleScroll() {
    const scrollY = window.scrollY;

    const cog1 = document.querySelector('.site-cogs #cog-1') as HTMLElement | null;
    const cog2 = document.querySelector('.site-cogs #cog-2') as HTMLElement | null;

    const rotationModifier: number = 0.2;

    if (cog1) {
      cog1.style.transform = `rotate(${scrollY * rotationModifier}deg)`;
    }

    if (cog2) {
      cog2.style.transform = `rotate(${-scrollY * (rotationModifier * 0.9)}deg)`;
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<style lang="scss">
  .cog {
    transform-box: fill-box;
    transform-origin: center;

    // animation: spin 4s linear infinite;

    &--2 {
      animation-direction: reverse;
      animation-duration: 6s;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
