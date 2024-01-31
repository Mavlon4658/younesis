<template>
    <div class="holder">
        <div class="hoder_in">
            <div
                class="holder_head"
            >
                <img src="@/assets/images/User/user_1.png" alt="" class="">
                <div>
                    <div class="name">Артем Николаев</div>
                    <div class="location">
                        <img src="@/assets/images/location_icon_1.svg" alt="">
                        <span>Санкт-Петербург • 24 года</span>
                    </div>
                </div>
            </div>
            <p>Работаю таргетологом с 2007 года. Менторю, веду телеграм-канал. Бесплатные консультации в любое удобное для вас время время время</p>
            <div class="categories">
                <div class="category_item" v-for="(item, i) in ['Таргетолог', 'Маркетолог', 'SMM']" :key="i">
                    {{ item }}
                </div>
            </div>
            <div class="holder_foot">
                <div class="left_block">
                    <div class="item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.07868 8.31137C1.97402 8.11737 1.97402 7.88204 2.07868 7.68804C3.34002 5.35537 5.67002 3.33337 8.00002 3.33337C10.33 3.33337 12.66 5.35537 13.9213 7.68871C14.026 7.88271 14.026 8.11804 13.9213 8.31204C12.66 10.6447 10.33 12.6667 8.00002 12.6667C5.67002 12.6667 3.34002 10.6447 2.07868 8.31137Z" stroke="#A6A5A5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.41421 6.58579C10.1953 7.36683 10.1953 8.63316 9.41421 9.41421C8.63316 10.1953 7.36683 10.1953 6.58579 9.41421C5.80474 8.63316 5.80474 7.36683 6.58579 6.58579C7.36683 5.80474 8.63316 5.80474 9.41421 6.58579" stroke="#A6A5A5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>1.2K</span>
                    </div>
                    <div class="item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z" stroke="#A6A5A5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>4.5</span>
                    </div>
                </div>
                <div class="right_block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z" fill="#2FC12C" stroke="#2FC12C" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>5</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Holder',
}
</script>

<style lang="scss">
.holder {
    position: relative;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: #222;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        opacity: 0.16;
        filter: blur(50px);
    }

    &_in {
        position: relative;
        z-index: 2;
        padding: 16px;
        border-radius: 8px;
        opacity: 0.16;
        background: lightgray 50% / cover no-repeat, #B61CFF;
        filter: blur(50px);
    }
}
</style>