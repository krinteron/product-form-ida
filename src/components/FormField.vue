<template>
  <fieldset class="form-item">
    <p v-if="label" class="title" :class="{ required }" v-text="label" />
    <slot />
  </fieldset>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

.form-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;

  .title {
    font-size: 10px;
    line-height: 13px;

    &.required {
      &::after {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #ff8484;
      }
    }
  }
}
</style>
