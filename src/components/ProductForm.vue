<template>
  <LayoutComponent>
    <form class="form-container">
      <FormField label="Наименование товара" required>
        <InputComponent
          v-model="name"
          :validate="validate"
          placeholder="Введите наименование товара"
        />
      </FormField>
      <FormField label="Описание товара">
        <textarea
          class="textarea-issue input"
          v-model="description"
          placeholder="Введите текст"
        />
      </FormField>
      <FormField label="Ссылка на изображение товара" required>
        <InputComponent
          v-model="link"
          :validate="validate"
          placeholder="Введите ссылку"
        />
      </FormField>
      <FormField label="Цена товара" required>
        <InputComponent
          type="number"
          v-model="price"
          :validate="validate"
          placeholder="Введите цену"
        />
      </FormField>
    </form>
    <GreenButton
      text="Добавить товар"
      @click="click"
      :disabled="!formIsValid"
    />
  </LayoutComponent>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import LayoutComponent from './LayoutComponent.vue';
import FormField from './FormField.vue';
import InputComponent from './InputComponent.vue';
import GreenButton from './GreenButton.vue';
export default {
  name: 'ProductForm',
  components: {
    LayoutComponent,
    FormField,
    InputComponent,
    GreenButton,
  },
  emits: ['submit'],
  data() {
    return {
      name: '',
      description: '',
      link: '',
      price: '',
      validate: false,
    };
  },
  computed: {
    formIsValid() {
      return this.name && this.link && this.price;
    },
  },
  methods: {
    click() {
      if (this.formIsValid) {
        const id = uuidv4();
        const product = {
          id,
          name: this.name,
          description: this.description,
          img: this.link,
          price: this.price,
        };
        this.$emit('submit', product);
        // this.name = ''; // Отключено для удобства тестирования
        // this.description = '';
        // this.link = '';
        // this.price = '';
        this.validate = false;
        return;
      }
      this.validate = true;
    },
  },
};
</script>

<style scoped lang="scss">
.form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .textarea-issue {
    width: 100%;
    height: 108px;
    resize: none;
  }
}
</style>
