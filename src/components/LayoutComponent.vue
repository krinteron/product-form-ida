<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutComponent',
};
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 332px;
  padding: 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
</style>
