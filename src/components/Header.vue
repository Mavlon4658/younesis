<template>
    <header>
        <div class="header_top">
            <Logo />
            <div class="header_links">
                <div
                    v-for="(menu, i) in menues"
                    :key="i"
                    class="header_link_wrapper"
                    :class="[{
                            'active': checkActiveRoute(menu.to),
                        },
                        menu.className
                    ]"
                >
                    <router-link 
                        :to="{name: menu.to}"
                        class="header_link"
                    >
                        <span v-html="menu.svg" class="icon"></span>
                        <span class="link_title">{{ menu.name }}</span>
                    </router-link>
                    <div v-if="i === 3" class="header_line"></div>
                </div>
            </div>
        </div>
        <div class="support_chat_wrapper support_chat">
            <img src="@/assets/images/telegram_icon.svg" alt="" class="icon">
            <div class="title">Чат поддержки</div>
            <div class="description">Напиши нам в Telegram, если у тебя возникли вопросы или идеи по улучшению платформы — ответим на все!</div>
            <button>Написать</button>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data () {
        return {
            menues: [
                {
                    name: 'Главная', 
                    to: 'Home',
                    className: '',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.842 8.29925L13.842 3.63225C12.759 2.78925 11.242 2.78925 10.158 3.63225L4.158 8.29925C3.427 8.86725 3 9.74125 3 10.6673V18.0002C3 19.6572 4.343 21.0002 6 21.0002H18C19.657 21.0002 21 19.6572 21 18.0002V10.6673C21 9.74125 20.573 8.86725 19.842 8.29925Z" stroke="white" stroke-width="1.5"/>
                            <path d="M9 17.0002H15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: 'Мои курсы', 
                    to: 'Courses',
                    desktop: true,
                    mobile: true,
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 18H7" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21H19C19.552 21 20 20.552 20 20V15H7C5.343 15 4 16.343 4 18V18C4 19.657 5.343 21 7 21Z" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 7H15" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 11H15" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 3V15" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 18V6C4 4.343 5.343 3 7 3H19C19.552 3 20 3.448 20 4V15" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: "Поддержка",
                    to: 'Support',
                    className: 'mobile',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 11.291C3.66675 13.974 5.08675 16.336 7.26575 17.825C7.26475 18.68 7.26675 19.832 7.26675 21.041L10.7977 19.294C11.4017 19.41 12.0257 19.473 12.6667 19.473C17.6187 19.473 21.6667 15.83 21.6667 11.291C21.6667 6.75201 17.6187 3.10901 12.6667 3.10901C7.71475 3.10901 3.66675 6.75201 3.66675 11.291Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5657 12.328V12.121C12.5657 11.443 12.9847 11.076 13.4047 10.794C13.8147 10.518 14.2257 10.158 14.2257 9.49402C14.2257 8.57702 13.4827 7.83502 12.5667 7.83502C11.6507 7.83502 10.9067 8.57602 10.9067 9.49302" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5647 14.667C12.4817 14.667 12.4147 14.734 12.4157 14.817C12.4157 14.9 12.4827 14.967 12.5657 14.967C12.6487 14.967 12.7157 14.9 12.7157 14.817C12.7157 14.734 12.6497 14.667 12.5647 14.667" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`
                },
                {
                    name: "Профиль",
                    to: 'Profile',
                    className: 'mobile',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 20V19.25C20 16.9028 18.0972 15 15.75 15H8.25C5.90279 15 4 16.9028 4 19.25V20" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="12" cy="7" r="4" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: 'Настройки',
                    to: 'Settings',
                    className: 'desktop',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.7678 10.2321C14.7441 11.2084 14.7441 12.7913 13.7678 13.7676C12.7915 14.744 11.2085 14.744 10.2322 13.7676C9.25592 12.7913 9.25592 11.2084 10.2322 10.2321C11.2085 9.2558 12.7915 9.2558 13.7678 10.2321" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8472 4.11995L15.4302 4.31395C15.9642 4.49195 16.3252 4.99195 16.3252 5.55496V6.39195C16.3252 7.10395 16.8932 7.68495 17.6052 7.69995L18.4432 7.71796C18.9282 7.72796 19.3682 8.00696 19.5852 8.44096L19.8602 8.99095C20.1122 9.49495 20.0132 10.103 19.6152 10.501L19.0232 11.093C18.5202 11.596 18.5112 12.409 19.0032 12.923L19.5832 13.529C19.9192 13.88 20.0332 14.387 19.8792 14.848L19.6852 15.431C19.5072 15.965 19.0072 16.326 18.4442 16.326H17.6072C16.8952 16.326 16.3142 16.894 16.2992 17.606L16.2812 18.444C16.2712 18.929 15.9922 19.369 15.5582 19.586L15.0082 19.861C14.5042 20.113 13.8962 20.014 13.4982 19.616L12.9062 19.024C12.4032 18.521 11.5902 18.512 11.0762 19.004L10.4702 19.584C10.1192 19.92 9.6122 20.034 9.1512 19.88L8.5682 19.686C8.0342 19.508 7.6732 19.008 7.6732 18.445V17.608C7.6732 16.896 7.1052 16.315 6.3932 16.3L5.5552 16.282C5.0702 16.272 4.6302 15.993 4.4132 15.559L4.1382 15.009C3.8862 14.505 3.9852 13.897 4.3832 13.499L4.9752 12.907C5.4782 12.404 5.4872 11.591 4.9952 11.077L4.4152 10.471C4.0782 10.119 3.9642 9.61096 4.1182 9.15096L4.3122 8.56796C4.4902 8.03396 4.9902 7.67296 5.5532 7.67296H6.3902C7.1022 7.67296 7.6832 7.10496 7.6982 6.39296L7.7162 5.55496C7.7282 5.06995 8.0062 4.62995 8.4402 4.41295L8.9902 4.13795C9.4942 3.88595 10.1022 3.98495 10.5002 4.38295L11.0922 4.97495C11.5952 5.47795 12.4082 5.48696 12.9222 4.99496L13.5282 4.41495C13.8792 4.07995 14.3872 3.96595 14.8472 4.11995V4.11995Z" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                }
            ],
        }
    },
    methods: {
        checkActiveRoute (to) {
            if (to === 'Courses') {
                if (this.$route.path.includes('courses')) {
                    return true;
                }
                return false;
            }

            return this.$route.name == to;
        }
    }
}
</script>

<style>
header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header_links {
    display: flex;
    flex-direction: column;
    margin-top: 64px;
}

.header_link {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px;
    text-decoration: none;
    gap: 8px;
    margin-bottom: 22px;
}

.header_link .link_title {
    color: #727272;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
}

.dark-theme .header_link .link_title {
    color: #D3D2D2;
}

.header_link .icon svg path,
.header_link .icon svg circle {
    stroke: #727272;
}

.dark-theme .header_link .icon svg path,
.dark-theme .header_link .icon svg circle {
    stroke: #D3D2D2;
}

.header_link_wrapper.active .header_link {
    border-radius: 12px;
    background: #CF2E2E;
}

.header_link_wrapper.active .header_link .link_title {
    color: #fff;
}

.header_link_wrapper.active .header_link svg path,
.header_link_wrapper.active .header_link svg circle {
    stroke: #fff;
}

.header_link_wrapper.mobile {
    display: none;
}

.header_line {
    width: 100%;
    height: 1px;
    background: #F3EFEF;
    margin: 10px 0 32px;
}

.dark-theme .header_line {
    background: #2B2B2B;
}

@media only screen and (max-width: 992px) {
    .header_top .logotip {
        display: none;
    }

    .header_links {
        margin: 0;
        flex-direction: row;
        width: 100%;
        height: 100%;
        padding: 16px 28px 20px 29px;
        justify-content: space-between;
    }

    .header_link {
        width: 44px;
        height: 44px;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .header_link_wrapper.active .header_link {
        border-radius: 50%;
    }

    .header_line {
        display: none;
    }

    .header_link .link_title {
        display: none;
    }

    .header_link .icon svg {
        width: 24px;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .support_chat_wrapper {
        display: none;
    }

    .header_link_wrapper.mobile {
        display: block;
    }

    .header_link_wrapper.desktop {
        display: none;
    }
}
</style>