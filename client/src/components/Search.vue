<template>
  <div class="mb-3">
    <label for="search">Search</label>
    <input type="text" v-model="search" class="form-control mb-3" placeholder="search">
    <button class="btn btn-success btn-sm" @click="searchDong">Search</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
const url = 'http://localhost:3000'
export default {
  name: 'search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(['searching']),
    searchDong () {
      axios({
        url: url + `/twits/${this.search}/search`,
        method: 'get'
      })
        .then(found => this.searching(found.data))
        .catch(() => console.log(`err`))
    }
  }
}
</script>
