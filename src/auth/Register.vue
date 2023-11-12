<template>
    <auth-default>
        <div v-show="!send_msg" class="register_wrapper">
            <div class="auth_title">Регистрация</div>
            <div class="register_inputs">
                <form-input v-model:value="form_data.first_name" label="Имя"/>
                <form-input v-model:value="form_data.last_name" label="Фамилия"/>
                <form-input type="phone" v-model:value="form_data.phone" label="Номер телефона"/>
            </div>
            <main-button @click="sendFormData()">Продолжить</main-button>
            <div class="register_link">
                <span>Уже есть аккаунт?</span>
                <router-link :to="{name: 'LogIn'}" class="link">Войти</router-link>
            </div>
        </div>
        <CheckMsg v-if="send_msg" :phone="form_data.phone" v-model:show="send_msg" v-model:msg_code="msg_code"/>
    </auth-default>
</template>

<script>
import AuthDefault from '@/auth/AuthDefault.vue'
import CheckMsg from '@/auth/CheckMsg.vue'

export default {
    name: "Register",
    components: {
        AuthDefault,
        CheckMsg
    },
    data () {
        return {
            form_data: {
                phone: '+7'
            },
            send_msg: false,
            msg_code: ''
        }
    },
    methods: {
        sendFormData () {
            console.log('send data');
            this.send_msg = true;
        }
    }
}
</script>

<style>
.auth_title {
    margin-bottom: 24px;
}

.register_inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
}

.register_wrapper .main_button {
    width: 100%;
}

.register_link {
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.register_link span {
    color: #A6A5A5;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
}

.register_link .link {
    color: #CF2E2E;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-decoration: none;
}

.dark-theme .register_link .link {
    color: #fff;
}

@media only screen and (max-width: 992px) {
    .register_link {
        justify-content: center;
        margin-top: 32px;
    }
}
</style>