<template>
    <div class="select_course">
        <img src="@/assets/images/select_course.png" alt="">
        <div class="title">Здесь будут твои купленные курсы</div>
        <div class="subtitle">Выбери курс на маркетплейсе и начни <br> учиться прямо сейчас</div>
        <main-button>Выбрать курс</main-button>
    </div>
</template>

<script>
export default {
    name: 'SelectCourse'
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.select_course {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 198px;

    .title {
        color: $color-2;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        margin: 32px 0 8px;
    }

    .subtitle {
        color: $color-19;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 32px;
    }
}


.dark-theme .select_course {
    .title {
        color: $color-1;
    }

    .subtitle {
        color: color-4;
    }
}



@media only screen and (max-width: 992px) {
    .select_course {
        margin-top: 56px;

        .title {
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
        }
    
        .subtitle {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            margin-bottom: 24px;
        }
    
        .main_button {
            height: 40px;
        }
    }

}
</style>