<template>
    <div class="form_select_wrapper" ref="form_select_wrapper" :class="{'active': select_open}">
        <label>{{ label }}</label>
        <button class="select_button" @click="select_open = !select_open">
            <span>{{value}}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M8.25781 10L12.2212 14L16.1846 10" stroke="#121111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="select_options" ref="select_options">
            <button
                v-for="(option, i) in options"
                :key="i"
                @click="selectOption(option)"
                :class="{
                    'border_bottom': i !== options.length - 1,
                    'active': option === value
                }"
            >
                <span>{{ option }}</span>
                <svg v-if="option === value" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormSelect',
    props: {
        label: {
            type: String,
            default: ''
        },
        options: {
            type: Array,
            default: [],
        },
        value: String,
    },
    emits: ['update:value'],
    data () {
        return {
            select_open: false,
        }
    },
    watch: {
        select_open () {
            let select_options = this.$refs.select_options;
            this.select_open ? $(select_options).slideDown(300) : $(select_options).slideUp(300);
        }
    },
    mounted () {
        $(this.$refs.select_options).slideUp(0);
        document.addEventListener('click', this.handleOutsideClick);
    },
    methods: {
        selectOption (option) {
            this.$emit('update:value', option)
            this.select_open = false;
        },
        handleOutsideClick(event) {
            const box = this.$refs.form_select_wrapper;
            if (box && !box.contains(event.target)) {
                this.select_open = false;
            }
        }
    }
}
</script>

<style>
.form_select_wrapper {
    position: relative;
}

.form_select_wrapper label {
    color: #A6A5A5;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway" sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
    margin-bottom: 4px;
    display: block;
}

.form_select_wrapper .select_button {
    width: 100%;
    border-radius: 12px;
    border: 1px solid #D3D2D2;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 12px 12px 13px;
}

.dark-theme .form_select_wrapper .select_button {
    border: 1px solid #4D4C4C;
}

.form_select_wrapper.active .select_button {
    border-radius: 12px 12px 0 0;
    border-bottom: 0px;
}

.form_select_wrapper .select_button span {
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
}

.dark-theme .form_select_wrapper .select_button span {
    color: #fff;
}

.dark-theme .form_select_wrapper .select_button svg path {
    stroke: #fff;
}

.select_options {
    width: 100%;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    border: 1px solid #D3D2D2;
    border-radius: 0 0 16px 16px;
    overflow: hidden;
}

.dark-theme .select_options {
    border: 1px solid #4D4C4C;
}

.select_options button {
    background: white;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 13px;
}

.dark-theme .select_options button {
    background: #222222;
}

.select_options button.active {
    background: #F6F6F6;
}

.dark-theme .select_options button.active {
    background: #3B3B3B;
}

.select_options button:hover {
    background: #F6F6F6;
}

.dark-theme .select_options button:hover {
    background: #3B3B3B;
}

.select_options button span {
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
}

.dark-theme .select_options button span {
    color: #fff;
}

.dark-theme .select_options button svg path {
    fill: #fff;
}

.select_options .border_bottom {
    border-bottom: 1px solid #d6d5d5;
}

.dark-theme .select_options .border_bottom {
    border-bottom: 1px solid #4D4C4C;
}
</style>