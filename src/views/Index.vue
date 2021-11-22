<template>
  <div class="index-container uk-flex uk-flex-center uk-flex-middle uk-flex-column">
    <vk-card padding="large">
      <h1 class="uk-text-bold uk-text-center">Hey Chat</h1>
      <p>Intentamos conectar al mundo mientras nos divertimos</p>
      <div class="uk-flex uk-flex-between@m">
        <vk-button id="start-btn" class="btn" type="primary">Empezar</vk-button>
        <vk-button id="login-btn" class="btn" @click="showLoginModal=true">Iniciar sesión</vk-button>
      </div>
      <div class="uk-flex uk-flex-center uk-margin">
        <vk-button type="link" @click="showCreateAccountModal=true">Crea tu cuenta</vk-button>
      </div>
      <div class="uk-flex uk-flex-center uk-margin">
        <vk-icon-button icon="github">Text</vk-icon-button>
      </div>
    </vk-card>
    <vk-modal center :show.sync="showLoginModal">
      <vk-modal-close />
      <vk-modal-title slot="header">Iniciar sesión</vk-modal-title>
      <div>
        <div class="uk-margin">
          <label class="uk-form-label" for="email-text">Correo</label>
          <div class="uk-form-controls">
            <input v-model="loginData.email" class="uk-input" id="email-text" type="email" placeholder="name@email.com">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="password-text">Contraseña</label>
          <div class="uk-form-controls">
              <input v-model="loginData.password" class="uk-input" id="password-text" type="password" placeholder="•••••••">
          </div>
        </div>
      </div>
      <div slot="footer" class="uk-text-right">
        <vk-button class="uk-margin-small-right" @click="cancelLogin">Cancelar</vk-button>
        <vk-button type="primary" @click="login">Entrar</vk-button>
      </div>
    </vk-modal>
    <vk-modal center :show.sync="showCreateAccountModal">
      <vk-modal-close />
      <vk-modal-title slot="header">Crea tu cuenta</vk-modal-title>
      <div>
        <div class="uk-margin">
          <label class="uk-form-label" for="name-text">Nombre</label>
          <div class="uk-form-controls">
            <input class="uk-input" id="name-text" type="text" placeholder="Jane Doe">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="email-text-2">Correo</label>
          <div class="uk-form-controls">
            <input class="uk-input" id="email-text-2" type="email" placeholder="name@email.com">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="password-text-2">Contraseña</label>
          <div class="uk-form-controls">
              <input class="uk-input" id="password-text-2" type="password" placeholder="*****">
          </div>
        </div>
      </div>
      <div slot="footer" class="uk-text-right">
        <vk-button class="uk-margin-small-right" @click="showCreateAccountModal = false">Cancelar</vk-button>
        <vk-button type="primary">Entrar</vk-button>
      </div>
    </vk-modal>
  </div>
</template>

<script>
import axios from '../utils/axios'

export default {
  name: 'Index',
  data: () => ({
    showLoginModal: false,
    showCreateAccountModal: false,
    loginData: {
      email: '',
      password: '',
      strategy: 'local'
    }
  }),
  methods: {
    login() {
      this.$bus.$emit('loading', true);
      axios.post('authentication', this.loginData).then(response => {
        this.$bus.$emit('loading', false);
        const { data } = response;
        this.$store.commit('setAccessToken', data.accessToken);
        this.$router.push({ path: '/home' });
      }).catch(() => {
        this.$bus.$emit('loading', false);
        this.$bus.$emit('notification', {message: 'Hubo un error al iniciar sesión', status: 'danger'})
      })
    },
    cancelLogin() {
      this.showLoginModal = false;
      this.loginData = {
        email: '',
        password: '',
        strategy: 'local'
      };
    }
  }
}
</script>

<style scoped>
  .index-container {
    height: 100vh;
    background-color: whitesmoke;
  }

  .btn {
    width: 175px !important;
  }

  #login-btn {
    background-color: #27ae60;
    color: white;
  }
</style>