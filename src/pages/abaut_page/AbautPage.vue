<template>
  <div>
    <h2>abaut page</h2>
    <ContactItem :name="name" :phone="phone" :email="email" :imgSrc="avatar" />
  </div>
</template>

<script>
import avatar from "../../assets/images/dafaultAvatar.png";
import ContactItem from "../../components/contact_item/ContactItem.vue";
export default {
  name: "AbautPage",

  data() {
    return {
      name: "sasha",
      phone: 12345,
      email: "sahsa@mai.ru",
      avatar: avatar,
    };
  },
  components: { ContactItem },
};
</script>

<style lang="scss" scoped></style>
