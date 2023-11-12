<template>
    <nav>
        <div class="nav_content">
            <div>
                <slot></slot>
            </div>
            <button class="user_panel">
                <img src="@/assets/images/user_logo.png" alt="">
                <span class="user_name">
                    Андрей Иванов
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 16L14 12L10 8" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style>
nav {
    height: 96px;
}

nav .nav_content {
    padding: 22px 26px 26px 20px;
    border-bottom: 1px solid #F3EFEF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 260px;
    top: 0;
    width: calc(100% - 260px);
    background: #fff;
    z-index: 2;
}

nav .user_panel {
    display: flex;
    align-items: center;
    gap: 8px;
}

nav .user_panel .user_name {
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
}
</style>