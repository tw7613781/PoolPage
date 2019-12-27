<template>
    <div class="container">
        <h2>Bulletin</h2>
        <p class="error" v-if="error!=null">{{error}}</p>
        <div class="container-bulletin" v-if="bulletins.length!=0">
            <ul>
                <li v-for="bulletin in bulletins" :key="bulletin._id">
                    {{bulletin.tick}}: {{bulletin.msg}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Pool } from "../client.js"
export default {
    name: 'Bulletin',
    data() {
        return {
            bulletins: [],
            error: null,
        }
    },
    created: async function () {
        try {
            this.bulletins = await Pool.getBulletin()
        } catch (err) {
            this.error = err
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.container {
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        background-color: #f0f7fb;
        border: solid 1px #3498db;
        border-radius: 6px;
        line-height: 18px;
        overflow: hidden;
        padding: 12px;
    }
    ul {
        text-align: left;
    }
</style>
