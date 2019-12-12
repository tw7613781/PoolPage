<template>
    <div class="workers">
        <p>Check the worker details</p>
        <input type="text" id="addr" v-model="address" placeholder="Input the Hycon address associated with worker..." size="50">
        <button v-on:click="findWorker">Go</button>
        <p class="error" v-if="error">{{error}}</p>
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
                    <td>
                        {{worker.tick}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { Pool } from "../client.js"
export default {
    name: 'Worker',
    data() {
        return {
            headers: ["id", "HashRate", "Shares", "Address", "IP", "LoginAt"],
            workers: [],
            error: "",
            address: "",
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
                    }, 1000 * 60)
                } else {
                    this.error = "Not Found"
                }
            } catch (err) {
                this.error = err
            }
        },
        workExist: async function() {
            try {
                const ret = await Pool.findWorkers(this.address)
                return ret.length === 0 ? false : true
            } catch (err) {
                this.error = err
            }
        },
        getWorkers: async function(){
            try {
                this.workers = await Pool.findWorkers(this.address)
            } catch (err) {
                this.error = err
            }
            
        }
    },
    watch: {
        address: function() {
            if (this.address === "") {
                this.error = ""
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
