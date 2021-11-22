<template>
  <div id="app">
    <router-view />
    <overlay v-show="showOverlay">
      <vk-spinner class="spinner" ratio="3.0" />
    </overlay>
    <vk-notification position="top-right" :messages.sync="messages" />
  </div>
</template>

<script>
import Overlay from './components/overlay.vue'
export default {
  name: 'App',
  components: {
    Overlay
  },
  data: () => ({
    showOverlay: false,
    messages: []
  }),
  created() {
    this.$bus.$on('loading', this.overlayHandler);
    this.$bus.$on('notification', this.messagesHandler);
  },
  beforeDestroy() {
    this.$bus.$off('loading', this.overlayHandler);
    this.$bus.$off('notification', this.messagesHandler);
  },
  methods: {
    overlayHandler(value) {
      this.showOverlay = value ? true : false;
    },
    messagesHandler(value) {
      this.messages.push(value)
    }
  }
}
</script>

<style scoped>

</style>
