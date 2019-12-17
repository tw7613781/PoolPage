<template>
    <div class="container">
        <h2>Mined Blocks Detail</h2>
        <p class="error" v-if="error!=null">{{error}}</p>
        <table class="container-blocks" v-if="blocks.length!=0">
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header.value">
                    {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="block in blocks" :key="block._id">
                    <td>
                        {{block.timestamp}}
                    </td>
                    <td>
                        <a :href="hyconExplorerBlock + block._id" class="href" target="_blank">
                            {{block._id}}
                        </a>
                    </td>
                    <td>
                        {{block.mainchain}}
                    </td>
                    <td>
                        {{block.paied}}
                    </td>
                    <td>
                        <a :href="hyconExplorerBlock + block.prevHash" class="href" target="_blank">
                            {{block.prevHash}}
                        </a>
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
    name: 'MinedBlocks',
    data() {
        return {
            headers: ["age", "hash", "inMainChain", "paied", "prevHash"],
            blocks: [],
            error: null,
            timer: null,
            hyconExplorerBlock: FC.HYCON_EXPLORER + "block/"
        }
    },
    created: async function () {
        try {
            setImmediate(async ()=> {
                await this.getMinedBlocks()
            })
            this.timer = setInterval( async ()=> {
                await this.getMinedBlocks()
            }, FC.BLOCKS_POOLING_INTERVAL)
        } catch (err) {
            this.errorHandle(err)
        }
    },
    methods:{
        getMinedBlocks: async function(){
            try {
                this.blocks = await Pool.getMinedBlocks()
                this.error = null
            } catch (err) {
                this.errorHandle(err)
            }
        },
        errorHandle: function(err) {
            this.error = err
            this.blocks = []
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    a:link {
        color: rgba(0,142,198,1);
    }
    a:visited {
        color: blue;
    }
    a:hover {
        color: red;
    }
    a:active {
        color: green;
    }
</style>
