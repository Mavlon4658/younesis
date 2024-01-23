<template>
    <div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="`--value: ${value}`"></div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0,
        }
    }
}
</script>

<style lang="scss">
@keyframes growProgressBar {
    0%, 33% { --pgPercentage: 0; }
    100% { --pgPercentage: var(--value); }
}

@property --pgPercentage {
    syntax: '<number>';
    inherits: false;
    initial-value: 0;
}

div[role="progressbar"] {
    --pgPercentage: var(--value);
    animation: growProgressBar 3s 1 forwards;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: 
        radial-gradient(closest-side, #222 78%, transparent 0 99.9%, #222 0),
        conic-gradient(#CF2E2E calc(var(--pgPercentage) * 1%), #4B4B4B 0)
        ;
}
</style>