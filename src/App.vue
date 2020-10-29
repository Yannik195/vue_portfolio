<template>
  <div id="app">
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Skills></Skills>
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";

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
    Projects,
    Skills,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Noto Sans", sans-serif;
  color: #011627;
  max-width: 1200px;
  margin: 0 auto;
  /* font-family: "Roboto", sans-serif; */
  /* font-family: "Noto Sans", sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
}

h5 {
  color: rgba(0, 0, 0, 0.9);
}
</style>
