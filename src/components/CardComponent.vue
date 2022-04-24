<template>
  <div class="card-container">
    <header class="photo">
      <img :src="data.img" alt="Изображение товара" />
      <div class="product-remove" @click="$emit('click')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="16"
          fill="white"
          class="product-remove-ico"
        >
          <path
            d="M7,5.8a.38.38,0,0,0-.38.37v7.09a.38.38,0,0,0,.75,0V6.17A.38.38,0,0,0,7,5.8Z"
            transform="translate(-0.5 0)"
          />
          <path
            d="M1.56,4.76V14a2.07,2.07,0,0,0,.55,1.42A1.84,1.84,0,0,0,3.45,16h7.09a1.84,1.84,0,0,0,1.34-.58A2.07,2.07,0,0,0,12.43,14V4.76A1.43,1.43,0,0,0,12.06,2H10.14V1.48a1.44,1.44,0,0,0-.43-1A1.48,1.48,0,0,0,8.66,0H5.33A1.47,1.47,0,0,0,3.85,1.48V2H1.93a1.43,1.43,0,0,0-.37,2.81Zm9,10.49H3.45A1.19,1.19,0,0,1,2.31,14V4.8h9.37V14A1.19,1.19,0,0,1,10.54,15.25ZM4.6,1.48A.72.72,0,0,1,5.33.75H8.66A.72.72,0,0,1,9.18,1a.69.69,0,0,1,.21.52V2H4.6ZM1.93,2.7H12.06a.68.68,0,0,1,.68.67.69.69,0,0,1-.68.68H1.93a.68.68,0,0,1-.67-.68A.67.67,0,0,1,1.93,2.7Z"
            transform="translate(-0.5 0)"
          />
          <path
            d="M4.81,5.8a.38.38,0,0,0-.38.37v7.09a.38.38,0,0,0,.38.37.37.37,0,0,0,.37-.37V6.17A.37.37,0,0,0,4.81,5.8Z"
            transform="translate(-0.5 0)"
          />
          <path
            d="M9,5.8a.38.38,0,0,0-.38.37v7.09a.38.38,0,0,0,.38.37.37.37,0,0,0,.37-.37V6.17A.37.37,0,0,0,9,5.8Z"
            transform="translate(-0.5 0)"
          />
        </svg>
      </div>
    </header>
    <main class="card-info">
      <section class="product-info">
        <p class="title" v-text="data.name" />
        <p class="description" v-text="data.description" />
      </section>
      <p class="product-price" v-text="price" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  emits: ['click'],
  computed: {
    price() {
      const beautyPrice = new Intl.NumberFormat('ru-RU').format(
        this.data.price
      );
      return `${beautyPrice} руб.`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 332px;
  // overflow: hidden;
  text-align: left;

  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  &:hover .product-remove {
    opacity: 1;
    transition-duration: 300ms;
  }

  .photo {
    display: flex;
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-info {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 16px 16px 24px 16px;

    .product-info {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 25px;
      }

      .description {
        font-size: 16px;
        line-height: 20px;
        height: 80px;
      }
    }

    .product-price {
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
    }
  }
}

.product-remove {
  position: absolute;
  display: inline-block;
  opacity: 0;
  top: -8px;
  right: -8px;
  width: 32px;
  height: 32px;
  content: '';
  border-radius: 10px;
  background-color: #ff8484;
  cursor: pointer;

  .product-remove-ico {
    position: absolute;
    top: 8px;
    left: 9.5px;
  }
}
</style>
