<template>
  <div class="home-container">
    <vk-navbar id="navbar">
      <vk-navbar-nav>
        <vk-navbar-toggle class="white-text" />
        <vk-navbar-logo class="white-text">Logo</vk-navbar-logo>
      </vk-navbar-nav>
    </vk-navbar>
    <vk-grid gutter="small">
      <div class="panel uk-visible@m uk-padding">
        <p v-for="(page, key) in pages" :key="key" class="uk-flex uk-flex-middle clickable">
          <vk-icon class="uk-margin-right" :icon="page.icon" />
          <span class="uk-text-lead">{{ page.name }}</span>
        </p>
      </div>
      <div></div>
    </vk-grid>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    pages: [
      {
        name: 'Dashboard',
        icon: 'home'
      },
      {
        name: 'Organizaciones',
        icon: 'bookmark'
      },
      {
        name: 'Configuración',
        icon: 'cog'
      },
      {
        name: 'Salir',
        icon: 'sign-out'
      }
    ]
  })
}
</script>

<style scoped>
  #navbar {
    background-color: #27ae60;
    color: white;
  }

  .panel {
    width: 15% !important;
    border-right: 1px solid lightgray;
    height: calc(100vh - 165px);
  }

  .clickable {
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 3px;
  }

  .clickable:hover {
    background-color: lightgrey;
  }
</style>