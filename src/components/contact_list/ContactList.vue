<template>
  <ul class="contacts_list">
    <ContactItem
      v-for="{ id, name, phone, number, imgSrc } of items"
      :key="id"
      :id="id"
      :name="name"
      :phone="phone"
      :number="number"
      :imgSrc="imgSrc"
    />
  </ul>
</template>

<script>
import ContactItem from "../contact_item/ContactItem.vue";
export default {
  name: "ContactsList",

  props: {
    items: Array,
    default: () => [],
  },

  components: { ContactItem },
};
</script>

<style lang="scss" scoped>
.contacts_list {
  display: flex;
  flex-wrap: wrap;
  margin-top: -30px;
  margin-left: -30px;
}
</style>
