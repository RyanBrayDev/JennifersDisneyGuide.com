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
  margin-top: 50px;
}

body {
  position: relative;
  margin: 0;
  padding-top: 10px;
  font-size: 22px;
  line-height: 30px;
}

h1 {
  color: #f20505;
  margin-bottom: 0px;
}
h2 {
  font-size: 34px;
  /*padding-top: 65px;*/
  /*margin-top: -65px;*/
}

h3 {
  font-size: 30px;
  font-weight: bold;
  margin-left: 3px;
}

p{
  margin-top: 15px;
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
