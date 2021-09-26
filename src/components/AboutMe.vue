<template>
  <div>
    <img src="../assets/YannikSimon_compressed.png" alt="" />
    <div>
      <h1>Hallo, ich bin <span>Yannik</span>!</h1>
      <h2>Ich mag Code.</h2>
      <div class="socials">
        <font-awesome-icon icon="github" />
        <font-awesome-icon :icon="['fas', 'user-secret']" />
        <font-awesome-icon icon="user-secret" />
        <i class="fab fa-github"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
img {
  max-height: 400px;
}
</style>