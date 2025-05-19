<template>
  <BaseSection id="about" class="home-shine-section">
    <h2 class="title section-title">Where I Shine</h2>
    <div class="home-shine-section__cards">
      <BaseCard
        :image="{
          src: '/images/home/tools.svg',
          alt: 'A briefcase with a cog in front of it.'
        }"
        title="An Extensive Toolbelt"
        body="With over a decade of experience across nearly all facets of development, I've come to know which tools solve problems—rather than create them."
        :card-icons="[
          {
            src: '/images/icons/git.svg',
            name: 'Git'
          },
          {
            src: '/images/icons/jira.svg',
            name: 'Jira'
          },
          {
            src: '/images/icons/aws.svg',
            name: 'AWS'
          },
          {
            src: '/images/icons/figma.svg',
            name: 'Figma'
          }
        ]"
      >
        <template #cta>
          <BaseCta to="/#projects">Learn More</BaseCta>
        </template>
      </BaseCard>
      <BaseCard
        :image="{
          src: '/images/home/front-end.svg',
          alt: 'A two-dimensional laptop with the outline of an eye over it.'
        }"
        title="Front-End"
        body="I love reusability! I craft front-ends to scale over the product lifecycle, rather than relying on duct tape or tangled stylesheets!"
        :card-icons="[
          {
            src: '/images/icons/vue.svg',
            name: 'Vue'
          },
          {
            src: '/images/icons/react.svg',
            name: 'React'
          },
          {
            src: '/images/icons/typescript.svg',
            name: 'Typescript'
          },
          {
            src: '/images/icons/sass.svg',
            name: 'SASS'
          }
        ]"
      >
        <template #cta>
          <BaseCta to="/#contact">Reach Out</BaseCta>
        </template>
      </BaseCard>
      <BaseCard
        :image="{
          src: '/images/home/back-end.svg',
          alt: 'A web page with a cog overlayed on top of it.'
        }"
        title="Back-End"
        body="Let's make your back-end boring! I value stability, predictability, and a general lack of drama in my API designs."
        :card-icons="[
          {
            src: '/images/icons/php.svg',
            name: 'PHP'
          },
          {
            src: '/images/icons/laravel.svg',
            name: 'Laravel'
          },
          {
            src: '/images/icons/node.svg',
            name: 'Node.js'
          },
          {
            src: '/images/icons/postgres.svg',
            name: 'PostgresQL'
          }
        ]"
      >
        <template #cta>
          <BaseCta to="/#contact">Let's Connect</BaseCta>
        </template>
      </BaseCard>
    </div>
    <div class="home-shine-section__list">
      <h2 class="title section-title">
        Where I
        <i>Don't</i>
        Shine
      </h2>
      <ul>
        <li class="home-shine-section__list-item">
          <span>🖥️</span>
          Keeping my desktop tidy. Please ignore those 300 shortcuts.
        </li>
        <li class="home-shine-section__list-item">
          <span>📚</span>
          Finishing books. I've read about 75% of everything.
        </li>
        <li class="home-shine-section__list-item">
          <span>📝</span>
          Making lists. //TODO: finish this list.
        </li>
      </ul>
    </div>
  </BaseSection>
</template>

<style lang="scss">
  .home-shine-section {
    background-color: #c6f9b4;

    .container {
      display: flex;
      flex-direction: column;
    }

    h2 {
      text-align: center;
    }

    &__cards {
      display: flex;
      flex-direction: column;
      gap: 6rem;

      @include mixins.desktop {
        gap: 3rem;
      }

      .base-card {
        padding-top: 0 !important;
        overflow: visible !important;
        margin-top: 5rem;

        /* stylelint-disable-next-line max-nesting-depth */
        &__image {
          display: flex;
          justify-content: center;
          margin-top: -5rem;
        }
      }

      @include mixins.desktop {
        flex-direction: row;

        > * {
          flex: 1;
        }
      }
    }

    &__list {
      text-align: center;
      margin-top: 5rem;

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    &__list-item {
      display: flex;
      gap: 1rem;
      font-size: 1.5rem;
      font-weight: 300;
      text-align: left;
      color: $text;

      span {
        display: flex;
        align-items: flex-start;

        @include mixins.desktop {
          align-items: center;
        }
      }

      @include mixins.desktop {
        font-size: 2rem;
      }
    }
  }
</style>
