<template>
  <div>
    <Form @submit="logger">
      <template #title> <h2>Form</h2></template>
      <CustomInput
        label="name"
        class="form_item"
        type="text"
        v-model.trim="formData.name"
      />

      <CustomInput
        label="email"
        class="form_item"
        type="text"
        v-model.trim="formData.email"
        style="margin-bottom: 30px"
      />
      <template #button><Button :type="formData.buttonType" /></template>
    </Form>

    <Button @click="onOpenModal">open map</Button>

    <CustomFormProvide @submit.prevent="handleSubmit">
      <template #title> <h2>Custom form</h2></template>

      <CustomInput
        label="email"
        type="text"
        v-model.trim="formData.email"
        :rules="emailRules"
      />
      <CustomInput
        label="password"
        type="number"
        v-model.trim="formData.password"
        :rules="passwordRules"
        style="margin-bottom: 30px"
      />

      <template>
        <Button :type="formData.buttonType">send</Button>
      </template>
    </CustomFormProvide>

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
import Form from "../../components/form/Form.vue";
import CustomInput from "../../components/shared/custom_input/CustomInput.vue";
import {
  emailValidate,
  isRequired,
  passwordalidate,
  charMaxLimit,
} from "../../utils/validationRules";

import CustomFormProvide from "../../components/shared/custom_form_provide/CustomForm.vue";

export default {
  name: "MapPage",

  components: { Button, Modal, Form, CustomInput, CustomFormProvide },

  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        buttonType: "submit",
      },

      isOpenModal: false,
    };
  },

  computed: {
    rules() {
      return [emailValidate, isRequired, passwordalidate, charMaxLimit];
    },

    emailRules() {
      return [this.rules.emailValidate, this.rules.isRequired];
    },

    passwordRules() {
      return [this.rules.passwordalidate, this.rules.isRequired];
    },
  },

  methods: {
    onOpenModal() {
      this.isOpenModal = !this.isOpenModal;
    },

    logger(val) {
      console.log(val, "form value");
    },

    handleSubmit() {
      console.log(this.formData);
    },
  },
};
</script>
