<script setup>
  import { ref, computed } from "vue";
  import Input from "@/components/UI/Input.vue";

  const person = ref({
    name: "",
    age: "",
    childs: [],
  });

  const child = ref({
    name: "",
    age: "",
  });

  const saveValues = () => {
    console.log(person.value);
  };
</script>

<template>
  <div class="page form">
    <section class="form__person">
      <h3>Персональные данные</h3>
      <Input
        v-model="person.name"
        label="Имя"
        @change="saveValues"
      />
      <Input
        v-model="person.age"
        label="Возраст"
        @change="saveValues"
      />
    </section>

    <section class="form__child">
      <h3>Дети (макс. 5)</h3>
      <Input
        v-model="child.name"
        label="Имя"
        @change="saveValues"
      />
      <Input
        v-model="child.age"
        label="Возраст"
        @change="saveValues"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/pages/styles/_page.scss";
  @import "@/pages/styles/_Form.scss";
</style>
