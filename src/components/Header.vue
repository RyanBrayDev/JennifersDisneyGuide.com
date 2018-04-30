<template>
  <nav>
    <div class="container">
      <router-link to="/" class="nav-title">Jennifer's Disney Guide</router-link>
      <a href="javascript:void(0);" class="icon" v-on:click="toggleResponsive">&#9776;</a>
      <div class="nav-links" id="navbar">
        <router-link v-on:click.native="closeNavDrawer" to="/disneyland">Disneyland</router-link>
        <router-link v-on:click.native="closeNavDrawer" to="/california-adventure">California Adventure</router-link>
        <router-link v-on:click.native="closeNavDrawer" to="/downtown-disney">Downtown Disney</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      toggleResponsive:
        function () {
          var x = document.getElementById("navbar");
          if (x.className === "nav-links") {
            x.className += " responsive";
          } else {
            x.className = "nav-links";
          }
        },
      closeNavDrawer:
        function () {
          var x = document.getElementById("navbar");
          x.className = "nav-links";
          console.log("clikced")
        }
    }
  }
</script>

<style scoped>

  nav {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: Red;
    border-bottom: 2px solid yellow;
    min-height: 50px;
  }

  .container {
    margin-top: 10px;
  }

  .nav-title {
    float: left;
    color: white;
    text-decoration: none;
  }

  .nav-links {
    float: right;
    overflow: hidden;
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .nav-links a {
    display: inline-block;
    margin-left: 20px;
  }

  .icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .nav-links a {
      display: none;
      text-decoration: none;
    }

    .icon {
      float: right;
      display: block;
    }

    .nav-links.responsive {
      float: none;
      display: block;
      width: 100%;
    }

    .nav-links.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
</style>
