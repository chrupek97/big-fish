import { createStore } from 'vuex';
import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

const store = createStore({
  namespaced: false,
  state() {
    return {
     isLoggedIn: false
    }
  },
  mutations,
  actions: actions,
  getters
})

export default store;