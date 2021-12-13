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
            min="3"
          />
          <CustomInput
            label="email"
            class="form_item"
            type="email"
            v-model.trim="email"
          />

          <CustomSelect
            class="form_item"
            :items="[
              { value: '123', label: '', selected: true },
              'super',
              'super super',
              'super very good',
            ]"
            v-model="selectValue"
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
import CustomSelect from "../../components/shared/custom_select/CustomSelect.vue";
import { mapMutations } from "vuex";

import avatar from "../../assets/images/dafaultAvatar.png";
import { nanoid } from "nanoid";

export default {
  name: "HomePage",

  components: { Button, Modal, CustomInput, CustomSelect },

  data() {
    return {
      isOpenAside: false,
      name: "",
      phone: "",
      email: "",
      image: avatar,
      selectValue: "",
    };
  },

  methods: {
    ...mapMutations(["setContact"]),

    onHqndleClickAdd() {
      this.isOpenAside = !this.isOpenAside;
    },

    onSubmitForm() {
      const contact = {
        id: nanoid(),
        name: this.name,
        phone: +this.phone,
        email: this.email,
        imgSrc: this.image,
        status: this.selectValue,
        reviews: [
          {
            id: nanoid(),
            name: "sasha",
            description:
              "qweqweqwe qweqweqweqweqweqw eqweqweqweqweqweqweqweqweqwe qweqweqweqweqweqweqwe qweqweqweqweqweqwe",
            total: 3,
          },
          {
            id: nanoid(),
            name: "sasha-sasha",
            description: "qweqweq weqweqweqweqweqweq weqweqweqwe",
            total: 5,
          },
          {
            id: nanoid(),
            name: "sasha-sashasasha",
            description:
              "qweqweqweqweqweqw eqweqweqweqweqweqweqw eqweqweqweqweqwe",
            total: 1,
          },
          {
            id: nanoid(),
            name: "sasha-sashasasha",
            description: "qweeqweqw eqweqwqweqweqweqw eqweqweqweqweqwe",
            total: 2.5,
          },
          {
            id: nanoid(),
            name: "sasha-sashasasha",
            description: "qweqweqweqweqweqw eqweqweeqw eqweeqwe",
            total: 2,
          },
        ],
      };

      this.setContact(contact);
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
