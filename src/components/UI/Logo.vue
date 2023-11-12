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

<style>
.logotip {
    display: inline-flex;
    width: 128px;
    height: 32px;
    align-items: flex-end;
    justify-content: flex-end;
}

.logotip .dark {
    display: none;
}

.dark-theme .logotip .light {
    display: none;
}

.dark-theme .logotip .dark {
    display: block;
}
</style>