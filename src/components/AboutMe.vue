<template>
  <div class="wrapper">
    <img src="../assets/YannikSimon_compressed.png" alt="" />
    <div class="info">
      <h1>
        Hallo,<br />
        ich bin <span>Yannik</span>!
      </h1>
      <h3>I like Code.</h3>
      <div class="socials">
        <i class="fab fa-github fa-lg"></i>
        <i class="fab fa-linkedin fa-lg"></i>
        <i class="fab fa-instagram fa-lg"></i>
      </div>
    </div>
    <i class="fas fa-arrow-down"></i>
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
  transform: scaleX(-1);
  border-radius: 100%;
  background: #91a6ff;
}

h1 span {
  color: #fe5f55;
}

.wrapper {
  text-align: center;
  margin: 16px;
}

.wrapper > * {
  margin-bottom: 36px;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info > * {
  margin-bottom: 36px;
}

.socials i {
  color: #fff;
}

.socials {
  background: #353a5a;
  border-radius: 5px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 400px;
}

.socials > * {
  margin: 0 px;
}

.fa-arrow-down {
  display: none;
  color: #353a5a;
}

@media only screen and (min-width: 600px) {
  .fa-arrow-down {
    display: block;
  }
}
</style>