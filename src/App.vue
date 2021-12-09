<template>
  <div id="app">
    <Container>
      <template #header><Header /></template>
      <template #main><Main /></template>
      <template #footer><Footer /></template>
    </Container>
  </div>
</template>

<script>
import Container from "./components/container/Container.vue";
import Header from "./components/header/Header.vue";
import Main from "./components/main/Main.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "App",

  components: { Container, Header, Main, Footer },
};
</script>
