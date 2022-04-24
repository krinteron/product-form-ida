<template>
  <div class="container">
    <header class="header">
      <p class="title">Добавление товара</p>
      <SelectComponent :options="sortOptions" v-model="sortBy" />
    </header>
    <main class="main">
      <aside class="input-form">
        <ProductForm @submit="addProduct" />
      </aside>
      <transition-group class="products" name="list-complete" tag="div">
        <CardComponent
          class="list-complete-item"
          v-for="product of sortedProducts"
          :key="product"
          :data="product"
          @click="removeProduct(product.id)"
        />
      </transition-group>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SelectComponent from './components/SelectComponent.vue';
import ProductForm from './components/ProductForm.vue';
import CardComponent from './components/CardComponent.vue';

export default {
  name: 'App',
  components: {
    SelectComponent,
    ProductForm,
    CardComponent,
  },
  data() {
    return {
      sortBy: 'default',
    };
  },
  computed: {
    sortedProducts() {
      switch (this.sortBy) {
        case 'min':
          return [...this.products].sort((a, b) =>
            +a.price > +b.price ? 1 : -1
          );
        case 'max':
          return [...this.products].sort((a, b) =>
            +a.price < +b.price ? 1 : -1
          );
        case 'name':
          return [...this.products].sort((a, b) => (a.name > b.name ? 1 : -1));
        default:
          return this.products;
      }
    },
    ...mapState({
      products: (state) => state.products,
      sortOptions: (state) => state.sortOptions,
    }),
  },
  methods: {
    addProduct(product) {
      this.$store.dispatch('addProduct', product);
    },
    removeProduct(id) {
      this.$store.dispatch('removeProduct', id);
    },
  },
};
</script>

<style lang="scss">
body {
  background: #faf9f7;
}
#app {
  font-family: Source Sans Pro, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f3f3f;
}

p {
  margin: 0;
  box-sizing: border-box;
}

.input {
  box-sizing: border-box;
  padding: 10px 16px;
  background: inherit;
  border-radius: 4px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
  font-family: inherit;
  font-size: 12px;
  line-height: 16px;
  color: inherit;
}

.container {
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
  width: 1376px;
  padding: 32px;

  .header {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 28px;
      font-weight: 600;
    }
  }
}

.main {
  display: flex;
  gap: 16px;
}

.input-form {
  position: sticky;
  top: 24px;
  align-self: flex-start;
}
.products {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
}

.list-complete-item {
  transition: all 0.5s ease;
  display: inline-block;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute !important;
}
</style>
