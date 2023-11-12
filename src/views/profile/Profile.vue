<template>
    <div class="profile_wrapper">
        <Nav>
            <div class="main_title">Мои курсы</div>
        </Nav>
        <div class="profile_content">
            <div class="profile_left">
                
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
            ]
        }
    },
    methods: {
        logOut () {
            console.log("log out");
        }
    }
}
</script>

<style>
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
    background: #F6F6F6;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
}

.user_data img {
    width: 128px;
    height: 128px;
    object-fit: cover;
}

.user_data .name {
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 14px;
}

.user_data .description {
    color: #A6A5A5;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
}

.experience {
    border-radius: 16px;
    background: #171717;
    padding: 20px;
    margin-bottom: 20px;
}

.experience .title {
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 16px;
}

.professions {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    overflow-x: scroll;
}

.professions::-webkit-scrollbar {
    display: none;
}

.professions .item {
    border-radius: 22px;
    background: #4B4B4B;
    padding: 6px 12px;
    color: #FFF;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
}

.my_projects_wrapper {
    border-radius: 16px;
    background: #F6F6F6;
    padding: 20px;
    margin-bottom: 20px;
}

.my_projects_wrapper .title {
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 16px;
}

.my_projects {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.my_projects .item {
    border-radius: 4px;
    background: #FFF;
    object-fit: cover;
    height: 171px;
    width: calc(100% / 3 - 16px / 3);
}

.social_networks_wrapper {
    border-radius: 16px;
    background: #F6F6F6;
    padding: 20px;
    margin-bottom: 20px;
}

.social_networks {
    margin-bottom: 24px;
}

.social_networks .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.social_networks .item.active {
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid #F3EFEF;
}

.social_networks .name {
    color: #727272;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
}

.social_networks .value {
    color: #CF2E2E;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    text-decoration: none;
}

.social_networks_wrapper .description {
    color: #BDBDBD;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
}

.profile_links {
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile_links .main_button.light {
    color: #FF3F48;
}
</style>