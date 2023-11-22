<template>
    <div class="support_wrapper">
        <Nav>
            <div class="main_title">Поддержка</div>
        </Nav>
        <div class="support_content">
            <div class="support_chat">
                <img src="@/assets/images/telegram_icon.svg" alt="" class="icon">
                <div class="title">Чат поддержки</div>
                <div class="description">Напиши нам в Telegram, если у тебя возникли вопросы или идеи по улучшению платформы — ответим на все!</div>
                <button>Написать</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Support'
}
</script>

<style>
@import '@/assets/_variables.scss';

.support_content {
    padding: 20px;
    width: 400px;
}

@media only screen and (max-width: 992px) {
    .support_content {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: flex-end;
        padding: 0 16px 128px;
    }
}
</style>