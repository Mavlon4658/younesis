<template>
    <div class="settings_wrapper">
        <Nav>
            <div class="main_title">Настройки</div>
        </Nav>
        <div class="settings_content">
            <mobile-edit-header to="Profile">Ссылки на проекты</mobile-edit-header>
            <div class="settings">
                <div class="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.395 13.027C18.725 12.872 19.077 13.197 18.985 13.55C18.671 14.752 18.054 15.896 17.104 16.846C14.283 19.667 9.77001 19.726 7.02201 16.978C4.27401 14.23 4.33401 9.71599 7.15501 6.89499C8.10501 5.94499 9.24801 5.32799 10.451 5.01399C10.804 4.92199 11.128 5.27399 10.974 5.60399C9.97201 7.74299 10.301 10.305 11.998 12.002C13.694 13.7 16.256 14.029 18.395 13.027V13.027Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="title">Темная тема</span>
                </div>
                <form-switch v-model:value="dark_theme"/>
            </div>
            <div v-for="(item, i) in links" :key="i" class="settings" :class="{'border-none': i === links.length - 1}">
                <div class="left">
                    <span v-html="item.svg"></span>
                    <span class="title">{{ item.name }}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 16L14 12L10 8" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Settings',
    data () {
        return {
            dark_theme: false,
            links: [
                {
                    name: 'Пользовательское соглашение',
                    to: '',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H17C18.105 21 19 20.105 19 19V18" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 17L16.15 16.611C16.371 16.584 16.577 16.483 16.735 16.326L21.366 11.695C22.211 10.85 22.211 9.47999 21.366 8.63399V8.63399C20.521 7.78899 19.151 7.78899 18.305 8.63399L13.745 13.194C13.592 13.347 13.493 13.545 13.462 13.76L13 17Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 4.5H8.5C7.672 4.5 7 3.828 7 3V3C7 2.172 7.672 1.5 8.5 1.5H13.5C14.328 1.5 15 2.172 15 3V3C15 3.828 14.328 4.5 13.5 4.5Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 8H13" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 12H11" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 3H17C18.105 3 19 3.895 19 5" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: 'О платформе',
                    to: '',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.999 8C11.861 8 11.749 8.112 11.75 8.25C11.75 8.388 11.862 8.5 12 8.5C12.138 8.5 12.25 8.388 12.25 8.25C12.25 8.112 12.138 8 11.999 8" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 12V17" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
                {
                    name: 'Справка и поддержка',
                    to: '',
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 9V3.5C5 2.672 5.672 2 6.5 2V2C7.328 2 8 2.672 8 3.5V10C8 11.657 6.657 13 5 13V13C3.343 13 2 11.657 2 10V5" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 8H16" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 12H16" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 16H16" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 13V19C5 20.105 5.895 21 7 21H18C19.105 21 20 20.105 20 19V5C20 3.895 19.105 3 18 3H8" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
                },
            ]
        }
    },
    watch: {
        dark_theme () {
            if (this.dark_theme) {
                localStorage.setItem('dark_mode', JSON.stringify(true));
                $('body').addClass('dark-theme')
            } else {
                localStorage.setItem('dark_mode', JSON.stringify(false));
                $('body').removeClass('dark-theme')
            }
        }
    },
    created () {
        let dark = JSON.parse(localStorage.getItem('dark_mode'));
        
        if (dark) {
            this.dark_theme = true;
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.settings_content {
    padding: 20px;
    width: 350px;
    
    .settings {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0;
        border-bottom: 1px solid $color-16;

        .left {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .title {
            color: $color-2;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
        }
    }
    
    .border-none {
        border-bottom: 0px !important;
    }
}

.dark-theme {
    .settings_content {
        .settings {
            border-bottom: 1px solid $color-17;
            
            .title {
                color: $color-1;
            }

            svg path {
                stroke: $color-1;
            }

            .left svg path {
                stroke: $color-20;
            }
        }
    }
}

@media only screen and (max-width: 992px) {
    .settings_content {
        width: 100%;
        padding: 56px 16px;
    }
}
</style>