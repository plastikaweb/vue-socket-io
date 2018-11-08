<template>
  <div id="app">
    <header>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/">Vue js + Vuex + Socket.io</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/counter">Counter</router-link>
        </li>
      </ul>
    </header>

    <div class="container">
      <main>
        <img src="./assets/logo.png">
        <router-view></router-view>
      </main>
    </div>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
