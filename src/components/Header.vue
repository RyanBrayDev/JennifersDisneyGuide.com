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

  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #333;
    overflow: hidden;
  }

  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add an active class to highlight the current page */
  .active {
    background-color: #4CAF50;
    color: white;
  }

  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
    display: none;
  }

  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {display: none;}
    .topnav a.icon {
      float: right;
      display: block;
    }
  }

  /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
  @media screen and (max-width: 600px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
</style>
