<template>
  <div class="navbar">
    <router-link class="link" v-bind:class="{selected: AboutMeSelected}" to="/">
      <span @click="selectAboutMe">Über mich</span>
    </router-link>

    <router-link class="link" v-bind:class="{selected: SkillsSelected}" to="/skills">
      <span @click="selectSkills">Skills</span>
    </router-link>

    <router-link class="link" v-bind:class="{selected: ResumeSelected}" to="/resume">
      <span @click="selectResume">Lebenslauf</span>
    </router-link>

    <router-link class="link" v-bind:class="{selected: PortfolioSelected}" to="/portfolio">
      <span @click="selectPortfolio">Portfolio</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => {
    return {
      AboutMeSelected: true,
      SkillsSelected: false,
      ResumeSelected: false,
      PortfolioSelected: false,
    };
  },
  methods: {
    deselectAll: function () {
      this.AboutMeSelected = false;
      this.SkillsSelected = false;
      this.ResumeSelected = false;
      this.PortfolioSelected = false;
    },

    selectAboutMe: function () {
      this.deselectAll();
      this.AboutMeSelected = true;
    },
    selectSkills: function () {
      this.deselectAll();
      this.SkillsSelected = true;
    },
    selectResume: function () {
      this.deselectAll();
      this.ResumeSelected = true;
    },
    selectPortfolio: function () {
      this.deselectAll();
      this.PortfolioSelected = true;
    },
  },
};
</script>

<style scoped>
.navbar {
  margin: 24px 0;
}
.link {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin: 32px;
}

.selected {
  color: rgba(46, 196, 182, 1);
}
</style>