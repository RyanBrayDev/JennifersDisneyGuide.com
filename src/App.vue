<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Vue from 'vue';
  import Scrollspy from 'vue2-scrollspy';

  Vue.use(Scrollspy);

  export default {
    name: 'App',
    components: {Header}
  }

</script>

<style>
  #app {
    font-family: 'Mouse Memoirs', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 50px;
  }

  body {
    padding-top: 20px;
    font-size: 22px;
    line-height: 30px;
    margin: 0px;
  }

  h1 {
    color: #f20505;
    margin-bottom: 10px;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
</style>
