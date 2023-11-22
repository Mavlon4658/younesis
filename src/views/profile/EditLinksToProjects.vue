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

<style lang="scss">
@import '@/assets/_variables.scss';

.deit_lins_to_projects {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .item {
        border-radius: 16px;
        background: $color-7;
        padding: 16px;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
    
        .title {
            color: $color-2;
            font-size: 18px;
            font-weight: 700;
            line-height: 24px;
        }

        button {
            color: $color-21;
            text-align: right;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
        }
    }
    
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    
    .empty_text {
        color: $color-19;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
    }
    
    .add_button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        margin: 24px auto 0;
    }
}


.dark-theme {
    .deit_lins_to_projects {
        .item {
            background: $color-15;
        }
    
        .head .title {
            color: $color-1;
        }

        .empty_text {
            color: $color-4;
        }
    }
}

@media only screen and (max-width: 992px) {
    .deit_lins_to_projects .empty_text {
        margin-top: 260px;
    }
}
</style>