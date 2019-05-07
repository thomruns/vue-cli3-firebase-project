<template>
  <div class="navbar">
    <nav class="nav-extended blue darken-2">
      <div class="nav-content">
        <router-link :to="{ name: 'index' }">
          <span class="nav-title">Favorite Movies Database</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab pink darken-1">
          <router-link :to="{ name: 'AddMovie' }">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
</style>


