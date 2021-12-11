<template>
  <div>
    <h1>contact page</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ContactPage",

  mounted() {
    console.log(this.getAllContacts);
  },

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
