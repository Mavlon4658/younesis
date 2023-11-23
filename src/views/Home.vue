<template>
  <div class="home">
    <Nav>
      <div class="main_title">Мои курсы</div>
    </Nav>
    <div class="home_content">
      <div class="home_card_1">
        <img src="@/assets/images/home_card_1.png" alt="">
        <img src="@/assets/images/home_card_mobile_1.png" class="mobile" alt="">
        <div class="title">Привет!</div>
        <div class="subtitle">Это платформа для прохождения курсов. Приветствие в две строки!</div>
      </div>
      <div class="wheel_card">
        <div class="title">Крути колесо <br> и забирай подарок!</div>
        <div class="subtitle">Доступно одно вращение</div>
        <button @click="getBonuce" class="btn">Вращать</button>
        <wheel-spin v-model:value="bonuce"></wheel-spin>
        <!-- <img src="@/assets/images/wheel.png" alt=""> -->
      </div>

      <!-- Stories -->
      <div class="stories">
        <div
          v-for="story in stories"
          :key="story.id"
          @click="storyShow(story.id)"
          class="story"
        >
          <img :src="require(`@/assets/images/story_${story.img}.png`)" alt="">
          <div class="story_title">{{ story.title }}</div>
        </div>
        <Story v-if="story_show" v-model:show="story_show" :idx="story_show_index" :stories="stories" />
      </div>
    </div>
  </div>
</template>

<script>
import Story from '@/components/Story.vue';
import WheelSpin from '@/components/WheelSpin.vue';

export default {
  name: 'Home',
  components: {Story, WheelSpin},
  data () {
    return {
      stories: [
        {
          id: 1,
          img: 1,
          title: 'Добро пожаловать на платформу академии Younesis!',
          subtitle: 'Тут ты можешь проходить курсы, получать подарки в колесе фортуны, находить новых партнеров и кучу всего еще'
        },
        {
          id: 2,
          img: 2,
          title: 'Крути колесо и забирай подарок бесплатно',
          subtitle: 'Тут ты можешь проходить курсы, получать подарки в колесе фортуны, находить новых партнеров и кучу всего еще'
        },
        {
          id: 3,
          img: 1,
          title: 'Регистрируйся и пользуйся всеми возможностями платформы',
          subtitle: 'Тут ты можешь проходить курсы, получать подарки в колесе фортуны, находить новых партнеров и кучу всего еще'
        }
      ],
      story_show: false,
      story_show_index: null,
      bonuce: {}
    }
  },
  methods: {
    storyShow (index) {
      this.story_show_index = index;
      this.story_show = true;
    },
    getBonuce () {
      $('button[class="rotate-btn"]').click()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.home_content {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
}

.home_card_1 {
  border-radius: 16px;
  background: $color-3;
  overflow: hidden;
  position: relative;
  width: 555px;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 35px;
  gap: 8px;
  order: 1;

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  
  img.mobile {
    display: none;
  }
  
  .title {
    position: relative;
    color: $color-1;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }
  
  .subtitle {
    color: $color-1;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    position: relative;
    max-width: 325px;
  }
}

.dark-theme .home_card_1 {
  background: $color-15;
}

.wheel_card {
  overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 33.23%, rgba(255, 255, 255, 0.48) 100%), $color-5;
  width: 441px;
  height: 440px;
  padding: 40px 22px 0 23px;
  position: relative;
  order: 2;
  
  .title {
    color: $color-1;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 8px;

    br {
      display: none;
    }
  }
  
  .subtitle {
    color: $color-1;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 24px;
  }
  
  .btn {
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.56);
    background: linear-gradient(0deg, #FF6D2F 0%, #FFB802 100%);
    color: $color-1;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    width: 186px;
    height: 48px;
    margin: 0 auto;
    display: block;
  }
  
  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

.stories {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  order: 3;
}

.story {
  border-radius: 16px;
  border: 1px solid $color-5;
  padding: 1px;
  position: relative;
  width: 95px;
  height: 128px;
  cursor: pointer;
  
  img {
    position: absolute;
    top: 1px;
    height: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    object-fit: cover;
    border-radius: 14px;
  }
  
  .story_title {
    display: none;
  }
}

@media only screen and (max-width: 1650px) {
  .home_card_1 {
    order: 1;
  }

  .wheel_card {
    order: 3;
  }

  .stories {
    order: 2;
  }
}

@media only screen and (max-width: 1200px) {
  .home_content {
    flex-direction: column;
  }
}

@media only screen and (max-width: 992px) {
  .home_content {
    padding: 0;
    margin-bottom: 94px;
  }

  .home_card_1 {
    border-radius: 0 0 16px 16px;
    width: 100%;
    height: 352px;
    padding-bottom: 33px;
  
    img {
      display: none;
    }
  
    img.mobile {
      display: block;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  
    .title {
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      margin-bottom: 4px;
    }
  
    .subtitle {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }

  .wheel_card {
    width: calc(100% - 32px);
    margin-left: 16px;
    border-radius: 24px;
    padding: 24px 21.5px;
    height: 372px;
  
    .title {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
    
      br {
        display: block;
      }
    }
  
    .subtitle {
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
    }
  }
  
  .stories {
    width: calc(100% - 32px);
    margin-left: 16px;
  }

  .story {
    width: calc(100% / 3 - 16px / 3);
    height: 120px;
  
    .story_title {
      display: block;
      position: absolute;
      left: 8px;
      bottom: 8px;
      width: calc(100% - 16px);
      color: $color-1;
      font-size: 8px;
      font-weight: 700;
      line-height: 10px;
    }
  }
}
</style>