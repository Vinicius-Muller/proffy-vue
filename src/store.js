import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teacher: {
    name:'',
    link:'',
    whatsapp:'',
    bio:'',
    subject:'',
    cost:'',
    day:'',
    from:'',
    to:''
    },
    prof:[]
  },
  mutations: {
    UPDATE_TEACHER(state, payload) {
      state.teacher = Object.assign(state.teacher, payload)
    },
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