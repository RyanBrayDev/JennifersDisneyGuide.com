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

  .router-link-active {
    color: yellow;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }

  .nav-links a {
    display: inline-block;
    margin-left: 20px;
  }

  .nav-links a:hover {
    background-color: yellow;
    color: black;
  }

  .icon {
    display: none;
  }


  @media screen and (max-width: 650px) {
    .nav-links a {
      display: none;
      text-decoration: none;
    }

    .icon {
      float: right;
      display: block;
      background-color: yellow;
      border: solid black 2px;
      color: black;
      padding: 2px 8px;
      border-radius: 5px;
      margin-top: 6px;
    }

    .nav-links.responsive {
      float: none;
      display: block;
      width: 100%;
      border-top: solid white 2px;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .nav-links.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
</style>
