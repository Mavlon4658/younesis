<template>
    <div class="marketplace courses_card_wrapper">
        <div v-for="(item, i) in cards" :key="i" class="card">
            <div class="card_left">
                <img :src="require(`@/assets/images/card_${item.img}.png`)" alt="">
            </div>
            <div class="card_right">
                <div class="card_head">
                    <div class="card_img">
                        <img :src="require(`@/assets/images/card_${item.img}.png`)">
                    </div>
                    <div class="card_title">{{ item.title }}</div>
                    <div class="amount">
                        {{ item.amount }}
                        <span v-if="item.discount">{{ item.discount }}</span>
                    </div>
                </div>
                <main-button type="light">Подробнее</main-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Marketplace',
    data () {
        return {
            cards: [
                {
                    id: 1,
                    title: 'Денежные убеждения',
                    img: '3_1',
                    amount: "9990₽"
                },
                {
                    id: 2,
                    title: 'Сценарий продающего вебинара',
                    img: '3_2',
                    amount: "9990₽",
                    discount: '19 990₽',
                },
                {
                    id: 3,
                    title: 'Как провести свой первый вебинар и не сойти с ума?',
                    img: '3_3',
                    amount: "12 990₽",
                    discount: '16 990₽',
                },
                {
                    id: 4,
                    title: 'Распаковка жизненного метода',
                    img: '3_4',
                    amount: "Бесплатно"
                },
                {
                    id: 5,
                    title: 'Распаковка жизненного метода',
                    img: '3_5',
                    amount: "Бесплатно"
                },
                {
                    id: 6,
                    title: 'Личный ассистент',
                    img: '3_1',
                    amount: "3990₽",
                    discount: '7990₽'
                },
            ]
        }
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