import Vue from 'vue'
import Vuex from 'vuex'
import TaskStore from './taskstore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: TaskStore,
})

export default store
