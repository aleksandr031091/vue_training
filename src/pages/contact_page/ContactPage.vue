<template>
  <div class="contact_page">
    <ContactInfo :info="contact" />
    <Reviews v-if="contact" :reviews="contact.reviews" />
  </div>
</template>

<script>
import ContactInfo from "../../components/contact_info/ContactInfo.vue";
import Reviews from "../../components/reviews/Reviews.vue";
import { mapGetters } from "vuex";

export default {
  name: "ContactPage",

  components: { ContactInfo, Reviews },

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

<style lang="scss" scoped>
.contact_page {
  display: flex;
}
</style>
