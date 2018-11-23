<template>
  <pdf  :src="src"
       style="display: inline-block; width: 100%"
  ></pdf>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: 'Edsfilesdaily',
    components: {
      pdf
    },
    data() {
      return {
        src: 'http://localhost:8090/EDSReport/?dir=Daily&file='+this.$route.params.filename,
      }
    }
  }
</script>

<style scoped>

</style>



