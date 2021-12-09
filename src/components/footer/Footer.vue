<template>
  <div class="footer">
    <Button class="btn" @click="onClickExample">example show</Button>
    <transition name="footer_title_example">
      <h2 v-show="show">footer</h2>
    </transition>
  </div>
</template>

<script>
import Button from "../button/Button.vue";

export default {
  name: "Footer",

  data() {
    return { show: false };
  },

  components: { Button },

  methods: {
    onClickExample() {
      console.log(this.show);
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  padding: 0 50px;
  height: 100px;
  border-top: 1px solid tomato;
}
.btn {
  margin-right: 10px;
}
/* Анимации появления и исчезновения могут иметь */
/* различные продолжительности и динамику.       */
.footer_title_example-enter-active {
  transition: all 0.3s ease;
}
.footer_title_example-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.footer_title_example-enter, .footer_title_example-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
