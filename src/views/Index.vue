<template>
  <div class="index container">
      <div class="card card-panel grey lighten-4" v-for="movie in movies" :key="movie.id">
        <div class="card-content">
          <i class="material-icons delete" @click="deleteMovie(movie.id)">delete</i>
          <h2 class="blue-text text-darken-3">{{ movie.title }}</h2>
          <ul class="stars">
            <li v-for="(star, index) in movie.stars" :key="index">
              <span class="chip star-name">{{ star }}</span>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>

// import the firebase database
import db from '@/firebase/init.js'

export default {
  name: 'index',
  data() {
    return {
      movies: []
    }
  },
  methods: {
    deleteMovie(id) {
      // delete doc from Firebase
      db.collection('movies').doc(id).delete()
        .then(() => { // delete from the UI
          this.movies = this.movies.filter(movie => {
          return movie.id != id
        })
      })
    }
  },
  created() {
    // fetch data from firestore
    db.collection('movies').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let movie = doc.data()
          movie.id = doc.id
          this.movies.push(movie)
        })
      })
  }
}
</script>

<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}
.index .stars {
  margin-bottom: 30px auto;
}
.index .stars li {
  display: inline-block;
}
.star-name{
  font-size: 11px;
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>


