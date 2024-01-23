<template>
    <div class="wrapper">
        <div class="home_layout">
            <router-view/>
        </div>
        <Header></Header>
    </div>
</template>

<script>
import Header from '@/components/newVersionComponents/Header.vue'
export default {
    name: "HomeLyout",
    components: {
        Header
    }
}
</script>

<style lang="scss">
.home_layout {
    padding-bottom: 112px;
}
</style>