<template>
    <div class="msg_wrapper">
        <button @click="$emit('update:show', false)" class="back_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 7L5 12" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 17L5 12" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div v-if="error" class="error_text">{{ error }}</div>
        <div class="auth_title">Введите код из SMS</div>
        <div class="phone">
            <label>Код подтверждения отправлен на номер</label>
            <span>{{ bindedObject.masked }}</span>
            <input
                :value="phone"
                v-maska="bindedObject"
                data-maska="+7(###) ###-##-##"
                disabled
            >
        </div>
        <div class="confirm_input_wrapper">
            <input
                v-for="i in 4"
                :key="i"
                type="text"
                v-maska
                data-maska="#"
                pattern="[0-9]*"
                inputmode="numeric"
                :ref="`confirm_input_${i - 1}`"
                v-model="code[(i - 1)]"
                @keydown="handleKeyDown($event, (i - 1), code[(i - 1)])"
                @input="handleKeyUp($event, (i - 1), code[(i - 1)])"
            >
        </div>
        <div class="msg_time">
            Отправить код повторно через <span>0:23</span>
        </div>
    </div>
</template>

<script>
import { vMaska } from "maska";

export default {
    name: "CheckMsg",
    directives: { maska: vMaska },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        msg_code: String,
        phone: String,
        error: String
    },
    emits: ['update:show', 'update:msg_code'],
    data () {
        return {
            bindedObject: {
                masked: "",
                unmasked: "",
                completed: false,
            },
            code: ['', '', '', '']
        }
    },
    mounted () {
        this.$refs.confirm_input_0[0].focus();
    },
    methods: {
        handleKeyDown (event, idx, value) {
            if (event.code === 'Tab') {
                event.preventDefault();
            }

            if (event.code === 'Backspace') {
                if (!value && idx !== 0) {
                    this.$refs[`confirm_input_${idx-1}`][0].focus();
                }
            }
        },
        handleKeyUp (event, idx, value) {
            if (event.code !== 'Backspace' && idx != 3 && value.match(/\d+/g)) {
                this.$refs[`confirm_input_${idx+1}`][0].focus();
            };

            this.$emit('update:msg_code', this.code.join(''))
        },
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.msg_wrapper {
    .back_btn {
        border-radius: 10px;
        border: 1px solid #D3D2D2;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
    }
}

.dark-theme .msg_wrapper .back_btn svg path {
    stroke: #fff;
}

.msg_wrapper .auth_title {
    margin-bottom: 12px;
}

.phone {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    label {
        color: #A6A5A5;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: "Raleway", sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
    }

    input {
        display: none;
    }

    span {
        color: #121111;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: "Raleway", sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
    }
}




.dark-theme .phone span {
    color: #fff;
}

.confirm_input_wrapper {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.confirm_input_wrapper input {
    width: 56px;
    height: 72px;
    text-align: center;
    color: #121111;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    border-bottom: 2px solid #D3D2D2;
}

.dark-theme .confirm_input_wrapper input {
    color: #fff;
    border-bottom: 2px solid #4D4C4C;
}

@keyframes inputAnimation {
    0% {
        border-bottom: 2px solid #CF2E2E;
    }
    50% {
        border-bottom: 2px solid transparent;
    }
    100% {
        border-bottom: 2px solid #CF2E2E;
    }
}

.confirm_input_wrapper input:focus {
    /* border-bottom: 2px solid #CF2E2E; */
    animation: 1.3s ease inputAnimation infinite;
}

.msg_time {
    color: #A6A5A5;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-top: 40px;
}

.msg_time span {
    color: #CF2E2E;
}

.dark-theme .msg_time span {
    color: #fff;
}

@media only screen and (max-width: 992px) {
    .msg_wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 2;
        padding: 56px 16px;

        .error_text {
            text-align: center;
        }
    }

    .dark-theme .msg_wrapper {
        background: #171717;
    }

    .msg_wrapper .back_btn {
        border: none;
        width: 24px;
        height: 24px;
    }

    .msg_wrapper .back_btn svg {
        width: 24px;
        height: auto;
    }

    .msg_wrapper .back_btn svg path {
        stroke: #CF2E2E;
    }

    .msg_wrapper .auth_title {
        text-align: center;
        margin-bottom: 16px;
    }

    .phone {
        text-align: center;
        margin-bottom: 40px;
    }

    .phone span {
        width: 100%;
        text-align: center;
    }

    .confirm_input_wrapper {
        justify-content: center;
    }

    .msg_time {
        text-align: center;
        margin-top: 48px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
    }
}
</style>