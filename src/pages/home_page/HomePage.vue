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
          <CustomInput
            label="name"
            class="form_item"
            type="text"
            v-model.trim="name"
          />
          <CustomInput
            label="phone"
            class="form_item"
            type="number"
            v-model.trim="phone"
          />
          <CustomInput
            label="email"
            class="form_item"
            type="email"
            v-model.trim="email"
          />

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
    return {
      isOpenAside: false,
      name: "",
      phone: "",
      email: "",
    };
  },

  methods: {
    onHqndleClickAdd() {
      this.isOpenAside = !this.isOpenAside;
    },

    onSubmitForm() {
      this.resetData();
      this.onHqndleClickAdd();
    },

    resetData() {
      (this.name = ""), (this.phone = ""), (this.email = "");
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
