<template>
    <button
        @click="$emit('update:value', !value)"
        class="switch_btn"
        :class="{'active': value}"
    >
        <span></span>
    </button>
</template>

<script>
export default {
    name: 'FormSwitch',
    props: {
        value: Boolean,
    },
    emits: ['update:value']
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.switch_btn {
    width: 40px;
    height: 24px;
    background: $color-4;
    border-radius: 40px;
    padding: 2px;
    transition: .2s ease all;

    span {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: block;
        background: $color-1;
        transition: .2s ease all;
        margin-left: 0;
    }
}

.switch_btn.active {
    background: $color-5 !important;

    span {
        margin-left: 16px;
    }
}

.dark-theme .switch_btn {
    background: $color-13;
}
</style>