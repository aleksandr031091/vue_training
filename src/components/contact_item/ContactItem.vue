<template>
  <div class="item">
    <img :src="imgSrc" alt="avatar" class="item_image" />
    <div class="item_box">
      <h3 class="item_box_name">{{ name }}</h3>
      <p class="item_box_phone">phone: {{ phone }}</p>
      <p class="item_box_email">email: {{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactItem",

  props: {
    imgSrc: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    phone: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  max-width: 300px;
  max-height: 300px;
  overflow: hidden;

  &_image {
    display: block;
    width: 300px;
    height: 300px;
    background-size: contain;
  }

  &_box {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color: rgba(46, 46, 46, 0.466);
    transform: translate(0, 100%);
    transition: 300ms;
    opacity: 0;

    &_name {
      font-size: 40px;
      color: white;
    }

    &_phone {
      font-size: 20px;
      font-weight: 500;
      color: white;
    }

    &_email {
      @extend .item_box_phone;
    }
  }

  &:hover &_box {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
