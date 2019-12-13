<template>
    <div class="container">
        <h2>Pool Basic Info</h2>
        <p class="error" v-if="error!=null">{{error}}</p>
        <div class="container-pool" v-if="pool!=null">
            <p>Pool Difficulty: {{pool.diff.toExponential()}}</p>
            <p>Pool fee: {{pool.fee * 100}}% per Block and current network reward: {{pool.reward}} HYC per Block</p>
            <p>Pool hashrate: {{pool.hashrate}} and current network hashrate: {{pool.networkHashrate}}</p>
        </div>
    </div>
</template>

<script>
import { Pool } from "../client.js"
import { FC } from "../config.js"
export default {
    name: 'Pool',
    data() {
        return {
            pool: null,
            error: null,
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
            }, FC.POOL_POOLING_INTERVAL)
        } catch (err) {
            this.errorHandle(err)
        }
    },
    methods:{
        getPool: async function(){
            try {
                this.pool = await Pool.getPool()
                this.error = null
            } catch (err) {
                this.errorHandle(err)
            }
        },
        errorHandle: function(err) {
            this.error = err
            this.pool = null
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
