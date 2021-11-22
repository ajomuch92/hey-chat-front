<template>
  <div class="overlay a-flex a-center a-align-items-center">
    <slot name="default" />
  </div>
</template>

<script>
export default {
  name: 'Overlay'
}
</script>

<style scoped>
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 1200;
  }
</style>