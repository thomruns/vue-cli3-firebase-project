<template>
  <div class="add-movie container">
    <h2 class="center-align blue-text text-darken-2">Add a Movie to the Database</h2>
    <form @submit.prevent="addMovie">
      <div class="field title">
        <label for="title">Movie Title</label>
        <input type="text" name="title" v-model="title" autocomplete="off">
      </div>
      <div v-for="(star, index) in stars" :key="index">
        <label for="star">Star</label>
        <input type="text" name="star" v-model="stars[index]">
      </div>
      <div class="field add-star">
        <label for="add-star">Add Star</label>
        <input type="text" name="add-star" autocomplete="off" @keydown.tab.prevent="addStar" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add movie</button>
      </div>
    </form>
  </div>
</template>


<script>
// import the Firebase database
import db from '@/firebase/init.js'
import slugify from 'slugify'

export default {
  name: 'AddMovie',
  data() {
    return {
      title: null,
      another: null,
      stars: [],
      feedback: null,
      slug: null
    }
  },
  methods: {
    addMovie() {
      if(this.title) {
        this.feedback = null
        // create slug
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        db.collection('movies').add({
          title: this.title,
          stars: this.stars,
          slug: this.slug
        }).then(() => {
          this.$router.push({ name: 'index' })
        }).catch (err => {
          console.log(err)
        })
      } else {
        this.feedback = "Please enter a movie title"
      }
    },
    addStar() {
      if(this.another){
        this.stars.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = "Please enter a value before hitting Tab"
      }
    }
  }
}
</script>

<style>

.add-movie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-movie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-movie .field {
  margin: 20px auto;
}
</style>

