<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col md-3">
          <Profile v-if="user.email"></Profile>
          <Search></Search>
        </div>
        <div class="col-sm-6 col md-6">
          <Twit v-if="user.email"></Twit>
          <Timeline></Timeline>
        </div>
        <div class="col-sm-3 col md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Search from '@/components/Search.vue'
import Twit from '@/components/Twit.vue'
import Timeline from '@/components/Timeline.vue'
import Profile from '@/components/Profile.vue'
export default {
  name: 'home',
  components: {
    Search, Timeline, Twit, Profile
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>
