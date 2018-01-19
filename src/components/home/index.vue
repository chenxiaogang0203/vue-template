<template>
    <div class="home-wrap">
        <button type="button" @click="click"> 这是一个 demo，请点我</button>
        <div>计数{{status}}</div>
        <button type="button"  @click="loadData">请求数据</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapState } from 'vuex'
    import store from '../../store'

    export default {
        name: 'index',
        mounted(){
            document.body.className = ''
        },
        computed: mapState({
            status: state => state.status
        }),
        methods: {
            click(){
                store.commit('updateStatus')
            },
            loadData(){
                store.commit('loadData')
            }
        }
    }
</script>

<style>
    @import "style.css";
</style>
