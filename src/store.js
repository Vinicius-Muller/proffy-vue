import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prof:[]
  },
  mutations: {
    UPDATE_PROF(state, payload) {
      state.prof.push(payload)
    }
    },
    actions: {
      updateProf(context, payload) {
        context.commit('UPDATE_PROF', payload)
      }
    }
})