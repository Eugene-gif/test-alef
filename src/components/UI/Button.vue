<script setup>
  import IconPlus from "@/assets/icons/IconPlus.vue";

  const props = defineProps({
    label: String,
    color: String,
    textColor: String,
    height: String,
    width: String,
    fontSize: String,
    plus: Boolean,
  });
</script>

<template>
  <button
    :class="['btn', plus ? 'plus' : '']"
    :plus="plus"
    :style="`
      background-color: ${color};
      color: ${textColor};
      width: ${width};
      height: ${height};
      font-size: ${fontSize};
  `"
  >
    <IconPlus v-if="plus" />
    {{ label || "Button" }}
  </button>
</template>

<style lang="scss" scoped>
  .btn {
    padding: 10px 20px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    border: none;
    cursor: pointer;
    border-radius: 100px;
    color: var(--white);
    background-color: var(--primary);
    height: 44px;

    &:focus {
      outline: none;
      box-shadow: 0 0 5px 0 var(--primary);
    }

    &:active {
      box-shadow: 0 0 5px inset;
    }

    &.outline {
      background: transparent;
      border: 2px solid var(--primary);
      color: var(--primary);
      line-height: 1.5;
    }

    &.text {
      background-color: transparent;
      color: var(--primary);
      padding: 1px 2px;
      line-height: 1.5;

      border-radius: 5px;
      height: 24px;
    }

    &.plus {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
</style>
