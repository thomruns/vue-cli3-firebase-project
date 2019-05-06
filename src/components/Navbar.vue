<template>
  <div class="navbar">
    <nav class="nav-extended blue darken-2">
      <div class="nav-content">
        <router-link to="">
          <span class="nav-title">Nav Title</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab amber lighten-2">
          <router-link to="">
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


