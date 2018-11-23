<template>
  <pdf  :src="src"
       style="display: inline-block; width: 100%"
  ></pdf>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: 'Edsfiles',
    components: {
      pdf
    },
    data() {
      return {
        src: 'http://localhost:8090/EDSReport/?dir=Daily&file=EDSReport_05_01_2017_10.00.pdf',
        // src: './static/' + this.$route.params.filename,
      }
    }
  }
</script>

<style scoped>

</style>


