<template>
  <footer class="page-footer dark-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">Stuff you'd normally see in a footer</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">Some other stuff</a>
            </div>
          </div>
        </footer>
</template>


<script>
export default {
  name: 'Footer',
  data() {
    return {

    }
  }
}
</script>

<style>

.dark-footer {
  color: #fff;
  background-color: rgb(44, 43, 43);
  font-size: .75em;
  margin-top: 60px;
  padding: 10px;
  bottom: 0;
  width: 100%;
}

</style>