<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
    <a class="navbar-brand" href="#">Twottttt</a>
    <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" v-if="!user.username" type="text" v-model="email" placeholder="Username/email">
        <input class="form-control mr-sm-2" v-if="!user.username" type="password" v-model="password" placeholder="Password">
        <button class="btn btn-outline-success my-2 my-sm-0" v-if="!user.username" type="submit" @click="doLogin">Login</button>
        <button class="btn btn-outline-success my-2 my-sm-0" v-if="user.username" type="submit" @click="doLogout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'
const url = 'http://localhost:3000'
export default {
  name: 'navbar',
  created () {
    this.checkLogin()
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['isLogin', 'user'])
  },
  methods: {
    ...mapActions(['loginIn', 'logoutIn', 'checkLogin']),
    doLogin () {
      axios({
        url: url + `/users/login`,
        method: 'post',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          this.loginIn(response.data)
        })
        .catch(() => console.log('eror'))
    },
    doLogout () {
      this.logoutIn(true)
    }
  }
}
</script>

<style>

</style>
