<template>
  <div class="new_profile">
    <head-new to="Tinder"></head-new>

    <div class="main_container">
      <div class="profile">
        <!-- user_data_head start-->
        <div class="user_data_head">
          <img
            src="@/assets/images/User/user_1.png"
            class="user_img"
            alt="user"
          />
          <div>
            <div class="user_name">Артем Николаев</div>
            <main-button class="user_btn">
              <img src="@/assets/images/msg_icon.svg" alt="msg_icon" />
              <router-link to="/" >Написать</router-link>
            </main-button>
          </div>
        </div>
        <!-- user_data_head end -->

        <!-- tinder_location start-->
        <div class="tinder_location">
          <div class="location_top">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 8.6665V8.6665C6.89533 8.6665 6 7.77117 6 6.6665V6.6665C6 5.56184 6.89533 4.6665 8 4.6665V4.6665C9.10467 4.6665 10 5.56184 10 6.6665V6.6665C10 7.77117 9.10467 8.6665 8 8.6665Z"
                  stroke="#A6A5A5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.00016 14C8.00016 14 3.3335 10.1667 3.3335 6.66667C3.3335 4.08933 5.42283 2 8.00016 2C10.5775 2 12.6668 4.08933 12.6668 6.66667C12.6668 10.1667 8.00016 14 8.00016 14Z"
                  stroke="#A6A5A5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Санкт-Петербург • 24 года
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.0785 8.3115C1.97383 8.1175 1.97383 7.88216 2.0785 7.68816C3.33983 5.3555 5.66983 3.3335 7.99983 3.3335C10.3298 3.3335 12.6598 5.3555 13.9212 7.68883C14.0258 7.88283 14.0258 8.11816 13.9212 8.31216C12.6598 10.6448 10.3298 12.6668 7.99983 12.6668C5.66983 12.6668 3.33983 10.6448 2.0785 8.3115Z"
                  stroke="#A6A5A5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.41421 6.58579C10.1953 7.36683 10.1953 8.63316 9.41421 9.41421C8.63316 10.1953 7.36683 10.1953 6.58579 9.41421C5.80474 8.63316 5.80474 7.36683 6.58579 6.58579C7.36683 5.80474 8.63316 5.80474 9.41421 6.58579"
                  stroke="#A6A5A5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              1.2K
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.15408 13.8882C4.81603 14.0646 4.40707 14.0336 4.09956 13.8081C3.79204 13.5826 3.63947 13.2019 3.70614 12.8264L4.2457 9.7338L1.97409 7.55689C1.69642 7.2921 1.59466 6.89182 1.71215 6.52657C1.82964 6.16131 2.14568 5.89543 2.52565 5.84218L5.67963 5.39132L7.10356 2.55081C7.27239 2.21015 7.61973 1.99463 7.99993 1.99463C8.38013 1.99463 8.72747 2.21015 8.8963 2.55081L10.3202 5.39132L13.4742 5.84218C13.8542 5.89543 14.1702 6.16131 14.2877 6.52657C14.4052 6.89182 14.3034 7.2921 14.0258 7.55689L11.7542 9.7338L12.2937 12.8271C12.3604 13.2025 12.2078 13.5832 11.9003 13.8087C11.5928 14.0342 11.1838 14.0653 10.8458 13.8889L7.99993 12.4182L5.15408 13.8882Z"
                  stroke="#A6A5A5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              4.5
            </span>
          </div>
          <div class="title">Таргетолог, маркетолог, SMM</div>
        </div>
        <!-- tinder_location end-->

        <!-- profil_information start -->
        <div class="profil_information">
          Работаю таргетологом с 2007 года. Менторю, веду телеграм-канал.
          Бесплатные консультации в любое удобное для вас время время время
        </div>
        <!-- profil_information end -->

        <!-- contact_btn start -->
        <div class="contact_btn">
          <main-button class="phone_btn">
            <img src="@/assets/images/profil_phone.svg" alt="" />
            <span>Показать контакты</span>
          </main-button>
          <main-button class="visa_btn">
            <img src="@/assets/images/profil_visa.svg" alt="" />
            <span>В визитницу</span>
          </main-button>
        </div>
        <!-- contact_btn end -->

        <!-- profil_can start -->
        <div class="profil_can">
          <div class="can_top">
            <img src="@/assets/images/profil_can.svg" alt="" />
            <span>Могу</span>
          </div>
          <div class="profil_can_btn">
            <!-- full button start -->
            <div class="full_profil_button">
              <span>Настроить таргет</span>
              <img src="@/assets/images/profil_indicator_right.svg" alt="" />
            </div>
            <div class="full_profil_button">
              <span>Вести инстаграм</span>
              <img src="@/assets/images/profil_indicator_right.svg" alt="" />
            </div>
            <div class="full_profil_button">
              <span>Проводить интервью</span>
              <img src="@/assets/images/profil_indicator_right.svg" alt="" />
            </div>
            <!-- full button start -->
          </div>
          <div class="profil_btn_more">
            <span>Показать еще</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M8.5 10L12.5 14L16.5 10"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <!-- profil_Can end -->

        <!-- Profil_need start-->
        <div class="profil_need">
          <div class="need_top">
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
                d="M13.3333 17.5H6.66667C4.36583 17.5 2.5 15.6342 2.5 13.3333V6.66667C2.5 4.36583 4.36583 2.5 6.66667 2.5H13.3333C15.6342 2.5 17.5 4.36583 17.5 6.66667V13.3333C17.5 15.6342 15.6342 17.5 13.3333 17.5Z"
                fill="#6F9FFC"
                stroke="#6F9FFC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6667 7.47834C12.8233 8.63501 12.8233 10.51 11.6667 11.6667C10.51 12.8233 8.63501 12.8233 7.47834 11.6667C6.32167 10.51 6.32167 8.63501 7.47834 7.47834C8.63501 6.32167 10.51 6.32167 11.6667 7.47834"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3334 13.3333L11.6667 11.6666L13.3334 13.3333Z"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Мне нужен</span>
          </div>
          <div class="full_profil_button">
            <span>Маркетолог</span>
            <img src="@/assets/images/profil_indicator_right.svg" alt="" />
          </div>
          <div class="full_profil_button">
            <span>Личный ассистент</span>
            <img src="@/assets/images/profil_indicator_right.svg" alt="" />
          </div>
          <div class="full_profil_button">
            <span>Юрист</span>
            <img src="@/assets/images/profil_indicator_right.svg" alt="" />
          </div>
        </div>
        <!-- Profil_need end-->
        <span class="border"></span>
        <!-- cases start -->
        <div class="cases bcg_gray">
          <div class="cases_top">
            <img src="@/assets/images/cases_icon.svg" alt="" />
            <span>Кейсы</span>
          </div>
          <ul>
            <li>⚡️ Финалист губернаторского конкурса «Лидеры Востока»</li>
            <li>Провел 15000 часов в эфире</li>
            <li>
              Получил премию оскар в 2020 году
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.9498 7.0498L7.0498 16.9498"
                  stroke="#CF2E2E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 7L16.95 7.049L17 14"
                  stroke="#CF2E2E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          </ul>
          <button class="profil_btn_more">
            <span>Показать еще</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M8.5 10L12.5 14L16.5 10"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <!-- cases end -->

        <!-- Products start -->
        <div class="products bcg_gray">
          <div class="products_top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99994 13.3333V15.8333"
                stroke="#54C35F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66656 16.6666L8.33323 13.3333"
                stroke="#54C35F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3332 16.6666L11.6666 13.3333"
                stroke="#54C35F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="3.33325"
                y="3.33325"
                width="13.3333"
                height="10"
                rx="2"
                fill="#54C35F"
                stroke="#54C35F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66656 9.99992V8.33325"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.74992 9.9999V6.66656"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.2499 9.99994V7.49994"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3333 9.9999V6.66656"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Продукты</span>
          </div>
          <!-- ntg child 1 -->
          <div class="advice advice_1">
            <img src="@/assets/images/profil_telegram.png" alt="" />
            <span>Бесплатный продукт</span>
            <span>Консультация по настройке рекламы в телеграм</span>
            <span
              >Помогу настроить рекламу в телеграм. В процессе настройки
              пользуюсь сервисами Яндекс.Метрика и аналитикой от гугл.
              Обращайтесь</span
            >
            <button class="products_btn_red">
              <span>Написать</span>
            </button>
          </div>
          <!-- ntg child 2 -->
          <div class="advice advice_2">
            <span>Бесплатный продукт</span>
            <span>Настрою таргет</span>
            <span
              >Бесплатно – 1 час, после истечения времени останавливаем.</span
            >
            <button class="products_btn_red">
              <span>Написать</span>
            </button>
          </div>
          <!-- ntg child 3 -->
          <div class="advice advice_3">
            <span>Бесплатный продукт</span>
            <span>Консультация по фигме</span>
            <span
              >Расскажу про нюансы использования автолейаутов, компонентов и
              переменных.</span
            >
            <button class="products_btn_red">
              <span>Написать</span>
            </button>
          </div>
        </div>
        <!-- Products end -->

        <!-- Education start -->
        <div class="education bcg_gray">
          <div class="education_top">
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
                d="M15.0021 17.5031H4.99793C4.07707 17.5031 3.33057 16.7566 3.33057 15.8358V4.16423C3.33057 3.24337 4.07707 2.49687 4.99793 2.49687H15.0021C15.923 2.49687 16.6695 3.24337 16.6695 4.16423V15.8358C16.6695 16.7566 15.923 17.5031 15.0021 17.5031Z"
                fill="#DC9350"
                stroke="#DC9350"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66528 6.66528H13.3347"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66528 13.3347H8.33264"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.8441 12.9412L12.2226 14.5627L11.2505 13.5898"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66528 10H13.3347"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Образование</span>
          </div>
          <div class="education_card">
            <img src="@/assets/images/profil_education.png" alt="" />
            <div class="education_card_text">
              <ul>
                <li>Высшее</li>
                <li>БГТУ им. В.Г. Шухова - Экономика и управление</li>
              </ul>
            </div>
          </div>
          <div class="education_card">
            <img src="@/assets/images/profil_education.png" alt="" />
            <div class="education_card_text">
              <ul>
                <li>Курс</li>
                <li>Иван Иванов – настройка таргета</li>
              </ul>
            </div>
          </div>
          <div class="education_card">
            <div class="education_card_text">
              <ul>
                <li>Курс</li>
                <li>Современный маркетинг от Ивана Иванова за 12 месяцев</li>
              </ul>
            </div>
          </div>
          <div class="education_card">
            <div class="education_card_text">
              <ul>
                <li>Курс</li>
                <li>Реклама в телеграм от Ивана Иванова</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Education end -->
      </div>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";

export default {
  components: {
    HeadNew,
  },
};
</script>

<style scoped lang="scss">
// full class
.full_profil_button {
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  background: #3b3b3b;
  margin-bottom: 4px;
  span {
    color: #d3d2d2;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
}
.profil_btn_more {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 12px;
  span {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
  }
}
.bcg_gray {
  margin-top: 24px;
  padding: 16px;
  border-radius: 20px;
  background: #222;
}

.new_profile {
  .profile {
    // user_data_head
    .user_data_head {
      margin-top: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      .user_name {
        color: #fff;
        font-variant-numeric: lining-nums proportional-nums;
        // font-family: Raleway;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
      }
      .user_btn {
        margin-top: 12px;
        display: flex;
        height: 36px;
        min-width: 72px;
        padding: 10px 12px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        img {
          display: flex;
          width: 20px;
          height: 20px;
          justify-content: center;
          align-items: center;
        }
        span {
          //   font-family: Raleway;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px;
        }
      }
    }

    // tinder_location
    .tinder_location {
      .location_top {
        margin: 20px auto 12px auto;
        display: flex;
        // width: 328px;
        justify-content: space-between;
        align-items: flex-start;
        span {
          font-size: 14px;
          font-style: normal;
          //   font-family: Raleway;
          font-weight: 500;
          line-height: 18px;
          color: #a6a5a5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          :nth-child(1) {
            margin-right: 4px;
          }
        }
        :nth-child(2) {
          margin-left: 80px;
        }
      }
      .title {
        // font-family: Raleway;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
      }
    }

    // profil_information
    .profil_information {
      // font-family: Raleway;
      margin-bottom: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      color: #d3d2d2;
      margin-bottom: 20px;
    }

    // contact_btn
    .contact_btn {
      .phone_btn,
      .visa_btn {
        width: 100%;
        display: flex;
        height: 44px;
        padding: 10px 12px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        align-self: stretch;
        background: transparent;
        border-radius: 8px;
        border: 1px solid #4d4c4c;
        margin-bottom: 8px;
        span {
          color: #fff;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 18px;
        }
      }
    }

    // profil_can
    .profil_can {
      margin-top: 24px;
      padding: 16px;
      border-radius: 20px;
      background: #222;
      .can_top {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 12px;
        span {
          font-size: 16px;
          font-weight: 700;
          line-height: 20px;
        }
      }
    }

    //profil_need
    .profil_need {
      margin-top: 24px;
      padding: 16px;
      border-radius: 20px;
      background: #222;
      .need_top {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 12px;
      }
    }
    .border {
      width: 100%;
      height: 1px;
      background: #4d4c4c;
      margin: 24px auto;
    }

    //cases
    .cases {
      margin: 0;
      .cases_top {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 12px;
      }
      ul {
        li {
          margin: 8px 0;
          display: flex;
          align-items: center;
          color: #d3d2d2;
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
        }
      }
    }
    // products
    .products {
      .products_top {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 12px;
      }
      .advice {
        margin-bottom: 4px;
        padding: 12px;
        border-radius: 12px;
        background: #2f2f2f;
        span {
          display: block;
        }
      }
      .advice_1 {
        img {
          //   max-width: 272px !important;
          margin: 0 auto 12px auto;
          border-radius: 4px;
          display: block;
        }
        :nth-child(2) {
          color: #a6a5a5;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
        }
        :nth-child(3) {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          line-height: 20px;
          margin: 4px 0;
        }
        :nth-child(4) {
          overflow: hidden;
          color: #d3d2d2;
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
        }
        .products_btn_red {
          background: #cf2e2e;
          border: none;
          padding: 10px 24px;
          border-radius: 4px;
          margin-top: 12px;
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff !important;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
          }
        }
      }
      .advice_2 {
        :nth-child(1) {
          color: #a6a5a5;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
        }
        :nth-child(2) {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          line-height: 20px;
          margin: 4px 0;
        }
        :nth-child(3) {
          overflow: hidden;
          color: #d3d2d2;
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
        }
        .products_btn_red {
          background: #cf2e2e;
          border: none;
          padding: 10px 24px;
          border-radius: 4px;
          margin-top: 12px;
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff !important;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
          }
        }
      }
      .advice_3 {
        :nth-child(1) {
          color: #a6a5a5;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
        }
        :nth-child(2) {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          line-height: 20px;
          margin: 4px 0;
        }
        :nth-child(3) {
          overflow: hidden;
          color: #d3d2d2;
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
        }
        .products_btn_red {
          background: #cf2e2e;
          border: none;
          padding: 10px 24px;
          border-radius: 4px;
          margin-top: 12px;
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff !important;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
          }
        }
      }
    }
    .education {
      .education_top {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 12px;
      }

      .education_card {
        padding: 8px 0;
        display: flex;
        align-items: center;
        gap: 8px;
        border-bottom: 1px solid #303030;
        .education_card_text {
          :nth-child(1) {
            color: #d3d2d2;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
            margin-bottom: 4px;
          }
          :nth-child(2) {
            color: #d3d2d2;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
          }
        }
      }
    }
  }
}

</style>