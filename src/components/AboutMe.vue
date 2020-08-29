<template>
  <div>
    <div class="container">
      <img src="../assets/YannikSimon.png" alt="Yannik Simon" width="190px" />

      <div class="ich">
        <h1>
          Hallo, ich bin
          <span class="yannik">Yannik</span>!
        </h1>

        <p class="description">Mobile Medien Student aus Stuttgart.</p>

        <p class="text">🚀Kreativ 💻Interessiert ⛹Aktiv</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
span {
  color: #2ec4b6;
}

* {
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.container div {
  align-items: center;
}

img {
  margin: 30px 60px;
}

h1 {
  margin: 10px 12px;
  font-size: 3em;
}

.description {
  margin: 10px 12px;
  font-size: 2em;
}

.text {
  color: rgba(1, 22, 39, 0.8);
  max-width: 800px;
  font-size: 1.5em;
  margin: 30px auto;
  padding: 0 12px;
}
</style>