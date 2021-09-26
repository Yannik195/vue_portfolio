<template>
  <div id="app">
    <header>
      <AboutMe></AboutMe>
    </header>
    <main>test</main>
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";

export default {
  name: "App",
  data: () => {
    return {
      mobileView: false,
      showNav: false,
    };
  },
  components: {
    AboutMe,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}
header {
  height: 100vh;
}
h1,
h2,
h3,
h4 {
  font-weight: 700;
  color: #353a5a;
  margin: 0;
}
</style>
