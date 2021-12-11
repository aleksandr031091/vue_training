<template>
  <div v-if="contact">
    <h1>{{ contact.name }}</h1>
    <p>{{ contact.phone }}</p>
    <p>{{ contact.email }}</p>
    <img :src="contact.imgSrc" alt="avatar" width="500px" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ContactPage",

  computed: {
    ...mapGetters(["getAllContacts"]),

    contact() {
      return this.getContact(this.getAllContacts, this.$route.params.id);
    },
  },

  methods: {
    getContact(contacts, id) {
      return contacts.find((contact) => contact.id === id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
