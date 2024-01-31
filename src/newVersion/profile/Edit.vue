<template>
  <div class="edit_new_profile">
    <head-new to="Tinder" page_title="Визитница"></head-new>

    <div class="main_container">
      <!-- About me start -->
      <div class="aboutme_wrap bc_color">
        <div class="title">Обо мне</div>
        <router-link to="/" class="Personal_data data_full_link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.6663 16.6667V16.0417C16.6663 14.0857 15.0807 12.5 13.1247 12.5H6.87467C4.91867 12.5 3.33301 14.0857 3.33301 16.0417V16.6667"
              stroke="#D3D2D2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <ellipse
              cx="10.0003"
              cy="5.83333"
              rx="3.33333"
              ry="3.33333"
              stroke="#D3D2D2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Личные данные</span>
          <img class="edit_right" src="@/assets/images/edit_right.svg" alt="" />
        </router-link>
        <router-link
          to="/"
          class="contact_data data_full_link carera_full_class"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.04646 10.9533C8.07146 9.97831 7.33646 8.88664 6.84813 7.77914C6.7448 7.54497 6.80563 7.27081 6.98646 7.08997L7.66896 6.40831C8.22813 5.84914 8.22813 5.05831 7.7398 4.56997L6.76146 3.59164C6.11063 2.94081 5.05563 2.94081 4.4048 3.59164L3.86146 4.13497C3.24396 4.75247 2.98646 5.64331 3.15313 6.52664C3.5648 8.70414 4.8298 11.0883 6.87063 13.1291C8.91146 15.17 11.2956 16.435 13.4731 16.8466C14.3565 17.0133 15.2473 16.7558 15.8648 16.1383L16.4073 15.5958C17.0581 14.945 17.0581 13.89 16.4073 13.2391L15.4298 12.2616C14.9415 11.7733 14.1498 11.7733 13.6623 12.2616L12.9098 13.015C12.729 13.1958 12.4548 13.2566 12.2206 13.1533C11.1131 12.6641 10.0215 11.9283 9.04646 10.9533Z"
                stroke="#D3D2D2"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
          <span class="data_span">Контакты</span>
          <div class="money">
            <img src="@/assets/images/edit_add.svg" alt="" />
            <span>100</span>
            <img src="@/assets/images/edit_money.svg" alt="" />
          </div>
          <img class="edit_right" src="@/assets/images/edit_right.svg" alt="" />
        </router-link>
      </div>
      <!-- About me end -->

      <!-- career start -->
      <div class="career_wrap bc_color">
        <div class="title">Карьера</div>

        <router-link to="/" class="data_full_link carera_full_class" v-for="item of array" :key="item" >
        <img :src="item.image" alt="" />
          <span class="data_span">{{item.title}}</span>
          <div class="money" :class="item.price != null ? '':'d_none'"> 
            <img :src="item.plass" alt="" />
            <span >{{item.price}}</span>
            <img :src="item.icon" alt="" />
          </div>
          
          <img class="edit_right" src="@/assets/images/edit_right.svg" alt="" />
        </router-link>

      </div>
      <!-- career end -->

      <!-- exit and delete start-->
      <div class="delete_wrap bc_color">
        <button class="edit_exit data_full_link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.16667 15.8317V6.25249C9.16667 5.67749 8.87083 5.14332 8.38333 4.83915L5.05 2.75582C3.94 2.06248 2.5 2.85998 2.5 4.16915V13.7475C2.5 14.3225 2.79583 14.8567 3.28333 15.1608L6.61667 17.2442C7.72667 17.9383 9.16667 17.14 9.16667 15.8317Z"
              stroke="#D3D2D2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 9.16667H12.5"
              stroke="#D3D2D2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.1667 7.5L12.5 9.16667L14.1667 10.8333"
              stroke="#D3D2D2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.16699 15.8334H12.5003C13.4212 15.8334 14.167 15.0875 14.167 14.1667V13.3334"
              stroke="#D3D2D2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.167 5V4.16667C14.167 3.24583 13.4212 2.5 12.5003 2.5H4.16699"
              stroke="#D3D2D2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span> Выйти из аккаунта</span>
        </button>
        <button class="edit_delete data_full_link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15 5V15.625C15 16.6608 14.1442 17.5 13.1092 17.5H6.85917C5.82333 17.5 5 16.6608 5 15.625V5"
              stroke="#FF3F48"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.25 5.00004H3.75"
              stroke="#FF3F48"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 2.91667H12.5"
              stroke="#FF3F48"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.6667 8.33337V14.1667"
              stroke="#FF3F48"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.33366 14.1667V8.33337"
              stroke="#FF3F48"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ><span>Удалить профиль</span>
        </button>
      </div>
      <!-- exit and delete end-->
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";

export default {
  components: {
    HeadNew,
  },
  data(){
    return {
        array: [
            {
                image: "/img/edit_img/edit_1.svg",
                title: "Профессия/деятел",
                plass: "/img/edit_img/edit_add.svg",
                price: "1000",
                icon: "/img/edit_img/edit_money.svg",
            },
            {
                image: "/img/edit_img/edit_2.svg",
                title: "Могу",
                plass: "/img/edit_img/edit_add.svg",
                price: "500",
                icon: "/img/edit_img/edit_money.svg",
            },
            {
                image: "/img/edit_img/edit_3.svg",
                title: "Ищу",
                plass: "/img/edit_img/edit_add.svg",
                price: "1000",
                icon: "/img/edit_img/edit_money.svg",
            },
            {
                image: "/img/edit_img/edit_4.svg",
                title: "Кейсы",
                plass: "/img/edit_img/edit_add.svg",
                price: "5000",
                icon: "/img/edit_img/edit_money.svg",
            },
            {
                image: "/img/edit_img/edit_5.svg",
                title: "Продукты",
                plass: null,
                price: null,
                icon: null,
            },
            {
                image: "/img/edit_img/edit_6.svg",
                title: "Образование",
                plass: "/img/edit_img/edit_add.svg",
                price: "500",
                icon: "/img/edit_img/edit_money.svg",
            },
        ]
    }
  },
};
</script>

<style lang="scss">
.edit_new_profile {
  // full css
  .d_none{
    display: none !important;
  }
  .bc_color {
    margin-bottom: 16px;
    border-radius: 20px;
    background: #222;
    padding: 16px;
  }
  .data_full_link {
    display: flex;
    height: 48px;
    padding: 12px 8px 12px 12px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid #4d4c4c;
    background: #2f2f2f;
    span {
      color: #fff;
      font-variant-numeric: lining-nums proportional-nums;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
    }
    .edit_right {
      margin: auto 0 auto auto;
    }
  }

  .carera_full_class {
    margin-bottom: 8px;
    .data_span {
      width: 100%;
      height: auto;
    }
    .money {
      display: flex;
      height: 20px;
      padding-left: 8px;
      align-items: center;
      justify-content: end;
      gap: 4px;
      border-radius: 12px;
      background: rgba(228, 154, 43, 0.24);
      margin-right: 0;
      span {
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
      }
      :nth-child(3) {
        display: block;
        margin-top: 4px;
      }
    }
  }

  //aboutme_wrap
  .aboutme_wrap {
    margin-top: 24px;
    .title {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 12px;
    }
    .Personal_data {
      margin-bottom: 8px;
    }
  }

  //   career_wrap
  .career_wrap {
    .title {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 12px;
    }
  }

  //   delete_wrap
  .delete_wrap {
    button {
      border: none;
      width: 100%;
      span {
        text-align: start;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
      }
    }
    .edit_delete {
      margin-top: 8px;
      span {
        color: #ff3f48;
      }
    }
  }
}
</style>