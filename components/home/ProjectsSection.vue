<template>
  <BaseSection id="projects" class="home-projects-section">
    <h2 class="title section-title alternate my-0">Featured Projects</h2>
    <div class="home-projects-section__project left">
      <div class="home-projects-section__image">
        <img
          src="/images/home/projects/tstp/desktop.jpg"
          class="home-projects-section__image is-brutal"
          alt="Screen capture of the Take Space to Pause website."
        />
      </div>
      <div class="home-projects-section__copy">
        <h2>Take Space to Pause</h2>
        <span>
          <a href="https://takespacetopause.org/" target="_blank">takespacetopause.org</a>
        </span>
        <ul class="home-projects-section__icons">
          <li><img src="/images/icons/nuxt.svg" title="Nuxt.js" alt="Nuxt.js logo." /></li>
          <li><img src="/images/icons/sass.svg" title="SASS" alt="SASS logo." /></li>
          <li><img src="/images/icons/aws.svg" title="AWS" alt="AWS logo." /></li>
        </ul>
        <p>
          Take Space to Pause is a multi-lingual platform where teenagers can learn how to identify &amp; reduce stress.
          It was built to comply WCAG 2.1 compliance standards.
        </p>
        <p>
          The biggest challenge with this site was building the
          <strong>Plan Your Pause</strong>
          digital experience. The Plan Your Pause tool is a dynamically-branching quiz, built with Vuex. It guides users
          through a personalized journey based on their responses, across multiple thematic sections (Body, Thoughts,
          Connection). Within the quiz logic, each step is defined in a configurable steps array, and user inputs shape
          both the flow and the resulting plan. Behind the scenes, it:
        </p>
        <ul class="home-projects-section__descriptive-list">
          <li>Tracks step progression and completion state</li>
          <li>Saves key decisions like mood, answers, and selected “plans”</li>
          <li>
            Dynamically calculates quiz progress and renders contextual components (e.g., questions, intros, results)
          </li>
          <li>Supports ~200 branching outcomes in both English and Spanish</li>
        </ul>
        <p>Optimizations such as smooth, animated transitions and state-saving create a seamless experience.</p>
      </div>
    </div>
    <div class="home-projects-section__project right">
      <div class="home-projects-section__image">
        <img
          src="/images/home/projects/zbv/desktop.jpg"
          class="home-projects-section__image is-brutal"
          alt="Screen capture of the ZBV Invitational website."
        />
      </div>
      <div class="home-projects-section__copy">
        <h2>ZBV Invitational Golf Tournament</h2>
        <span>Coming soon! (ETA June 2025)</span>
        <ul class="home-projects-section__icons">
          <li><img src="/images/icons/laravel.svg" title="Laravel" alt="Laravel logo." /></li>
          <li><img src="/images/icons/inertia.svg" title="Inertia.js" alt="Inertia logo." /></li>
          <li><img src="/images/icons/vue.svg" title="Vue.js" alt="Vue logo." /></li>
          <li><img src="/images/icons/stripe.svg" title="Stripe" alt="Stripe logo." /></li>
        </ul>
        <p>
          The Zeke Bondy-Villa Invitational Golf Tournament is a 501(c)(3) charity I do pro-bono work for. Over the last
          several months, I've undertaken a complete re-build of the site from the ground up. This includes a much
          faster front-end, built using Inertia.js and Vue.
        </p>
        <p>
          Being a charity and a golf tournament, there are several important e-commerce aspects to this site as well.
          Using Laravel + Laravel Cashier + Stripe, I have built a full-fledged platform for managing donations,
          registering for tournaments, and managing sponsors.
        </p>
      </div>
    </div>
    <div class="home-projects-section__project left">
      <div class="home-projects-section__image">
        <img
          src="/images/home/projects/personal/generic.jpg"
          class="home-projects-section__image is-brutal"
          alt="Pixelated icons of various computer-related items, such as a cursor, pointer, screen, and hour glass."
        />
      </div>
      <div class="home-projects-section__copy">
        <h2>Quit the Hit - Revitalizing a legacy codebase</h2>
        <ul class="home-projects-section__icons">
          <li><img src="/images/icons/node.svg" title="Node.js" alt="Node.js logo." /></li>
          <li><img src="/images/icons/sequelize.svg" title="Sequelize.js" alt="Sequelize logo." /></li>
        </ul>
        <p>
          I didn't build this project, but I was brought in to save it. Quit the Hit is a teen vaping cessation
          platform, that over the years, gradually exceeded it's technical limitations, resulting in long (>60 second)
          loading times, and the occasional memory exhaustion crash.
        </p>
        <p>
          The task was simple: make it usable again. The first step here was profiling the optimizing the least
          efficient queries, eliminating n+1 patterns. Next, I offloaded several expensive calculations from the
          front-end into Sequelize virtual columns, greatly improving performance. However, I didn't stop there. I
          rebuilt several front-end components from scratch, utilizing strategies such as lazy loading and pagination to
          seamlessly render views. Bloated datatables were replaced with high-performance, scalable tables, all while
          maintaining backwards-compatability.
        </p>
        <p>
          <strong>The result?</strong>
          Page loading times between 2 and 3.5 seconds and a few tears of joy from the admin who had to work in here on
          a day-to-day basis.
        </p>
      </div>
    </div>
    <div class="home-projects-section__project right">
      <div class="home-projects-section__image">
        <img
          src="/images/home/projects/personal/flagle.jpg"
          class="home-projects-section__image is-brutal"
          alt="Screen capture of the Flagle website."
        />
      </div>
      <div class="home-projects-section__copy">
        <h2>Flagle</h2>
        <span><a href="https://andydeforest.github.io/flagle/" target="_blank">andydeforest.github.io/flagle</a></span>
        <ul class="home-projects-section__icons">
          <li><img src="/images/icons/nuxt.svg" title="Nuxt.js" alt="Nuxt.js logo." /></li>
          <li><img src="/images/icons/github-actions.svg" title="GitHub Actions" alt="GitHub Actions logo." /></li>
        </ul>
        <p>
          A simple (and hopefully addicting) flag geo-guessing game. A flag is shown to the user, who then gets 6 tries
          to guess which country it belongs to! If a wrong answer is guessed, the user is shown the distance between
          their guess and the correct answer, as well as the relative direction.
        </p>
        <p>
          The game was built as a fun weekend project on Nuxt and deployed to GitHub Pages using GitHub Actions. Behind
          the scenes, it uses a custom JSON file with every country listed, as well as it's geographic center for
          distance calculations. It uses fuse.js for fuzzy searching, as well as Pinia for guess and statistics
          tracking. The Pinia instance persists using local storage so if the user inavertently refreshes, or wants to
          come back later, their progress is saved.
        </p>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss">
  .home-projects-section {
    background-color: #f9f5f2;
    text-align: center;
    display: flex;
    flex-direction: column;

    &__project {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &:not(:last-of-type) {
        margin-bottom: 5rem;
      }

      @include mixins.desktop {
        flex-direction: row;

        &.right {
          flex-direction: row-reverse;
        }

        > * {
          flex: 1;
        }
      }
    }

    &__image {
      display: flex;
      align-items: center;
      border-radius: 6px;

      @include mixins.desktop {
        border-radius: $global-border-radius;
      }
    }

    &__copy {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      text-align: left;

      @include mixins.desktop {
        padding: 1rem;
      }

      h2 {
        font-size: 2rem;
      }

      strong {
        color: $text;
      }

      a {
        text-decoration: underline;
        font-weight: 700;
        color: $link-color;
        font-size: 1rem;
        font-family: monospace;
      }

      p {
        line-height: 1.6;
      }
    }

    &__descriptive-list {
      list-style: disc;

      li {
        margin-left: 2rem;
        margin-bottom: 0.25rem;
      }
    }

    &__icons {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      li {
        display: flex;
        align-items: center;
      }

      img {
        height: 32px;
        width: auto;
      }
    }
  }
</style>
