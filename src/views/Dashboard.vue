<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>
    <vk-grid class="uk-child-width-1-4">
      <vk-card class="uk-padding-small">
        <h1 class="uk-text-center">{{numberOrganizations}}</h1>
        <p class="uk-text-lead uk-text-center">Organizaciones creadas</p>
      </vk-card>
    </vk-grid>
  </div>
</template>

<script>
import axios from '../utils/axios';
import TokenMixin from '../mixins/TokenMixin'

export default {
  name: 'Dashboard',
  mixins: [TokenMixin],
  data: () => ({
    numberOrganizations: 0,
  }),
  created() {
    this.getTotal();
  },
  methods: {
    getTotal() {
      axios.get('organizations', {
        headers: {
          Authorization: this.accessToken
        },
        params: {
          createdBy: this.currentUser.id,
          $select: ['id'],
        }
      }).then(response => {
        const { data } = response;
        this.numberOrganizations = data?.total || 0;
      }).catch(() => {
        this.$bus.$emit('notification', {message: 'Hubo un error al traer los datos', status: 'danger'});
      })
    }
  }
}
</script>

<style scoped>

</style>