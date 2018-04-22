<template>
  <nav>
    <div class="container">
      <router-link to="/" class="nav-title">Jennifer's Disney Guide</router-link>
      <ul class="nav-links">
        <li>
          <router-link to="/disneyland">Disneyland</router-link>
        </li>
        <li>
          <router-link to="/california-adventure">California Adventure</router-link>
        </li>
        <li>
          <router-link to="/downtown-disney">Downtown Disney</router-link>
        </li>
        <!--<li><a href="https://disneyland.disney.go.com/disneyland/maps/" target="_blank"-->
        <!--class="closeMobileNav">Map</a></li>-->
        <!--<li><a href="https://play.google.com/store/apps/details?id=com.disney.wdpro.dlr&hl=en"-->
        <!--target="_blank" class="closeMobileNav">Android app</a></li>-->
        <!--<li><a href="https://itunes.apple.com/us/app/disneyland/id1022164656?mt=8" target="_blank"-->
        <!--class="closeMobileNav">IPhone app</a></li>-->
      </ul>
    </div>
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
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: Red;
    border-bottom: 2px solid yellow;
    height: 50px;
  }

  .nav-title {
    float: left;
    color: white;
    text-decoration: none;
  }

  .nav-links {
    float: right;
    list-style-type: none;
    overflow: hidden;
    margin: 0;
  }

  .container{
    margin-top: 10px;
  }

  li {
    float: left;
    margin-left: 20px;
    display: block;
  }

  a {
    color: white;
    text-decoration: none;
  }
</style>
