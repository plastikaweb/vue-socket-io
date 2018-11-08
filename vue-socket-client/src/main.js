import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueSocketio from 'vue-socket.io';
import counterModule from './modules/counter';
import router from './router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    io: {}
  },
  mutations: {
    setSocket: (state, socket) => {
      console.log('socket is connected');
      state.io = socket;
    }
  },
  modules: {
    counterModule
  }
})

Vue.use(VueSocketio, 'http://localhost:5000', store);

new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    store.commit('setSocket', this.$socket);
  },
  render: h => h(App)
})
