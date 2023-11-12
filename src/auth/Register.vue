<template>
    <auth-default>
        <div class="auth_title">Регистрация</div>
        <div class="register_inputs">
            <form-input v-model:value="form_data.first_name" label="Имя"/>
            <form-input v-model:value="form_data.last_name" label="Фамилия"/>
            <form-input type="phone" v-model:value="form_data.phone" label="Номер телефона"/>
        </div>
    </auth-default>
</template>

<script>
import AuthDefault from '@/auth/AuthDefault.vue'
import FormInput from '@/components/UI/FormInput.vue'

export default {
    name: "Register",
    components: {
        AuthDefault,
        FormInput
    },
    data () {
        return {
            form_data: {
                phone: '+7'
            }
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
}
</style>