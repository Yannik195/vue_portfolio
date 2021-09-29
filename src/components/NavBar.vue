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
    <div class=""></div>
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
  display: flex;
  justify-content: end;
}

.mobile {
  position: absolute;
  top: 55px;
  background-color: white;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 100;
  overflow: hidden;
}
.desktop-nav ul {
  display: flex;
  margin: 0;
}

.desktop-nav ul li {
  list-style-type: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 8px 24px;
  cursor: pointer;
}
.desktop-nav ul li:hover {
  background-color: var(--blue-three);
  border-radius: 4px;
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