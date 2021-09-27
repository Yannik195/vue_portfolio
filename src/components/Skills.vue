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
          wide: true,
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper {
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(7, minmax(80px, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
  gap: 48px;
}

img {
  width: 100%;
  height: 70px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%) opacity(30%) brightness(120%);
}

img:hover {
  filter: none;
  -webkit-filter: none;
}

h1 {
  margin: 2em;
}

.wide {
  grid-column-end: span 2;
}

@media only screen and (max-width: 900px) {
  .wrapper {
    max-width: 60vw;
    grid-template-columns: repeat(3, minmax(80px, 1fr));
  }
}

@media (max-width: 600px) {
  .wrapper {
    grid-template-columns: repeat(2, minmax(80px, 1fr));
  }
}
</style>