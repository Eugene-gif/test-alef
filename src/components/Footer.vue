<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <p class="footer__text">all rights reserved</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    background-color: #fafafa;
    height: var(--height);
    display: flex;
    align-items: center;
    justify-content: center;

    &__text {
      text-align: center;
      color: var(--black);
    }
  }
</style>
