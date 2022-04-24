<template>
  <input
    class="input"
    type="text"
    :class="{ invalid }"
    @focus="typing = true"
    @blur="typing = false"
    @input="setValue"
    :placeholder="placeholder"
    :value="typing ? modelValue : localNumbers"
  />
  <p v-if="invalid" class="invalid-msg">Поле является обязательным</p>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Введите текст',
    },
    validate: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      typing: false,
    };
  },
  computed: {
    localNumbers() {
      if (this.type === 'text') {
        return this.modelValue;
      }
      return this.modelValue === ''
        ? ''
        : new Intl.NumberFormat('ru-RU').format(this.modelValue);
    },
    invalid() {
      return this.validate && !this.checkValid();
    },
  },
  methods: {
    setValue(event) {
      if (this.type === 'text') {
        return this.$emit('update:modelValue', event.target.value);
      }

      let value = event.target.value.replace(/[^0-9]/g, '');
      event.target.value = value;
      value = value === '' ? '' : Number(value).toString();
      return this.$emit('update:modelValue', value);
    },

    checkValid() {
      return !!this.modelValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  box-sizing: border-box;
  width: 100%;

  &.invalid {
    outline: 1px solid #ff8484;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
}

.invalid-msg {
  position: absolute;
  bottom: -14px;
  font-size: 8px;
  line-height: 10px;
  color: #ff8484;
}
</style>
