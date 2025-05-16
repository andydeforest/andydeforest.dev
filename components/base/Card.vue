<template>
  <div class="base-card is-brutal">
    <div v-if="image" class="base-card__image">
      <img :src="image.src" :alt="image.alt" />
    </div>
    <div v-if="cardIcons?.length" class="base-card__icons">
      <template v-for="(icon, index) in cardIcons" :key="index">
        <a
          v-if="icon.href"
          :href="icon.href"
          :title="icon.name"
          target="_blank"
          rel="noopener noreferrer"
          class="base-card__icon-link"
        >
          <img :src="icon.src" :alt="`${icon.name} logo`" class="base-card__icon" />
        </a>
        <img v-else :src="icon.src" :alt="`${icon.name} logo`" :title="icon.name" class="base-card__icon" />
      </template>
    </div>
    <div class="base-card__content">
      <h3 class="base-card__title">
        <slot name="title">{{ title }}</slot>
      </h3>

      <div class="base-card__body">
        <slot name="body">{{ body }}</slot>
      </div>

      <div class="base-card__cta">
        <slot name="cta" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface CardImage {
    src: string;
    alt: string;
  }

  interface CardIcon {
    src: string;
    name: string;
    href?: string;
  }
  defineProps<{
    image?: CardImage;
    title?: string;
    body?: string;
    cardIcons?: CardIcon[];
  }>();
</script>

<style lang="scss">
  .base-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #fff;
    border-radius: $global-border-radius;
    overflow: hidden;
    padding: 1.25rem;

    &__image {
      img {
        object-fit: contain;
        max-height: 10rem;
        margin-bottom: 1rem;
      }
    }

    &__icons {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      img {
        max-height: 32px;
      }
    }

    &__title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      flex-grow: 1;
    }

    &__body {
      font-size: 1rem;
      flex-grow: 1;
    }

    &__cta {
      margin-top: auto;
      align-self: flex-start;
    }
  }
</style>
