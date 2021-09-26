<template>
  <div class="navbar">
    <div class="desktop-nav">
      <ul>
        <li class="active">About me</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
    <i class="fas fa-bars fa-xs"></i>
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
  padding: 16px;
  display: flex;
  justify-content: end;
}
.navbar ul {
  display: flex;
  margin: 0;
}

.navbar ul li {
  list-style-type: none;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0 24px;
}

.fa-bars {
  display: none;
  color: #fe5f55;
}

.active {
  color: #fe5f55;
}

@media only screen and (max-width: 900px) {
  .desktop-nav {
    display: none;
  }

  .fa-bars {
    display: block;
  }
}
</style>