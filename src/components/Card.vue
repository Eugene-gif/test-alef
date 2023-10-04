<script setup>
  import Input from "@/components/UI/Input.vue";
  import Button from "@/components/UI/Button.vue";

  const props = defineProps({
    child: Object,
  });
</script>

<template>
  <div class="card">
    <Input
      v-model="child.name"
      label="Имя"
    />
    <Input
      v-model="child.age"
      label="Возраст"
    />
    <Button
      @click="$emit('onDelete')"
      label="Удалить"
      class="card__btn text"
    />
  </div>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    gap: 18px;
    align-items: center;
  }
</style>
