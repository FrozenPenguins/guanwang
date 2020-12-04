<template>
    <div id="app">
        <left-body></left-body>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    name: "app",
    // created() {
    //     console.log(111);
    //     this.aa();
    // },
    mounted() {
        // this.aa();
    },
    methods: {
    },
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiaed;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    height: 100vh;
}
</style>
