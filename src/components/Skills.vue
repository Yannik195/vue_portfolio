<template>
  <div class="skills">
    <h1>I feel comfortable working with</h1>
    <div class="wrapper">
      <img
        v-for="skill in skills"
        :key="skill.name"
        alt=""
        :src="skill.svg"
        v-bind:class="{
          wide: skill.wide,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data: function () {
    return {
      skills: [
        {
          name: "Vue.js",
          svg: "https://cdn.svgporn.com/logos/vue.svg",
          wide: false,
        },
        {
          name: "JavaScript",
          svg: "https://cdn.svgporn.com/logos/javascript.svg",
          wide: false,
        },
        {
          name: "Git",
          svg: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
          wide: true,
        },
        {
          name: "Photoshop",
          svg: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
          wide: false,
        },
        {
          name: "Illustrator",
          svg: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
          wide: false,
        },
        {
          name: "Xd",
          svg: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
          wide: false,
        },

        {
          name: "Node.js",
          svg: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
          wide: false,
        },
        {
          name: "MonogDB",
          svg: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
          wide: true,
        },
        {
          name: "NPM",
          svg: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
          wide: true,
        },
        {
          name: "Android",
          svg: "https://upload.wikimedia.org/wikipedia/commons/8/82/Android_logo_2019.svg",
          wide: false,
        },
        {
          name: "Java",
          svg: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
          wide: false,
        },
        {
          name: "Bootstrap",
          svg: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
          wide: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  text-align: center;
  max-width: 700px;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 100px;
  justify-items: center;
}

img {
  height: 70px;
}

.wide {
  grid-column-end: span 2;
}
</style>