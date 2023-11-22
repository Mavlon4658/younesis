<template>
    <div class="logotip">
        <img src="@/assets/images/logo.svg" class="light" alt="">
        <img src="@/assets/images/light_logo.svg" class="dark" alt="">
    </div>
</template>

<script>
export default {
    name: "Logo"
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.logotip {
    display: inline-flex;
    width: 128px;
    height: 32px;
    align-items: flex-end;
    justify-content: flex-end;

    .dark {
        display: none;
    }
}

.dark-theme .logotip {
    .light {
        display: none;
    }

    .dark {
        display: block;
    }
}
</style>