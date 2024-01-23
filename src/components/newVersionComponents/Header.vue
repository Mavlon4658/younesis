<template>
    <!-- New navs start-->
    <div class="new_navs">
        <div class="main_container">
            <router-link to="#" class="navs_link active">
                <img src="@/assets/images/news_link_1.svg" alt="">
            </router-link>
            <router-link to="#" class="navs_link">
                <img src="@/assets/images/news_link_2.svg" alt="">
            </router-link>
            <router-link to="#" class="navs_link">
                <img src="@/assets/images/news_link_3.svg" alt="">
            </router-link>
        </div>
    </div>
    <!-- New navs end -->
</template>

<script>
export default {

}
</script>

<style lang="scss">
.new_navs {
    border-top: 1px solid #2B2B2B;
    background: #171717;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;

    .main_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 29px;

        .navs_link {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .navs_link.active {
            background:  #CF2E2E;
        }
    }
}
</style>