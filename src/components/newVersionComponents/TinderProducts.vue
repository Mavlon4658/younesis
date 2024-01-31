<template>
    <div class="tinder_products">
        <div class="title">
            <img src="@/assets/images/product_icon.svg" alt="">
            <span>Продукты</span>
        </div>
        <div class="products_cards">
            <div class="card_item card_top">
                <div class="amount">Бесплатно</div>
                <p>Бесплатная консультация по базовой настройке рекламы в телеграм</p>
                <div class="links">
                    <router-link to="#" class="light_link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5.89843 18.1733C8.1551 18.1733 9.9851 16.3433 9.9851 14.0867C9.9851 11.83 8.15593 10 5.89843 10C3.64093 10 1.81177 11.83 1.81177 14.0867" stroke="#1A1919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.90258 18.1773C5.28758 18.1773 4.70508 18.0414 4.18175 17.7989L1.66675 18.3331L2.19258 15.8131C1.94841 15.2881 1.81175 14.7031 1.81175 14.0864" stroke="#1A1919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.46417 10.0232C5.16583 9.33901 5 8.59318 5 7.81068C5 4.46318 7.99833 1.77734 11.6667 1.77734C15.335 1.77734 18.3333 4.46318 18.3333 7.81068C18.3333 9.78901 17.2817 11.5307 15.6675 12.629C15.6683 13.259 15.6667 14.1082 15.6667 14.9998L13.0508 13.7115C12.6033 13.7973 12.1408 13.844 11.6667 13.844C11.0775 13.844 10.5058 13.774 9.96083 13.6432" stroke="#1A1919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Написать</span>
                    </router-link>
                    <router-link to="#" class="link">Подробнее</router-link>
                </div>
            </div>
            <div class="card_item card_center">
                <div class="amount">От 15 000₽</div>
                <p>Провожу личные консультации и обучение в центре Москвы и онлайн по всему миру как со взрослыми, так и с подростками. Я верю, что ответы на все вопросы</p>
                <div class="links">
                    <router-link to="#" class="light_link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5.89843 18.1733C8.1551 18.1733 9.9851 16.3433 9.9851 14.0867C9.9851 11.83 8.15593 10 5.89843 10C3.64093 10 1.81177 11.83 1.81177 14.0867" stroke="#1A1919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.90258 18.1773C5.28758 18.1773 4.70508 18.0414 4.18175 17.7989L1.66675 18.3331L2.19258 15.8131C1.94841 15.2881 1.81175 14.7031 1.81175 14.0864" stroke="#1A1919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.46417 10.0232C5.16583 9.33901 5 8.59318 5 7.81068C5 4.46318 7.99833 1.77734 11.6667 1.77734C15.335 1.77734 18.3333 4.46318 18.3333 7.81068C18.3333 9.78901 17.2817 11.5307 15.6675 12.629C15.6683 13.259 15.6667 14.1082 15.6667 14.9998L13.0508 13.7115C12.6033 13.7973 12.1408 13.844 11.6667 13.844C11.0775 13.844 10.5058 13.774 9.96083 13.6432" stroke="#1A1919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Написать</span>
                    </router-link>
                    <router-link to="#" class="link">Подробнее</router-link>
                </div>
            </div>
            <div class="card_item card_bottom">
                <p>Телеграм-канал для маркетологов в корпорациях</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.95 7.0498L7.05005 16.9498" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 7L16.95 7.049L17 14" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <button class="more">
                <span>Показать еще</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M8.5 10L12.5 14L16.5 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .tinder_products {
        border-radius: 20px;
        background: #222;
        padding: 16px;

        .title {
            display: flex;
            align-items: center;
            gap: 4px;
            margin-bottom: 12px;
            
            span {
                color: #FFF;
                font-size: 16px;
                font-weight: 700;
                line-height: 20px;
            }
        }

        .products_cards {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .card_item {
                border-radius: 12px;
                background: #2F2F2F;
                padding: 12px;
            }

            .card_bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 4px;

                svg {
                    flex-shrink: 0;
                }
            }

            .amount {
                margin-bottom: 4px;
                color: #5FC15D;
                font-size: 12px;
                font-weight: 600;
                line-height: 16px;
            }

            p {
                overflow: hidden;
                color: #D3D2D2;
                font-size: 14px;
                font-weight: 400;
                line-height: 18px;
                margin-bottom: 16px;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .links {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .light_link {
                    border-radius: 4px;
                    background: #FFF;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    padding: 0 12px;
                    color: #1A1919;
                    text-align: center;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 16px;
                }

                .link {
                    color: #FFF;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 16px;
                }
            }

            .more {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFF;
                font-size: 12px;
                font-weight: 500;
                line-height: 14px; 
            }
        }
    }
</style>