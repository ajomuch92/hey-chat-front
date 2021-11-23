import Vue from 'vue';
import Vuex from 'vuex';
import * as SecureLS from 'secure-ls';

const ls = new SecureLS({encodingType: 'aes', isCompression: false});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    accessToken: '',
    currentUser: {},
  },
  mutations: {
    initialiseStore() {
      const store = ls.get('hey-chat');
			if(store) {
        this.replaceState(store);
			}
    },
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    }
  },
  getters: {
    accessToken: state => state.accessToken,
    currentUser: state => state.currentUser,
  }
})

export default store;

store.subscribe((mutation, state) => {
	ls.set('hey-chat', state);
});