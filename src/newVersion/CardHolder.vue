<template>
    <div class="card_holder">
        <head-new to="Tinder" page_title="Визитница"></head-new>

        <div class="main_container">
            <div class="holder_filter">
                <button @click="current_filter = 0" :class="{'active': current_filter == 0}">Все</button>
                <button
                    v-for="i in [5, 4, 3]"
                    :key="i"
                    :class="{'active': current_filter == i}"
                    @click="current_filter = i"
                > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {{ i }}
                </button>
            </div>

            <Holder />
        </div>
    </div>
</template>

<script>
import HeadNew from '@/components/newVersionComponents/HeadNew.vue';
import Holder from '@/components/newVersionComponents/Holder.vue'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "CardHolder",
    components: {
        HeadNew,
        Holder
    },
    data () {
        return {
            current_filter: 0
        }
    }
}
</script>

<style lang="scss">
.card_holder {
    .holder_filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin: 24px 0;
        
        button {
            width: calc(25% - 6px);
            border-radius: 20px;
            background: #494949;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            color: #FFF;
            font-variant-numeric: lining-nums proportional-nums;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
        }

        button.active {
            background: #CF2E2E;
        }
    }
}
</style>