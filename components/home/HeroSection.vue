<template>
  <BaseSection class="home-hero-section">
    <div class="home-hero-section__intro is-brutal">
      <p>
        Hello, my name is
        <strong>Andrew!</strong>
      </p>
      <h1>
        I'm a
        <span class="gradient-text">full-stack</span>
        web developer.
      </h1>
      <p>I'd love to help you convert ideas into fast, functional, and user-friendly web applications.</p>
      <div>
        <BaseCta to="/#contact">Let's Talk</BaseCta>
      </div>
    </div>
    <!--
    <div class="home-hero-section__image" />
    -->
  </BaseSection>
</template>

<script setup lang="ts">
  onMounted(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const percent = scrollY / (document.body.scrollHeight - window.innerHeight);
      const position = percent * 300;

      document.querySelectorAll('.gradient-text').forEach((el) => {
        (el as HTMLElement).style.backgroundPosition = `${position}% 50%`;
      });
    });
  });
</script>

<style lang="scss">
  .home-hero-section {
    display: flex;
    align-items: center;
    background-color: #f9f5f2;
    background-image: url('/images/home/hero-background-mobile.webp');
    background-size: cover;
    min-height: calc(100dvh - $header-height);

    @include mixins.desktop {
      background-image: url('/images/home/hero-background.webp');
    }

    .gradient-text {
      background: linear-gradient(135deg, $neo-purple 0%, #f97316 30%, #555 60%, $neo-purple 100%);
      background-size: 600%;
      background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
      transition: background-position 0.15s ease-out;
    }

    &__intro {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      z-index: 2;
      background-color: #f9f5f2;
      padding: 2rem;
      border-radius: $global-border-radius;

      @include mixins.desktop {
        max-width: 33vw;
        padding: 3rem;
      }

      h1 {
        font-size: 3rem;
        text-transform: uppercase;

        @include mixins.desktop {
          font-size: 5rem;
        }
      }

      strong {
        font-weight: 700;
      }

      p {
        font-size: 1.5rem;

        @include mixins.desktop {
          font-size: 2rem;
        }
      }
    }

    &__image {
      display: none;
      background-image: url('/images/home/intro.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;

      @include mixins.desktop {
        display: block;
      }
    }
  }
</style>
