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

<style lang="scss">
@import '@/assets/_variables.scss';

.main_button {
    border-radius: 12px;
    background: $color-5;
    color: $color-1;
    font-size: 14px;
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
    border: 1px solid $color-4;
    color: $color-2;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.main_button.text-red {
    color: $color-5;
    font-weight: 600;
}

.dark-theme .main_button.light {
    border: 1px solid $color-13;
    color: $color-1;
}
</style>