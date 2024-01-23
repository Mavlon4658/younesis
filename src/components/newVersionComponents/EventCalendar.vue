<template>
<div class="main_container event_calendar">
    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="4"
        :modules="modules"
    >
        <swiper-slide class="swiper-slide" v-for="(item, i) in lists" :key="i">
            <div @click="story_modal = true" class="slide_item">
                <img :src="require(`@/assets/images/event_calendar_${item.img}.png`)" alt="" class="main_img">
                <div class="slide_head">
                    <div class="number">{{ item.number }}</div>
                    <div class="location">
                        <img :src="require(`@/assets/images/location_icon_${item.icon}.svg`)" alt="">
                        <span>{{ item.location }}</span>
                    </div>
                </div>
                <div class="title">{{ item.description }}</div>
            </div>
        </swiper-slide>
    </swiper>
    <new-stories v-if="story_modal" v-model:value="story_modal" />
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import NewStories from '@/components/newVersionComponents/NewStories.vue'

import 'swiper/css';
export default {
    components: {
        Swiper,
        SwiperSlide,
        NewStories
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    data () {
        return {
            lists: [
                {img: 1, number: '12', location: 'Москва', icon: '1', description: 'Выступление спикеров на мероприятии'},
                {img: 2, number: '12', location: 'Онлайн', icon: '2', description: 'Приглашенные спикеры: первая часть'},
                {img: 1, number: '12', location: 'Москва', icon: '1', description: 'Выступление спикеров на мероприятии'},
                {img: 2, number: '12', location: 'Онлайн', icon: '2', description: 'Приглашенные спикеры: первая часть'},
                {img: 1, number: '12', location: 'Москва', icon: '1', description: 'Выступление спикеров на мероприятии'},
                {img: 2, number: '12', location: 'Онлайн', icon: '2', description: 'Приглашенные спикеры: первая часть'},
            ],
            story_modal: false
        }
    }
}
</script>

<style lang="scss">
.event_calendar {
    .swiper {
        overflow: visible;
    }

    .swiper-slide {
        width: 178px;
    }

    .slide_item {
        border-radius: 20px;
        border: 1px solid #FF8F8F;
        padding: 2px;
        position: relative;

        .main_img {
            border-radius: 17px;
            width: 100%;
            height: 98px;
            object-fit: cover;
        }

        .slide_head {
            position: absolute;
            top: 6px;
            left: 6px;
            right: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .number {
                width: 28px;
                height: 28px;
                border-radius: 14px;
                background: rgba(37, 37, 37, 0.50);
                color: #FFF;
                text-align: center;
                font-size: 12px;
                font-weight: 600;
                line-height: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .location {
                height: 28px;
                padding: 8px;
                display: flex;
                align-items: center;
                gap: 2px;
                border-radius: 14px;
                background: rgba(37, 37, 37, 0.50);

                span {
                    color: #FFF;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 14px;
                }
            }
        }

        .title {
            position: absolute;
            left: 9px;
            right: 7px;
            bottom: 11px;
            color: #FFF;
            font-size: 12px;
            font-weight: 700;
            line-height: 14px;
        }
    }
}
</style>