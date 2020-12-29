import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prof:[
      {
        name:"Vinícius Muller",
        description:"Oi meu nome é Vinícius",
        fone:"9810112347",
        price:"20,00"
      },
      {
        name:"Mayk Brito",
        description:"Oi meu nome é Mayk",
        fone:"981054338",
        price:"30,00"
      },
      {
        name:"Diego Fernandes",
        description:"Oi meu nome é Diego",
        fone:"981014567",
        price:"40,00"
      }
    ]
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