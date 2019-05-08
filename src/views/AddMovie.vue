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
export default {
  name: 'AddMovie',
  data() {
    return {
      title: null,
      another: null,
      stars: [],
      feedback: null
    }
  },
  methods: {
    addMovie() {
      console.log(this.title, this.stars)
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

