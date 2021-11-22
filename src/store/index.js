import Vue from 'vue';
import Vuex from 'vuex';
import * as SecureLS from 'secure-ls';

const ls = new SecureLS({encodingType: 'aes', isCompression: false});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    accessToken: ''
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    }
  },
  getters: {
    accessToken: (state) => state.accessToken
  }
})

export default store;

store.subscribe((mutation, state) => {
	ls.set('hey-chat', state);
});