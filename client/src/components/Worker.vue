<template>
    <div class="container">
        <h2>Check the worker details</h2>
        <input type="text" id="addr" v-model="address" placeholder="Input the Hycon address associated with worker..." size="50">
        <button v-on:click="findWorker">Go</button>
        <p class="error" v-if="error!=null">{{error}}</p>
        <table class="displayWorkers" v-if="workers.length!=0">
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header.value">
                    {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="worker in workers" :key="worker._id">
                    <td>
                        {{worker.tick}}
                    </td>
                    <td>
                        {{worker._id}}
                    </td>
                    <td>
                        {{worker.hashrate}}
                    </td>
                    <td>
                        {{worker.shares}}
                    </td>
                    <td>
                        {{worker.address}}
                    </td>
                    <td>
                        {{worker.ip}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { Pool } from "../client.js"
import { FC } from "../config.js"
export default {
    name: 'Worker',
    data() {
        return {
            headers: ["age", "id", "HashRate", "Shares", "Address", "IP"],
            workers: [],
            error: null,
            address: null,
            timer: null,
        }
    },
    methods:{
        findWorker: function(){
            try {
                if (this.workExist() === true) {
                    setImmediate(async ()=> {
                        await this.getWorkers()
                    })
                    this.timer = setInterval( async ()=> {
                        await this.getWorkers()
                    }, FC.WORKER_POOLING_INTERVAL)
                } else {
                    this.error = "Not Found"
                }
            } catch (err) {
                this.errorHandle(err)
            }
        },
        workExist: async function() {
            try {
                const ret = await Pool.findWorkers(this.address)
                return ret.length === 0 ? false : true
            } catch (err) {
                this.errorHandle(err)
            }
        },
        getWorkers: async function(){
            try {
                this.workers = await Pool.findWorkers(this.address)
                this.error = null
            } catch (err) {
                this.errorHandle(err)
            }
        },
        errorHandle: function(err) {
            this.error = err
            this.workers = []
        }
    },
    watch: {
        address: function() {
            if (this.address === null) {
                this.error = null
                this.worker= []
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
