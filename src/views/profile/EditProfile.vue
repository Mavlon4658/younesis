<template>
    <div class="edit_profile">
        <mobile-edit-header to="Profile">Профиль</mobile-edit-header>

        <div class="change_user_img">
            <div class="img_wrapper">
                <input
                    type="file"
                    ref="img_file"
                    @change="uploadImg"
                    accept="image/png, image/gif, image/jpeg"
                    class="hidden"
                >
                <img
                    v-show="user_data.photo"
                    ref="img"
                    src="@/assets/images/user.png"
                    class="user_img"
                >
                <div class="icon" @click="e => $refs.img_file.click()">
                    <img src="@/assets/images/camera_icon.svg" alt="">
                </div>
            </div>
            <main-button @click="user_data.photo = null" type="light">Удалить фото</main-button>
        </div>

        <div class="edit_mobile_menues">
            <div
                v-for="(item, i) in edit_profile_links"
                :key="i"
                class="link_wrapper"
                :class="{'last': i === edit_profile_links.length - 1}"
            >
                <button v-if="item.type" @click="show_edit_profile = !show_edit_profile" class="link">
                    <span class="link_left">
                        <span class="icon" v-html="item.svg"></span>
                        <span class="title">{{ item.name }}</span>
                    </span>
                    <span class="link_right">
                        <span class="title">{{ item.label }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 16L14 12L10 8" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </button>
                <router-link v-if="!item.type" :to="{name: item.to}" class="link">
                    <span class="link_left">
                        <span class="icon" v-html="item.svg"></span>
                        <span class="title">{{ item.name }}</span>
                    </span>
                    <span class="link_right">
                        <span class="title">{{ item.label }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 16L14 12L10 8" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </router-link>
            </div>
            <div class="mobile_links">
                <main-button type="light" @click="logOut()">
                    <img src="@/assets/images/logout_icon.svg" alt="">
                    <span>Выйти из аккаунта</span>
                </main-button>
            </div>
        </div>

        <div class="mobile_edit_wrapper" :class="{'active': show_edit_profile}">
            <div class="edit_head_mobile">
                <button @click="show_edit_profile = !show_edit_profile" class="link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2 12H22" stroke="#CF2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 5L2 12" stroke="#CF2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 19L2 12" stroke="#CF2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="title">
                    Личные данные
                </div>
            </div>
            <div class="inputs">
                <form-input v-model:value="user_data.first_name" label="Имя"/>
                <form-input v-model:value="user_data.last_name" label="Фамилия"/>
                <form-input type="phone" v-model:value="user_data.phone" label="Номер телефона"/>
                <form-select :options="genders" v-model:value="user_data.gender" label="Пол"/>
            </div>
            <main-button @click="saveUserData">Сохранить</main-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditProfile',
    data () {
        return {
            user_data: {
                first_name: "Андрей",
                last_name: "Иванов",
                phone: "+79372820000",
                gender: 'Мужской',
                photo: true,
            },
            genders: ['Мужской', 'Женской'],
            edit_profile_links: [
                {
                    name: 'Личные данные',
                    label: 'Имя, пол,',
                    type: 'button',
                    to: 'EditProfile',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3349 18.0025H7.66532C7.29817 18.0025 6.99805 17.7024 6.99805 17.3352V16.793C6.99805 15.2574 8.25457 14.0009 9.79121 14.0009H14.2101C15.7457 14.0009 17.0022 15.2574 17.0022 16.794V17.3362C17.0022 17.7024 16.7021 18.0025 16.3349 18.0025Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9992 11.4997C10.4846 11.4997 9.24805 10.2672 9.24805 8.75959C9.24805 7.25196 10.4846 5.99744 11.9992 5.99744C13.5138 5.99744 14.7503 7.22995 14.7503 8.73758C14.7503 10.2452 13.5138 11.4997 11.9992 11.4997Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0019 21.0037H6.99776C4.78784 21.0037 2.99609 19.212 2.99609 17.002V6.99788C2.99609 4.78796 4.78784 2.99622 6.99776 2.99622H17.0019C19.2118 2.99622 21.0036 4.78796 21.0036 6.99788V17.002C21.0036 19.212 19.2118 21.0037 17.0019 21.0037Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: 'Роли',
                    label: 'Редактор, проектиров...',
                    to: 'EditRoles',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9.91422 10.1788C10.6953 10.9599 10.6953 12.2262 9.91422 13.0072C9.13317 13.7883 7.86684 13.7883 7.08579 13.0072C6.30474 12.2262 6.30474 10.9599 7.08579 10.1788C7.86684 9.39776 9.13317 9.39776 9.91422 10.1788" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 11H19" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18 14.5H15" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 18.041C11.83 17.614 11.567 17.23 11.229 16.917V16.917C10.658 16.388 9.908 16.093 9.129 16.093H7.871C7.092 16.093 6.342 16.387 5.771 16.917V16.917C5.433 17.229 5.17 17.613 5 18.041" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H11C10.448 7 10 6.552 10 6V3C10 2.448 10.448 2 11 2H13C13.552 2 14 2.448 14 3V6C14 6.552 13.552 7 13 7Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 5H4.041C2.914 5 2 5.914 2 7.041V19C2 20.105 2.895 21 4 21H20C21.105 21 22 20.105 22 19V7C22 5.895 21.105 5 20 5H14" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: 'Ниши',
                    label: 'Копирайтинг, дизайн,...',
                    to: 'EditNiches',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5029 21.0037H15.0002C14.724 21.0037 14.5 20.7798 14.5 20.5035V20.0974C14.5033 18.9418 15.4393 18.0058 16.5949 18.0025H19.9083C21.0639 18.0058 21.9998 18.9418 22.0031 20.0974V20.5035C22.0031 20.7798 21.7792 21.0037 21.5029 21.0037Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2527 15.5015C17.1484 15.4992 16.2548 14.6029 16.2559 13.4986C16.257 12.3944 17.1524 11.4998 18.2567 11.4998C19.3609 11.4998 20.2564 12.3944 20.2575 13.4986C20.2586 14.6029 19.3649 15.4992 18.2607 15.5015H18.2527Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.9994 19.0029H4.99693C3.8919 19.0029 2.99609 18.1071 2.99609 17.0021V4.99708C2.99609 3.89205 3.8919 2.99625 4.99693 2.99625H19.0028C20.1078 2.99625 21.0036 3.89205 21.0036 4.99708V8.99875" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.99609 7.99833H13.999" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.99609 12H10.9978" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: 'Ссылки на проекты',
                    label: 'Теремок, Яндек...',
                    to: "EditLinksToProjects",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 9.27022V8C3.99985 7.46952 4.21052 6.96073 4.58563 6.58563C4.96073 6.21052 5.46952 5.99985 6 6H18C18.5305 5.99985 19.0393 6.21052 19.4144 6.58563C19.7895 6.96073 20.0001 7.46952 20 8V9.27022" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.73438 6V5C5.73423 4.46952 5.9449 3.96073 6.32 3.58563C6.6951 3.21052 7.2039 2.99985 7.73438 3H16.2684C16.7989 2.99985 17.3076 3.21052 17.6827 3.58563C18.0579 3.96073 18.2685 4.46952 18.2684 5V6" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 14H21" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.0059 11.5L11.0009 11.505L11.0059 11.51L11.0109 11.505L11.0059 11.5" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.00586 11.5L6.00086 11.505L6.00586 11.51L6.01086 11.505L6.00586 11.5" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.50586 11.5L8.50086 11.505L8.50586 11.51L8.51086 11.505L8.50586 11.5" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: 'Контакты',
                    label: 'Соцсети, почта',
                    to: "EditContacts",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6.24414 20V20C6.24414 17.981 7.88114 16.344 9.90014 16.344H14.0981C16.1171 16.344 17.7541 17.981 17.7541 20V20" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.4415 8.01136C15.79 9.35984 15.79 11.5462 14.4415 12.8946C13.093 14.2431 10.9067 14.2431 9.55824 12.8946C8.20976 11.5462 8.20976 9.35984 9.55824 8.01136C10.9067 6.66288 13.093 6.66288 14.4415 8.01136" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 20H19C20.105 20 21 19.105 21 18V6C21 4.895 20.105 4 19 4H5C3.895 4 3 4.895 3 6V18C3 19.105 3.895 20 5 20H10L12 22L14 20Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                }
            ],
            show_edit_profile: false,
        }
    },
    methods: {
        uploadImg (e) {
            if (e.target.files[0]) {
                this.user_data.photo = e.target.files[0];
                let img_url = URL.createObjectURL(e.target.files[0]);
                this.$refs.img.setAttribute('src', img_url);
            }
        },
        saveUserData () {
            console.log('Save user data');
        },
        logOut () {
            console.log('log out');
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.change_user_img {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 32px;
    
    .img_wrapper {
        position: relative;
        min-width: 128px;
        height: 128px;
        border-radius: 24px;
        overflow: hidden;
        
        .user_img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    .icon {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #00000080;
        cursor: pointer;
    }
}

.edit_profile {
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 32px;
    }
    
    .main_button {
        height: 48px;
        width: 100%;
    }
}

.edit_mobile_menues {
    display: none;
}

@media only screen and (max-width: 992px) {
    .mobile_edit_wrapper {
        display: none;
    }

    .mobile_edit_wrapper.active {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        background: $color-1;
        padding: 56px 16px;
    }

    .change_user_img {
        justify-content: center;
    
        .main_button {
            display: none !important;
        }
    
        .img_wrapper {
            width: 160px;
            height: 160px;
        }
    }

    .edit_mobile_menues {
        display: block;

        .link {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            padding: 16px 0;
            border-bottom: 1px solid $color-16;
            text-decoration: none;
        }
    
        .link_wrapper.last .link {
            border-bottom: 0px;
        }
    
        .link_left {
            display: flex;
            align-items: center;
            gap: 8px;
            
            .title {
                color: $color-2;
                font-size: 14px;
                font-weight: 500;
                line-height: 18px;
                white-space: nowrap;
            }
        }
    
        .link_right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-align: right;
            max-width: 189px;
        
            .title {
                color: $color-6;
                font-size: 14px;
                font-weight: 500;
                line-height: 18px;
                max-width: 169px;
                white-space: nowrap;
            }
        }
    }

    .dark-theme {
        .mobile_edit_wrapper.active {
            background: $color-3;
        }

        .edit_mobile_menues {
            .link {
                border-color: $color-17;
            }

        
            .link_left {
                .title {
                    color: $color-1;
                }

                svg path {
                    stroke: $color-20;
                }
            }
        
            .link_right {
                .title {
                    color: $color-13;
                }
                
                svg path {
                    stroke: $color-1;
                }
            }
        }
    }

    .mobile_links {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 160px;
    
        .main_button {
            width: auto;
            border: 0px !important;
            gap: 8px !important;
        
            span {
                color: $color-21;
                font-size: 14px;
                font-weight: 600;
                line-height: 18px;
            }
        }
    }
}
</style>