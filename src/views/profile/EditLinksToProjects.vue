<template>
    <div class="deit_lins_to_projects">
        <mobile-edit-header to="EditProfile">Ссылки на проекты</mobile-edit-header>
        <div class="deit_lins_to_projects">
            <div
                v-for="(item, i) in links"
                :key="i"
                class="item"
            >
                <div class="head">
                    <div class="title">{{ item.id }} проект</div>
                    <button @click="removeLinks(i)">Удалить</button>
                </div>
                <div class="inputs">
                    <form-input v-model:value="links[i].link_name" label="Название"/>
                    <form-input v-model:value="links[i].link" label="Ссылка"/>
                </div>
            </div>
        </div>
        <div v-if="!links.length" class="empty_text">Прикрепляй ссылки на свои проекты <br> и .......</div>
        <main-button @click="addLinks" className="add_button">
            <img src="@/assets/images/plus.svg" alt="">
            <span>Добавить проект</span>
        </main-button>
    </div>
</template>

<script>
export default {
    name: 'EditLinksToProjects',
    data () {
        return {
            links: [
                {id: 1, link_name: 'Теремок', link: 'https://notion.site/teremokdsgn'},
                {id: 2, link_name: 'ЯндексПлюс', link: 'https://yandexplus'},
                {id: 3, link_name: 'Страница корзины reStore', link: 'https://re-store/cart30323331333333333'},
            ]
        }
    },
    methods: {
        addLinks () {
            let id = 1;
            if (this.links.length) {
                id = this.links[this.links.length - 1].id + 1;
            }
            this.links.push({
                id: id,
                link_name: '',
                link: ''
            });
        },
        removeLinks (id) {
            this.links.splice(id, 1);
        }
    }
}
</script>

<style>
.deit_lins_to_projects {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.deit_lins_to_projects .item {
    border-radius: 16px;
    background: #F6F6F6;
    padding: 16px;
}

.dark-theme .deit_lins_to_projects .item {
    background: #222222;
}

.deit_lins_to_projects .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}

.deit_lins_to_projects .head .title {
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}

.dark-theme .deit_lins_to_projects .head .title {
    color: #fff;
}

.deit_lins_to_projects .head button {
    color: #FF3F48;
    text-align: right;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
}

.deit_lins_to_projects .inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.deit_lins_to_projects .empty_text {
    color:#727272;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
}

.dark-theme .deit_lins_to_projects .empty_text {
    color: #D3D2D2;
}

.deit_lins_to_projects .add_button {
    width: 194px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 24px auto 0;
}

@media only screen and (max-width: 992px) {
    .deit_lins_to_projects .empty_text {
        margin-top: 260px;
    }
}
</style>