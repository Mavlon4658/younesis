<template>
    <button 
        @click="$emit('click')"
        class="main_button"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "MainButton",
}
</script>

<style>
.main_button {
    border-radius: 12px;
    background: #CF2E2E;
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    height: 56px;
    padding: 0px 24px;
}
</style>