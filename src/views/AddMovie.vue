<template>
  <div class="add-movie container">
    <h2 class="center-align blue-text text-darken-2">Add a Movie to the Database</h2>
    <form @submit.prevent="AddMovie">
      <div class="field title">
        <label for="title">Movie Title</label>
        <input type="text" name="title" v-model="title" autocomplete="off">
      </div>
      <div class="field add-star">
        <label for="add-star">Add Star</label>
        <input type="text" name="add-star" autocomplete="off">
      </div>
      <div class="field center-align">
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
      title: null
    }
  },
  methods: {
    AddMovie() {
      console.log(this.title)
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

