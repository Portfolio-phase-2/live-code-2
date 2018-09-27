<template>
  <div class="mt-3">
    <div class="card pt-3 pl-3  pb-3 mb-3" v-for="twit in twits" :key="twit._id">
      <b>{{twit.owner.name}}</b> <small>@{{twit.owner.username}} - at {{twit.createdAt}}</small>
      <hr>
      {{twit.content}}
      <a href="#" v-if="user._id === twit.owner._id" @click="deleteTwit(twit._id)" class="text-danger">Delete</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
const url = 'http://localhost:3000'
export default {
  name: 'timeline',
  created () {
    this.sendTwitFromApi()
  },
  computed: {
    ...mapState(['isLogin', 'user', 'twits'])
  },
  methods: {
    ...mapActions(['getTwits']),
    sendTwitFromApi () {
      axios({
        url: url + `/twits`,
        method: 'get'
      })
        .then(found => this.getTwits(found.data))
        .catch(() => console.log(`err`))
    },
    deleteTwit (id) {
      axios({
        url: url + `/twits/${id}`,
        method: 'delete',
        header: {
          token: localStorage.getItem('token')
        }
      })
        .then(found => this.getTwits())
        .catch(() => console.log(`err`))
    }
  }
}
</script>

<style>

</style>
