<template>
    <div class="home_default">
        <div class="header_wrapper">
            <Header />
        </div>
        <div class="home_wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: "HomeDefault",
    components: {
        Header,
    }
}
</script>

<style>
.header_wrapper {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 260px;
    padding: 20px;
    padding-top: 32px;
    border-right: 1px solid #F3EFEF;
}

.home_wrapper {
    position: relative;
    margin-left: 260px;
}
</style>