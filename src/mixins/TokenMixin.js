export default {
  computed: {
    accessToken() {
      return `Bearer ${this.$store.getters.accessToken}`;
    },
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
}