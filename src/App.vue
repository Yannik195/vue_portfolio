<template>
  <div id="app">
    <header>
      <AboutMe></AboutMe>
    </header>
    <main>
      <Projects></Projects>
      <Skills></Skills>
    </main>
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
export default {
  name: "App",
  data: () => {
    return {};
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

:root {
  --blue-one: rgba(53, 58, 90, 1);
  --blue-two: rgba(53, 58, 90, 0.8);
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  box-sizing: border-box;
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

h1 {
  font-size: 38px;
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 18px;
}
</style>
