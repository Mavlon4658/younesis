<template>
    <div class="evalution">
        <button class="close_btn">
            <img src="@/assets/images/evalution_close.svg" alt="">
        </button>
        <div class="grades">
            <button 
                v-for="i in [3, 4, 5]" 
                :key="i" 
                @click="grade = i"
                :class="{
                            'active': grade == i,
                            'opacity': grade && i != grade
                        }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.462 41.6653C14.4478 42.1947 13.221 42.1015 12.2984 41.425C11.3759 40.7485 10.9182 39.6064 11.1182 38.48L12.7369 29.2021L5.92202 22.6714C5.08902 21.877 4.78374 20.6762 5.13621 19.5804C5.48868 18.4847 6.43679 17.687 7.57671 17.5273L17.0386 16.1747L21.3104 7.65315C21.8169 6.63117 22.8589 5.98462 23.9995 5.98462C25.1402 5.98462 26.1822 6.63117 26.6887 7.65315L30.9604 16.1747L40.4224 17.5273C41.5623 17.687 42.5104 18.4847 42.8629 19.5804C43.2154 20.6762 42.9101 21.877 42.0771 22.6714L35.2622 29.2021L36.8809 38.482C37.0809 39.6084 36.6232 40.7505 35.7007 41.427C34.7781 42.1035 33.5512 42.1967 32.5371 41.6673L23.9995 37.2555L15.462 41.6653Z" stroke="#2FC12C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ i }}</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Evalution",
    data () {
        return {
            grade: null
        }
    }
}
</script>

<style lang="scss">
.evalution {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 16px;

    .close_btn {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: radial-gradient(52.73% 52.73% at 50% 50%, #815954 0%, #635555 100%);
    }

    .grades {
        border-radius: 48px;
        background: linear-gradient(90deg, #324132 0.04%, #345433 99.96%);
        width: calc(100% - 96px);
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;

        button {
            position: relative;

            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #2FC12C;
                font-variant-numeric: lining-nums proportional-nums;
                font-size: 14px;
                font-weight: 700;
                line-height: 22px;
            }

            &:nth-child(1) {

            }
        }

        button.active {
            svg {
                path {
                    fill: #2FC12C;
                }
            }

            span {
                color: #fff;
            }
        }

        button.opacity {
            opacity: 0.5;
        }
    }
}
</style>