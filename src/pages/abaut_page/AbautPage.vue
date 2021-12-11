<template>
  <div>
    <h2>abaut page</h2>
    <ContactsList :items="getAllContacts" />
  </div>
</template>

<script>
import ContactsList from "../../components/contact_list/ContactList.vue";
import { mapGetters } from "vuex";

export default {
  name: "AbautPage",

  components: { ContactsList },

  computed: mapGetters(["getAllContacts"]),
};
</script>

<style lang="scss" scoped></style>
