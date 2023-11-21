<template>
    <div class="test_wrapper">
        <Nav>
            <ul class="breadcrumb">
                <li>Мои курсы</li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 16L14 12L10 8" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                <li class="active">Продающие диагностики: урок 7</li>
            </ul>
        </Nav>
        <div class="test_content">
            <main-button @click="$router.go(-1)" class="light text-red mb-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 7L5 12" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 17L5 12" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Вернуться к уроку</span>
            </main-button>
            <div class="test_button_wrapper">
                <button @click="$router.go(-1)" class="close_test">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6L18 18" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 6L6 18" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="test_buttons">
                    <button
                        v-for="i in tests.length"
                        :key="i"
                        @click="current_test_idx = i"
                        :class="{'active': i === current_test_idx, 'checked': correct_answers[i - 1] == 0 || correct_answers[i - 1]}"
                    >{{ i }}</button>
                </div>
            </div>
            <div class="answers">
                <div class="main_title_2">{{ current_test.question }}</div>
                <div class="answer_list">
                    <button
                        v-for="(item, i) in current_test.answers"
                        :key="i"
                        @click="correct_answers[current_test_idx - 1] = i"
                        :class="{'active': correct_answers[current_test_idx - 1] === i}"
                    >{{ item }}</button>
                </div>
            </div>
            <div class="answer_buttons">
                <main-button @click="back()" type="light text-red">
                    <span>Назад</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 7L5 12" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 17L5 12" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </main-button>
                <main-button @click="save()">Далее</main-button>
            </div>
            <modal-dialog v-if="modal" class="modal" v-model:show="modal">
                <div class="warning">
                    <img src="@/assets/images/warning.svg" alt="">
                </div>
                <div class="main_title">Остались вопросы</div>
                <div class="description">Есть вопросы без ответов, ты уверен, <br> что хочешь сдать задание без их выполнения?</div>
                <div class="buttons">
                    <main-button @click="finishTest()" type="light text-red">Сдать задание</main-button>
                    <main-button @click="modal = false">Дорешать</main-button>
                </div>
            </modal-dialog>
        </div>
    </div>
</template>

<script>
export default {
    name: "Test",
    data () {
        return {
            tests: [
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 1",
                    answers: [
                        'Проверить связь модератора 1',
                        'Проверить работу микрофона 1',
                        'Проверить работу камеры 1',
                        'Правильность отправленной ссылки приглашения 1',
                        'Все ответы верны 1'
                    ]
                },
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 2",
                    answers: [
                        'Проверить связь модератора 2',
                        'Проверить работу микрофона 2',
                        'Проверить работу камеры 2',
                        'Правильность отправленной ссылки приглашения 2',
                        'Все ответы верны 2'
                    ]
                },
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 3",
                    answers: [
                        'Проверить связь модератора 3',
                        'Проверить работу микрофона 3',
                        'Проверить работу камеры 3',
                        'Правильность отправленной ссылки приглашения 3',
                        'Все ответы верны 3'
                    ]
                },
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 4",
                    answers: [
                        'Проверить связь модератора 4',
                        'Проверить работу микрофона 4',
                        'Проверить работу камеры 4',
                        'Правильность отправленной ссылки приглашения 4',
                        'Все ответы верны 4'
                    ]
                },
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 5",
                    answers: [
                        'Проверить связь модератора 5',
                        'Проверить работу микрофона 5',
                        'Проверить работу камеры 5',
                        'Правильность отправленной ссылки приглашения 5',
                        'Все ответы верны 5'
                    ]
                },
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 6",
                    answers: [
                        'Проверить связь модератора 6',
                        'Проверить работу микрофона 6',
                        'Проверить работу камеры 6',
                        'Правильность отправленной ссылки приглашения 6',
                        'Все ответы верны 6'
                    ]
                },
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 7",
                    answers: [
                        'Проверить связь модератора 7',
                        'Проверить работу микрофона 7',
                        'Проверить работу камеры 7',
                        'Правильность отправленной ссылки приглашения 7',
                        'Все ответы верны 7'
                    ]
                },
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 8",
                    answers: [
                        'Проверить связь модератора 8',
                        'Проверить работу микрофона 8',
                        'Проверить работу камеры 8',
                        'Правильность отправленной ссылки приглашения 8',
                        'Все ответы верны 8'
                    ]
                },
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 9",
                    answers: [
                        'Проверить связь модератора 9',
                        'Проверить работу микрофона 9',
                        'Проверить работу камеры 9',
                        'Правильность отправленной ссылки приглашения 9',
                        'Все ответы верны 9'
                    ]
                },
                {
                    question: "Что нужно сделать в первую очередь при подключении на вебинар? 10",
                    answers: [
                        'Проверить связь модератора 10',
                        'Проверить работу микрофона 10',
                        'Проверить работу камеры 10',
                        'Правильность отправленной ссылки приглашения 10',
                        'Все ответы верны 10'
                    ]
                },
            ],
            current_test_idx: 1,
            correct_answers: [],
            modal: false,
        }
    },
    computed: {
        current_test () {
            return this.tests[this.current_test_idx - 1];
        }
    },
    methods: {
        save () {
            if (!Number.isInteger(this.correct_answers[this.current_test_idx - 1])) {
                this.correct_answers[this.current_test_idx - 1] = null;
            }
            if (this.current_test_idx === this.tests.length) {
                this.modal = true;
            }

            if (this.current_test_idx !== this.tests.length) {
                this.current_test_idx++;
            }
        },
        back () {
            if (this.current_test_idx != 1) {
                this.current_test_idx--;
            }
        },
        finishTest () {
            this.modal = false;
        }
    }
}
</script>

<style lang="scss">
.test_content {
    padding: 20px;
    width: 595px;

    .modal {
        text-align: center;

        .warning {
            width: 96px;
            height: 96px;
            border-radius: 50%;
            margin: 12px auto 32px;
            background: #DEDEDE;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .description {
            color: #727272;
            text-align: center;
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
            margin: 8px 0 40px;
        }

        .buttons {
            width: 515px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;

            .main_button {
                height: 48px;
                width: 100%;
            }
        }
    }
}

.test_buttons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background: #F6F6F6;
    padding: 4px;
    gap: 4px;
    margin: 32px 0;

    button {
        border-radius: 4px;
        background: #FFF;
        height: 40px;
        width: 100%;
        color: #121111;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
    }

    button.checked {
        color: #727272;
    }

    button.active {
        border: 1px solid #CF2E2E;
        color: #121111;
    }
}

.close_test {
    display: none;
}

.answers {
    margin-bottom: 32px;

    .answer_list {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        gap: 8px;

        button {
            border-radius: 16px;
            background: #F6F6F6;
            padding: 16px;
            text-align: left;
            color: #121111;
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
        }

        button.active {
            border: 1px solid #CF2E2E;
        }
    }
}

.answer_buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .main_button {
        width: 100%;
        height: 48px;
    }

    .text-red {
        svg {
            display: none;
        }
    }
}

.dark-theme {
    .test_content {
        .modal {
            .warning {
                background: #3B3B3B;
            }

            .description {
                color: #D3D2D2;
            }
        }
    }

    .test_buttons {
        background: #222222;

        button {
            background: #3B3B3B;
            color: #fff;
        }

        button.checked {
            color: #A6A5A5;
        }

        button.active {
            border: 1px solid #CF2E2E;
            color: #A6A5A5;
        }
    }

    .answers {
        .answer_list {
            button {
                background: #222222;
                color: #fff;
            }
        }
    }

    .answer_buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        .main_button {
            width: 100%;
            height: 48px;
        }
    }
}

@media only screen and (max-width: 992px) {
    .test_wrapper {
        width: 100%;
    }
    .test_content {
        padding: 0px;
        width: 100%;

        .mb-none {
            display: none !important;
        }
    }

    .test_button_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin: 56px 0 40px;

        .close_test {
            border-radius: 10px;
            background: #F6F6F6;
            min-width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .test_buttons {
        width: calc(100% - 56px);
        justify-content: flex-start;
        margin: 0;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        button {
            min-width: 40px;
        }

        button.active {
            border: 1px solid #CF2E2E;
        }
    }

    .answers {
        margin-bottom: 32px;

        .main_title_2 {
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            text-align: center;
        }

        .answer_list {
            margin-top: 24px;

            button {
                border-radius: 12px;
                padding: 17px 16px;
                font-size: 14px;
                line-height: 18px;
            }
        }
    }

    .answer_buttons {
        gap: 12px;
        
        .text-red {
            width: 48px !important;

            span {
                display: none;
            }

            svg {
                display: block;
            }
        }

        .main_button {
            width: 100%;
            height: 48px;
        }
    }
    
    .dark-theme {
        .test_button_wrapper {
            .close_test {
                background: #222222;

                svg {
                    path {
                        stroke: #fff;
                    }
                }
            }
        }

        .answer_buttons {
            .text-red {
                svg {
                    path {
                        stroke: #fff;
                    }
                }
            }
        }
    }
}

@media (min-height: 700px) and (max-width: 882px) {
    .answer_buttons {
        position: fixed;
        left: 16px;
        bottom: 60px;
        width: calc(100% - 32px);
    }
}

@media only screen and (max-width: 650px) {
    .test_content {
        .modal_wrapper {
            .modal_content_wrapper {
                position: relative;
                width: calc(100% - 32px);

                .modal_content {
                    padding: 16px;
                }

                .modal_close {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                }
            }
        }

        .modal {
            .warning {
                width: 80px;
                height: 80px;
                margin: 24px auto 24px;

                img {
                    width: 64px;
                    height: 64px;
                }
            }

            .description {
                font-size: 14px;
                line-height: 18px;
                margin: 8px 0 24px;
            }

            .buttons {
                width: calc(100vw - 64px);
                flex-direction: column-reverse;
            }
        }
    }
}
</style>