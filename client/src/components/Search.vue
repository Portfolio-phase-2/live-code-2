<template>
  <div class="mb-3">
    <label for="search">Search</label>
    <input type="text" v-model="search" class="form-control mb-3" placeholder="search">
    <button class="btn btn-success btn-sm">Search</button>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      search: ''
    }
  }
}
</script>
