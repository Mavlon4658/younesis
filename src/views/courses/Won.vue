<template>
    <div class="won courses_card_wrapper">
        <div v-for="(item, i) in cards" :key="i" class="card">
            <div class="card_left">
                <img :src="item.course.preview_image ? $getUrl(item.course.preview_image) : require(`@/assets/images/card_1_${$makeRandom(1, 3)}.png`)" alt="">
            </div>
            <div class="card_right">
                <div class="card_head">
                    <div class="card_img">
                        <img :src="item.course.preview_image ? $getUrl(item.course.preview_image) : require(`@/assets/images/card_1_${$makeRandom(1, 3)}.png`)">
                    </div>
                    <div class="card_title">{{ item.course.title }}</div>
                    <div class="remained">item.remained</div>
                </div>
                <div class="card_degree">
                    <div class="degree_head">
                        <div class="dedgree_title">item.degree_title</div>
                        <div class="degree_value">item.degree</div>
                    </div>
                    <div class="degree_line">
                        <!-- <span :style="{width: item.degree}"></span> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <select-course v-if="!cards.length"></select-course>
</template>

<script>
import SelectCourse from '@/components/SelectCourse.vue';
import axios from '@/axios.js';

export default {
    name: 'Won',
    components: {
        SelectCourse,
    },
    data () {
        return {
            cards: [
                // {id: 1, title: 'Продающие диагностики', img: '1_3', remained: 'Закроется через 23:42:12', degree_title: "3 из 10 уроков пройдено", degree: '30%'},
            ]
        }
    },
    methods: {
        getMyCourse () {
            axios.myCourses('promo')
                .then(res => {
                    this.cards = res.data.results;
                    console.log(res.data.results);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    mounted () {
        this.getMyCourse()
    }
}
</script>

<style>
@media only screen and (max-width: 992px) {
    .won .card .card_right .card_degree {
        display: none;
    }
}
</style>