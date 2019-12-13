<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to Hycon Mining Pool</h1>
    <Bulletin />
    <Pool />
    <Worker />
    <MinedBlocks />
    <MinedBlockHistory />
  </div>
</template>

<script>
import Bulletin from './components/Bulletin.vue'
import Worker from './components/Worker.vue'
import MinedBlocks from './components/MinedBlocks.vue'
import Pool from './components/Pool.vue'
import MinedBlockHistory from './components/MinedBlockHistory.vue'

export default {
  name: 'app',
  components: {
    Bulletin,
    Worker,
    MinedBlocks,
    Pool,
    MinedBlockHistory
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
