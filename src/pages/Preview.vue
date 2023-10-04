<script setup>
  const cachedPerson = JSON.parse(localStorage.getItem("personData"));
  console.log(cachedPerson);
</script>

<template>
  <div class="page preview">
    <h2>Preview</h2>
    {{ cachedPerson }}
  </div>
</template>

<style lang="scss" scoped>
  @import "@/pages/styles/_page.scss";
  @import "@/pages/styles/_Preview.scss";
</style>
