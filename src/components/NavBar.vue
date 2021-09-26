<template>
  <div class="navbar">
    <div class="desktop-nav">
      <ul>
        <li>About me</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
    <i class="fas fa-bars"></i>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.navbar {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.navbar ul {
  display: flex;
}

.navbar ul li {
  list-style-type: none;
  text-transform: uppercase;
}

@media only screen and (max-width: 600px) {
  .desktop-nav {
    display: none;
  }
}
</style>