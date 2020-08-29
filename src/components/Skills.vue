<template>
  <div>
    <v-container>
      <v-row>
        <h2>Skills</h2>
      </v-row>
      <v-row>
        <v-col
          v-for="skill in skills"
          :key="skill.name"
          cols="6"
          md="4"
          sm="6"
          xs="6"
          align="center"
          justify="start"
        >
          <img width="170px" height="170px" alt :src="skill.svg" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data: function () {
    return {
      skills: [
        { name: "Vue.js", svg: "https://cdn.svgporn.com/logos/vue.svg" },
        {
          name: "JavaScript",
          svg: "https://cdn.svgporn.com/logos/javascript.svg",
        },
        {
          name: "Git",
          svg:
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
        },
        {
          name: "Photoshop",
          svg:
            "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
        },
        {
          name: "Illustrator",
          svg:
            "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
        },
        {
          name: "Xd",
          svg:
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
        },

        {
          name: "Node.js",
          svg:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
          name: "MonogDB",
          svg:
            "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
        },
        {
          name: "NPM",
          svg:
            "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
        },
        {
          name: "Android",
          svg:
            "https://upload.wikimedia.org/wikipedia/commons/8/82/Android_logo_2019.svg",
        },
        {
          name: "Java",
          svg: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
        },
        {
          name: "Bootstrap",
          svg:
            "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  text-align: center;
}

h2 {
  padding: 12px;
}

img {
  transition: transform 0.2s;
}

img:hover {
  transform: scale(1.02);
}
</style>