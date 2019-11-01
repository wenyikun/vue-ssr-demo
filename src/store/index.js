import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      title: '',
      path: ''
    },
    actions: {},
    mutations: {
      setTitle(state, title) {
        state.title = title
      },
      setPath(state, path) {
        state.path = path
      }
    }
  })
}
