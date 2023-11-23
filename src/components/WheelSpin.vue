<template>
    <div class="wheel_spin_wrapper">
        <div class="wheel-wrapper">
            <div
                class="wheel-pointer"
            >
                <button @click="onClickRotate" class="rotate-btn"></button>
                <img src="@/assets/images/spin_loop_wrapper.png" alt="">
            </div>
            <div
                class="wheel-bg"
                :class="{freeze: freeze}"
                :style="`transform: rotate(${wheelDeg}deg)`"
            >
                <img src="@/assets/images/spin_loop.png" alt="" class="wheel-bg-img">
                <div class="prize-list">
                    <div
                        class="prize-item-wrapper"
                        v-for="(item,index) in prizeList"
                        :key="index"
                    >
                        <div
                            class="prize-item"
                            :style="`transform: rotate(${(360/ prizeList.length) * index}deg)`"
                        >
                            <div class="prize-name">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WheelSpin",
    props: {
        value: Object
    },
    emits: ['update:value'],
    data () {
        return {
            freeze: false,
            rolling: false,
            wheelDeg: 0,
            prizeNumber: 8,
            prizeListOrigin: [
                {
                    name: "Мастер-класс",
                    description: "Распаковка жизненного метода"
                },
                {
                    name: "Урок",
                    description: "Денежные убеждения"
                },
                {
                    name: "Мастер-класс",
                    description: "Эффективный тренинг"
                },
                {
                    name: "Мастер-класс",
                    description: "Путь с 0 до 1 млн $"
                },
                {
                    name: "Урок",
                    description: "Как провести свой первый вебинар?"
                },
                {
                    name: "Мастер-класс",
                    description: "Личный ассистент"
                },
                {
                    name: "Курс",
                    description: "Сценарий продающего вебинара"
                },
                {
                    name: "Урок",
                    description: "Продающие диагностики"
                }
            ]
        }
    },
    computed: {
        prizeList() {
            return this.prizeListOrigin.slice(0, this.prizeNumber);
        }
    },
    methods: {
        onClickRotate() {
            if (this.rolling) {
                return;
            }
            const result = Math.floor(Math.random() * this.prizeList.length);
            this.roll(result);
        },
        roll(result) {
            this.rolling = true;
            const { wheelDeg, prizeList } = this;
            this.wheelDeg =
                wheelDeg -
                wheelDeg % 360 +
                6 * 360 +
                (360 - 360 / prizeList.length * result);
            setTimeout(() => {
                this.rolling = false;
                this.$emit('update:value', prizeList[result]);
                alert("Bonuce: " + prizeList[result].name + ' - ' + prizeList[result].description);
            }, 4500);
        }
    },
    watch: {
        prizeNumber() {
        this.freeze = true;
        this.wheelDeg = 0;

        setTimeout(() => {
            this.freeze = false;
        }, 0);
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.wheel-wrapper {
    width: 450px;
    height: 450px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 58%);
    padding: 35px;
}

.wheel-pointer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translate(-1px, -5px);
    }

    .rotate-btn {
        display: none;
    }
}
.wheel-bg {
    width: 100%;
    height: 100%;
    border-radius: 1000px;
    overflow: hidden;
    transition: transform 4s ease-in-out;
    position: relative;

    .wheel-bg-img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }

    &.freeze {
        transition: none;
    }
}

.prize-list {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
}

.prize-item-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
}

.prize-item {
    width: 100%;
    height: 100%;
    transform-origin: bottom;

    .prize-name {
        padding: 16px 0;
    }
}

@media only screen and (max-width: 992px) {
    .wheel-wrapper {
        width: 370px;
        height: 370px;
        padding: 28px;
    }
}
</style>