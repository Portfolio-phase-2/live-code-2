<template>
  <div>
    <button class="mb-3 btn btn-block btn-outline-success" @click="punyaku">My Status</button>
    <button class="mb-3 btn btn-block btn-outline-primary mt-3" @click="timeline">Timeline</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
const url = 'http://localhost:3000'
export default {
  name: 'mine',
  methods: {
    ...mapActions(['searching']),
    punyaku () {
      axios({
        url: url + `/twits/mine`,
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(found => this.searching(found.data))
        .catch(() => console.log(`err`))
    },
    timeline () {
      axios({
        url: url + `/twits`,
        method: 'get'
      })
        .then(found => this.searching(found.data))
        .catch(() => console.log(`err`))
    }
  }
}
</script>

<style>

</style>
