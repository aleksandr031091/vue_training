<template>
  <div><ContactInfo :info="contact" /></div>
</template>

<script>
import ContactInfo from "../../components/contact_info/ContactInfo.vue";
import { mapGetters } from "vuex";

export default {
  name: "ContactPage",

  components: { ContactInfo },

  computed: {
    ...mapGetters(["getAllContacts"]),

    contact() {
      return this.getAllContacts.find(
        (contact) => contact.id === this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
