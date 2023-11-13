<template>
    <div class="edit_niches_wrapper">
        <mobile-edit-header to="EditProfile">Роли</mobile-edit-header>
        <div class="title">3 ниши, в которых у тебя есть опыт</div>
        <div class="role" v-for="(item, i) in niches" :key="i">
            <form-input v-model:value="niches[i]" placeholder="Роль"/>
            <svg @click="niches[i] = ''" v-if="item.length" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.8299 9.16998L9.16992 14.83" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.8299 14.83L9.16992 9.16998" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditNiches',
    data () {
        return {
            niches: ['Копирайтинг', 'Дизайн', 'Маркетинг в FoodTech']
        }
    }
}
</script>

<style>
.edit_niches_wrapper .title {
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 16px;
}

.dark-theme .edit_niches_wrapper .title {
    color: #fff;
}

.edit_niches_wrapper .role {
    position: relative;
    margin-bottom: 8px;
}

.edit_niches_wrapper .role input {
    padding: 0px 44px 0 12px;
}

.edit_niches_wrapper .role label {
    display: none;
}

.edit_niches_wrapper .role svg {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    cursor: pointer;
}

.dark-theme .edit_niches_wrapper .role svg path {
    stroke: #4D4D4D;
}

@media only screen and (max-width: 992px) {
    .edit_niches_wrapper .role {
        margin-bottom: 4px;
    }

    .edit_niches_wrapper .title {
        margin-bottom: 24px;
        margin-top: 8px;
    }

    .dark-theme .edit_niches_wrapper .title {
        color: #D3D2D2;
    }
}
</style>