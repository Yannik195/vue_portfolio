<template>
  <div class="wrapper">
    <NavBar class="navbar"></NavBar>
    <div class="hero">
      <img src="../assets/YannikSimon_compressed.png" alt="" />
      <div class="content">
        <h1>
          Hallo,<br />
          ich bin <span>Yannik</span>!
        </h1>
        <h2>Ich mag Code.</h2>
        <div class="socials">
          <i class="fab fa-github fa-lg"></i>
          <i class="fab fa-linkedin fa-lg"></i>
          <i class="fab fa-instagram fa-lg"></i>
        </div>
      </div>
    </div>
    <i class="fas fa-arrow-down"></i>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "AboutMe",
  components: { NavBar },
};
</script>

<style scoped>
img {
  max-height: clamp(250px, 25vw, 400px);
  transform: scaleX(-1);
  border-radius: 100%;
  background: #91a6ff;
}

h1 {
  font-size: clamp(24px, 12vw, 64px);
}

h2 {
  font-size: clamp(18px, 8vw, 24px);
  margin: 32px 0 48px 0;
}

h1 span {
  color: #fe5f55;
}

.navbar {
}

.wrapper {
}

.hero {
  height: 88vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

i {
  color: #353a5a;
}

.socials {
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
}

.fa-arrow-down {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 24px;
}

@media only screen and (max-width: 900px) {
  h1 {
    font-size: 42px;
  }

  img {
    width: clamp(150px, 15vw 420px);
  }
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .socials {
    background: #353a5a;
    border-radius: 5px;
    padding: 12px;
    margin: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 400px;
  }

  .socials i {
    color: #fff;
    margin: 0 32px;
  }
}
</style>