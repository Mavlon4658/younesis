<template>
    <div class="study">
        <head-new to="NewHome" page_title="Учусь"/>

        <div class="study_home">
            <div class="main_container">
                <div class="title">Выигранные материалы</div>
                <p>С ограниченным доступом по времени</p>
            </div>
            <img src="@/assets/images/wheel_half.png" alt="" class="bg">
        </div>

        <div class="study_slider">
            <div class="main_container">
                <div class="slider_wrapper">
                    <swiper
                        :slidesPerView="'auto'"
                        :spaceBetween="8"
                        :modules="modules"
                    >
                        <swiper-slide v-for="i in 5" :key="i">
                            <div class="slide_item">
                                <div class="slide_item_top">
                                    <div class="left_block">
                                        <div class="img">
                                            <img src="@/assets/images/card_1_1.png" alt="">
                                        </div>
                                    </div>
                                    <div class="right_block">
                                        <div class="type">Мастер-класс</div>
                                        <div class="title">Сценарий продающего вебинара</div>
                                    </div>
                                </div>
                                <div class="slide_item_bottom">
                                    <div class="time">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M5.70461 2.45797C8.76527 1.18997 12.2739 2.64397 13.5419 5.70464C14.8099 8.76531 13.3559 12.274 10.2953 13.542C7.23461 14.81 3.72594 13.356 2.45794 10.2953C1.19061 7.23464 2.64394 3.72597 5.70461 2.45797" stroke="#FF3F48" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.81201 5.32324V8.42391L10.2493 9.90991" stroke="#FF3F48" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <span>01:42:12</span>
                                    </div>
                                    <div class="protsent">
                                        <span>50%</span>
                                        <Progressbar value="50"/>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>

        <div class="main_container course_list">
            <div class="sec_title">Прохожу курсы</div>
            <div class="list_item_wrap">
                <div class="item" v-for="i in 8" :key="i">
                    <div class="img">
                        <img src="@/assets/images/card_1_1.png" alt="">
                    </div>
                    <div class="text">
                        <div class="title">Продающие диагностики с длинным названием курса asdfas</div>
                        <div>
                            <div class="data">
                                <span>4 из 15 уроков пройдено</span>
                                <span>35%</span>
                            </div>
                            <div class="line">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadNew from '@/components/newVersionComponents/HeadNew.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import Progressbar from '@/components/newVersionComponents/Progressbar.vue'

import 'swiper/css';

export default {
    components: {
        HeadNew,
        Swiper,
        SwiperSlide,
        Progressbar,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    data () {
        return {
            myCourse: []
        }
    }
}
</script>

<style lang="scss">
.study {
    .study_home {
        background: linear-gradient(60deg, #FC5E1A 0%, #F7B733 100%);
        margin-top: 24px;
        padding: 16px 0 90px;
        position: relative;

        .bg {
            position: absolute;
            top: 0;
            right: 0;
        }
        
        .title {
            color: #FFF;
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 2px;
        }

        p {
            color: rgba(255, 255, 255, 0.80);
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
        }
    }

    .study_slider {
        .main_container {
            position: relative;
        }

        .swiper {
            overflow: visible;
        }

        .swiper-slide {
            width: 280px;
        }

        .slider_wrapper {
            position: absolute;
            top: 0;
            left: 16px;
            right: 16px;
            transform: translateY(-50%);
        }

        .slide_item {
            border-radius: 16px;
            background: #222;
            padding: 12px;
        }

        .slide_item_top {
            display: flex;
            gap: 12px;
            margin-bottom: 6px;

            .img {
                width: 72px;
                height: 72px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.16);

                img {
                    width: 56px;
                    height: 56px;
                    object-fit: contain;
                }
            }

            .type {
                color: #D9B14B;
                font-size: 12px;
                font-weight: 400;
                line-height: 14px;
                margin-bottom: 2px;
            }

            .title {
                color: #FFF;
                font-size: 14px;
                font-weight: 600;
                line-height: 18px;
            }
        }

        .slide_item_bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .time {
                display: flex;
                align-items: center;
                gap: 4px;

                span {
                    color:  #FF3F48;
                    text-align: center;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 14px;
                }
            }

            .protsent {
                display: flex;
                align-items: center;
                gap: 8px;


                .icon {
                    position: relative;
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }

    .course_list {
        margin-top: 84px;

        .sec_title {
            color: #FFF;
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 12px;
        }

        .list_item_wrap {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .item {
            display: flex;
            align-items: stretch;
            border-radius: 16px;
            background: #222;
            padding: 12px;
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
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .title {
                font-size: 16px;
                font-weight: 600;
                line-height: 20px;
                color: #fff;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .data {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;

                span {
                    color: #A6A5A5;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 14px;

                    &:nth-child(2) {
                        font-weight: 500;
                    }
                }
            }

            .line {
                height: 4px;
                border-radius: 4px;
                background: #4B4B4B;
                position: relative;

                span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 30%;
                    height: 4px;
                    border-radius: 4px;
                    background: #CF2E2E;
                }
            }
        }
    }
}
</style>