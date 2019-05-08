<template>
  <div v-if="movie" class="edit-movie container">
    <h2>Edit {{ movie.title }}</h2>
  </div>
</template>

<script>
import db from '@/firebase/init.js'

export default {
  name: 'EditMovie',
  data() {
    return {
      movie: null
    }
  },
  created() {
   let ref = db.collection('movies').where('slug', '==', this.$route.params.movie_slug)
   ref.get().then((snapshot) => {
     snapshot.forEach(doc => {
       this.movie = doc.data()
       this.movie.id = doc.id
     })
   })
  }
}
</script>

<style>

</style>


