<template>
    <div class="input_wrapper">
        <label>{{ label }}</label>
        <input
            v-if="type !== 'phone'"
            :type="type"
            :value="value"
            :placeholder="placeholder"
            @input="e => $emit('update:value', e.target.value)"
        >
        <input
            v-if="type === 'phone'"
            v-model="maskedValue"
            v-maska="bindedObject"
            :placeholder="placeholder"
            data-maska="+7 (###) ###-##-##"
            @maska="$emit('update:value', '+7' + bindedObject.unmasked)"
            pattern="[0-9]*"
            inputmode="numeric"
        >
    </div>
</template>

<script>
import { vMaska } from "maska";

export default {
    name: "FormInput",
    directives: { maska: vMaska },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: [Number, String],
    },
    emits: ['update:value'],
    data () {
        return {
            maskedValue: this.value,
            bindedObject: {
                masked: "",
                unmasked: "",
                completed: false,
            },
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';

.input_wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
        color: $color-11;
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
    }
    
    input {
        border-radius: 12px;
        border: 1px solid $color-4;
        height: 48px;
        padding: 0px 13px;
        color: $color-2;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
    }
    
    input:focus {
        border: 1px solid $color-5;
    }
}

.dark-theme .input_wrapper input {
    color: $color-1;
    border: 1px solid $color-13;
}

@media only screen and (max-width: 992px) {
    .input_wrapper input {
        height: 56px;
        padding: 0px 16px;
    }
}
</style>