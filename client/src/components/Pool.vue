<template>
    <div class="pool">
        <h1>Hycon Mining Pool</h1>
        <p class="error" v-if="error">{{error}}</p>
        <div class="poolInfo" v-if="pool">
            <p>Pool Difficulty: {{pool.diff.toExponential()}}</p>
            <p>Pool fee: {{pool.fee}} HYC and current network reward: {{pool.reward}} HYC</p>
            <p>Pool hashrate: {{pool.hashrate}} and current network hashrate: {{pool.networkHashrate}}</p>
        </div>
    </div>
</template>

<script>
import { Pool } from "../client.js"
export default {
    name: 'Pool',
    data() {
        return {
            pool: null,
            error: "",
            timer: null,
        }
    },
    created: async function () {
        try {
            setImmediate(async ()=> {
                await this.getPool()
            })
            this.timer = setInterval( async ()=> {
                await this.getPool()
            }, 1000 * 60)
        } catch (err) {
            this.error = err
        }
    },
    methods:{
        getPool: async function(){
            try {
                this.pool = await Pool.getPool()
            } catch (err) {
                this.error = err
            }
            
        }
    },
    watch: {
        error: function() {
            if (this.error != "") {
                clearInterval(this.timer)
                return 
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
