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
  created () {
    let dark = localStorage.getItem('dark_mode');
        
    if (!dark) {
        localStorage.setItem('dark_mode', JSON.stringify(false));
        dark = false;
    } else {
      dark = JSON.parse(dark);
    }

    if (dark) {
      $('body').addClass('dark-theme')
    } else {
      $('body').removeClass('dark-theme')
    }
  },
})
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

</style>
