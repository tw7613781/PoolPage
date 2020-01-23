<template>
    <div class="container">
        <h2>Check the worker details</h2>
        <input type="text" id="addr" v-model="address" placeholder="Input the Hycon address associated with worker..." size="50">
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
                        {{worker.name}}
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
            headers: ["age", "name", "HashRate", "Shares", "Address", "IP"],
            workers: [],
            error: null,
            address: "",
            timer: null,
        }
    },
    methods:{
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
        allWorkers: async function(){
            try {
                this.workers = await Pool.allWorkers()
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
        address: async function() {
            try {
                if (this.address.length > 0) {
                    if (this.address === "all"){
                        setImmediate(async ()=> {
                            await this.allWorkers()
                        })
                        if (this.timer !== null) {
                            clearInterval(this.timer)
                        } 
                        this.timer = setInterval( async ()=> {
                            await this.allWorkers()
                        }, FC.WORKER_POOLING_INTERVAL)
                    } else {
                        if (await this.workExist() === true) {
                            setImmediate(async ()=> {
                                await this.getWorkers()
                            })
                            if (this.timer !== null) {
                                clearInterval(this.timer)
                            } 
                            this.timer = setInterval( async ()=> {
                                await this.getWorkers()
                            }, FC.WORKER_POOLING_INTERVAL)
                        } else {
                            this.errorHandle("Not Found")
                            clearInterval(this.timer)
                            this.timer = null
                        }
                    }
                } else {
                    this.errorHandle(null)
                }
            } catch (err) {
                this.errorHandle(err)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    input {
        display: inline-block;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        padding: 10px 20px;
        border: 1px solid #b7b7b7;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        color: rgba(0,142,198,1);
        -o-text-overflow: clip;
        text-overflow: clip;
        background: rgba(252,252,252,1);
        -webkit-box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) inset;
        box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) inset;
        text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
        -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
        -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
        -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
        transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
    }
    table {
        border: solid 1px #f0f7fb;
        border-collapse: collapse;
        border-spacing: 0;
        margin: 0 auto;
    }
    table thead th {
        background-color: #f0f7fb;
        border: solid 1px #f0f7fb;
        color: #336B6B;
        padding: 10px;
        text-shadow: 1px 1px 1px #fff;
    }
    table tbody td {
        color: #333;
        padding: 10px;
        font-size: 13px;
        text-shadow: 1px 1px 1px #fff;
    }
</style>
