<template>
  <div class="skills">
    <h1>Technologies i like working with</h1>
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
          svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Android_new_logo_2019.svg/768px-Android_new_logo_2019.svg.png",
          wide: true,
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
        {
          name: "Netlify",
          svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/1280px-Netlify_logo.svg.png",
          wide: true,
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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
}

img {
  width: 100%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%) opacity(40%) brightness(90%);
}

img:hover {
  filter: none;
  -webkit-filter: none;
}

h1 {
}

.wide {
  grid-column-end: span 2;
}

@media only screen and (max-width: 900px) {
  .wrapper {
    grid-template-columns: repeat(10, 1fr);
  }
}

@media (max-width: 700px) {
  .wrapper {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media (max-width: 500px) {
  .wrapper {
    grid-template-columns: repeat(7, 1fr);
  }
}

@media (max-width: 400px) {
  .wrapper {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>