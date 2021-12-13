<template>
  <div>
    <div v-if="info">
      <h1>{{ info.name }}</h1>
      <p>{{ info.phone }}</p>
      <p>{{ info.email }}</p>
      <p>{{ info.status }}</p>
      <img :src="info.imgSrc" alt="avatar" width="500px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",

  props: {
    info: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
