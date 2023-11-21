<template>
    <div class="lesson_wrap">
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
        <div class="lesson_content">
            <router-link :to="{name: 'Courses'}" class="edit_link red">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 7L5 12" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 17L5 12" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Вернуться к курсам</span>
            </router-link>
            <div class="page_name">5 урок из 10</div>
            <div class="lessons_row">
                <div class="left">
                    <div class="video" :class="{'active': video_play}">
                        <div class="play">
                            <svg @click="playVideo" class="light" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M63 36C63 50.913 50.913 63 36 63C21.087 63 9 50.913 9 36C9 21.087 21.087 9 36 9C50.913 9 63 21.087 63 36Z" fill="#BDBDBD" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8228 27.174L44.4688 34.062C45.9418 34.932 45.9418 37.065 44.4688 37.935L32.8228 44.823C31.3228 45.711 29.4268 44.628 29.4268 42.885V29.112C29.4268 27.369 31.3228 26.286 32.8228 27.174Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg @click="playVideo" class="dark" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M63 36C63 50.913 50.913 63 36 63C21.087 63 9 50.913 9 36C9 21.087 21.087 9 36 9C50.913 9 63 21.087 63 36Z" fill="#1A1919" stroke="#1A1919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8228 27.174L44.4688 34.062C45.9418 34.932 45.9418 37.065 44.4688 37.935L32.8228 44.823C31.3228 45.711 29.4268 44.628 29.4268 42.885V29.112C29.4268 27.369 31.3228 26.286 32.8228 27.174Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <video src="@/assets/videos/video_1.mp4" controls controlsList="nodownload" oncontextmenu="return false;"></video>
                    </div>
                    <div class="main_title">Как подготовиться к первому вебинару и не сойти с ума?</div>
                    <div class="description">Курс предлагает введение в основные концепции и практики в выбранной области знаний. Ты будешь изучать основные темы, принципы и методы, необходимые для успешного понимания и применения в своей профессиональной или личной жизни.</div>
                    <div class="download_materials">
                        <div class="main_title_2">Материалы к скачиванию</div>
                        <div class="materials">
                            <a href="#" v-for="(item, i) in materials" :key="i" class="items">
                                <span class="text">
                                    <img :src="require(`@/assets/images/${item.icon}.svg`)" alt="">
                                    <span class="title">{{ item.title }}</span>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 17V3" stroke="#D3D2D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 17C21 19.209 19.209 21 17 21H7C4.791 21 3 19.209 3 17" stroke="#D3D2D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17 12L11.999 17.001L6.99902 12" stroke="#D3D2D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="home_work">
                        <img src="@/assets/images/home_work_banner.png" alt="" class="icon">
                        <div class="main_title_2">Домашнее задание</div>
                        <div class="subtitle">10 вопросов по пройденному</div>
                        <router-link class="link-red" :to="{name: 'Test'}">Начать</router-link>
                    </div>
                    <div class="buttons">
                        <main-button type="light text-red">Предыдущий урок</main-button>
                        <main-button>Следующий урок</main-button>
                    </div>
                </div>
                <div class="right">
                    <div class="tasks_wrapper" :class="{'hide': hide_tasks}">
                        <div
                            v-for="(item, i) in tasks"
                            :key="i"
                            class="item"
                            :class="{'active': current_diagnostics == i, 'done': checkDone(item)}"
                        >
                            <div class="task_title"> Урок {{ item.id }}: {{ item.title }}</div>
                            <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10 16L14 12L10 8" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg class="correct" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21Z" fill="#CF2E2E" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 10L11 15L8 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <main-button @click="showTasks" type="light text-red">
                        <span>{{ hide_tasks_text }}</span>
                        <svg :class="{'active': hide_tasks}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16 14L12 10L8 14" stroke="#CF2E2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </main-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '_id',
    data () {
        return {
            video_play: false,
            materials: [
                {title: 'Методичка по проведению вебинара', icon: 'pdf_icon'},
                {title: 'Слайд с фотографиями', icon: 'jpg_icon'},
                {title: 'Как подготовиться к первому вебинару', icon: 'mp3_icon'},
                {title: 'Чекап перед начало вебинара', icon: 'doc_icon'},
                {title: 'Расписание для печати', icon: 'png_icon'},
            ],
            tasks: [
                {id: 1, title: 'Название урока', done: '100%', done_title: '10 из 10 уроков пройдено'},
                {id: 2, title: 'Название урока', done: '100%', done_title: '10 из 10 уроков пройдено'},
                {id: 3, title: 'Название урока', done: '100%', done_title: '10 из 10 уроков пройдено'},
                {id: 4, title: 'Название урока', done: '100%', done_title: '10 из 10 уроков пройдено'},
                {id: 5, title: 'Название урока', done: '100%', done_title: '10 из 10 уроков пройдено'},
                {id: 6, title: 'Название урока', done: '100%', done_title: '10 из 10 уроков пройдено'},
                {id: 7, title: 'Название урока', done: '100%', done_title: '10 из 10 уроков пройдено'},
                {id: 8, title: 'Название урока', done: '80%', done_title: '8 из 10 уроков пройдено'},
                {id: 9, title: 'Название урока'},
                {id: 10, title: 'Название урока'}
            ],
            hide_tasks: true,
            hide_tasks_text: "Показать все",
        }
    },
    computed: {
        current_diagnostics () {
            let idx = 0;
            for (let i = 0; i < this.tasks.length; i++)
            {
                if (!this.tasks[i].done) {
                    idx = i - 1;
                    break;
                }
            }
            
            return idx;
        }
    },
    methods: {
        playVideo () {
            this.video_play = true;
            let video = $('.video video')[0];
            video.play();
        },
        checkDone (data) {
            if (data.done && data.done === '100%') {
                return true;
            } 
            return false;
        },
        showTasks () {
            this.hide_tasks = !this.hide_tasks;
            if (this.hide_tasks_text == 'Показать все') {
                this.hide_tasks_text = 'Скрыть'
            } else {
                this.hide_tasks_text = 'Показать все'
            }
        }
    }
}
</script>

<style lang="scss">
.lesson_content {
    padding: 20px;

    .page_name {
        display: none;
    }
}

.lessons_row {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 20px;

    .left {
        width: 785px;

        
        .video {
            width: 100%;
            border-radius: 16px;
            background: #F6F6F6;
            overflow: hidden;
            position: relative;
            margin-bottom: 32px;

            .play {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1;

                svg {
                    cursor: pointer;
                }

                svg.dark {
                    display: none;
                }
            }

            video {
                width: 100%;
                opacity: 0;
            }
        }

        .video.active {
            .play {
                display: none;
            }

            video {
                opacity: 1;
            }
        }

        .description {
            margin: 16px 0 32px;
        }

        .download_materials {
            border-radius: 16px;
            background: #F6F6F6;
            padding: 16px;
            max-width: 555px;
            margin-bottom: 32px;

            .main_title_2 {
                margin-bottom: 16px;
            }
        }

        .materials {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .items {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                border-radius: 8px;
                background: #FFF;
                padding: 12px;
                text-decoration: none;
            }

            .text {
                display: flex;
                align-items: center;
                gap: 4px;

                .title {
                    overflow: hidden;
                    color: #121111;
                    text-overflow: ellipsis;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 18px;
                }
            }
        }

        .home_work {
            border-radius: 16px;
            background: #F6F6F6;
            padding: 16px;
            max-width: 555px;
            margin-bottom: 32px;
            position: relative;
            overflow: hidden;

            .subtitle {
                color: #BDBDBD;
                font-size: 16px;
                font-weight: 500;
                line-height: 22px;
                margin: 8px 0 24px;
            }

            .main_button {
                height: 48px;
            }

            .icon {
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
            }
        }

        .buttons {
            display: flex;
            align-items: center;
            max-width: 555px;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 36px;

            .main_button {
                height: 48px;
                width: calc(50% - 6px);
            }
        }
    }

    .right {
        width: 555px;
        
        .main_button {
            margin: 0 auto;
            
            svg.active {
                transform: rotateZ(180deg);
            }
        }
    }

    .tasks_wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-bottom: 16px;
        border-bottom: 1px solid #F3EFEF;
        margin-bottom: 24px;

        .item {
            border-radius: 12px;
            opacity: 0.4;
            background:  #F6F6F6;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            order: 2;

            .correct {
                display: none;
            }

            .task_title {
                color: #121111;
                font-size: 14px;
                font-weight: 500;
                line-height: 18px;
            }
        }

        .item.active {
            opacity: 1;
            order: 1;

            .chevron {
                display: none;
            }
        }

        .item.done {
            opacity: 1;
            order: 3;

            .chevron {
                display: none;
            }

            .correct {
                display: block;
            }

            .task_title {
                color: #A6A5A5;
            }
        }
    }

    .tasks_wrapper.hide {
        height: 400px;
        overflow: hidden;
        position: relative;
        border-bottom: 0;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 200px;
            width: 100%;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 77.24%, #FFF 100%);
        }
    }
}

.dark-theme {
    .lessons_row {
        .left {
            .video {
                background: #222222;

                .play {
                    svg.dark {
                        display: block;
                    }

                    svg.light {
                        display: none;
                    }
                }
            }

            .description {
                color: #FFF;
            }

            .download_materials {
                background: #222222;
            }

            .materials {
                .items {
                    background: #3B3B3B;
                }

                .text {
                    .title {
                        color: #fff;
                    }
                }
            }

            .home_work {
                background: #222222;

                .subtitle {
                    color: #A6A5A5;
                }
            }
        }

        .tasks_wrapper {
            border-bottom: 0px;

            .item {
                background:  #222222;

                .task_title {
                    color: #A6A5A5;
                }
                .chevron {
                    path {
                        stroke: #fff;
                    }
                }
            }


            .item.done {
                .task_title {
                    color: #A6A5A5;
                }
            }
        }

        .right {
            .main_button {
                svg {
                    path {
                        stroke: #fff;
                    }
                }
            }
        }

        .tasks_wrapper.hide {

            &::after {
                background: linear-gradient(180deg, rgba(23, 23, 23, 0.00) 77.24%, #171717 100%);
            }
        }
    }
}

@media only screen and (max-width: 992px) {
    .lesson_wrap {
        position: relative;
        z-index: 4;
        background: #fff;
        margin: 0;
        padding: 0;
    }

    .lesson_content {
        padding: 0;

        .edit_link {
            width: 24px;
            height: 24px;
            display: flex;
            padding: 0;
            align-items: center;
            justify-content: center;
            border-radius: 0;
            margin-top: 56px;
            border: 0px !important;

            svg {
                width: 24px;
                height: auto;
            }

            span {
                display: none;
            }
        }

        .page_name {
            position: absolute;
            display: block;
            color: #121111;
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;
            left: 50%;
            top: 2px;
            transform: translateX(-50%);
        }
    }

    .dark-theme {
        .lesson_wrap {
            background: #171717;
        }

        .lesson_content {
            .page_name {
                color: #fff;
            }
        }
    }


    .lessons_row {
        .left {
            width: 100%;

            .video {
                margin-bottom: 16px;

                video {
                    width: 100%;
                    height: 200px;
                    opacity: 0;
                }
            }

            .description {
                margin: 8px 0 24px;
            }

            .download_materials {
                margin-bottom: 24px;
            }

            .materials {
                .text {
                    .title {
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }

                svg {
                    display: none;
                }
            }

            .home_work {
                margin-bottom: 16px;

                .subtitle {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 18px;
                    margin: 8px 0 16px;
                }

                .link-red {
                    height: 36px;
                    width: 80px;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 18px; 
                }

                .icon {
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 100%;
                }
            }

            .buttons {
                flex-direction: column-reverse;
                margin-bottom: 40px;

                .main_button {
                    height: 48px;
                    width: 100%;
                }
            }
        }

        .right {
            display: none;
        }
    }
}
</style>