<template>
  <div class="component">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: "Don't be afraid to read the docs!"
      }
    }
  }
</script>

<style scoped>
  .component {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background: #e8e8e8;
    min-height: 400px;
  }

  .error {
    border: 1px solid #aa0000;
    padding: 1rem;
    color: #aa0000;
  }

  h1, h2 {
    margin-top: 0;
    padding-top: 20%;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
</style>