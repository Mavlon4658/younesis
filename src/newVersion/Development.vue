<template>
    <div class="development">
        <head-new to="NewHome" page_title="Колесо баланса"/>

        <div class="main_container">
            <div class="top_card">
                <div class="img">
                    <img src="@/assets/images/development_card_icon.svg" alt="">
                </div>
                <div class="tilte">Колесо баланса в разработке</div>
                <p>Колесо баланса — это концептуальная модель, которая используется для оценки и визуализации баланса или гармонии в различных жизненных областях человека</p>
            </div>

            <div class="rating">
                <div class="title">Как вам идея?</div>
                <p>Оцените, чтобы мы поспешили с релизом</p>
                <div class="stars">
                    <svg @click="star = i" v-for="i in 5" :class="i <= star ? 'active' : ''" :key="i" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3082 27.7769C9.63206 28.1298 8.81413 28.0677 8.19911 27.6167C7.58409 27.1657 7.27894 26.4042 7.41228 25.6533L8.4914 19.4681L3.94817 15.1143C3.39284 14.5847 3.18932 13.7841 3.4243 13.0536C3.65928 12.3231 4.29136 11.7914 5.0513 11.6848L11.3593 10.7831L14.2071 5.1021C14.5448 4.42078 15.2395 3.98975 15.9999 3.98975C16.7603 3.98975 17.4549 4.42078 17.7926 5.1021L20.6405 10.7831L26.9484 11.6848C27.7084 11.7914 28.3404 12.3231 28.5754 13.0536C28.8104 13.7841 28.6069 14.5847 28.0515 15.1143L23.5083 19.4681L24.5874 25.6547C24.7208 26.4056 24.4156 27.167 23.8006 27.618C23.1856 28.069 22.3677 28.1311 21.6916 27.7782L15.9999 24.837L10.3082 27.7769Z" stroke="#A6A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            
            <div class="form">
                <label>Обратная связь</label>
                <textarea v-model="comment"></textarea>
                <main-button @click="sendComment()" :class="!comment.length ? 'disabled' : ''">Отправить</main-button>
            </div>
        </div>
    </div>
</template>

<script>
import HeadNew from '@/components/newVersionComponents/HeadNew.vue';

export default {
    components: {
        HeadNew
    },
    data () {
        return {
            star: 0,
            comment: ''
        }
    },
    methods: {
        sendComment () {
            this.comment = '';
        }
    }
}
</script>

<style lang="scss">
.development {
    .title {
        color: #FFF;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 4px;
    }

    .top_card {
        border-radius: 20px;
        background: #222;
        padding: 16px;
        margin: 24px 0 16px;

        .img {
            border-radius: 8px;
            background: #FFC700;
            display: flex;
            width: 36px;
            height: 36px;
            justify-content: center;
            align-items: center;
            margin-bottom: 12px;
        }


        .description {
            color: #FFF;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
        }

        .title {
            margin-bottom: 8px;
        }
    }

    .rating {
        border-radius: 20px;
        background: #222;
        padding: 16px;
        margin-bottom: 16px;

        p {
            color: #A6A5A5;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            margin-bottom: 16px;
        }

        svg.active {
            fill: #fff;
            stroke: #fff;
        }
    }

    .form {
        display: flex;
        flex-direction: column;

        label {
            color: #A6A5A5;
            font-size: 12px;
            font-weight: 600;
            line-height: 14px;
        }

        textarea {
            height: 134px;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid #4D4C4C;
            resize: none;
            margin: 4px 0 36px;
            color: #FFF;
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
        }
        

        .main_button {
            height: 48px;
        }

        .main_button.disabled {
            pointer-events: none;
            background: #CF2E2E99;
            color: #FFFFFF80;
        }
    }
}
</style>