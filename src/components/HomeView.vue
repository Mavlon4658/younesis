<template>
    <div class="home_default">
        <div class="header_wrapper" :class="{'mobile_header': $route.path.includes('profile/edit') || $route.name == 'Settings', 'test_mobile': $route.name === 'Test'}">
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
    name: "HomeView",
    components: {
        Header,
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.header_wrapper {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 260px;
    padding: 20px;
    padding-top: 32px;
    border-right: 1px solid $color-16;
    z-index: 2;
}

.dark-theme .header_wrapper {
    border-right: 1px solid $color-17;
}

.home_wrapper {
    position: relative;
    margin-left: 260px;
}

@media only screen and (max-width: 992px) {
    .header_wrapper {
        top: auto;
        bottom: 0;
        width: 100%;
        height: 80px;
        border: none;
        border-top: 1px solid $color-16;
        background: $color-1;
        padding: 0;
    }

    .mobile_header, .test_mobile {
        display: none;
    }

    .dark-theme .header_wrapper {
        background: $color-3;
        border-top: 1px solid $color-17;
    }

    .home_wrapper {
        width: 100%;
        margin: 0;
    }
}
</style>