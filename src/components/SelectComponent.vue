<template>
  <label>
    <span class="select-wrapper">
      <select class="input select-item" v-model="selected">
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </span>
  </label>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String || Number,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    selected: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    right: 16px;
    top: calc(50% - 1.4 * 5px / 2);
    width: 5px;
    height: 5px;
    border: solid #b4b4b4;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
    pointer-events: none;
  }

  .select-item {
    -webkit-appearance: none;
    padding: 10px calc(16px + 5px + 1.4 * 5px) 10px 16px;
    color: #b4b4b4;
    background: #fffefb;
  }
}
</style>
