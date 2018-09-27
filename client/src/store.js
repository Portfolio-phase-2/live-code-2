import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const url = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {},
    twits: [],
    users: []
  },
  mutations: {
    changeIsLoginAndMakeToken (state, payload) {
      state.isLogin = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setTwits (store, payload) {
      store.twits = payload
    }
  },
  actions: {
    loginIn ({ commit }, payload) {
      localStorage.setItem('token', payload.token)
      axios({
        url: url + `/users/one`,
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(found => {
          commit('setUser', found.data)
          commit('changeIsLoginAndMakeToken', true)
        })
        .catch(() => { commit('setUser', {}) })
    },
    logoutIn ({ commit }) {
      localStorage.removeItem('token')
      commit('setUser', {})
      commit('changeIsLoginAndMakeToken', false)
    },
    checkLogin ({ commit }) {
      axios({
        url: url + `/users/one`,
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(found => {
          commit('setUser', found.data)
          commit('changeIsLoginAndMakeToken', true)
        })
        .catch(() => { commit('setUser', {}) })
    },
    getTwits ({ commit, dispatch }, payload) {
      commit('setTwits', payload)
      axios({
        url: url + `/twits`,
        method: 'get'
      })
        .then(found => {
          commit('setTwits', found.data)
          dispatch('checkLogin')
        })
        .catch(() => console.log(`err`))
    }
  }
})
