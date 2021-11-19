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
            <input class="uk-input" id="email-text" type="email" placeholder="name@email.com">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="password-text">Contraseña</label>
          <div class="uk-form-controls">
              <input class="uk-input" id="password-text" type="password" placeholder="*****">
          </div>
        </div>
      </div>
      <div slot="footer" class="uk-text-right">
        <vk-button class="uk-margin-small-right" @click="showLoginModal = false">Cancelar</vk-button>
        <vk-button type="primary">Entrar</vk-button>
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
          <label class="uk-form-label" for="email-text">Correo</label>
          <div class="uk-form-controls">
            <input class="uk-input" id="email-text" type="email" placeholder="name@email.com">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="password-text">Contraseña</label>
          <div class="uk-form-controls">
              <input class="uk-input" id="password-text" type="password" placeholder="*****">
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
export default {
  name: 'Index',
  data: () => ({
    showLoginModal: false,
    showCreateAccountModal: false,
  })
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