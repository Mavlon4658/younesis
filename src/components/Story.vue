<template>
    <div class="story_modal">
        <div class="story_modal_content">
            <div class="story_modal_head_wrapper">
                <div class="story_modal_head">
                    <div 
                        v-for="i in stories.length"
                        :key="i"
                        class="story_modal_head_item"
                        :class="{'active': i === index + 1, 'actived': i < index + 1 }"
                        :style="{width: `calc(100% / ${stories.length} - 40px / ${stories.length})`}"
                    ></div>
                </div>
                <button class="story_modal_close" @click="$emit('update:show', false)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6L18 18" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 6L6 18" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <img :src="story.image" :alt="story.image" class="story_img">
            <div class="story_modal_content_foot">
                <div class="title">{{ story.title }}</div>
                <div v-if="index !== stories.length - 1" class="subtitle">{{ story.text }}</div>
                <router-link v-if="index === stories.length - 1" :to="{name: 'Register'}" class="register_btn">Зарегистрироваться</router-link>
                <router-link v-if="index === stories.length - 1" :to="{name: 'LogIn'}" class="login_btn">Войти</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Story',
    props: {
        idx: Number,
        stories: Array,
        show: Boolean,
    },
    emits: ['update:show'],
    data () {
        return {
            story: this.stories[this.idx-1],
            index: this.idx-1,
        }
    },
    mounted () {
        let clrinterval = setInterval(() => {
            if (this.index < this.stories.length - 1) {
                this.story = this.stories[this.index+1]
                this.index++;
            } else {
                clearInterval(clrinterval);
            }
        }, 3000);
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.story_modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.50);
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
}

.story_modal_content {
    border-radius: 16px;
    width: 400px;
    height: 800px;
    position: relative;
    overflow: hidden;

    .story_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}


.story_modal_head_wrapper {
    position: absolute;
    top: 52px;
    left: 20px;
    width: calc(100% - 40px);
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.story_modal_head {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 8px;
}

.story_modal_head_item {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.32);
    height: 4px;
    position: relative;
}

.story_modal_head_item.actived {
    background: $color-1;
}

@keyframes storyAnimation {
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}

.story_modal_head_item.active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $color-1;
    border-radius: 4px;
    animation: storyAnimation 3s linear 1;
}

.story_modal_close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #F6F6F6;
}

.story_modal_content_foot {
    position: absolute;
    left: 20px;
    width: calc(100% - 40px);
    bottom: 48px;
    
    .title {
        color: $color-1;
        font-size: 28px;
        font-weight: 700;
        line-height: 32px;
        margin-bottom: 16px;
    }
    
    .subtitle {
        color: rgba(255, 255, 255, 0.80);
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        margin-bottom: 16px;
    }
    
    .register_btn {
        width: 100%;
        border-radius: 12px;
        background: $color-1;
        color: $color-2;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 56px;
        text-decoration: none;
        margin-bottom: 8px;
        margin-top: 16px;
    }
    
    .login_btn {
        border-radius: 12px;
        border: 1px solid $color-16;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $color-1;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        text-decoration: none;
    }
}


@media only screen and (max-width: 992px) {
    .story_modal_content {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }

    .story_modal_head_wrapper {
        left: 16px;
        width: calc(100% - 32px);
    }

    .story_modal_head {
        gap: 8px;
    }

    .story_modal_head_item {
        width: calc(100% / 3 - 16px / 3);
    }
}
</style>