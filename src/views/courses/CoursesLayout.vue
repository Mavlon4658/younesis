<template>
    <div class="courses_layout">
        <Nav v-if="checkRoute()">
            <div class="main_title">Мои курсы</div>
        </Nav>
        <div class="courses_lyout_content" :class="{'lessons': $route.name === 'Lesson' || $route.name === 'Test'}">
            <div v-if="checkRoute()" class="mobile_title">Мои курсы</div>
            <div v-if="checkRoute()" class="courses_links">
                <router-link
                    v-for="(item, i) in links"
                    :key="i"
                    :to="{name: item.to}"
                    class="link"
                    :class="{'active': item.to === $route.name}"
                >
                    {{ item.name }}
                </router-link>
            </div>
            <div class="router_view">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoursesLyout',
    data () {
        return {
            links: [
                {name: 'Купленные', to: 'Courses'},
                {name: 'Выигранные', to: 'Won'},
                {name: 'Маркетплейс', to: 'Marketplace'},
            ]
        }
    },
    methods: {
        checkRoute () {
            let t = true;
            if (this.$route.name === 'Test') {
                t = false;
            }

            if (this.$route.name === 'Lesson') {
                t = false;
            }

            return t;
        }
    }
}
</script>

<style>
.courses_lyout_content {
    padding: 20px;
}

.courses_lyout_content.lessons {
    padding: 0;
}

.courses_links {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
}

.courses_links .link {
    border-radius: 20px;
    background: #F6F6F6;
    padding: 12px 16px;
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    text-decoration: none;
}

.dark-theme .courses_links .link {
    background: #3B3B3B;
    color: #fff;
}

.courses_links .link.active {
    background: #CF2E2E;
    color: #fff;
    font-weight: 600;
}

.mobile_title {
    display: none;
}

@media only screen and (max-width: 992px) {
    .courses_lyout_content {
        padding: 64px 0px 100px;
    }

    .mobile_title {
        display: block;
        color: #121111;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: "Raleway", sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        padding: 0px 16px;
        margin-bottom: 16px;
    }

    .dark-theme .mobile_title {
        color: #fff;
    }

    .courses_links {
        padding: 0px 16px;
        width: 100%;
        overflow-x: scroll;
    }

    .courses_links::-webkit-scrollbar {
        display: none;
        margin-bottom: 2px;
    }

    .router_view {
        padding: 0px 16px;
    }
}
</style>