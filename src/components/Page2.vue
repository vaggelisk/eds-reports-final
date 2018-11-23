<template>
  <div class="hello">
    <h1>{{ msg + " " + incomeMsg }}</h1>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Navigate to Edsfiles</a>
  </div>
</template>

<script>
  import router from '../router'

  export default {
    name: 'Page2',
    data () {
      return {
        incomeMsg: this.$route.params.name,
        msg: 'Hey Nic Raboy'
      }
    },
    methods: {
      navigate() {
        router.push({ name: "Edsfiles" });
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
