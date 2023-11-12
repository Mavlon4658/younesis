<template>
    <div class="input_wrapper">
        <label>{{ label }}</label>
        <input v-if="type !== 'phone'" :type="type" :value="value" @input="e => $emit('update:value', e.target.value)">
        <input
            v-if="type === 'phone'"
            v-model="maskedValue"
            v-maska="bindedObject"
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

<style>
.input_wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.input_wrapper label {
    color: #A6A5A5;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
}

.input_wrapper input {
    border-radius: 12px;
    border: 1px solid #D3D2D2;
    height: 48px;
    padding: 0px 13px;
    color: #121111;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
}
</style>