<template>
  <div class="mb-3">
    <div class="card pt-3 pl-3  pb-3 mb-3">
      Halo, {{user.name}} <br/>
      @{{user.username}}
      <br>
      Twit: {{user.twits.length}} <br>
      Following: {{user.followings.length}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'profile',
  computed: {
    ...mapState(['isLogin', 'user'])
  },
  methods: {
  }
}
</script>

<style>

</style>
