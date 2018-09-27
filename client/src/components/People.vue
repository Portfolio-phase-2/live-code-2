<template>
  <div class="mb-3">
    <h2>Person</h2>
    {{people}}
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
const url = 'http://localhost:3000'
export default {
  name: 'people',
  data () {
    return {
      people: []
    }
  },
  created () {
    this.peoplePeople()
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    peoplePeople () {
      axios({
        url: url + `/users`,
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(found => this.people(found.data))
        .catch(() => console.log(`err`))
    }
  }
}
</script>
