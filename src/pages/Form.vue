<script setup>
  // import { ref } from "vue";
  import Input from "@/components/UI/Input.vue";
  import Button from "@/components/UI/Button.vue";
  import Card from "@/components/Card.vue";
  import { person, Child } from "@/models/personModel";

  const emit = defineEmits("onDelete");

  const addItem = () => {
    person.value.childs.push(new Child());
  };

  const deleteItem = (index) => {
    person.value.childs.splice(index, 1);
  };

  const saveData = () => {
    localStorage.setItem("personData", JSON.stringify(person.value));
  };
</script>

<template>
  <div class="page form">
    <section class="form__section section">
      <h3>Персональные данные</h3>
      <Input
        v-model="person.name"
        label="ФИО"
      />
      <Input
        v-model="person.age"
        label="Возраст"
        type="number"
      />
    </section>

    <section class="form__section section">
      <div class="section__header">
        <h3>Дети (макс. 5)</h3>
        <Button
          v-if="person.childs.length < 5"
          label="Добавить ребенка"
          plus
          class="outline"
          @click="addItem"
        />
      </div>

      <template v-if="person.childs.length">
        <div class="section__list">
          <template
            v-for="(child, index) in person.childs"
            :key="index"
          >
            <Card
              :child="child"
              @onDelete="deleteItem(index)"
            />
          </template>
        </div>
      </template>

      <template v-else>
        <div class="empty">Список пуст</div>
      </template>

      <template
        v-if="person.childs.length || person.name || person.age"
      >
        <Button
          label="Сохранить"
          @click="saveData"
        />
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/_page.scss";
  .form {
    .section {
      margin-bottom: 30px;

      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        gap: 10px;
        flex-wrap: wrap;

        h3 {
          margin: 0;
        }

        .btn {
          margin-left: auto;
        }
      }

      &__list {
        margin-bottom: 20px;
      }
    }
  }
</style>
