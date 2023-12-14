<template>
    <div class="marketplace courses_card_wrapper">
        <div v-for="(item, i) in cards" :key="i" class="card">
            <div class="card_left">
                <!-- <img :src="require(`@/assets/images/card_${item.img}.png`)" alt=""> -->
            </div>
            <div class="card_right">
                <div class="card_head">
                    <div class="card_img">
                        <img :src="item.preview_image ? $getUrl(item.preview_image) : require(`@/assets/images/card_3_${$makeRandom(1, 5)}.png`)">
                    </div>
                    <div class="card_title">{{item.title}}</div>
                    <div class="amount">
                        {{ item.price }}
                        <span v-if="item.old_price">{{ item.old_price }}</span>
                    </div>
                </div>
                <main-button type="light">Подробнее</main-button>
            </div>
        </div>
    </div>
    <select-course v-if="!cards.length"></select-course>
</template>

<script>
import SelectCourse from '@/components/SelectCourse.vue';
import axios from '@/axios';

export default {
    name: 'Marketplace',
    components: {
        SelectCourse
    },
    data () {
        return {
            cards: []
        }
    },
    methods: {
        getMarketplace () {
            axios.marketplace()
                .then(res => {
                    this.cards = res.data.results;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        // makeRandom (min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }
    },
    mounted () {
        this.getMarketplace();
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.marketplace .card {
    height: 400px !important;
}

@media only screen and (max-width: 992px) {
    .marketplace .card {
        height: 104px !important;

        .card_right .main_button {
            display: none;
        }
    }
}
</style>