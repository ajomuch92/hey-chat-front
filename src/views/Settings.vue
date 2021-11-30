<template>
  <div class="settings-container">
    <vk-button type="primary" @click="showModal=true">Cambiar contraseña</vk-button>
    <vk-modal center :show.sync="showModal">
      <vk-modal-title slot="header">Cambia tu contraseña</vk-modal-title>
      <div>
        <div class="uk-margin">
          <label class="uk-form-label" for="name-text">Contraseña anterior</label>
          <div class="uk-form-controls">
            <input v-model="newData.password" class="uk-input" id="name-text" type="password">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="name-text">Nueva contraseña</label>
          <div class="uk-form-controls">
            <input v-model="newData.newPassword" class="uk-input" id="name-text" type="password">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="name-text">Repite tu nueva contraseña</label>
          <div class="uk-form-controls">
            <input v-model="newData.newPassword2" class="uk-input" id="name-text" type="password">
          </div>
        </div>
      </div>
      <div slot="footer" class="uk-text-right">
        <vk-button class="uk-margin-small-right" @click="cancel">Cancelar</vk-button>
        <vk-button type="primary" @click="changePassword" :disabled="!isReadyToSave">Guardar</vk-button>
      </div>
    </vk-modal>
  </div>
</template>

<script>
import axios from '../utils/axios';
import TokenMixin from '../mixins/TokenMixin'

export default {
  name: 'Settings',
  mixins: [TokenMixin],
  data: () => ({
    newData: {
      password: '',
      newPassword: '',
      newPassword2: '',
      email: '',
    },
    showModal: false,
  }),
  computed: {
    isReadyToSave() {
      const { newPassword, password, newPassword2 } = this.newData;
      return password.length > 0 && newPassword.length > 0 && newPassword === newPassword2
    },
  },
  methods: {
    changePassword() {
      this.$bus.$emit('loading', true);
      this.newData.email = this.currentUser.email;
      axios.patch(`reset-password/${this.currentUser.id}`, this.newData, {
        headers: {
          Authorization: this.accessToken
        },
      }).then(() => {
        this.$bus.$emit('loading', false);
        this.$bus.$emit('notification', {message: 'Contraseña actualizada', status: 'success'});
        this.cancel();
      }).catch(() => {
        this.$bus.$emit('loading', false);
        this.$bus.$emit('notification', {message: 'Hubo un error al guardar la contraseña', status: 'danger'});
      });
    },
    cancel() {
      this.showModal = false;
      this.newData = {
        password: '',
        newPassword: '',
        newPassword2: '',
        email: '',
      };
    }
  }
}
</script>

<style scoped>

</style>