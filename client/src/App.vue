<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hr />
    <Pool />
    <hr />
    <Worker />
    <hr />
    <MinedBlocks />

  </div>
</template>

<script>
import Worker from './components/Worker.vue'
import MinedBlocks from './components/MinedBlocks.vue'
import Pool from './components/Pool.vue'

export default {
  name: 'app',
  components: {
    Worker,
    MinedBlocks,
    Pool
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
