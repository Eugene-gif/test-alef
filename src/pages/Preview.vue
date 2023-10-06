<script setup>
  let cachedPerson;

  if (localStorage.getItem("personData")) {
    cachedPerson = JSON.parse(localStorage.getItem("personData"));
  } else {
    cachedPerson = {
      name: "",
      age: "",
      childs: [],
    };
  }
</script>

<template>
  <div class="page preview">
    <section class="preview__section section">
      <h3>Персональные данные</h3>
      <p>
        <span>{{ cachedPerson.name || "Без имени" }}</span
        >,
        <span>{{
          cachedPerson.age
            ? cachedPerson.age + " лет"
            : "Без возраста"
        }}</span>
      </p>
    </section>

    <section class="preview__section section">
      <h3>Дети</h3>

      <ul v-if="cachedPerson.childs.length">
        <li
          v-for="(child, index) in cachedPerson.childs"
          :key="index"
        >
          <span class="chips"
            >{{ child.name || "Без имени" }},
            {{
              child.age ? child.age + " лет" : "Без возраста"
            }}</span
          >
        </li>
      </ul>
      <div
        v-else
        class="empty"
      >
        Список пуст
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/_page.scss";

  .preview {
    &__section:not(:nth-last-child(1)) {
      margin-bottom: 60px;
    }

    .section {
      font-size: 16px;
      font-weight: 700;

      ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .chips {
        display: inline-block;
        padding: 10px 20px;
        background-color: var(--grey-1);
        border-radius: 5px;
      }
    }
  }
</style>
