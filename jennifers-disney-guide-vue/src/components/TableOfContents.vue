<template>
  <div class="table-of-contents">
    <ul v-scroll-spy-active v-scroll-spy-link>
      <li v-for="content in contents" :key="content.id">
        <a>{{ content.anchorText }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TableOfContents",
    data: function () {
      return {
        contents: [],
      }
    },
    mounted() {
      var elements = document.getElementsByClassName('toc-content');
      var newContents = [];
      console.log(elements);
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].firstChild.innerText) {
          newContents.push({
            id: elements[i].id,
            anchorText: elements[i].firstChild.innerText
          });
        }
        else {
          newContents.push({
            id: elements[i].firstChild.id,
            anchorText: elements[i].firstChild.firstChild.alt
          });
        }
      }
      this.contents = newContents;
    }
  }
</script>

<style scoped>

  .table-of-contents {
    background-color: red;
    overflow-x: auto;
    border-radius: 5px;
    border: 2px solid yellow;
    padding: 20px;
    position: fixed;
    width: 210px;
    color: white;
  }

  .table-of-contents a {
    text-decoration: none;
    font-size: 25px;
    display: block;
    margin-bottom: 10px;
  }

  .table-of-contents a:hover {
    color: yellow;
  }

  .active {
    color: yellow;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  /*!* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) *!*/
  /*@media screen and (max-height: 450px) {*/
    /*.table-of-contents {*/
      /*padding-top: 15px;*/
      /*max-width: 250px;*/
    /*}*/

    /*.table-of-contents a {*/
      /*font-size: 18px;*/
    /*}*/
  /*}*/
</style>
