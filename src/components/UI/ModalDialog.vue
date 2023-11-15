<template>
    <div class="modal_wrapper">
        <div class="modal_content_wrapper">
            <div class="modal_content">
                <slot></slot>
            </div>
            <button class="modal_close">
                <img src="@/assets/images/close.svg" alt="">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalDialog"
}
</script>

<style>
.modal_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.50);
    z-index: 2;
}

.modal_wrapper .modal_content_wrapper {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.modal_wrapper .modal_content {
    background: #fff;
    border-radius: 16px;
    background: #FFF;
    padding: 20px;
}
</style>