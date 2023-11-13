<template>
    <div class="edit_head_mobile">
        <router-link :to="{name: to}" class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 12H22" stroke="#CF2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 5L2 12" stroke="#CF2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 19L2 12" stroke="#CF2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </router-link>
        <div class="title">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "MobileEditHeader",
    props: {
        to: String
    }
}
</script>

<style>

</style>