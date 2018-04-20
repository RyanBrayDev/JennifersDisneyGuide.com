<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
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
  margin-top: 60px;
}

body {
  position: relative;
  margin-top: 60px;
  font-size: 22px;
}

h1 {
  color: #f20505;
}
h2 {
  font-size: 34px;
}
h3 {
  font-size: 30px;
  font-weight: bold;
  margin-left: 3px;
}

</style>
