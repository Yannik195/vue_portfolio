<template>
  <div class="container-fluid">
    <div class="row justify-content-between">
      <div @click="openBounce()" class="col-md m-2 project bounce">
        <!-- Bounce -->
        <h1>Bounce.</h1>
        <p>Dribble, Dribble, Score!</p>
      </div>
      <div class="col-md m-2 project eckfahne">
        <!-- Eckfahne -->
        <p class="eckfahneTitle">Eckfahne</p>
        <p>Android Mobile Application</p>
      </div>
    </div>
    <div class="row justify-content-between">
      <div @click="openBeas()" class="col-md m-2 project beas">
        <!-- Beas -->
        <img width="120px" src="../assets/beas_logo_schatten.svg" alt />
        <div>
          <h1>Beas</h1>
        </div>
      </div>
      <div class="col-md m-2 project">div 4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects.vue",
  data: function () {
    return {};
  },
  methods: {
    openBounce: function () {
      window.open("https://yannik195.github.io/bounce/");
    },
    openBeas: function () {
      window.open(
        "https://play.google.com/store/apps/details?id=de.yanniksimon.beas"
      );
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Multicolore";
  src: url("../assets/multicolore.otf");
}
.container-fluid {
}

.project {
  background-color: #dadada;
  border-radius: 5px;
  text-align: center;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.project :hover {
}

.bounce {
  background-color: #ff9132;
  color: white;
  cursor: pointer;
}

.bounce h1 {
  font-family: "Roboto Slab", serif;
}

.bounce p {
  font-family: "Roboto Mono", monospace;
}

.eckfahne {
  color: white;
  background-image: url("../assets/pitch.jpg");
  background-size: cover;
}

.eckfahneTitle {
  font-family: "Alfa Slab One", cursive;
  font-size: 2.5em;
  margin: 0;
}

.beas {
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: start;
  color: white;
  cursor: pointer;
  background: rgb(43, 185, 232);
  background: radial-gradient(
    circle,
    rgba(43, 185, 232, 1) 0%,
    rgba(0, 158, 220, 1) 100%
  );
}

.beas h1 {
  font-family: "Multicolore";
  font-size: 4em;
}
</style>