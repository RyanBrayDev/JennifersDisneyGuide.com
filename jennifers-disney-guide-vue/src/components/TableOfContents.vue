<template>
  <ul id="example-1">
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "TableOfContents",
    props: ['headers']
  }

  var elements = Document.getElementsByClassName('navsection');

</script>

<style scoped>

</style>
