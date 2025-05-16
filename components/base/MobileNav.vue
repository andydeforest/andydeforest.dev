<template>
  <div class="base-mobile-nav">
    <div class="base-mobile-nav__handle">
      <button @click="isOpen = !isOpen">
        <component :is="isOpen ? X : Menu" :size="32" />
      </button>
    </div>
    <ClientOnly>
      <Teleport to="body">
        <div class="base-mobile-nav__menu is-brutal" :class="{ 'is-active': isOpen }">
          <nav>
            <NuxtLink v-for="link in nav.topNav" :key="link.to" v-bind="link" class="nav-link" @click="close">
              {{ link.label }}
            </NuxtLink>
            <BaseResumeLink @click="close" />
          </nav>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import { Menu, X } from 'lucide-vue-next';

  const isOpen = ref(false);
  const nav = useNavStore();

  function handleResize() {
    close();
  }

  function close() {
    isOpen.value = false;
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
</script>

<style lang="scss">
  .base-mobile-nav {
    &__handle {
      button {
        z-index: 9998;
        color: $text;
      }
    }

    &__menu {
      z-index: 9997;
      position: fixed;
      width: 92dvw;
      left: 4dvw;
      top: calc($header-height + 10px); // Keep fixed top anchor
      min-height: 250px;
      background-color: #ffc6d9;
      border-radius: $global-border-radius;
      transform: translateY(calc(-120% - $header-height));
      transition: transform 300ms ease;
      padding: 1rem;

      &.is-active {
        transform: translateY(0);
      }

      nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        text-align: center;
        font-size: 1.5rem;

        a {
          font-weight: 700;
          color: $text;
          text-decoration: underline;
        }
      }
    }
  }
</style>
