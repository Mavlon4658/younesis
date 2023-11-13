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

<style>
.switch_btn {
    width: 40px;
    height: 24px;
    background: #D3D2D2;
    border-radius: 40px;
    padding: 2px;
    transition: .2s ease all;
}

.dark-theme .switch_btn {
    background: #4D4C4C;
}

.switch_btn.active {
    background: #CF2E2E;
}

.switch_btn span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    background: white;
    transition: .2s ease all;
    margin-left: 0;
}

.switch_btn.active span {
    margin-left: 16px;
}
</style>