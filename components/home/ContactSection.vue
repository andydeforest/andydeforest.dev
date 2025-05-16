<template>
  <BaseSection id="contact" class="home-contact-section">
    <h2 class="title alternate mb-0 pb-0">Let's Connect</h2>
    <p>
      Whether you're interested in working together, talking shop, or just want to say hi — I’d love to hear from you.
      Reach out throught a link below:
    </p>
    <ul>
      <li>
        🧠
        <a href="https://www.linkedin.com/in/andrew-de-forest-3a15235b/" target="_blank">LinkedIn</a>
      </li>
      <li>
        💻
        <a href="https://github.com/andydeforest/" target="_blank">GitHub</a>
      </li>
      <li>
        ✉️
        <a v-if="!emailVisible" href="#" target="_blank" @click="toggleEmail">E-mail</a>
        <template v-else>
          <span v-if="waiting" class="home-contact-section__loading">Loading, one moment</span>
          <span v-else>andydeforest (at) gmail (dot) com</span>
        </template>
      </li>
      <li>
        📝
        <BaseResumeLink />
      </li>
    </ul>
  </BaseSection>
</template>

<script setup lang="ts">
  const emailVisible = ref(false);
  const waiting = ref(false);

  function toggleEmail(e) {
    emailVisible.value = true;
    waiting.value = true;
    setTimeout(() => {
      waiting.value = false;
    }, 3000);
    e.preventDefault();
  }
</script>

<style lang="scss">
  .home-contact-section {
    background-color: $neo-purple;

    .container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    p {
      font-size: 1.5rem;

      @include mixins.desktop {
        font-size: 2rem;
        text-align: center;
      }
    }

    h2 {
      @include mixins.desktop {
        text-align: center;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      text-align: center;

      @include mixins.tablet {
        justify-content: center;
        flex-direction: row;
      }

      li {
        font-size: 1.5rem;

        @include mixins.desktop {
          font-size: 2rem;
        }

        a {
          color: $link-color;
          text-decoration: underline;
        }
      }
    }
  }
</style>
