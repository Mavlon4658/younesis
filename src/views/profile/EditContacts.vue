<template>
    <mobile-edit-header to="EditProfile">Ссылки на проекты</mobile-edit-header>
    <div class="edit_contact">
        <div class="contact_item" v-for="(item, i) in user_data" :key="i">
            <form-input
                :type="user_data[i].type"
                v-model:value="user_data[i].value"
                :label="user_data[i].name"
            />
            <div v-if="user_data[i].subtitle" class="subtitle">{{ user_data[i].subtitle }}</div>
            <div v-if="user_data[i].show_title" class="switch_wrapper">
                <div class="text">{{ user_data[i].show_title }}</div>
                <form-switch v-model:value="user_data[i].show" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditContacts',
    data () {
        return {
            user_data: [
                {name: 'Telegram', type: 'text', value: '@andreyivanov', show_title: 'Показывать Telegram в профиле', show: true},
                {name: 'Instagram*', type: 'text', value: '@andreyivanov', show_title: 'Показывать Instagram в профиле', show: true, subtitle: '*Instagram, продукт компании Meta, признанная экстремистской организацией в России'},
                {name: 'E-mail', type: 'text', value: ''},
                {name: 'Номер телефона', type: 'phone', value: '+79372820000', show_title: 'Показывать телефон в профиле', show: false},
            ]
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.edit_contact {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .subtitle {
        color: $color-19;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        margin-top: 4px;
    }

    .switch_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;

        .text {
            color: $color-2;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
        }
    }
}

.dark-theme .edit_contact {
    .subtitle {
        color: $color-13;
    }

    .switch_wrapper .text {
        color: $color-1;
    }
}




@media only screen and (max-width: 992px) {
    .edit_contact {
        margin-top: 8px;
        gap: 24px;

        .subtitle {
            margin-top: 8px;
        }
    
        .switch_wrapper {
            margin-top: 8px;
        }
    }
}
</style>