<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Worker />
  </div>
</template>

<script>
import Worker from './components/Worker.vue'

export default {
  name: 'app',
  components: {
    Worker
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
</style>
