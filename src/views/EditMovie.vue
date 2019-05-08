<template>
  <div class="edit-movie container">
    <h2>Edit {{ this.$route.params.movie_slug }}</h2>
  </div>
</template>

<script>
import db from '@/firebase/init.js'
export default {
  name: 'EditMovie',
  data() {
    return {

    }
  }
}
</script>

<style>

</style>


