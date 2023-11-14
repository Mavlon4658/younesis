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

<style>
.select_course {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 198px;
}

.select_course .title {
    color: #121111;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin: 32px 0 8px;
}

.dark-theme .select_course .title {
    color: #fff;
}

.select_course .subtitle {
    color: #727272;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 32px;
}

.dark-theme .select_course .subtitle {
    color: #D3D2D2;
}

@media only screen and (max-width: 992px) {
    .select_course {
        margin-top: 56px;
    }

    .select_course .title {
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
    }

    .select_course .subtitle {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        margin-bottom: 24px;
    }

    .select_course .main_button {
        height: 40px;
    }
}
</style>