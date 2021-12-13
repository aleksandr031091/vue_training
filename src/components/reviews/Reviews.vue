<template>
  <div class="reviews">
    <div class="reviews_item" v-for="review of showReviews" :key="review.id">
      <h3>{{ review.name }}</h3>
      <p>{{ review.description }}</p>

      <StarRaiting :rating="review.total" />
    </div>
    <Button @click="onHandelShowAllReviews">{{ btnText }}</Button>
  </div>
</template>

<script>
import Button from "../../components/button/Button.vue";
import StarRaiting from "../../components/star_raiting/StarRaiting.vue";

export default {
  name: "Reviews",

  props: {
    reviews: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      reviewsLimit: 1,
    };
  },

  components: { Button, StarRaiting },

  computed: {
    showReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },

    btnText() {
      if (this.reviewsLimit !== this.reviews.length) {
        return "Show More";
      }

      return "Close list";
    },
  },

  methods: {
    onHandelShowAllReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 1;

        return;
      }

      this.reviewsLimit += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding: 10px;
  width: 500px;
  border: 1px solid rgb(173, 173, 173);

  &_item {
    margin-bottom: 20px;
    padding: 5px;
    border: 1px solid rgb(173, 173, 173);
  }
}
</style>
