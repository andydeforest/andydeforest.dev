<template>
  <section
    class="section base-section"
    :class="{ 'p-0': props.noContainer, 'mx-0 px-0': props.noSpacingX, 'my-0 py-0': props.noSpacingY }"
  >
    <div
      v-if="!props.noContainer"
      class="container"
      :class="[props.noSpacingX && 'mx-0 px-0', props.noSpacingY && 'my-0 py-0']"
    >
      <slot />
    </div>
    <div v-else>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps<{
    noContainer?: boolean;
    noSpacingX?: boolean;
    noSpacingY?: boolean;
  }>();
</script>

<style scoped lang="scss">
  .base-section {
    &.no-padding {
      padding: 0 !important;
      margin: 0 !important;
    }

    .container {
      @include mixins.desktop {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
      }
    }
  }
</style>
