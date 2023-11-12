<template>
  <router-view/>
</template>

<script>

export default ({
  name: "App",
  data () {
    return {

    }
  },
  mounted () {
    $('body').addClass('dark-theme')
  }
})
</script>

<style>

</style>
