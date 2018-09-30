<template>
  <div id="app">
    <MenuBar/>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar'

export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>

<style>
body {
  margin: 0;
}

h1 {
  margin-top: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.menu {
  float: left;
}
</style>
