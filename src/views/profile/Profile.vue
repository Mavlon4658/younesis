<template>
    <div class="profile_wrapper">
        <Nav>
            <div class="main_title">Мои курсы</div>
        </Nav>
        <div class="profile_content">
            <div class="profile_left">

                <!-- Mobile profile header -->
                <div class="profile_left_head">
                    <router-link :to="{name: 'Settings'}" class="link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.7678 10.2322C14.7441 11.2085 14.7441 12.7914 13.7678 13.7677C12.7915 14.744 11.2085 14.744 10.2322 13.7677C9.25592 12.7914 9.25592 11.2085 10.2322 10.2322C11.2085 9.25586 12.7915 9.25586 13.7678 10.2322" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8489 4.11999L15.4319 4.31399C15.9659 4.49199 16.3269 4.99199 16.3269 5.55499V6.39199C16.3269 7.10399 16.8949 7.68499 17.6069 7.69999L18.4449 7.71799C18.9299 7.72799 19.3699 8.00699 19.5869 8.44099L19.8619 8.99099C20.1139 9.49499 20.0149 10.103 19.6169 10.501L19.0249 11.093C18.5219 11.596 18.5129 12.409 19.0049 12.923L19.5849 13.529C19.9209 13.88 20.0349 14.387 19.8809 14.848L19.6869 15.431C19.5089 15.965 19.0089 16.326 18.4459 16.326H17.6089C16.8969 16.326 16.3159 16.894 16.3009 17.606L16.2829 18.444C16.2729 18.929 15.9939 19.369 15.5599 19.586L15.0099 19.861C14.5059 20.113 13.8979 20.014 13.4999 19.616L12.9079 19.024C12.4049 18.521 11.5919 18.512 11.0779 19.004L10.4719 19.584C10.1209 19.92 9.61391 20.034 9.15291 19.88L8.56991 19.686C8.03591 19.508 7.67491 19.008 7.67491 18.445V17.608C7.67491 16.896 7.10691 16.315 6.39491 16.3L5.55691 16.282C5.07191 16.272 4.63191 15.993 4.41491 15.559L4.13991 15.009C3.88791 14.505 3.98691 13.897 4.38491 13.499L4.97691 12.907C5.47991 12.404 5.48891 11.591 4.99691 11.077L4.41691 10.471C4.07991 10.119 3.96591 9.61099 4.11991 9.15099L4.31391 8.56799C4.49191 8.03399 4.99191 7.67299 5.55491 7.67299H6.39191C7.10391 7.67299 7.68491 7.10499 7.69991 6.39299L7.71791 5.55499C7.72991 5.06999 8.00791 4.62999 8.44191 4.41299L8.99191 4.13799C9.49591 3.88599 10.1039 3.98499 10.5019 4.38299L11.0939 4.97499C11.5969 5.47799 12.4099 5.48699 12.9239 4.99499L13.5299 4.41499C13.8809 4.07999 14.3889 3.96599 14.8489 4.11999V4.11999Z" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                    <router-link :to="{name: 'EditProfile'}" class="link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 15H7C4.79086 15 3 16.7909 3 19V20" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 21H14" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 15.3344L17.3344 12.2929C17.5219 12.1054 17.7763 12 18.0415 12C18.3067 12 18.5611 12.1054 18.7486 12.2929L19.7071 13.2514C20.0976 13.6419 20.0976 14.2751 19.7071 14.6656L16.6656 17.7071C16.4781 17.8946 16.2237 18 15.9585 18H14.5C14.2239 18 14 17.7761 14 17.5V16.0415C14 15.7763 14.1054 15.522 14.2929 15.3344Z" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="11" cy="7" r="4" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
                
                <!-- user data -->
                <div class="user_data">
                    <img src="@/assets/images/user.png" alt="">
                    <div class="text">
                        <div class="name">Андрей Иванов</div>
                        <div class="description">Редактор, проектировщик интерфейсов, писатель</div>
                    </div>
                </div>

                <!-- Professions -->
                <div class="experience">
                    <div class="title">Опыт в нишах</div>
                    <div class="professions">
                        <div class="item" v-for="item in professions" :key="item">{{ item }}</div>
                    </div>
                </div>

                <!-- Mobile link to project -->
                <div class="link_to_project_wrapper">
                    <div class="title">Ссылки на проекты</div>
                    <div class="project_links">
                        <a href="#" v-for="(item, i) in project_links" :key="i">
                            <span>{{ item }}</span>
                            <img src="@/assets/images/link_icon.svg" alt="">
                        </a>
                    </div>
                </div>

                <!-- My projects -->
                <div class="my_projects_wrapper">
                    <div class="title">Мои проекты</div>
                    <div class="my_projects">
                        <div class="item" v-for="i in 3" :key="i"></div>
                    </div>
                </div>

                <!-- Social networks -->
                <div class="social_networks_wrapper">
                    <div class="social_networks">
                        <div
                            v-for="(item, i) in social_networks"
                            :key="i"
                            class="item"
                            :class="{'active': i + 1 !== social_networks.length}"
                        >
                            <div class="name">{{ item.name }}</div>
                            <a :href="item.link" class="value">{{ item.nick_name }}</a>
                        </div>
                    </div>
                    <div class="description">*Instagram, продукт компании Meta, признанная экстремистской организацией в России</div>
                </div>

                <div class="profile_links">
                    <main-button @click="logOut" type="light">
                        <img src="@/assets/images/logout_icon.svg" alt="">
                        <span>Выйти из профиля</span>
                    </main-button>
                </div>
            </div>
            <router-link class="edit_link" :to="{name: 'EditProfile'}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 15H7C4.79086 15 3 16.7909 3 19V20" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 21H14" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 15.3344L17.3344 12.2929C17.5219 12.1054 17.7763 12 18.0415 12C18.3067 12 18.5611 12.1054 18.7486 12.2929L19.7071 13.2514C20.0976 13.6419 20.0976 14.2751 19.7071 14.6656L16.6656 17.7071C16.4781 17.8946 16.2237 18 15.9585 18H14.5C14.2239 18 14 17.7761 14 17.5V16.0415C14 15.7763 14.1054 15.522 14.2929 15.3344Z" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="11" cy="7" r="4" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Редактировать</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data () {
        return {
            professions: ['Копирайтинг', 'Дизайн', 'Маркетинг в FoodTech'],
            social_networks: [
                {name: "Telegram", nick_name: '@andreyivanov', link: '#'},
                {name: "Instragram*", nick_name: '@andrey', link: '#'},
            ],
            project_links: ['Теремок', 'ЯндексПлюс', 'Страница корзины reStore']
        }
    },
    methods: {
        logOut () {
            localStorage.removeItem('token')
            this.$router.push({name: 'LogIn'})
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.profile_content {
    padding: 20px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.profile_left {
    width: 670px;
}

.user_data {
    border-radius: 16px;
    background: $color-7;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    
    img {
        width: 128px;
        height: 128px;
        object-fit: cover;
    }
    
    .name {
        color: $color-2;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 14px;
    }
    
    .description {
        color: $color-11;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
    }
}

.experience {
    border-radius: 16px;
    background: $color-3;
    padding: 20px;
    margin-bottom: 20px;

    .title {
        color: $color-1;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 16px;
    }
}


.professions {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    overflow-x: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    .item {
        border-radius: 22px;
        background: $color-18;
        padding: 6px 12px;
        color: $color-1;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
    }
}


.my_projects_wrapper {
    border-radius: 16px;
    background: $color-7;
    padding: 20px;
    margin-bottom: 20px;
    
    .title {
        color: $color-2;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 16px;
    }
}

.my_projects {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    
    .item {
        border-radius: 4px;
        background: $color-1;
        object-fit: cover;
        height: 171px;
        width: calc(100% / 3 - 16px / 3);
    }
    
    
}

.social_networks_wrapper {
    border-radius: 16px;
    background: $color-7;
    padding: 20px;
    margin-bottom: 20px;
    
    .description {
        color: $color-6;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
    }

    .social_networks {
        margin-bottom: 24px;
    
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .item.active {
            padding-bottom: 12px;
            margin-bottom: 12px;
            border-bottom: 1px solid $color-16;
        }
        
        .name {
            color: $color-19;
            text-align: center;
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
        }
        
        .value {
            color: $color-5;
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
            text-decoration: none;
        }
    }
}


.profile_links {
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile_links .main_button.light,
.dark-theme .profile_links .main_button.light {
    color: $color-21;
}

.profile_left_head {
    display: none;
}

.link_to_project_wrapper {
    display: none;
}

.dark-theme .user_data {
    background: $color-15;
}

.dark-theme {
    .user_data {
        .name {
            color: $color-1;
        }
    
        .description {
            color: $color-11;
        }
    }

    .experience {
        background: $color-15;
    }

    .my_projects_wrapper {
        background: $color-15;
        
        .title {
            color: $color-1;
        }
    }
    
    .my_projects .item {
        background: $color-3;
    }
    
    .social_networks_wrapper {
        background: $color-15;
        
        .description {
            color: $color-13;
        }
    }

    .social_networks {
        .item.active {
            border-bottom: 1px solid $color-17;
        }
        
        .name {
            color: $color-1;
        }
        
        .value {
            color: $color-1;
        }
    
    }
}


@media only screen and (max-width: 992px) {
    .profile_left {
        width: 100%;
    }

    .profile_content {
        padding: 48px 16px 118px;
    
        .edit_link {
            display: none;
        }
    }

    .profile_left_head {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
    }

    .dark-theme .profile_left_head .link svg path,
    .dark-theme .profile_left_head .link svg circle {
        stroke: $color-1;
    }

    .user_data {
        flex-direction: column;
        gap: 16px;
        background: transparent !important;
        padding: 0;
        margin-bottom: 16px;
    
        img {
            width: 160px;
            height: 160px;
            border-radius: 24px;
        }
    
        .name {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 8px;
        }
    
        .description {
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            text-align: center;
            width: 100%;
        }
    }

    .experience {
        padding: 16px 0;
        margin-bottom: 16px;
    
        .title {
            padding-left: 16px;
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;
            margin-bottom: 8px;
        }
    }

    .professions {
        gap: 4px;
        padding: 0px 16px;
    
        .item {
            white-space: nowrap;
        }
    }

    .my_projects_wrapper {
        display: none;
    }

    .link_to_project_wrapper {
        display: block;
        border-radius: 16px;
        background: $color-5;
        padding: 16px;
        margin-bottom: 16px;
    
        .title {
            color: $color-1;
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;
            margin-bottom: 12px;
        }
    }

    .project_links {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    
        a {
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.32);
            padding: 8px 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            text-decoration: none;
        
            span {
                color: $color-1;
                font-size: 14px;
                font-weight: 600;
                line-height: 18px;
            }
        }
    }

    .social_networks_wrapper {
        padding: 0;
        background: transparent !important;
        margin-bottom: 0;
    
        .description {
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
        }
    }

    .social_networks {
        .name {
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
        }
        
        .value {
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
        }
    }

    .profile_links {
        display: none;
    }
}
</style>