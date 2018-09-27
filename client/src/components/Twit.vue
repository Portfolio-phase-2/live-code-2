<template>
  <div>
    <textarea class="form-control mb-3" v-model="content" placeholder="Twet......."></textarea>
    <button class="btn btn-success" @click="sendTwit">Twit</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
const url = 'http://localhost:3000'
export default {
  data () {
    return {
      content: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions([]),
    sendTwit () {
      axios({
        url: url + `/twits`,
        method: 'post',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(() => {
          this.
        })
    }
  }
}
</script>
