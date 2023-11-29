<template>
    <div class="courses courses_card_wrapper">
        <div v-for="(item, i) in cards" :key="i" @click="openCourse(item)" class="card">
            <div class="card_left">
                <img :src="require(`@/assets/images/card_${item.img}.png`)" alt="">
            </div>
            <div class="card_right">
                <div class="card_head">
                    <div class="card_img">
                        <img :src="require(`@/assets/images/card_${item.img}.png`)">
                    </div>
                    <div class="card_title">{{ item.title }}</div>
                </div>
                <div class="card_degree">
                    <div class="degree_head">
                        <div class="dedgree_title">{{ item.degree_title }}</div>
                        <div class="degree_value">{{ item.degree }}</div>
                    </div>
                    <div class="degree_line">
                        <span :style="{width: item.degree}"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <select-course v-if="!cards.length" />
    <course-modal v-if="show_course_modal" v-model:show="show_course_modal" />
</template>

<script>
import SelectCourse from '@/components/SelectCourse.vue';
import CourseModal from '@/components/CourseModal.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Courses",
    components: {
        SelectCourse,
        CourseModal,
    },
    data () {
        return {
            cards: [
                {id: 1, title: 'Путь с 0 до 1 млн $', img: '1_1', degree_title: "7 из 10 уроков пройдено", degree: '70%'},
                {id: 2, title: 'Сценарий продающего вебинара', img: '1_2', degree_title: "3 из 15 уроков пройдено", degree: '20%'},
                {id: 3, title: 'Продающие диагностики', img: '1_3', degree_title: "0 из 15 уроков пройдено", degree: '20%'},
            ],
            show_course_modal: false,
        }
    },
    computed: {
        ...mapGetters(['getCourses']),
    },
    methods: {
        openCourse (card) {
            this.show_course_modal = true;
        },
        ...mapActions(['fetchCourses']),
    },
    mounted () {
        this.fetchCourses()
    }
}
</script>

<style>
.courses .card {
    cursor: pointer;
}
</style>