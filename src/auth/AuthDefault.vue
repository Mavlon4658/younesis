<template>
    <div class="auth_wrapper">
        <div class="auth_container">
            <div class="auth_head">
                <button>
                    <img src="@/assets/close.svg" alt="">
                </button>
            </div>
            <div class="auth_row">
                <div class="auth_left">
                    <div class="auth_left_in">
                        <Logo />
                        <slot></slot>
                    </div>
                </div>
                <div class="auth_right">
                    <img src="@/assets/auth_bg.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthDefault'
}
</script>

<style>
.auth_container {
    max-width: 1360px;
    margin: 128px auto 180px;
}

.auth_head {
    margin-bottom: 20px;
    text-align: right;
    display: flex;
    justify-content: flex-end;
}

.auth_head button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.auth_head button img {
    width: 32px;
    height: 32px;
}

.auth_row {
    display: flex;
    align-items: stretch;
    gap: 0px;
    background: #F6F6F6;
    border-radius: 16px;
    overflow: hidden;
    height: 720px;
}

.auth_left, .auth_right {
    width: 50%;
}

.auth_right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.auth_left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 80px;
}

.auth_left_in {
    width: 328px;
}

.auth_left .logotip {
    margin-bottom: 48px;
}
</style>