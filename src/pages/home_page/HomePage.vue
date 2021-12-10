<template>
  <div>
    <h1>home page</h1>
    <Button class="btn" @click="onHqndleClickAdd">add</Button>
    <transition name="aside">
      <Modal
        v-if="isOpenAside"
        :isOpen="isOpenAside"
        :aasideBarStyled="isOpenAside"
      >
        <form @submit.prevent="onSubmitForm" class="form">
          <CustomInput class="form_item" />
          <CustomInput class="form_item" />
          <CustomInput class="form_item" />

          <Button type="submit">send</Button>
        </form>
      </Modal>
    </transition>
  </div>
</template>

<script>
import Button from "../../components/button/Button.vue";
import Modal from "../../components/modal/Modal.vue";
import CustomInput from "../../components/shared/custom_input/CustomInput.vue";

export default {
  name: "HomePage",

  components: { Button, Modal, CustomInput },

  data() {
    return { isOpenAside: false };
  },

  methods: {
    onHqndleClickAdd() {
      this.isOpenAside = !this.isOpenAside;
    },

    onSubmitForm() {
      this.isOpenAside = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  &_item:not(:last-child) {
    margin-bottom: 20px;
  }
}
.btn {
  margin-top: 20px;
}
.aside-enter-active {
  transition: all 0.3s ease;
}
.aside-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.aside-enter,
.aside-leave-to {
  transform: translateX(-500px);
  opacity: 0;
}
</style>
