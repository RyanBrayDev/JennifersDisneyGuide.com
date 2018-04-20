<template>
  <nav>
    <router-link to="/" class="nav-title">Jennifer's Disney Guide</router-link>

    <ul>
      <li><router-link to="/california-adventure">California Adventure</router-link></li>
      <li><router-link to="/disneyland">Disneyland</router-link></li>
      <li><router-link to="/downtown-disney">Downtown Disney</router-link></li>
      <!--<li><a href="https://disneyland.disney.go.com/disneyland/maps/" target="_blank"-->
             <!--class="closeMobileNav">Map</a></li>-->
      <!--<li><a href="https://play.google.com/store/apps/details?id=com.disney.wdpro.dlr&hl=en"-->
             <!--target="_blank" class="closeMobileNav">Android app</a></li>-->
      <!--<li><a href="https://itunes.apple.com/us/app/disneyland/id1022164656?mt=8" target="_blank"-->
             <!--class="closeMobileNav">IPhone app</a></li>-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  text-align: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
  height: 50px;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  background-color: Red;
  padding-right: 50px;
  padding-left: 50px;
}

a {
  text-decoration: none;
  color: white;
}

.nav-title {
  -webkit-flex: 1 0 0;
  flex: 1 0 0;
  margin-top: 15px;
  text-align: left;
}

ul {
  list-style-type: none;
 /*overflow: hidden;*/
  margin-top: 10px;
}

li {
  float: left;
  margin-left: 10px;
}

</style>
