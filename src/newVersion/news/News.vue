<template>
    <div class="news">
        <head-new to="NewHome" page_title="Новости"/>

        <div class="main_container news_list">
            <router-link :to="{name: 'NewsId', params: {id: i+1}}" class="news_item" v-for="(item, i) in list" :key="i">
                <img :src="require(`@/assets/images/news_item_${item.img}.png`)" alt="" class="main_img">
                <div class="icon">
                    <img :src="require(`@/assets/images/news_icon_${item.icon}.svg`)" alt="">
                </div>
                <div class="date">{{ item.date }}</div>
                <div class="title">{{ item.title }}</div>
            </router-link>
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
            list: [
                {img: 1, icon: 1, date: '5 декабря, 15:32', title: 'Кейс: как провести мероприятие на 150 000 человек'},
                {img: 2, icon: 2, date: '5 декабря, 15:32', title: 'О последних событиях в инфобизнесе'},
                {img: 3, icon: 3, date: '4 декабря', title: 'О последних событиях в инфобизнесе'},
                {img: 4, icon: 4, date: '3 декабря', title: 'Заголовок информационной новости от платформы в две строки с транкейтом'},
            ]
        }
    }
}
</script>

<style lang="scss">
.news {
    .news_list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 26px;

        .news_item {
            border-radius: 16px;
            background: #222;
            padding: 12px 12px 16px 12px;
            position: relative;

            .main_img {
                width: 100%;
                border-radius: 6px;
                height: 140px;
            }

            .icon {
                position: absolute;
                top: 16px;
                right: 16px;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                background: rgba(0, 0, 0, 0.66);
            }

            .date {
                color: #A6A5A5;
                font-size: 12px;
                font-weight: 500;
                line-height: 16px;
                margin: 12px 0 4px;
            }

            .title {
                color: #FFF;
                font-size: 16px;
                font-weight: 600;
                line-height: 20px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>