<script setup>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />
  <div class="base-layout">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss">
  @import "@/styles/main.scss";
</style>
