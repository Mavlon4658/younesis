<template>
    <div class="new_stories_modal">
        <img src="@/assets/images/show_stories.png" alt="" class="main_img">
        <div class="story_length">
            <div class="main_container">
                <div class="length_item"></div>
                <div class="length_item"></div>
            </div>
        </div>
        <div class="time">
            <div class="main_container">
                <button @click="$emit('update:value', false)" class="close_story">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6L18 18" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 6L6 18" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="value">28 ноября</div>
                <div class="location">
                    <img src="@/assets/images/location_icon.svg" alt="">
                    <span>Санкт-Петербург</span>
                </div>
            </div>
        </div>
        <div class="story_foot">
            <div class="main_container">
                <div class="title">Выступление спикеров на мероприятии</div>
                <div class="descripton">
                    Приглашенные спикеры будут выступать с 12:00 до 15:00 <br>
                    Приглашенные спикеры будут выступать с 12:00 до 15:00 <br>
                    Приглашенные спикеры будут выступать с 12:00 до 15:00
                </div>
                <router-link to="#" class="link">Подробнее</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
        }
    },
    emits: ['update:value']
}
</script>

<style lang="scss">
.new_stories_modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    .main_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .story_length {
        position: absolute;
        top: 52px;
        left: 0;
        width: 100%;

        .main_container {
            display: flex;
            gap: 8px;
            justify-content: space-between;
        }

        .length_item {
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.32);
            height: 4px;
            flex: 1;
        }
    }

    .time {
        position: absolute;
        top: 72px;
        left: 0;
        width: 100%;

        .main_container {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-start;
            position: relative;
        }

        .value {
            padding: 8px 12px;
            border-radius: 12px;
            background: rgba(37, 37, 37, 0.32);
            color: #FFF;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            height: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .location {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            border-radius: 12px;
            background: rgba(37, 37, 37, 0.32);
            height: 40px;
            padding: 8px 12px;

            img {
                flex-shrink: 0;
            }

            span {
                color: #FFF;
                text-align: center;
                font-size: 14px;
                font-weight: 500;
                line-height: 18px;
            }
        }
    }

    .close_story {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: #F6F6F6;
        position: absolute;
        right: 16px;
        top: 0;
    }

    .story_foot {
        position: absolute;
        bottom: 48px;
        left: 0;
        width: 100%;

        .title {
            color: #FFF;
            font-size: 28px;
            font-weight: 700;
            line-height: 32px;
            margin-bottom: 16px;
        }

        .descripton {
            color: rgba(255, 255, 255, 0.80);
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            margin-bottom: 32px;
        }

        .link {
            border-radius: 12px;
            background: #FFF;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 56px;
            color: #121111;
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
        }
    }
}
</style>