<template>
    <div class="edit_roles_wrapper">
        <mobile-edit-header to="EditProfile">Роли</mobile-edit-header>
        <div class="title">Введи 3 роли,  в которых ты работаешь</div>
        <div class="role" v-for="(item, i) in roles" :key="i">
            <form-input v-model:value="roles[i]" placeholder="Роль"/>
            <svg @click="roles[i] = ''" v-if="item.length" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.8299 9.16998L9.16992 14.83" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.8299 14.83L9.16992 9.16998" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditRoles',
    data () {
        return {
            roles: ['Редактор', 'Проектировщик интерфейсов', '']
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.edit_roles_wrapper {
    .title {
        color: $color-2;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        margin-bottom: 16px;
    }

    .role {
        position: relative;
        margin-bottom: 8px;
    
        input {
            padding: 0px 44px 0 12px;
        }
        
        label {
            display: none;
        }
        
        svg {
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
}

.dark-theme .edit_roles_wrapper {
    .title {
        color: $color-1;
    }
    
    .role svg path {
        stroke: $color-20;
    }
}

@media only screen and (max-width: 992px) {
    .edit_roles_wrapper {
        .title {
            margin-bottom: 24px;
            margin-top: 8px;
        }

        .role {
            margin-bottom: 4px;
        }
    }

    .dark-theme .edit_roles_wrapper .title {
        color: $color-4;
    }

}
</style>