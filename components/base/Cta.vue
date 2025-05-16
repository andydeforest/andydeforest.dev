<template>
  <component
    :is="tag"
    :href="isAnchor ? href : undefined"
    :to="isNuxtLink ? to : undefined"
    :type="isButton ? type : undefined"
    class="base-cta is-brutal"
    :class="variantClass"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
  const props = defineProps<{
    to?: string;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'text';
  }>();

  const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void;
  }>();

  const isNuxtLink = computed(() => !!props.to);
  const isAnchor = computed(() => !!props.href && !props.to);
  const isButton = computed(() => !props.href && !props.to);

  const tag = computed(() => {
    if (isNuxtLink.value) return resolveComponent('NuxtLink');
    if (isAnchor.value) return 'a';
    return 'button';
  });

  const variantClass = computed(() => {
    switch (props.variant) {
      case 'secondary':
        return 'base-cta--secondary';
      case 'text':
        return 'base-cta--text';
      default:
        return 'base-cta--primary';
    }
  });

  function onClick(event: MouseEvent) {
    emit('click', event);
  }
</script>

<style scoped lang="scss">
  .base-cta {
    display: inline-block;
    font-family: $family-heading;
    text-align: center;
    text-decoration: none;
    background-color: #f7cb45;
    color: #000;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: $global-border-radius;
    transition: all linear 0.2s;

    &:hover {
      box-shadow: 3px 3px 0 #000;
    }

    &:active {
      transform: translate(0, 0);
      box-shadow: none;
    }

    &--secondary {
      background-color: #000;
      color: #fff;
    }

    &--text {
      border: none;
      background: none;
      color: inherit;
      padding: 0;
      text-decoration: underline;
    }
  }
</style>
