<template>
  <div class="wrapper">
    <Project
      v-for="project in projects"
      :key="project.id"
      v-bind:project="project"
    ></Project>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
  components: { Project },
  name: "Projects.vue",
  data: function () {
    return {
      projects: [
        {
          id: 1,
          name: "Project 1",
          description: "Android Mobile Application",
          tags: ["android", "java"],
          link: "",
        },
        {
          id: 2,
          name: "Project 2",
          description: "Prototype",
          tags: ["adobexd", "figma"],
          link: "",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.wrapper {
}
</style>