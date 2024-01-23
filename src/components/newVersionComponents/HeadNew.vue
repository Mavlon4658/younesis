<template>
    <div class="head_new">
        <div class="main_container">
            <router-link :to="to != '#' ? {name: to} : '#'" class="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 5L2 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 19L2 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <div class="title">{{ page_title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: '#'
        },
        page_title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
    .head_new {
        .main_container {
            margin-top: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            height: 24px;
        }

        .link {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
        }

        .title {
            color: #FFF;
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
        }
    }
</style>