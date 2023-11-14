<template>
    <div class="auth_wrapper">
        <div class="auth_container">
            <div class="auth_head">
                <Logo />
                <button @click="$router.push({name: 'Home'})">
                    <img src="@/assets/images/close.svg" alt="">
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
                    <!-- here is a image -->
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

.auth_head .logotip {
    display: none;
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

.dark-theme .auth_row {
    background: #222;
}

.auth_left, .auth_right {
    width: 50%;
}

.auth_right {
    background: #ECECEC;
}

.dark-theme .auth_right {
    background: #4B4B4B;
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

@media only screen and (max-width: 1400px) {
    .auth_container {
        max-width: calc(100% - 100px);
    }
}

@media only screen and (max-width: 992px) {
    .auth_container {
        max-width: 100%;
        margin: 0;
    }


    .auth_wrapper {
        background: #171717;
        margin: 0;
        height: 100vh;
        padding-top: 64px;
    }

    .auth_row {
        height: calc(100vh - 128px);
        border-radius: 16px 16px 0 0;
    }

    .auth_right {
        display: none;
    }

    .auth_left {
        width: 100%;
        padding: 24px 16px;
        display: block;
    }

    .auth_head {
        padding: 0px 16px;
        justify-content: space-between;
        height: 32px;
        margin-bottom: 32px;
    }

    .auth_head .logotip {
        display: block;
    }

    .auth_head .logotip .light {
        display: none;
    }

    .auth_head .logotip .dark {
        display: block;
    }

    .auth_left_in {
        width: 100%;
    }

    .auth_left_in .logotip {
        display: none;
    }
}
</style>