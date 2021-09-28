<template>
  <div class="wrapper">
    <NavBar class="navbar"></NavBar>
    <img src="../assets/YannikSimon_compressed.png" alt="" />
    <div class="content">
      <h1>
        Hallo,<br />
        ich bin <span>Yannik</span>!
      </h1>
      <h2>Ich mag Code.</h2>
      <div class="socials">
        <i class="fab fa-github"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
    <i class="fas fa-arrow-down fa-sm"></i>
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
  grid-area: img;
  place-self: center;
}

h1 {
  font-size: clamp(24px, 12vw, 64px);
}

h2 {
  font-size: clamp(18px, 8vw, 24px);
}

h1 span {
  color: #fe5f55;
}

.wrapper {
  display: grid;
  grid-template-areas:
    "nav nav nav"
    "img . content"
    ". arrow .";
  grid-template-rows: 70px 1fr 70px;
  grid-template-columns: 1fr 50px 1fr;
  height: 100vh;
}

.navbar {
  grid-area: nav;
}

.content {
  grid-area: content;
  place-self: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

i {
  color: #353a5a;
  font-size: 2rem;
}

.socials {
  display: flex;
  justify-content: space-between;
}

.fa-arrow-down {
  grid-area: arrow;
  place-self: center;
}

@media only screen and (max-width: 900px) {
  h1 {
    font-size: 38px;
  }

  .wrapper {
    grid-template-areas:
      "nav"
      "img"
      "content"
      "arrow";
    grid-template-rows: 48px 1fr 1fr 48px;
    grid-template-columns: 1fr;
  }

  img {
    max-height: clamp(200px, 25vw, 400px);
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

  .socials i {
    color: #fff;
    margin: 0 24px;
  }

  .fa-arrow-down {
  }

  i {
    font-size: 1rem;
  }
}
</style>