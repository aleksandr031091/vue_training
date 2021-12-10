<template>
  <div>
    <Button @click="onOpenModal">open map</Button>
    <Modal :isOpen="isOpenModal">
      <template #button>
        <Button :btnMapstyled="isOpenModal" @click="onOpenModal">
          <svg width="30px" height="30px">
            <use href="../../assets/images/sprite.svg#icon-close"></use>
          </svg> </Button
      ></template>
    </Modal>
  </div>
</template>

<script>
import Button from "../../components/button/Button.vue";
import Modal from "../../components/modal/Modal.vue";

export default {
  name: "MapPage",

  components: { Button, Modal },

  data() {
    return {
      isOpenModal: false,
    };
  },

  methods: {
    onOpenModal() {
      this.isOpenModal = !this.isOpenModal;
    },
  },
};
</script>

<style lang="scss" scoped></style>
