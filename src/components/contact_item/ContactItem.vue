<template>
  <li class="item">
    <router-link :to="{ name: 'contact', params: { id } }">
      <img :src="imgSrc" alt="avatar" class="item_image" />
      <div class="item_box">
        <h3 class="item_box_name">{{ name }}</h3>
        <p class="item_box_phone">phone: {{ phone }}</p>
        <p class="item_box_email">email: {{ email }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "ContactItem",

  props: {
    id: {
      type: String,
      required: true,
    },
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
      required: true,
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
  margin-top: 30px;
  margin-left: 30px;
  max-height: 300px;
  width: calc((100% / 5) - 30px);
  overflow: hidden;
  border: 1px solid black;

  &_image {
    display: block;
    width: 100%;
    height: 100%;
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
