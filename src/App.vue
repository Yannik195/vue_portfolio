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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}

h1,
h2,
h3,
h4 {
  font-weight: 700;
  color: #353a5a;
}
</style>
