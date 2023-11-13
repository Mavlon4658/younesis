<template>
    <div class="edit_profile_wrapper">
        <Nav>
            <div class="list_pages">
                <div class="item">ProfileView</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 16L14 12L10 8" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="item active">Редактировать профиль</div>
            </div>
        </Nav>
        <div class="edit_profile_content" :class="{'active': $route.path.includes('profile/edit')}">
            <router-link :to="{name: 'Profile'}" class="edit_link red">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 7L5 12" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 17L5 12" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Вернуться к профилю</span>
            </router-link>
            <div class="edit_rofile_view">
                <div class="edit_links">
                    <router-link
                        v-for="(item, i) in edit_profile_links"
                        :key="i"
                        :to="{name: item.to}"
                        class="item"
                        :class="{'active': item.to === $route.name}"
                    >
                        <span v-html="item.svg" class="icon"></span>
                        <span class="title">{{ item.name }}</span>
                    </router-link>
                </div>
                <div class="view_right">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditProfileView",
    data () {
        return {
            edit_profile_links: [
                {
                    name: 'Личные данные',
                    to: 'EditProfile',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3349 18.0025H7.66532C7.29817 18.0025 6.99805 17.7024 6.99805 17.3352V16.793C6.99805 15.2574 8.25457 14.0009 9.79121 14.0009H14.2101C15.7457 14.0009 17.0022 15.2574 17.0022 16.794V17.3362C17.0022 17.7024 16.7021 18.0025 16.3349 18.0025Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9992 11.4997C10.4846 11.4997 9.24805 10.2672 9.24805 8.75959C9.24805 7.25196 10.4846 5.99744 11.9992 5.99744C13.5138 5.99744 14.7503 7.22995 14.7503 8.73758C14.7503 10.2452 13.5138 11.4997 11.9992 11.4997Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0019 21.0037H6.99776C4.78784 21.0037 2.99609 19.212 2.99609 17.002V6.99788C2.99609 4.78796 4.78784 2.99622 6.99776 2.99622H17.0019C19.2118 2.99622 21.0036 4.78796 21.0036 6.99788V17.002C21.0036 19.212 19.2118 21.0037 17.0019 21.0037Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: 'Роли',
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
                    to: "EditContacts",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6.24414 20V20C6.24414 17.981 7.88114 16.344 9.90014 16.344H14.0981C16.1171 16.344 17.7541 17.981 17.7541 20V20" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.4415 8.01136C15.79 9.35984 15.79 11.5462 14.4415 12.8946C13.093 14.2431 10.9067 14.2431 9.55824 12.8946C8.20976 11.5462 8.20976 9.35984 9.55824 8.01136C10.9067 6.66288 13.093 6.66288 14.4415 8.01136" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 20H19C20.105 20 21 19.105 21 18V6C21 4.895 20.105 4 19 4H5C3.895 4 3 4.895 3 6V18C3 19.105 3.895 20 5 20H10L12 22L14 20Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                }
            ]
        }
    }
}
</script>

<style>
.list_pages {
    display: flex;
    align-items: center;
    gap: 4px;
}

.list_pages .item {
    color: #BDBDBD;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
}

.dark-theme .list_pages .item {
    color: #A6A5A5;
}

.list_pages .item.active {
    color: #121111;
}

.dark-theme .list_pages .item.active {
    color: #FFFFFF;
}

.dark-theme .list_pages svg path {
    stroke: #fff;
}

.edit_profile_content {
    padding: 20px;
}

.edit_rofile_view {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 32px;
}

.edit_links {
    border-radius: 16px;
    background: #F6F6F6;
    display: flex;
    flex-direction: column;
    width: 325px;
    padding: 12px;
}

.dark-theme .edit_links {
    background: #222222;
}

.edit_links .item {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    padding: 0 16px;
    height: 56px;
}

.dark-theme .edit_links .item .title {
    color: #A6A5A5;
}

.dark-theme .edit_links .item svg path {
    stroke: #4D4D4D;
}

.edit_links .item.active {
    border-radius: 8px;
    background: #FFF;
}

.dark-theme .edit_links .item.active {
    background: #3B3B3B;
}

.edit_links .item .title {
    color: #727272;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
}


.edit_links .item.active .title {
    color: #CF2E2E;
    font-weight: 600;
}

.dark-theme .edit_links .item.active .title {
    color: #fff;
}

.edit_links .item.active svg path {
    stroke: #CF2E2E;
}

.dark-theme .edit_links .item.active svg path {
    stroke: #fff;
}

.view_right {
    width: 325px;
}

@media only screen and (max-width: 992px) {
    .edit_profile_content .edit_links,
    .edit_profile_content .edit_link {
        display: none;
    }

    .edit_profile_content {
        padding: 56px 16px 118px;
    }

    .edit_profile_content.active {
        padding-bottom: 52px;
    }

    .edit_rofile_view {
        padding: 0;
        margin: 0;
    }

    .view_right {
        width: 100%;
    }
}
</style>