<template>
    <p>test</p>    
</template>

<script>
import Pool from "../client.js"
export default {
    name: 'Worker',
    data() {
        return {
            workers: [],
            msg: "",
            address: ""
        }
    }
    async findWorker(addr) {
        this.workers = Pool.getWorkers(addr)
        if (this.workers.length === 0) {
            this.msg = 'Not Found'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
