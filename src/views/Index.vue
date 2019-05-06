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
// @ is an alias to /src  SAMPLE FOR SYNTAX ONLY
// import Home from '@/components/Home.vue'

export default {
  name: 'index',
  data() {
    return {
      movies: [
        { title: 'The Goodfather', slug: 'the-goodfather', stars: ['Marlong Brando', 'El Pacino', 'James Cant'], id: 1
        },
        { title: 'Cannablanca', slug: 'cannablanca', stars: ['Humphrey Brogart', 'Ingrid Bergdorf', 'Pill Henrood', 'Cloud Rains'], id: 2
        },
        { title: 'The Woolman', slug: 'the-woolman', stars: ['Len Chaney Jr', 'Cloud Rains', 'Evilyn Akers'], id: 3
        },
        { title: 'Darcula', slug: 'darcula', stars: ['Belly Lugosi', 'Dwight Fried', 'Edward Slong'], id: 4
        }
      ]
    }
  },
  components: {
  },
  methods: {
    deleteMovie(id) {
      this.movies = this.movies.filter(movie => {
        return movie.id != id
      })
    }
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


