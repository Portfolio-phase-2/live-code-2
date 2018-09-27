<template>
  <div class="mb-3">
    <ul class="list-group">
      <li class="list-group-item text-center"><strong>Who To Follow</strong></li>
      <a href="#" class="list-group-item" v-for="org in people" :key="org._key" v-if="org._id!==user._id"><small class="btn btn-sm btn-success mr-2">Follow </small>{{org.name}}</a>
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
        .then(found => {
          this.people = found.data
          console.log(found.data)
        })
        .catch(() => console.log(`err`))
    }
  }
}
</script>
