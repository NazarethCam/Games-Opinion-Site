import Vue from 'vue'
import  Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],  
  state: {
    opiniones: [],
    juego: []
  },

  getters:{
    filtrarOpiniones:(state ) => (id)=> {
    return state.opiniones[id]
      },
    },
  
  mutations: {
    guardarOpinion(state, data) {
      state.opiniones.push(data);
    },
  
    borrar(state, index) {
    state.opiniones.splice(index, 1);
  },
  editarOpiniones(state, data){
    state.opiniones[data.index]= data.opinion
    
  },
  filtrarOpiniones() {
    return this.$store.getters.filtrarOpiniones(this.traerId);
  }, 
},
  actions: {}
})
export default store
