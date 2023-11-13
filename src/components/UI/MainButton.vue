<template>
    <button
        class="main_button"
        :class="[type, className]"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "MainButton",
    props: {
        type: {
            type: String,
            default: ''
        },
        className: {
            type: String,
            default: ''
        }
    }
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

.main_button.light {
    height: 48px;
    padding: 0px 14px;
    background: transparent;
    border-radius: 10px;
    border: 1px solid #D3D2D2;
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.dark-theme .main_button.light {
    border: 1px solid #4D4C4C;
    color: #fff;
}
</style>