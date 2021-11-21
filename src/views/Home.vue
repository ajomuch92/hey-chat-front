<template>
  <div class="home-container">
    <vk-navbar id="navbar">
      <vk-navbar-nav>
        <vk-navbar-logo class="white-text">
          <vk-icon-link class="uk-margin-right white-text" icon="menu" @click="drawer=!drawer" />
          <span>Hey Chat</span>
        </vk-navbar-logo>
      </vk-navbar-nav>
    </vk-navbar>
    <div class="sidebar uk-padding" :class="{'sidebar-visible': drawer}">
      <p v-for="(page, key) in pages" :key="key" class="uk-flex uk-flex-middle clickable">
        <vk-icon class="uk-margin-right" :icon="page.icon" />
        <span class="uk-text-lead">{{ page.name }}</span>
      </p>
    </div>
    <section id="main" class="uk-padding-small" :class="{'main-full': !drawer}">
      <router-view />
    </section>
  </div>
</template>

<script>
import VueBreakpointMixin from'vue-breakpoint-mixin';

export default {
  name: 'Home',
  mixins: [VueBreakpointMixin],
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
    ],
    drawer: true
  }),
  mounted() {
  }
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
    transition: all 0.5s ease;
  }

  .clickable:hover {
    background-color: lightgrey;
    padding-left: 1rem;
  }

  .sidebar {
    position: fixed;
    left: -350px;
    width: 250px;
    height: 100%;
    transition: all 0.5s ease;
    background: white;
    border-right: 1px solid lightgrey;
    z-index: 10;
  }

  .sidebar-visible {
    left: 0px !important;
  }

  #main {
    transition: all 0.5s ease;
    width: calc(100% - 330px);
    height: calc(100vh - 80px);
    position: fixed;
    left: 330px;
  }

  .main-full {
    width: 100% !important;
    left: 0px !important;
  }
</style>