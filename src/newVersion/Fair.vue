<template>
    <div class="fair">
        <head-new to="NewHome" page_title="Ярмарка"/>

        <div class="main_container fair_home">
            <div class="fair_item" v-for="i in 5" :key="i">
                <div class="img">
                    <img src="@/assets/images/card_1_1.png" alt="">
                </div>
                <div>
                    <div class="title">Сценарий продающего вебинара</div>
                    <span class="amount">3990 ₽</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadNew from '@/components/newVersionComponents/HeadNew.vue';

export default {
    components: {
        HeadNew,
    },
    data () {
        return {
            myCourse: []
        }
    }
}
</script>

<style lang="scss">
    .fair_home {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-top: 24px !important;

        .fair_item {
            border-radius: 16px;
            background: #222;
            padding: 12px;
            display: flex;
            align-items: flex-start;
            gap: 12px;

            .img {
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: #3B3B3B;

                img {
                    width: 72px;
                    height: 72px;
                    object-fit: contain;
                }
            }

            .title {
                color: #FFF;
                font-size: 16px;
                font-weight: 700;
                line-height: 20px;
                margin-bottom: 8px;
            }

            .amount {
                border-radius: 29px;
                background: #3B3B3B;
                padding: 4px 12px;
                color:  #FFF;
                font-size: 14px;
                font-weight: 500;
                line-height: 18px;
            }
        }
    }
</style>