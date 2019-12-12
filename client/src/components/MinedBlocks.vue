<template>
    <div class="minedBlocks">
        <p>Mined Blocks Detail</p>
        <p class="error" v-if="error">{{error}}</p>
        <table class="displayMinedBlocks" v-if="blocks.length!=0">
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
                        {{block._id}}
                    </td>
                    <td>
                        {{block.mainchain}}
                    </td>
                    <td>
                        {{block.paied}}
                    </td>
                    <td>
                        {{block.prevHash}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { Pool } from "../client.js"
export default {
    name: 'MinedBlocks',
    data() {
        return {
            headers: ["hash", "inMainChain", "paied", "prevHash"],
            blocks: [],
            error: "",
            timer: null,
        }
    },
    created: async function () {
        try {
            setImmediate(async ()=> {
                await this.getMinedBlocks()
            })
            this.timer = setInterval( async ()=> {
                await this.getMinedBlocks()
            }, 1000 * 60)
        } catch (err) {
            this.error = err
        }
    },
    methods:{
        getMinedBlocks: async function(){
            try {
                this.blocks = await Pool.getMinedBlocks()
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
