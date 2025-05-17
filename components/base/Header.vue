<template>
  <header class="base-header is-flex">
    <div class="container base-header__content">
      <div class="base-header__title">
        <NuxtLink to="/#home">Andrew De Forest</NuxtLink>
      </div>

      <nav class="base-header__nav-links is-hidden-mobile">
        <NuxtLink v-for="link in nav.topNav" :key="link.to" :to="link.to" class="base-header__nav-link">
          {{ link.label }}
        </NuxtLink>
        <BaseResumeLink />
      </nav>
      <div class="is-hidden-tablet">
        <BaseMobileNav />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  const nav = useNavStore();
</script>

<style lang="scss">
  .base-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $primary;
    border-bottom: 4px solid $text;
    font-family: $family-heading;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    padding: 0 $spacing-horizontal;
    height: $header-height;
    z-index: 9999;

    &__title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.3rem;
      font-size: 1.25rem;
      font-weight: 700;
      color: $text;
      text-decoration: none;
      border: 3px solid $text;
      padding: 0.5rem 1rem;
      background: #fff;

      a {
        color: $text;
      }

      @include mixins.desktop {
        font-size: 1.5rem;
      }
    }

    &__content {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__nav-links {
      display: flex;
      gap: 2rem;

      a {
        color: $text;
        font-weight: 500;
        text-decoration: none;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          height: 2px;
          width: 100%;
          left: 0;
          bottom: -4px;
          background: #000;
          transform: scaleX(0);
          transition: transform 0.2s ease-in-out;
          transform-origin: left;
        }

        &:hover::after {
          transform: scaleX(1);
        }
      }
    }
  }

  .base-header + * {
    margin-top: $header-height;
  }
</style>
