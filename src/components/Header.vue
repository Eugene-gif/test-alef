<script setup>
  import { ref } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <a
        class="header__logo"
        href="https://alef.im/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="logo.png"
          width="93"
          height="29"
          alt="logo"
        />
      </a>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link to="/">Форма</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/preview">Превью</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    height: var(--height);
    background-color: var(--white);
    box-shadow: 0 0 1px 0 var(--grey);

    &__logo {
      line-height: 0;
      img {
        width: 93px;
        height: 29px;
      }
    }

    &__container {
      display: flex;
      align-items: center;
      gap: 15px;
      height: 100%;
      width: 100%;
    }

    .nav {
      margin: 0 auto;

      &__list {
        display: flex;
        gap: 24px;
      }

      &__item a {
        color: var(--grey);
        &.router-link-active {
          color: var(--black);

          transition: all 0.3s;
        }
      }

      @media (max-width: 600px) {
        margin: 0 0 0 auto;
      }
    }
  }
</style>
