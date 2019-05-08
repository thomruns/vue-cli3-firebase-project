<template>
  <div v-if="movie" class="edit-movie container">
    <h2>Edit {{ movie.title }}</h2>
    <form @submit.prevent="editMovie">
        <div class="field title">
          <label for="title">Movie Title</label>
          <input type="text" name="title" v-model="movie.title" autocomplete="off">
        </div>
        <div v-for="(star, index) in movie.stars" :key="index" class="field">
          <label for="star">Star:</label>
          <input type="text" name="star" v-model="movie.stars[index]">
          <i class="material-icons delete" @click="deleteStar(star)">delete</i>
        </div>
        <div class="field add-star">
          <label for="add-star">Add Star</label>
          <input type="text" name="add-star" autocomplete="off" @keydown.tab.prevent="addStar" v-model="another">
        </div>
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn pink">Edit movie</button>
        </div>
      </form>
  </div>
</template>

<script>
import db from '@/firebase/init.js'

export default {
  name: 'EditMovie',
  data() {
    return {
      movie: null,
      another: null,
      feedback: null
    }
  },
  methods: {
    addStar() {
      if(this.another){
        this.movie.stars.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = "Please enter a value before hitting Tab"
      }
    },
    deleteStar(s) {
      this.movie.stars = this.movie.stars.filter(star => {
        return star != s
      })
    },
    editMovie() {
      console.log(this.movie.title, this.movie.stars)
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
.edit-movie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
  
}
.edit-movie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.edit-movie .field {
  margin: 20px auto;
  position: relative;
}
.edit-movie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}

</style>


