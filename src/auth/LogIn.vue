<template>
    <auth-default>
        <div v-show="!send_msg" class="login_wrapper">
            <div class="auth_title">Вход</div>
            <form-input type="phone" v-model:value="form_data.phone" label="Номер телефона"/>
            <main-button @click="sendformData()">Продолжить</main-button>
            <div class="login_link">
                <span>Уже есть аккаунт?</span>
                <router-link class="link" :to="{name: 'Register'}">Зарегистрироваться</router-link>
            </div>
        </div>
        <CheckMsg v-if="send_msg" :phone="form_data.phone" v-model:show="send_msg" v-model:msg_code="msg_code"/>
    </auth-default>
</template>

<script>
import AuthDefault from '@/auth/AuthDefault.vue'
import CheckMsg from '@/auth/CheckMsg.vue'

export default {
    name: "LogIn",
    components: {
        AuthDefault,
        CheckMsg,
    },
    data () {
        return {
            form_data: {
                phone: '+74543334455'
            },
            send_msg: false,
            msg_code: ''
        }
    },
    methods: {
        sendformData () {
            console.log('send form data');
            this.send_msg = true;
        }
    }
}  
</script>

<style>
.login_wrapper .main_button {
    margin-top: 24px;
    width: 100%;
}

.login_link {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 24px;
}

.login_link span {
    color: #A6A5A5;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
}

.login_link .link {
    color: #CF2E2E;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-decoration: none;
}

.dark-theme .login_link .link {
    color: #fff;
}

@media only screen and (max-width: 992px) {
    .login_link {
        justify-content: center;
        margin-top: 32px;
    }
}
</style>