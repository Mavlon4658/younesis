<template>
    <div class="main_container new_stories">
        <swiper
            :slidesPerView="'auto'"
            :spaceBetween="4"
            :modules="modules"
        >
            <swiper-slide class="swiper-slide" v-for="(item, i) in news_list" :key="i">
                <button @click="story_modal = true">
                    <img :src="require(`@/assets/images/${item.img}`)" alt="">
                    <span class="title">{{ item.title }}</span>
                </button>
            </swiper-slide>
            <swiper-slide>
                <router-link :to="{name: 'News'}" class="link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z" stroke="#D3D2D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 12H8" stroke="#D3D2D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13 9L16 12L13 15" stroke="#D3D2D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Все новости</span>
                </router-link>
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
    name: "Stories",
    components: {
        Swiper,
        SwiperSlide,
        NewStories,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    data () {
        return {
            news_list: [
                { img: 'stories_card_1.png', title: 'Последний шанс вступить в клуб'},
                { img: 'stories_card_2.png', title: 'Крути колесо и забери курс бесплатно'},
                { img: 'stories_card_3.png', title: 'Новые возможности'},
                { img: 'stories_card_4.png', title: 'Текст'},
            ],
            story_modal: false
        }
    }
}
</script>

<style lang="scss">
.new_stories {

    .swiper {
        overflow: visible;

        .swiper-slide {
            width: 104px;
        }

        button {
            width: 100%;
            height: 104px;
            display: flex;
            align-items: center;
            border-radius: 20px;
            border: 1px solid #FF8F8F;
            padding-right: 2px;
            position: relative;

            img {
                border-radius: 17px;
                position: absolute;
                left: 2px;
                top: 2px;
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                object-fit: cover;
            }

            .title {
                position: absolute;
                color: #FFF;
                font-size: 10px;
                font-weight: 700;
                line-height: 10px;
                text-align: left;
                bottom: 14px;
                left: 9px;
                right: 9px;
            }
        }

        .link {
            width: 100%;
            height: 104px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
            border-radius: 20px;
            background: #222;

            span {
                color:  #D3D2D2;
                text-align: center;
                font-size: 12px;
                font-weight: 500;
                line-height: 14px;
            }
        }
    }
}
</style>