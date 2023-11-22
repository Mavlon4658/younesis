<template>
    <nav>
        <div class="nav_content">
            <div>
                <slot></slot>
            </div>
            <router-link :to="{name: 'Profile'}" class="user_panel">
                <img src="@/assets/images/user_logo.png" alt="">
                <span class="user_name">
                    Андрей Иванов
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 16L14 12L10 8" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

nav {
    height: 96px;

    .nav_content {
        padding: 22px 26px 26px 20px;
        border-bottom: 1px solid $color-16;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        left: 260px;
        top: 0;
        width: calc(100% - 260px);
        background: $color-1;
        z-index: 2;
        height: 96px;
    }

    .user_panel {
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;

        .user_name {
            color: $color-2;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
        }
    }
}

.dark-theme nav {
    .nav_content {
        background: $color-3;
        border-bottom: 1px solid $color-17;
    }

    .user_panel .user_name {
        color: $color-1;

        svg path {
            stroke: $color-1;
        }
    }
}

@media only screen and (max-width: 992px) {
    nav {
        display: none;
    }
}
</style>