<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container ">
    <div class="w-100 d-flex justify-content-between">
      
        <div class="col-6">
          <a class="navbar-brand" href="#"><i class="fa fa-note-sticky"></i>My Note</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      

      <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class=" mx-2"  to="/">Vlog</router-link>
            </li>
            <li class="nav-item">
              <router-link class=" mx-2" to="/about"> Create Contant</router-link>
            </li>
            <li class="nav-item">
              <router-link class=" mx-2" to="/todo">Daily Plan</router-link>
            </li>
          </ul>
      </div>
    </div>
  </div>
</nav>
    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
