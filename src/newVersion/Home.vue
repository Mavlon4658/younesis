<template>
    <div class="new_home">
        <div class="main_container new_home__head">
            <router-link to="#" class="left_block">
                <img src="@/assets/images/user_logo.png" class="user_img" alt="">
                <div>
                    <div class="name">Андрей</div>
                    <div class="money">
                        <img src="@/assets/images/coin.svg" alt="">
                        12400
                    </div>
                </div>
            </router-link>
            <router-link to="#" class="right_block main_btn">
                <img src="@/assets/images/workshop.svg" alt="">
                <span>Подарки за друга</span>
            </router-link>
        </div>
        <Stories/>

        <!-- Anons block -->
        <div class="main_container anons_block">
            <router-link :to="{name: 'Study'}" class="link">
                <span class="icon">
                    <img src="@/assets/images/anons_icon_1.svg" alt="">
                </span>
                <span class="title">Учусь</span>
                <div class="subtitle">Еще не учусь</div>
            </router-link>
            <router-link :to="{name: 'Fair'}" class="link">
                <span class="icon">
                    <img src="@/assets/images/anons_icon_2.svg" alt="">
                </span>
                <span class="title">Ярмарка</span>
                <div class="subtitle">Каталог курсов</div>
            </router-link>
        </div>
        <!-- Anons block end -->

        <!-- Wheels -->
        <div class="main_container">
            <button class="wheels_btn">
                <span class="title">Колесо фортуны</span>
                <span class="subtitle">Доступно 1 бесплатное вращение</span>
                <span class="alert">Крутить</span>
                <img src="@/assets/images/wheel_img.png" alt="">
            </button>
        </div>
        <!-- Wheels end -->

        <!-- Tools -->
        <div class="main_container">
            <div class="tools">
                <h2 class="main_title">Инструменты</h2>
                <div class="tools_lists">
                    <router-link to="#" class="tools_card"> 
                        <div class="img">
                            <img src="@/assets/images/tools_card_1.svg" alt="">
                        </div>
                        <div class="title">
                            Икигай
                        </div>
                    </router-link>
                    <router-link to="#" class="tools_card"> 
                        <span class="alert">1</span>
                        <div class="img img_2">
                            <img src="@/assets/images/tools_card_2.svg" alt="">
                        </div>
                        <div class="title">
                            Мастермайнд
                        </div>
                    </router-link>
                    <router-link to="#" class="tools_card"> 
                        <div class="img img_3">
                            <img src="@/assets/images/tools_card_3.svg" alt="">
                        </div>
                        <div class="title">
                            Икигай
                        </div>
                    </router-link>
                    <router-link :to="{name: 'Development'}" class="tools_card"> 
                        <span class="alert_2">
                            <img src="@/assets/images/tools_alert_2.svg" alt="">
                        </span>
                        <div class="img">
                            <img src="@/assets/images/tools_card_1.svg" alt="">
                        </div>
                        <div class="title">
                            Колесо баланса
                        </div>
                    </router-link>

                </div>  
            </div>
        </div>
        <!-- Tools end -->

        <!-- Event calendar -->
        <div class="main_container event_calendar">
            <div class="main_title">Календарь мероприятий</div>
            <div class="subtitle">Декабрь</div>
        </div>
        <event-calendar></event-calendar>
        <!-- Event calendar end -->
    </div>
</template>

<script>
import Stories from '@/components/newVersionComponents/Stories.vue';
import EventCalendar from '@/components/newVersionComponents/EventCalendar.vue';

export default {
    name: "NewHome",
    components: {
        Stories,
        EventCalendar
    }
}
</script>

<style lang="scss">
.new_home {
    &__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 48px !important;
        padding-bottom: 20px !important;

        .left_block {
            display: flex;
            align-items: flex-start;
            gap: 9px;

            img.user_img {
                width: 40px;
                height: 40px;
                flex-shrink: 0;
            }

            .name {
                color: #FFF;
                font-size: 16px;
                font-weight: 600;
                line-height: 20px;
                margin-bottom: 9px;
            }

            .money {
                position: relative;
                border-radius: 44px;
                background: linear-gradient(90deg, #AF7311 0%, rgba(175, 116, 17, 0.50) 100%);
                color: #FFF;
                font-size: 12px;
                font-weight: 600;
                line-height: 14px;
                padding: 3px 9px 3px 26px;

                img {
                    position: absolute;
                    left: -7px;
                    top: -7px;
                }
            }
        }
    }

    .anons_block {
        padding-top: 20px;
        padding-bottom: 8px;
        display: flex;
        align-items: stretch;
        gap: 8px;

        .link {
            width: calc(50% - 4px);
            border-radius: 20px;
            background: #222;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        
            &:nth-child(2) {
                .icon {
                    background: #38A0FF;
                }
            }
        }

        .icon {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: #B61CFF;
        }

        .title {
            color: #FFF;
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
        }

        .subtitle {
            color: #A6A5A5;
            font-size: 12px;
            font-weight: 500;
            line-height: 14px;
        }
    }

    .wheels_btn {
        border-radius: 20px;
        background: linear-gradient(90deg, #FC5E1A 0%, #F7B733 100%);
        position: relative;
        padding: 16px;
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;

        .title {
            color: #FFF;
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
            margin-bottom: 8px;
        }

        .subtitle {
            color: rgba(255, 255, 255, 0.80);
            font-size: 12px;
            font-weight: 500;
            line-height: 14px;
            margin-bottom: 12px;
        }

        .alert {
            border-radius: 37px;
            background: rgba(255, 255, 255, 0.20);
            padding: 8px 12px;
            color: #FFF;
            font-size: 12px;
            font-weight: 700;
            line-height: 14px;
        }

        img {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
        }
    }

    .tools {
        border-radius: 20px;
        background:  #222;
        padding: 16px;
        margin: 24px auto;

        h2 {
            margin-bottom: 15px;
        }

        .tools_lists {
            display: flex;
            align-items: stretch;
            flex-wrap: wrap;
            gap: 8px;   

            .tools_card {
                position: relative;
                border-radius: 12px;
                background: var(--theme-night-background-bg-card-04, #3B3B3B);
                padding: 12px;
                width: calc(50% - 4px);
            }

            .alert {
                position: absolute;
                top: -4px;
                right: -4px;
                display: flex;
                width: 28px;
                height: 28px;
                justify-content: center;
                align-items: center;
                border-radius: 16px;
                background: #FF2E37;
                color: #FFF;
                text-align: center;
                font-size: 14px;
                font-weight: 600;
                line-height: 18px;
            }

            .alert_2 {
                position: absolute;
                top: 4px;
                right: 4px;
                display: inline-flex;
                height: 25px;
                padding: 8px 4px;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                background:  #222;
            }

            .img {
                display: flex;
                width: 36px;
                height: 36px;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                background: #CF3AA5;
                margin-bottom: 8px;
            }

            .img_2 {
                border-radius: 8px;
                background: #FFA723;
            }

            .img_3 {
                border-radius: 8px;
                background: #33BBA3;
            }

            .title {
                color:  #FFF;
                font-size: 14px;
                font-weight: 600;
                line-height: 18px; 
            }
        }


    }

    .event_calendar {
        .main_title {
            margin-bottom: 16px;
        }
        
        .subtitle {
            position: relative;
            padding-right: 7px;
            display: inline-block;
            margin-bottom: 14px;

            &::after {
                position: absolute;
                content: "";
                width: 100vw;
                height: 1px;
                background: #4D4C4C;
                top: 50%;
                right: 0;
                transform: translate(100%, -50%);
            }
        }

    }
}
</style>