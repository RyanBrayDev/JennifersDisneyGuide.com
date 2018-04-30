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
    overflow-y: scroll;
    border-radius: 5px;
    border: 2px solid yellow;
    padding: 20px;
    position: fixed;
    width: 210px;
    color: white;
    display: none;
  }

  @media (min-width: 768px) {
    .table-of-contents {
      display: block;
    }
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

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

</style>
