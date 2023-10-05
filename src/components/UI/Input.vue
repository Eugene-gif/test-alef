<script setup>
  import { computed } from "vue";
  const props = defineProps({
    type: String,
    label: String,
    modelValue: String | Number,
  });

  const emit = defineEmits(["update:modelValue"]);

  const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
  });
</script>

<template>
  <div class="input">
    <input
      v-model="inputValue"
      :type="type ?? 'text'"
      :label="label ?? 'Label'"
      required
    />
    <label>{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
  .input {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    transition: all 0.2s;

    input {
      padding: 12px 16px 0 16px;
      line-height: 1;
      border-radius: 5px;
      border: 1px solid var(--grey);
      height: 56px;
      font-size: 14px;
      width: 100%;
      font-family: "Montserrat", sans-serif;
      outline: none;
    }

    label {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: #1111117f;
      transition: 0.2s;
      pointer-events: none;
    }

    input:focus ~ label,
    input:valid ~ label {
      top: 25%;
    }

    input:focus {
      box-shadow: 0 0 5px 0 var(--primary);
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
      appearance: none;
    }
  }
</style>
