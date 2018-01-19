<template>
    <div id="app" class="app" @click="event">
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import CONST from '../const';
    export default {
        name: 'app',
        methods: {

        }
    }
</script>
<style>
    @import "../common/scss/base.css";
</style>
